
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
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 h-[500px] overflow-hidden flex">
            {/* Left Decoration / Image Area */}
            <div className={`w-1/3 h-full bg-${currentDay.color}-50 dark:bg-${currentDay.color}-900/30 flex items-center justify-center relative transition-colors duration-500`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${currentDay.color}-200 dark:bg-${currentDay.color}-800 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2`}></div>
                <motion.div
                    key={`icon-${currentIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconComponent size={120} className={`text-${currentDay.color}-600 dark:text-${currentDay.color}-400 drop-shadow-md`} strokeWidth={1.5} />
                </motion.div>

                <div className="absolute bottom-6 left-6">
                    <span className="text-4xl font-bold text-slate-900/10 dark:text-white/10 select-none">0{currentDay.day}</span>
                </div>
            </div>

            {/* Right Content Area */}
            <div className="w-2/3 p-10 flex flex-col justify-center relative">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 bg-${currentDay.color}-100 dark:bg-${currentDay.color}-900/50 text-${currentDay.color}-700 dark:text-${currentDay.color}-400 text-xs font-semibold rounded-full uppercase tracking-wider`}>
                                Day {currentDay.day} • {currentDay.date}
                            </span>
                            <span className="text-slate-400 text-sm">|</span>
                            <span className="text-slate-500 dark:text-gray-400 text-sm font-medium">{currentDay.body_part}</span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight leading-tight">
                            {currentDay.theme}
                        </h2>

                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
                            {currentDay.description}
                        </p>

                        <div className="pt-2">
                            <h4 className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-2">Key Sessions</h4>
                            <ul className="space-y-1">
                                {(currentDay.sessions || []).slice(0, 3).map((session, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 dark:text-gray-300 text-sm">
                                        <span className={`w-1.5 h-1.5 bg-${currentDay.color}-500 rounded-full mr-2`}></span>
                                        {session.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6">
                            <button
                                onClick={() => onExplore(currentDay)}
                                className={`group flex items-center space-x-2 text-${currentDay.color}-600 dark:text-${currentDay.color}-400 font-semibold text-sm hover:text-${currentDay.color}-700 dark:hover:text-${currentDay.color}-300 transition-colors`}
                            >
                                <span>Explore Module</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-8 flex space-x-3">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 transition-all border border-transparent hover:border-slate-200 dark:hover:border-gray-600"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center space-x-1">
                        {days.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-slate-800 dark:bg-white' : 'w-1.5 bg-slate-200 dark:bg-gray-600'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 transition-all border border-transparent hover:border-slate-200 dark:hover:border-gray-600"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;
