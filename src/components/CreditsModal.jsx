import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, FileCode, Terminal } from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';

const TypewriterText = ({ text, delay = 15, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, delay, text, onComplete]);

    return <span>{displayText}</span>;
};

const CreditsModal = ({ isOpen, onClose }) => {
    const [phase, setPhase] = useState(0); // 0: identity, 1: desc, 2: details, 3: buttons

    useEffect(() => {
        if (!isOpen) {
            setPhase(0);
        }
    }, [isOpen]);

    const fullDescription = `This app is developed by Be The Change with the goal of providing an interactive view on the application of the KA152 "Esplorando il Corpo Umano".`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Window */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-retro-light-gray border-4 border-retro-gray shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                        w-full max-w-md relative z-10 font-pixel-body flex flex-col pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="bg-retro-magenta px-3 py-2 flex items-center justify-between border-b-4 border-black sticky top-0 z-20">
                            <div className="flex items-center gap-2 text-white font-bold font-pixel-header text-xs uppercase drop-shadow-md">
                                <Terminal size={16} />
                                <span>ECU_OOBE.sys</span>
                            </div>
                            <button
                                onClick={() => {
                                    gameAudio.playClick();
                                    onClose();
                                }}
                                className="bg-retro-light-gray border-2 border-black p-0.5 hover:bg-white active:border-retro-gray shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-px transition-all"
                            >
                                <X size={16} className="text-black" />
                            </button>
                        </div>

                        {/* Content area - TERMINAL LOOK */}
                        <div className="p-6 bg-black border-2 border-retro-gray m-1 inset-shadow flex flex-col gap-6 text-retro-green min-h-[400px] overflow-y-auto">

                            {/* Terminal Header */}
                            <div className="text-xs opacity-70 mb-2 border-b border-retro-green/30 pb-1">
                                ECU_OS [Version 26.2.9] (C) 2026 BTC CORP.
                            </div>

                            {/* Phase 0: Identity */}
                            <div className="flex items-start gap-4">
                                <div className="border border-retro-green p-1.5 bg-black shrink-0">
                                    <FileCode size={24} className="text-retro-green" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg uppercase leading-tight">
                                        <TypewriterText text="ECU Dashboard" delay={30} onComplete={() => setPhase(1)} />
                                    </h3>
                                    {phase >= 1 && (
                                        <div className="text-xs font-bold opacity-80 mt-1">VER 1.0.0.0-PROD</div>
                                    )}
                                </div>
                            </div>

                            {/* Phase 1: Description */}
                            {phase >= 1 && (
                                <div className="mt-2 text-sm md:text-base leading-relaxed border-l-2 border-retro-green/20 pl-4">
                                    <span className="opacity-50 mr-1">BTC:\&gt;</span>
                                    <TypewriterText text={fullDescription} delay={10} onComplete={() => setPhase(2)} />
                                </div>
                            )}

                            {/* Phase 2: Details */}
                            {phase >= 2 && (
                                <div className="grid gap-2 mt-2 text-xs md:text-sm uppercase bg-retro-green/10 p-4 border border-retro-green/30">
                                    <div className="flex justify-between">
                                        <span className="opacity-50">FORM_ID:</span>
                                        <TypewriterText text="KA152-YOU-B7CE6E9C" delay={20} onComplete={() => setPhase(3)} />
                                    </div>
                                    {phase >= 3 && (
                                        <div className="flex justify-between">
                                            <span className="opacity-50">AUTH_KEY:</span>
                                            <span>2026-ROUND-1-SUCCESS</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Input Prompt & Cursor */}
                            <div className="mt-auto flex items-center gap-1 text-sm md:text-base">
                                <span className="opacity-50">BTC:\&gt;</span>
                                {phase >= 3 && (
                                    <motion.div
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                        className="w-2.5 h-5 bg-retro-green"
                                    />
                                )}
                            </div>

                            {/* Phase 3: Action Button */}
                            {phase >= 3 && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => {
                                        gameAudio.playClick();
                                        onClose();
                                    }}
                                    className="w-full mt-4 py-3 border-2 border-retro-green text-retro-green font-bold uppercase hover:bg-retro-green hover:text-black transition-all text-sm md:text-base"
                                >
                                    TERMINATE_SESSION
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CreditsModal;
