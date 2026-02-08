
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hand, Footprints, Utensils, Heart, Brain, Hammer, User, ArrowRight } from 'lucide-react';

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

    return (
        <div className="relative bg-retro-white border-4 border-retro-gray shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-[500px] overflow-hidden flex font-pixel-body">
            {/* Left Decoration / Image Area */}
            <div className={`w-1/3 h-full bg-${currentDay.color}-500 border-r-4 border-retro-gray flex items-center justify-center relative`}>
                {/* Pixel Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <motion.div
                    key={`icon-${currentIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "steps(4)" }}
                >
                    <IconComponent size={120} className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" strokeWidth={2} />
                </motion.div>

                <div className="absolute bottom-6 left-6 border-2 border-white bg-black p-2">
                    <span className="text-4xl font-bold font-pixel-header text-white select-none">0{currentDay.day}</span>
                </div>
            </div>

            {/* Right Content Area */}
            <div className="w-2/3 p-10 flex flex-col justify-center relative bg-retro-white text-black">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-3 border-b-2 border-retro-gray pb-2">
                            <span className={`px-3 py-1 bg-black text-white text-xs font-bold border-2 border-retro-gray uppercase tracking-wider`}>
                                Day {currentDay.day} • {currentDay.date}
                            </span>
                            <span className="text-retro-gray text-lg">|</span>
                            <span className="text-retro-gray text-sm font-bold uppercase">{currentDay.body_part}</span>
                        </div>

                        <h2 className="text-3xl font-bold font-pixel-header text-black tracking-tight leading-tight uppercase">
                            {currentDay.theme}
                        </h2>

                        <p className="text-retro-gray text-lg leading-relaxed max-w-lg font-bold">
                            {currentDay.description}
                        </p>

                        <div className="pt-2 bg-retro-light-gray/20 p-4 border-2 border-retro-light-gray border-dashed">
                            <h4 className="text-xs font-bold text-retro-gray uppercase tracking-widest mb-2">[ SESSION_LOG ]</h4>
                            <ul className="space-y-2">
                                {(currentDay.sessions || []).slice(0, 3).map((session, idx) => (
                                    <li key={idx} className="flex items-center text-black text-sm font-bold">
                                        <span className="w-2 h-2 bg-black mr-3"></span>
                                        {session.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={() => onExplore(currentDay)}
                                className={`group flex items-center space-x-2 bg-retro-blue text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all`}
                            >
                                <span className="uppercase font-bold">Explore Module</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-8 flex space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 bg-retro-light-gray text-black border-2 border-black hover:bg-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center space-x-2">
                        {days.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-3 w-3 border-2 border-black transition-all duration-0 ${idx === currentIndex ? 'bg-black' : 'bg-white'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-2 bg-retro-light-gray text-black border-2 border-black hover:bg-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;
