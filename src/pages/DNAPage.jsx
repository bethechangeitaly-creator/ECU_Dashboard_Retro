import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Users, Target, Sparkles, Calendar, MapPin, Flag, Brain, TrendingUp } from 'lucide-react';

/**
 * Project DNA Page - Genesis, Values, and Vision
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
            color: "rose"
        },
        {
            icon: Users,
            title: "Radical Inclusion",
            description: "50% of participants face economic, geographical, or social barriers. Inclusive methodologies (body expression, art, movement) don't require high language skills.",
            color: "indigo"
        },
        {
            icon: Lightbulb,
            title: "Learning by Doing",
            description: "Non-formal education through workshops, simulations, and outdoor learning. Experience first, reflect second, conceptualize third.",
            color: "amber"
        },
        {
            icon: Sparkles,
            title: "Holistic Growth",
            description: "The body metaphor is universal and accessible. When all parts function as an interconnected system, harmony emerges—just like in society.",
            color: "purple"
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
        multiplier: "1 exchange → 32 participants → 8 countries → 8 local events → 160+ people reached → Open-source toolkit → Infinite reach"
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Project DNA</h1>
                    <p className="text-white/90 text-lg">
                        The genesis, values, and vision behind Esplorando il Corpo Umano
                    </p>
                </div>
            </motion.div>

            {/* Genesis Story */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-8"
            >
                <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles size={28} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">The Genesis</h2>
                        <p className="text-slate-600 dark:text-gray-400">Where it all began</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <Flag size={20} className="text-purple-600 dark:text-purple-400" />
                            <p className="font-semibold text-slate-900 dark:text-white">Origin Event</p>
                        </div>
                        <p className="text-slate-700 dark:text-gray-300">{genesis.origin}</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <MapPin size={20} className="text-pink-600 dark:text-pink-400" />
                            <p className="font-semibold text-slate-900 dark:text-white">Location & Time</p>
                        </div>
                        <p className="text-slate-700 dark:text-gray-300">{genesis.location}</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                        <Heart size={20} className="text-rose-600 dark:text-rose-400" />
                        <span>The Spark</span>
                    </h3>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">
                        {genesis.spark}
                    </p>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Vision</h3>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coreValues.map((value, idx) => {
                        const IconComponent = value.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6"
                            >
                                <div className={`w-12 h-12 bg-${value.color}-100 dark:bg-${value.color}-900/30 rounded-xl flex items-center justify-center mb-4`}>
                                    <IconComponent size={24} className={`text-${value.color}-600 dark:text-${value.color}-400`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                                <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
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
                    className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-900 dark:to-orange-950 rounded-2xl shadow-lg p-1 text-white h-full"
                >
                    <div className="bg-white/10 h-full w-full rounded-xl p-8 backdrop-blur-sm border border-white/20 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <Brain size={24} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold">{methodology.approach}</h2>
                            </div>
                            <p className="text-white/90 leading-relaxed mb-8 text-lg">
                                {methodology.rationale}
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="bg-black/20 dark:bg-black/40 rounded-xl p-4 border border-white/10">
                                <p className="font-mono font-bold text-center text-lg tracking-wide">{methodology.structure}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Impact Philosophy Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-slate-100 dark:border-gray-700 p-8 h-full relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/20 transition-colors duration-700"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Target size={28} className="text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{impact_philosophy.title}</h2>
                                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-8 flex-1">
                            {impact_philosophy.description}
                        </p>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-900/30">
                            <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-400 font-semibold">
                                <TrendingUp size={20} />
                                <span>The Multiplier Chain</span>
                            </div>
                            <p className="mt-3 text-slate-700 dark:text-gray-300 font-medium">
                                {impact_philosophy.multiplier}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DNAPage;
