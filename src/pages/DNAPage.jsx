import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Users, Target, Sparkles, Calendar, MapPin, Flag, Brain, TrendingUp, Globe } from 'lucide-react';
import RetroPageHeader from '../components/RetroPageHeader';

/**
 * Project DNA Page - Genesis, Values, and Vision - Retro Edition
 */
const DNAPage = () => {
    const genesis = {
        origin: "Youth Exchange 'Green, Sustainable and Healthy Living'",
        location: "Denmark, December 2024",
        spark: "During a shared reflection moment, Italian and Macedonian youth recognized how difficulties related to mental health, misinformation, mobility, and sustainability were deeply interconnected.",
        vision: "Using the human body as a metaphor to explore these connections and transform them into learning and action."
    };

    const coreValues = [
        {
            icon: Heart,
            title: "Youth-Led Empowerment",
            description: "Young people co-design activities, facilitate sessions, and create content. Participants are not just recipients—they become facilitators, communicators, and local activators.",
            color: "retro-red"
        },
        {
            icon: Users,
            title: "Radical Inclusion",
            description: "50% of participants face economic, geographical, or social barriers. Inclusive methodologies (body expression, art, movement) don't require high language skills.",
            color: "retro-blue"
        },
        {
            icon: Lightbulb,
            title: "Learning by Doing",
            description: "Non-formal education through workshops, simulations, and outdoor learning. Experience first, reflect second, conceptualize third.",
            color: "retro-yellow"
        },
        {
            icon: Sparkles,
            title: "Holistic Growth",
            description: "The body metaphor is universal and accessible. When all parts function as an interconnected system, harmony emerges—just like in society.",
            color: "retro-magenta"
        }
    ];

    const methodology = {
        approach: "The Human Body Metaphor",
        rationale: "The human body is universal, requires no prior knowledge, doesn't discriminate by education level or English proficiency, and is accessible to all. Harmony exists when parts function as an interconnected system. Strong hands without an aware head, or a brilliant mind without heart, don't create balance. It's the synergy between parts that gives the body—and our society—the 'magic' that makes change possible.",
        structure: "7 days = 7 body parts = 7 interconnected challenges"
    };

    const impact_philosophy = {
        title: "Beyond Participants",
        description: "ECU is designed to produce impact beyond the 40 direct participants (32 youth + 8 Group Leaders) and 8 partner organizations. Participants become facilitators, communicators, and local activators in their own communities.",
    };

    return (
        <div className="space-y-8 font-pixel-body">
            {/* Header Section */}
            <RetroPageHeader
                title="Project DNA"
                subtitle="Genesis, Values & Vision"
                color="bg-retro-magenta"
            />

            {/* Genesis Story */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-retro-light-gray dark:bg-dark-elevated border-4 border-retro-white dark:border-dark-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 xs:p-6 relative"
            >
                {/* Window Title Bar */}
                <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray mb-6 -mx-4 xs:-mx-6 -mt-4 xs:-mt-6">
                    <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider pl-2">
                        Origin_Story.txt
                    </span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white dark:bg-dark-surface border-4 border-black dark:border-dark-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                        <Sparkles size={32} className="text-retro-magenta" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold text-black dark:text-retro-white mb-1 md:mb-2 font-pixel-header uppercase truncate sm:whitespace-normal">The Genesis</h2>
                        <p className="text-retro-dark-gray font-bold uppercase text-[10px] sm:text-xs tracking-wider">Where it all began</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 mb-6">
                    <div className="bg-white dark:bg-dark-surface border-2 border-black dark:border-dark-border p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center space-x-2 mb-3 border-b-2 border-black dark:border-dark-border pb-2">
                            <Flag size={20} className="text-retro-blue" />
                            <p className="font-bold text-black dark:text-retro-white font-pixel-header text-sm uppercase">Origin Event</p>
                        </div>
                        <p className="text-black dark:text-retro-white font-bold text-sm leading-relaxed">{genesis.origin}</p>
                    </div>
                    <div className="bg-white dark:bg-dark-surface border-2 border-black dark:border-dark-border p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center space-x-2 mb-3 border-b-2 border-black dark:border-dark-border pb-2">
                            <MapPin size={20} className="text-retro-red" />
                            <p className="font-bold text-black dark:text-retro-white font-pixel-header text-sm uppercase">Location & Time</p>
                        </div>
                        <p className="text-black dark:text-retro-white font-bold text-sm leading-relaxed">{genesis.location}</p>
                    </div>
                </div>

                <div className="bg-retro-magenta/20 border-2 border-retro-magenta border-dashed p-6 relative">
                    <h3 className="font-bold text-retro-magenta mb-3 flex items-center space-x-2 uppercase font-pixel-header">
                        <Heart size={20} />
                        <span>The Spark</span>
                    </h3>
                    <p className="text-black font-bold leading-relaxed mb-6 font-pixel-body text-sm">
                        "{genesis.spark}"
                    </p>
                    <h3 className="font-bold text-retro-magenta mb-2 uppercase font-pixel-header">Vision</h3>
                    <p className="text-black dark:text-retro-white font-bold leading-relaxed font-pixel-body text-sm bg-white dark:bg-dark-surface p-2 border-2 border-black dark:border-dark-border">
                        {genesis.vision}
                    </p>
                </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="bg-black text-white p-2 mb-6 inline-block border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                    <h2 className="text-xl font-bold font-pixel-header uppercase px-2">Core Values</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
                    {coreValues.map((value, idx) => {
                        const IconComponent = value.icon;

                        // Map retro colors
                        const colorMap = {
                            "retro-red": "text-retro-red",
                            "retro-blue": "text-retro-blue",
                            "retro-yellow": "text-retro-yellow",
                            "retro-magenta": "text-retro-magenta",
                            "indigo": "text-retro-blue",
                            "amber": "text-retro-orange",
                            "purple": "text-retro-magenta",
                            "rose": "text-retro-red"

                        };
                        const textColor = colorMap[value.color] || "text-black";

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="bg-white dark:bg-dark-surface border-4 border-black dark:border-dark-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <div className={`w-12 h-12 bg-black border-2 border-white flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]`}>
                                    <IconComponent size={24} className={textColor} />
                                </div>
                                <h3 className="text-lg font-bold text-black dark:text-retro-white mb-3 font-pixel-header uppercase border-b-2 border-gray-300 pb-2">{value.title}</h3>
                                <p className="text-black dark:text-retro-white font-bold text-sm leading-relaxed font-pixel-body">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* 1. Methodology & Impact Grid (Top Row) - Tighter Margins */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Methodology Card - 7/12 width */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="lg:col-span-7 bg-retro-blue border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-1 flex flex-col"
                >
                    <div className="bg-retro-blue h-full w-full p-4 xs:p-5 lg:p-6 flex flex-col justify-between border-2 border-white border-dashed">
                        <div>
                            <div className="flex items-center space-x-3 mb-4 bg-black p-3 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                <Brain size={24} className="text-retro-cyan" />
                                <h2 className="text-xl font-bold text-white font-pixel-header uppercase">{methodology.approach}</h2>
                            </div>
                            <p className="text-white font-bold leading-relaxed mb-6 text-sm md:text-base font-pixel-body">
                                {methodology.rationale}
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="bg-retro-black border-2 border-white p-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                <p className="font-pixel-header text-retro-yellow text-sm md:text-base tracking-wide uppercase">{methodology.structure}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Impact Philosophy Card - 5/12 width */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="lg:col-span-5 bg-white dark:bg-dark-surface border-4 border-black dark:border-dark-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 flex flex-col relative"
                >
                    {/* Window Content */}
                    <div className="p-4 xs:p-5 lg:p-6 flex-1 flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 xs:w-14 xs:h-14 bg-retro-green border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Target size={24} className="text-black" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-retro-white mb-2 font-pixel-header uppercase break-words leading-[0.9] overflow-hidden">
                                    Beyond <br className="xs:hidden" /> Participants
                                </h2>
                                <div className="h-1.5 w-16 bg-retro-green border-2 border-black"></div>
                            </div>
                        </div>

                        <p className="text-black dark:text-retro-white font-bold text-sm md:text-base leading-relaxed font-pixel-body mb-6">
                            {impact_philosophy.description}
                        </p>

                        {/* Additional Widget to fill the space and balance the yellow box on the left */}
                        <div className="mt-auto">
                            <div className="bg-retro-light-gray dark:bg-dark-elevated border-4 border-black dark:border-dark-border p-3 xs:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
                                {/* Decorative "System" Header */}
                                <div className="flex items-center justify-between mb-3 border-b-2 border-black dark:border-dark-border pb-2">
                                    <span className="text-[9px] font-bold text-retro-gray uppercase tracking-widest">[ TARGET_LOCK ]</span>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-retro-red/80 animate-pulse"></div>
                                        <div className="w-2 h-2 bg-retro-yellow/80 animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-retro-green/80 animate-pulse delay-150"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 xs:w-10 xs:h-10 bg-black flex items-center justify-center shrink-0 border-2 border-white">
                                            <TrendingUp size={16} className="text-retro-green" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[8px] uppercase font-bold text-retro-gray leading-none mb-1">Impact Mode</p>
                                            <p className="text-xs xs:text-sm font-bold text-black dark:text-retro-white uppercase font-pixel-header truncate">EXP_GROWTH_v1</p>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-retro-gray dark:bg-dark-surface border border-black overflow-hidden relative">
                                        <div className="h-full bg-retro-green w-[85%] animate-pulse"></div>
                                        {/* Scanline inside bar */}
                                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 50%)', backgroundSize: '100% 2px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 2. Exponential Impact Section (Stand-alone Bottom Section) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-retro-light-gray dark:bg-dark-elevated border-4 border-black dark:border-dark-border p-4 xs:p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden mt-6"
            >
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b-4 border-black dark:border-dark-border pb-4 border-dashed">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 xs:w-12 xs:h-12 lg:w-16 lg:h-16 bg-retro-green border-2 border-black lg:border-4 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <TrendingUp size={20} className="text-black lg:size-28" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="uppercase font-pixel-header text-base xs:text-lg md:text-2xl lg:text-3xl leading-none text-black dark:text-retro-white break-words">
                                    Exponential Impact
                                </h3>
                                <p className="text-[9px] md:text-sm uppercase font-bold text-retro-gray mt-1 tracking-wider md:tracking-widest">Growth Projection Matrix (GPM-01)</p>
                            </div>
                        </div>
                    </div>

                    {/* The Infographic Flow - Linear and Clean */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 md:gap-6 mb-8">
                        {[
                            { step: '01', title: '1 Exchange', color: 'bg-retro-green', val: 'Start Node', icon: Sparkles },
                            { step: '02', title: '40 People', color: 'bg-retro-blue', val: 'Direct Impact', icon: Users, darkText: true },
                            { step: '03', title: '8 Countries', color: 'bg-retro-cyan', val: 'Network Reach', icon: Globe },
                            { step: '04', title: '160+ Reach', color: 'bg-retro-magenta', val: 'Local Impact', icon: TrendingUp, darkText: true }
                        ].map((node, i) => (
                            <div key={i} className="flex flex-col h-full relative group">
                                <div className={`${node.color} border-4 border-black h-full p-4 xs:p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center text-center transition-all group-hover:-translate-y-1 relative overflow-hidden`}>
                                    <div className="absolute top-1 right-1 text-[7px] sm:text-[9px] bg-black text-white px-1 font-bold z-20">STP_{node.step}</div>
                                    <div className="flex flex-col items-center w-full max-w-[92%] mx-auto py-1">
                                        <node.icon size={18} className={`mb-2 sm:mb-3 shrink-0 ${node.darkText ? 'text-white' : 'text-black'}`} />
                                        <h4 className={`text-[11px] xs:text-xs sm:text-base lg:text-xl font-bold uppercase mb-1 leading-[1.1] tracking-tighter break-words w-full ${node.darkText ? 'text-white' : 'text-black font-pixel-header'}`}>
                                            {node.title}
                                        </h4>
                                        <p className={`text-[8px] sm:text-xs font-bold uppercase opacity-80 leading-tight ${node.darkText ? 'text-white font-pixel-body' : 'text-black font-pixel-body'}`}>
                                            {node.val}
                                        </p>
                                    </div>
                                </div>
                                {i < 3 && (
                                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 items-center justify-center z-20 text-black font-bold text-2xl">
                                        &gt;
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* The Ultimate Vision Footer */}
                    <div className="bg-black p-5 sm:p-6 border-4 border-retro-magenta text-center relative shadow-[6px_6px_0px_0px_rgba(255,0,255,0.2)]">
                        {/* Scanline pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
                        <span className="block text-[10px] sm:text-xs text-retro-magenta font-bold uppercase tracking-[0.2em] sm:tracking-[0.5em] mb-4 font-pixel-header animate-pulse">SYSTEM_VISION: UNLOCKED</span>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                            <div className="flex flex-col items-center lg:items-end">
                                <span className="text-white font-pixel-header text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-none">
                                    &gt; <span className="text-retro-magenta">INFINITE</span>
                                </span>
                                <span className="text-white font-pixel-header text-sm xs:text-lg sm:text-xl lg:text-2xl opacity-80 mt-1">REACH</span>
                            </div>

                            <span className="hidden lg:block text-retro-magenta text-5xl font-pixel-header opacity-50">&amp;</span>

                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-white font-pixel-header text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-none">
                                    <span className="text-retro-magenta">GLOBAL</span> IMPACT
                                </span>
                                <span className="text-[9px] sm:text-xs font-bold text-retro-gray uppercase tracking-widest mt-1">Expansion Matrix</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DNAPage;
