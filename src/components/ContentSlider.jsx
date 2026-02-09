
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hand, Footprints, Utensils, Heart, Brain, Hammer, User, ArrowRight } from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';

const icons = {
    Hand,
    Footprints,
    Utensils,
    Heart,
    Brain,
    Hammer,
    User,
};

const ContentSlider = ({ days, onExplore }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Guard clause for empty or undefined days
    if (!days || days.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-500">No journey data available</p>
            </div>
        );
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % days.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + days.length) % days.length);
    };

    const currentDay = days[currentIndex];
    // Dynamic Icon Component
    const IconComponent = icons[currentDay.icon] || User;

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const colorMap = {
        red: 'bg-retro-red',
        orange: 'bg-retro-orange',
        yellow: 'bg-retro-yellow',
        green: 'bg-retro-green',
        cyan: 'bg-retro-cyan',
        blue: 'bg-retro-blue',
        magenta: 'bg-retro-magenta',
        purple: 'bg-retro-magenta',
        indigo: 'bg-retro-blue',
        emerald: 'bg-retro-green',
        rose: 'bg-retro-red',
        amber: 'bg-retro-orange'
    };

    const bgColor = colorMap[currentDay.color] || 'bg-retro-blue';

    return (
        <div className="relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col font-pixel-body overflow-hidden">
            {/* Top Area: Colored Header with Badge */}
            <div className={`w-full h-48 xs:h-56 ${bgColor} flex items-center justify-center relative border-b-4 border-black shrink-0 overflow-hidden`}>
                {/* High-visibility Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
                </div>

                {/* Scanlines Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}>
                </div>

                <motion.div
                    key={`icon-${currentIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "steps(4)" }}
                >
                    <IconComponent size={140} className="text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]" strokeWidth={1.5} />
                </motion.div>

                {/* Day Badge - Repositioned to bottom-left */}
                <div className="absolute bottom-4 left-4 border-4 border-white bg-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                    <span className="text-xl xs:text-2xl font-bold font-pixel-header text-white select-none leading-none">0{currentDay.day}</span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-4 xs:p-6 md:p-8 flex flex-col relative bg-white text-black shrink-0">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            const swipeThreshold = 50;
                            if (info.offset.x < -swipeThreshold) {
                                nextSlide();
                            } else if (info.offset.x > swipeThreshold) {
                                prevSlide();
                            }
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 cursor-grab active:cursor-grabbing touch-pan-y"
                    >
                        {/* Combined Metadata Pill */}
                        <div className="flex items-center bg-black border-2 border-retro-gray p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                            <span className="text-[10px] xs:text-xs font-bold text-white uppercase tracking-widest">
                                Day {currentDay.day} • {currentDay.date} | {currentDay.body_part}
                            </span>
                        </div>

                        {/* Theme Title - Moved back here */}
                        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold font-pixel-header text-black tracking-tighter leading-none uppercase break-words hyphens-auto overflow-hidden border-b-2 border-black/10 pb-4">
                            {currentDay.theme}
                        </h2>

                        {/* Session Log Box */}
                        <div className="bg-[#f0f0f0] p-4 border-2 border-retro-gray border-dashed relative pointer-events-none select-none">
                            <h4 className="absolute -top-3 left-4 bg-[#f0f0f0] px-2 text-[10px] font-bold text-black uppercase tracking-widest">[ SESSION_LOG ]</h4>
                            <ul className="space-y-2 mt-1">
                                {(currentDay.sessions || []).slice(0, 3).map((session, idx) => (
                                    <li key={idx} className="flex items-start text-black text-xs xs:text-sm font-bold leading-tight">
                                        <span className="w-2.5 h-2.5 bg-black mt-0.5 mr-3 shrink-0"></span>
                                        {session.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Explore Button (Mobile/Tablet Only) */}
                        <div className="pt-2 lg:hidden">
                            <button
                                onClick={() => {
                                    gameAudio.playClick();
                                    onExplore(currentDay);
                                }}
                                onMouseEnter={() => gameAudio.playHover()}
                                className="group flex items-center space-x-3 bg-retro-blue text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none active:translate-y-2 transition-all"
                            >
                                <span className="uppercase font-bold text-sm xs:text-base tracking-wide">Explore</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Indicators (Dots) - Hidden on Destop */}
                <div className="flex justify-center mt-8 space-x-2 lg:hidden">
                    {days.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                gameAudio.playClick();
                                setCurrentIndex(idx);
                            }}
                            onMouseEnter={() => gameAudio.playHover()}
                            className={`h-3 w-3 border-2 border-black transition-all ${idx === currentIndex ? 'bg-black w-6' : 'bg-white hover:bg-retro-gray'}`}
                        />
                    ))}
                </div>

                {/* Desktop Footer Row: Explore | Dots | Arrows */}
                <div className="hidden lg:flex items-center justify-between mt-8 pt-4 border-t-2 border-black/10">
                    {/* Left: Explore Button */}
                    <button
                        onClick={() => {
                            gameAudio.playClick();
                            onExplore(currentDay);
                        }}
                        onMouseEnter={() => gameAudio.playHover()}
                        className="group flex items-center space-x-2 bg-retro-blue text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all"
                    >
                        <span className="uppercase font-bold text-sm tracking-wide">Explore</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Center: Dots */}
                    <div className="flex space-x-2">
                        {days.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    gameAudio.playClick();
                                    setCurrentIndex(idx);
                                }}
                                onMouseEnter={() => gameAudio.playHover()}
                                className={`h-3 w-3 border-2 border-black transition-all ${idx === currentIndex ? 'bg-black w-6' : 'bg-white hover:bg-retro-gray'}`}
                            />
                        ))}
                    </div>

                    {/* Right: Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                gameAudio.playClick();
                                prevSlide();
                            }}
                            onMouseEnter={() => gameAudio.playHover()}
                            className="p-2 bg-white text-black border-4 border-black hover:bg-retro-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => {
                                gameAudio.playClick();
                                nextSlide();
                            }}
                            onMouseEnter={() => gameAudio.playHover()}
                            className="p-2 bg-white text-black border-4 border-black hover:bg-retro-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;
