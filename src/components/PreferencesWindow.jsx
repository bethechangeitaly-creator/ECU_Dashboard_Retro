import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Moon, Sun, Settings, Check } from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';


const PreferencesWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [volume, setVolumeState] = useState(1.0);
    const [hapticsEnabled, setHapticsEnabled] = useState(true);
    const [theme, setTheme] = useState('light');

    // ... (rest of existing state/effects remain same, just ensuring showCredits is initialized) ...

    // Listen for open event
    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            gameAudio.playClick();
        };

        window.addEventListener('open-preferences', handleOpen);
        return () => window.removeEventListener('open-preferences', handleOpen);
    }, []);

    // Sync initial states
    useEffect(() => {
        if (isOpen) {
            setVolumeState(gameAudio.masterVolume);
            setHapticsEnabled(gameAudio.hapticsEnabled);
            setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        }
    }, [isOpen]);

    const playClick = () => gameAudio.playClick();

    const handleVolumeChange = (newVol) => {
        gameAudio.setVolume(newVol);
        setVolumeState(newVol);
        if (newVol > 0) playClick();
    };

    const toggleHaptics = () => {
        const newState = gameAudio.toggleHaptics();
        setHapticsEnabled(newState);
        playClick();
    };

    const toggleTheme = () => {
        const html = document.documentElement;
        if (theme === 'light') {
            html.classList.add('dark');
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
        playClick();
    };



    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-50 backdrop-blur-[2px]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Window Wrapper for safe centering */}
                    <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 10 }}
                            className="bg-retro-light-gray border-[3px] border-retro-gray shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col font-pixel-body pointer-events-auto
                            w-[95vw] xs:w-[90%] max-w-sm max-h-[90vh] overflow-y-auto"
                        >
                            {/* Title Bar */}
                            <div className="bg-retro-blue px-3 py-2 flex items-center justify-between sticky top-0 z-10 border-b-2 border-black">
                                <div className="flex items-center gap-2 text-white font-bold font-pixel-header text-sm uppercase">
                                    <Settings size={16} />
                                    <span>System_Prefs.exe</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-retro-light-gray border border-black p-0.5 hover:bg-white active:border-inset active:border-gray-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-px transition-all"
                                >
                                    <X size={14} className="text-black" />
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="p-4 xs:p-6 flex flex-col gap-6 bg-white m-1 border-2 border-retro-gray inset-shadow text-black">

                                {/* Audio Section */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className={`font-bold text-sm uppercase flex items-center gap-2 ${volume === 0 ? "text-retro-red" : "text-black"}`}>
                                            {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                            System_Audio
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-[10px] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${volume === 0 ? 'bg-retro-red text-white' : 'bg-black text-retro-yellow'}`}>
                                                {volume === 0 ? 'STATUS: MUTED' : `VOL: ${Math.round(volume * 100)}%`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Volume Slider - 0% to 100% */}
                                    <div className="px-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.25"
                                            value={volume}
                                            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                            className="w-full h-3 bg-retro-light-gray appearance-none cursor-pointer border-2 border-black accent-retro-red 
                                            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-retro-red [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-retro-red [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-black [&::-moz-range-thumb]:rounded-none"
                                        />
                                        <div className="flex justify-between mt-2">
                                            {[0, 0.25, 0.5, 0.75, 1].map((val) => (
                                                <div key={val} className="flex flex-col items-center gap-1">
                                                    <div className="w-[2px] h-1.5 bg-black"></div>
                                                    <span className="text-[8px] font-bold text-retro-gray uppercase">
                                                        {val === 0 ? 'OFF' : `${Math.round(val * 100)}%`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-t-2 border-retro-gray border-dashed" />

                                {/* Haptics */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm uppercase flex items-center gap-2">
                                            <Settings size={16} className="text-retro-gray" /> Haptic
                                        </span>
                                        <span className="text-[8px] text-retro-gray font-bold uppercase -mt-0.5 ml-6 leading-none block">
                                            (iOS Limited)
                                        </span>
                                    </div>
                                    <button
                                        onClick={toggleHaptics}
                                        className={`w-16 h-6 flex items-center px-0.5 border-2 border-black transition-colors ${hapticsEnabled ? 'bg-retro-green justify-end' : 'bg-retro-light-gray justify-start'}`}
                                    >
                                        <div className="h-4 w-6 bg-black border border-white"></div>
                                    </button>
                                </div>

                                <hr className="border-t-2 border-retro-gray border-dashed" />

                                {/* Theme */}
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-sm uppercase flex items-center gap-2">
                                        <Sun size={16} className="text-retro-gray" /> Theme
                                    </span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => theme !== 'light' && toggleTheme()}
                                            className={`px-3 py-1 font-bold text-xs uppercase border-2 border-black transition-all ${theme === 'light' ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]' : 'bg-white text-black hover:bg-gray-100'}`}
                                        >
                                            LIGHT
                                        </button>
                                        <button
                                            onClick={() => theme !== 'dark' && toggleTheme()}
                                            className={`px-3 py-1 font-bold text-xs uppercase border-2 border-black transition-all ${theme === 'dark' ? 'bg-retro-blue text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]' : 'bg-white text-black hover:bg-gray-100'}`}
                                        >
                                            DARK
                                        </button>
                                    </div>
                                </div>

                                {/* Save Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 px-4 py-2 bg-retro-red text-white font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                                >
                                    <Check size={16} />
                                    <span>Save & Close</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PreferencesWindow;
