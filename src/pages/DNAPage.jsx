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
                className="bg-retro-light-gray border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 xs:p-6 relative"
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
                    <div className="w-16 h-16 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                        <Sparkles size={32} className="text-retro-magenta" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold text-black mb-1 md:mb-2 font-pixel-header uppercase truncate sm:whitespace-normal">The Genesis</h2>
                        <p className="text-retro-dark-gray font-bold uppercase text-[10px] sm:text-xs tracking-wider">Where it all began</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 mb-6">
                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center space-x-2 mb-3 border-b-2 border-black pb-2">
                            <Flag size={20} className="text-retro-blue" />
                            <p className="font-bold text-black font-pixel-header text-sm uppercase">Origin Event</p>
                        </div>
                        <p className="text-black font-bold text-sm leading-relaxed">{genesis.origin}</p>
                    </div>
                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center space-x-2 mb-3 border-b-2 border-black pb-2">
                            <MapPin size={20} className="text-retro-red" />
                            <p className="font-bold text-black font-pixel-header text-sm uppercase">Location & Time</p>
                        </div>
                        <p className="text-black font-bold text-sm leading-relaxed">{genesis.location}</p>
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
                    <p className="text-black font-bold leading-relaxed font-pixel-body text-sm bg-white p-2 border-2 border-black">
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
                                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <div className={`w-12 h-12 bg-black border-2 border-white flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]`}>
                                    <IconComponent size={24} className={textColor} />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3 font-pixel-header uppercase border-b-2 border-gray-300 pb-2">{value.title}</h3>
                                <p className="text-black font-bold text-sm leading-relaxed font-pixel-body">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Methodology & Impact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-8">
                {/* Methodology Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-retro-blue border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-1 h-full"
                >
                    <div className="bg-retro-blue h-full w-full p-6 flex flex-col justify-between border-2 border-white border-dashed">
                        <div>
                            <div className="flex items-center space-x-3 mb-6 bg-black p-3 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                <Brain size={24} className="text-retro-cyan" />
                                <h2 className="text-xl font-bold text-white font-pixel-header uppercase">{methodology.approach}</h2>
                            </div>
                            <p className="text-white font-bold leading-relaxed mb-8 text-sm md:text-base font-pixel-body">
                                {methodology.rationale}
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="bg-retro-black border-2 border-white p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                <p className="font-pixel-header text-retro-yellow text-sm md:text-base tracking-wide uppercase">{methodology.structure}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Impact Philosophy Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 xs:p-6 md:p-8 h-full relative"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-retro-green border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-2 sm:mb-0">
                                <Target size={28} className="text-black" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-black mb-2 font-pixel-header uppercase break-words leading-tight overflow-hidden">
                                    <span className="md:hidden">BEYOND</span>
                                    <span className="hidden md:inline">{impact_philosophy.title}</span>
                                </h2>
                                <div className="h-2 w-20 bg-retro-green border-2 border-black"></div>
                            </div>
                        </div>

                        <p className="text-black font-bold text-sm md:text-base leading-relaxed mb-8 flex-1 font-pixel-body">
                            {impact_philosophy.description}
                        </p>

                        <div className="bg-retro-light-gray border-4 border-black p-4 xs:p-6 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-black font-bold mb-6 border-b-2 border-black pb-4 border-dashed">
                                    <div className="w-12 h-12 bg-retro-green border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <TrendingUp size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="uppercase font-pixel-header text-base leading-none">Exponential Impact</h3>
                                        <p className="text-[10px] uppercase font-bold text-retro-gray mt-1">Growth Projection Matrix</p>
                                    </div>
                                </div>

                                {/* The Infographic Flow */}
                                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-1">
                                    {/* Step 1 */}
                                    <div className="w-full lg:flex-1 bg-retro-green border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 text-black text-center min-h-[100px]">
                                        <Sparkles size={20} />
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-bold uppercase font-pixel-header block opacity-70">Step 01</span>
                                            <span className="text-xs font-bold uppercase bg-white px-2 border-2 border-black leading-tight block">1 Exchange</span>
                                        </div>
                                    </div>

                                    {/* Connection Arrow */}
                                    <div className="rotate-90 lg:rotate-0 text-black font-bold text-xl h-6 flex items-center">&gt;</div>

                                    {/* Step 2 */}
                                    <div className="w-full lg:flex-1 bg-retro-blue border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 text-white text-center min-h-[100px]">
                                        <Users size={20} />
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-bold uppercase font-pixel-header block opacity-70">Step 02</span>
                                            <span className="text-xs font-bold uppercase bg-black px-2 border-2 border-white leading-tight block">40 Participants</span>
                                        </div>
                                    </div>

                                    {/* Connection Arrow */}
                                    <div className="rotate-90 lg:rotate-0 text-black font-bold text-xl h-6 flex items-center">&gt;</div>

                                    {/* Step 3 */}
                                    <div className="w-full lg:flex-1 bg-retro-cyan border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 text-black text-center min-h-[100px]">
                                        <Globe size={20} />
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-bold uppercase font-pixel-header block opacity-70">Step 03</span>
                                            <span className="text-xs font-bold uppercase bg-white px-2 border-2 border-black leading-tight block">8 Countries</span>
                                        </div>
                                    </div>

                                    {/* Connection Arrow */}
                                    <div className="rotate-90 lg:rotate-0 text-black font-bold text-xl h-6 flex items-center">&gt;</div>

                                    {/* Step 4 */}
                                    <div className="w-full lg:flex-1 bg-retro-magenta border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 text-white text-center min-h-[100px]">
                                        <TrendingUp size={20} />
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-bold uppercase font-pixel-header block opacity-70">Step 04</span>
                                            <span className="text-xs font-bold uppercase bg-black px-2 border-2 border-white leading-tight block">160+ Local People</span>
                                        </div>
                                    </div>
                                </div>

                                {/* The Ultimate Vision */}
                                <div className="mt-8 bg-black p-4 border-4 border-retro-magenta text-center relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                                    {/* Scanline pattern */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
                                    <span className="block text-[9px] text-retro-magenta font-bold uppercase tracking-[0.3em] mb-2 font-pixel-header">Future_Horizon: Unlocked</span>
                                    <p className="text-white font-pixel-header text-base xs:text-xl animate-pulse tracking-tighter">
                                        &gt; <span className="text-retro-magenta">INFINITE</span> REACH & IMPACT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DNAPage;
