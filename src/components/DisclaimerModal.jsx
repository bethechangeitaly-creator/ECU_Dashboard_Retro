import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, Heart } from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';

const DisclaimerModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            gameAudio.playSuccess(); // Alert sound
        };

        window.addEventListener('open-disclaimer', handleOpen);
        return () => window.removeEventListener('open-disclaimer', handleOpen);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-retro-black z-[60] backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Wrapper for Centering - Stricter Mobile Constraints */}
                    <div className="fixed inset-0 z-[61] flex items-center justify-center p-4">
                        {/* Retro Alert Box */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 0 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="w-[95vw] xs:w-[90vw] max-w-[360px] md:max-w-md max-h-[85vh] overflow-y-auto bg-retro-yellow border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] flex flex-col font-pixel-body relative"
                        >
                            {/* Title Bar */}
                            <div className="bg-black text-retro-yellow px-2 py-1 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-2 font-bold font-pixel-header text-[10px] xs:text-xs md:text-sm uppercase animate-pulse">
                                    <AlertTriangle size={14} />
                                    <span>System_Message.txt</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-retro-yellow hover:text-white"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-3 xs:p-4 md:p-6 text-black">
                                <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                                    <Heart size={32} className="text-retro-red fill-retro-red animate-bounce" />

                                    <h2 className="font-bold font-pixel-header text-base xs:text-lg md:text-xl uppercase border-b-4 border-black pb-2 leading-tight">
                                        Erasmus+ For All
                                    </h2>

                                    <div className="space-y-4 font-bold text-sm xs:text-base md:text-lg leading-tight">
                                        <p>
                                            The Erasmus+ Programme is for everyone. You are welcome to join whatever your profile, background, or social status.
                                        </p>
                                        <p className="bg-black text-retro-yellow p-2 rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                            There are limited spots for specific projects like this, but don't give up because there is the right opportunity for you.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            gameAudio.playClick();
                                        }}
                                        className="mt-4 px-8 py-3 bg-retro-red text-white font-bold uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all block w-full font-pixel-header"
                                    >
                                        Understood
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DisclaimerModal;
