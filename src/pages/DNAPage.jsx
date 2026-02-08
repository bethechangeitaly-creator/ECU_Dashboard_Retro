import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Users, Target, Sparkles, Calendar, MapPin, Flag, Brain, TrendingUp } from 'lucide-react';

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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-magenta border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pixel-header tracking-widest uppercase retro-shadow">Project DNA</h1>
                    <p className="text-white text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan">
                        &gt; Genesis, Values & Vision
                    </p>
                </div>
            </motion.div>

            {/* Genesis Story */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-retro-light-gray border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 relative"
            >
                {/* Window Title Bar */}
                <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray mb-6 -mx-2 -mt-2">
                    <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider pl-2">
                        Origin_Story.txt
                    </span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0">
                        <Sparkles size={32} className="text-retro-magenta" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-black mb-2 font-pixel-header uppercase">The Genesis</h2>
                        <p className="text-retro-dark-gray font-bold uppercase text-xs tracking-wider">Where it all began</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 h-full relative"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="w-14 h-14 bg-retro-green border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Target size={28} className="text-black" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-black mb-2 font-pixel-header uppercase">{impact_philosophy.title}</h2>
                                <div className="h-2 w-20 bg-retro-green border-2 border-black"></div>
                            </div>
                        </div>

                        <p className="text-black font-bold text-sm md:text-base leading-relaxed mb-8 flex-1 font-pixel-body">
                            {impact_philosophy.description}
                        </p>

                        <div className="bg-retro-light-gray border-2 border-black p-6 relative">
                            <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-xs font-bold uppercase -mt-3 ml-4 border border-black">
                                Multiplier Chain
                            </div>
                            <div className="flex items-center gap-3 text-black font-bold mb-4">
                                <TrendingUp size={20} className="text-retro-green" />
                                <span className="uppercase font-pixel-header text-sm">Exponential Reach</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-xs font-bold">
                                    <div className="w-2 h-2 bg-retro-green border border-black"></div>
                                    <span>1 Exchange</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold pl-4">
                                    <div className="w-px h-2 bg-black"></div>
                                    <span>32 Participants</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold pl-8">
                                    <div className="w-px h-2 bg-black"></div>
                                    <span>8 Countries</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold pl-12">
                                    <div className="w-px h-2 bg-black"></div>
                                    <span>160+ People</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold pl-16 text-retro-magenta">
                                    <div className="w-px h-2 bg-black"></div>
                                    <span>&gt;&gt; INFINITE REACH</span>
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
