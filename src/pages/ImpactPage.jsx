import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import impactData from '../data/ecu_impact_data.json';
import {
    Target, TrendingUp, Users, Heart, Lightbulb, CheckCircle2,
    BarChart3, Globe, Leaf, MessageSquare, Footprints, Hammer, Sparkles
} from 'lucide-react';

// Icon mapping for EU Youth Goals  
const goalIcons = {
    Users, Heart, MessageSquare, Footprints, Hammer, Leaf
};

// Helper to get retro colors
const getRetroColorClasses = (color) => {
    const variants = {
        rose: {
            bg: 'bg-retro-red',
            text: 'text-retro-red',
            lightBg: 'bg-retro-light-gray',
        },
        amber: {
            bg: 'bg-retro-orange',
            text: 'text-retro-orange',
            lightBg: 'bg-retro-light-gray',
        },
        emerald: {
            bg: 'bg-retro-green',
            text: 'text-retro-green',
            lightBg: 'bg-retro-light-gray',
        },
        blue: {
            bg: 'bg-retro-blue',
            text: 'text-retro-blue',
            lightBg: 'bg-retro-light-gray',
        },
        violet: {
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        },
        pink: {
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        },
        cyan: {
            bg: 'bg-retro-cyan',
            text: 'text-retro-cyan',
            lightBg: 'bg-retro-light-gray',
        },
        indigo: {
            bg: 'bg-retro-blue',
            text: 'text-retro-blue',
            lightBg: 'bg-retro-light-gray',
        },
        purple: {
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        }
    };
    return variants[color] || variants.rose;
};

/**
 * Impact Lab Page - Retro Edition
 * SMART Objectives, EU Youth Goals, and Measurable Impact
 */
const ImpactPage = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('objectives');

    // Handle deep linking to specific tabs via location state
    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state]);
    const { smart_objectives, eu_youth_goals, erasmus_priorities, impact_indicators } = impactData;

    const tabs = [
        { id: 'objectives', label: 'SMART Objectives', icon: Target },
        { id: 'goals', label: 'EU Youth Goals', icon: Globe },
        { id: 'priorities', label: 'Erasmus+ Priorities', icon: Sparkles },
        { id: 'indicators', label: 'Impact Indicators', icon: BarChart3 }
    ];

    return (
        <div className="space-y-8 font-pixel-body">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-blue border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pixel-header tracking-widest uppercase retro-shadow">Impact Lab</h1>
                    <p className="text-white text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan">
                        &gt; Measurable objectives & outcomes
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Target size={18} className="text-retro-cyan" />
                            <span className="font-bold text-retro-cyan uppercase">7 SMART Objectives</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Globe size={18} className="text-retro-green" />
                            <span className="font-bold text-retro-green uppercase">6 EU Youth Goals</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <TrendingUp size={18} className="text-retro-yellow" />
                            <span className="font-bold text-retro-yellow uppercase">100% Measurable</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="bg-retro-black border-4 border-retro-gray p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto custom-scrollbar">
                <div className="flex space-x-2 pb-1 min-w-max">
                    {tabs.map(tab => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 font-bold uppercase font-pixel-header text-xs transition-all border-2 border-b-4 active:border-b-2 active:translate-y-1 ${activeTab === tab.id
                                    ? 'bg-retro-blue text-white border-white shadow-none'
                                    : 'bg-retro-light-gray text-retro-dark-gray border-retro-gray hover:bg-white hover:text-black hover:border-white'
                                    }`}
                            >
                                <IconComponent size={16} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <div className="bg-retro-light-gray border-4 border-retro-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px]">
                    {activeTab === 'objectives' && <ObjectivesTab objectives={smart_objectives} />}
                    {activeTab === 'goals' && <GoalsTab goals={eu_youth_goals} />}
                    {activeTab === 'priorities' && <PrioritiesTab priorities={erasmus_priorities} />}
                    {activeTab === 'indicators' && <IndicatorsTab indicators={impact_indicators} />}
                </div>
            </AnimatePresence>
        </div>
    );
};

/**
 * SMART Objectives Tab
 */
const ObjectivesTab = ({ objectives }) => {
    return (
        <motion.div
            key="objectives"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {objectives.map((obj, idx) => {
                const colors = getRetroColorClasses(obj.color);
                return (
                    <motion.div
                        key={obj.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className={`px-2 py-1 bg-black text-white text-xs font-bold font-pixel-header uppercase border-2 border-retro-gray`}>
                                        DAY {obj.day}
                                    </span>
                                    <span className="text-sm text-retro-gray font-bold uppercase">&gt; {obj.body_part}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-pixel-header uppercase">{obj.title}</h3>
                                <p className="text-black leading-relaxed mb-4 font-bold border-l-4 border-retro-light-gray pl-4">
                                    {obj.objective}
                                </p>
                            </div>
                        </div>

                        {/* Target */}
                        <div className={`${colors.bg} border-2 border-black p-4 mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                            <div className="flex items-start space-x-3">
                                <div className="bg-white border-2 border-black p-1">
                                    <Target className={`${colors.text} flex-shrink-0`} size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-black uppercase tracking-wider mb-1 bg-white inline-block px-1 border border-black">Target</p>
                                    <p className="text-white font-bold font-pixel-header text-sm drop-shadow-md">{obj.target}</p>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-retro-light-gray border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-dark-gray uppercase tracking-wider mb-1 underline">Baseline</p>
                                <p className="text-xs font-bold text-black font-mono">{obj.metrics.baseline}</p>
                            </div>
                            <div className="bg-retro-light-gray border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-dark-gray uppercase tracking-wider mb-1 underline">Measurement</p>
                                <p className="text-xs font-bold text-black font-mono">{obj.metrics.measurement}</p>
                            </div>
                            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-green uppercase tracking-wider mb-1 underline">Success Criteria</p>
                                <p className="text-xs font-bold text-black font-mono">{obj.metrics.success_criteria}</p>
                            </div>
                        </div>

                        {/* Methods */}
                        <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-400">
                            <p className="text-xs font-bold text-retro-gray uppercase tracking-wider mb-2">[ Methods Used ]</p>
                            <div className="flex flex-wrap gap-2">
                                {obj.methods.map((method, midx) => (
                                    <span key={midx} className="px-2 py-1 bg-white border border-black text-black text-xs font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                                        {method}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

/**
 * EU Youth Goals Tab
 */
const GoalsTab = ({ goals }) => {
    return (
        <motion.div
            key="goals"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
            {goals.map((goal, idx) => {
                const IconComponent = goalIcons[goal.icon] || Target;
                const colors = getRetroColorClasses(goal.color);
                return (
                    <motion.div
                        key={goal.number}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full"
                    >
                        <div className={`h-4 ${colors.bg} border-b-4 border-black`}></div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className={`w-12 h-12 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0`}>
                                    <IconComponent size={24} className={`${colors.text}`} />
                                </div>
                                <div className="flex-1">
                                    <div className={`inline-flex items-center justify-center w-auto min-w-[2rem] px-2 h-8 ${colors.bg} text-white border-2 border-black font-bold text-sm mb-2 font-pixel-header`}>
                                        #{goal.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-2 font-pixel-header uppercase leading-tight">{goal.title}</h3>
                                </div>
                            </div>
                            <div className="bg-retro-light-gray/30 border-2 border-black p-3 flex-1">
                                <p className="text-black font-bold font-pixel-body leading-relaxed text-sm">
                                    {goal.connection}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

/**
 * Erasmus+ Priorities Tab
 */
const PrioritiesTab = ({ priorities }) => {
    return (
        <motion.div
            key="priorities"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {priorities.map((priority, idx) => {
                const colors = getRetroColorClasses(priority.color);
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6"
                    >
                        <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-black mb-3 font-pixel-header uppercase">{priority.name}</h3>
                                <p className="text-black font-bold font-pixel-body leading-relaxed border-l-4 border-retro-gray pl-4">
                                    {priority.description}
                                </p>
                            </div>
                            <div className={`flex-shrink-0 ${colors.bg} border-2 border-black p-4 text-center min-w-[100px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                <p className={`text-2xl font-bold text-white font-pixel-header`}>{priority.impact_percentage}%</p>
                                <p className="text-[10px] text-white font-bold uppercase mt-1 bg-black px-1">Impact Level</p>
                            </div>
                        </div>
                        {/* Retro Progress Bar */}
                        <div className="w-full bg-retro-light-gray border-2 border-black h-6 p-0.5 relative">
                            {/* Ticks */}
                            <div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
                                {[...Array(10)].map((_, i) => <div key={i} className="w-0.5 h-full bg-gray-300"></div>)}
                            </div>
                            <div
                                className={`${colors.bg} h-full border-r-2 border-black transition-all relative z-10`}
                                style={{ width: `${priority.impact_percentage}%` }}
                            >
                                {/* Striped pattern css would happen here or via image, keeping it simple solid for now */}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

/**
 * Impact Indicators Tab
 */
const IndicatorsTab = ({ indicators }) => (
    <motion.div
        key="indicators"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-8"
    >
        {/* Direct Participants */}
        <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center space-x-2 border-b-4 border-retro-blue pb-2">
                <Users size={24} className="text-retro-blue" />
                <span className="font-pixel-header uppercase">Direct Participants</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(indicators.direct_participants).map(([key, value]) => (
                    <div key={key} className="bg-retro-black border-2 border-retro-gray p-4 text-center">
                        <p className="text-3xl font-bold text-retro-green font-pixel-header mb-1 text-shadow-glow">{value}</p>
                        <p className="text-[10px] text-retro-white font-bold uppercase tracking-wider">{key.replace(/_/g, ' ')}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Expected Outcomes */}
        <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center space-x-2 border-b-4 border-retro-green pb-2">
                <CheckCircle2 size={24} className="text-retro-green" />
                <span className="font-pixel-header uppercase">Expected Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(indicators.expected_outcomes).map(([key, value]) => {
                    // Descriptive text mapping
                    const descriptions = {
                        "intercultural_understanding": "Feel more connected to other cultures",
                        "european_identity": "Identify stronger as European citizens",
                        "sustainable_habits": "Adopt new eco-friendly daily behaviors",
                        "emotional_regulation_skills": "Better equipped to manage emotions",
                        "media_literacy": "Confident in identifying disinformation",
                        "youthpass_certification": "All participants certified via Youthpass",
                        "local_action_plans": "Concrete local initiatives created"
                    };

                    return (
                        <div key={key} className="flex items-start space-x-3 bg-retro-light-gray/20 border-2 border-black p-4 hover:bg-retro-green/10 transition-colors">
                            <div className="w-5 h-5 bg-retro-green border border-black flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-2.5 h-1.5 bg-transparent border-b-2 border-l-2 border-white -rotate-45 -mt-0.5"></div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-black font-pixel-body capitalize mb-1 underline decoration-retro-gray">
                                    {key.replace(/_/g, ' ')}
                                </p>
                                <p className="text-2xl font-bold text-retro-green font-pixel-header mb-1">{value}</p>
                                <p className="text-xs text-retro-dark-gray font-bold leading-tight">
                                    &gt; {descriptions[key] || "Measurable outcomes"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Multiplier Effect */}
        <div className="bg-retro-magenta border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2 border-b-4 border-white pb-2 relative z-10">
                <TrendingUp size={24} className="text-white" />
                <span className="font-pixel-header uppercase">Multiplier Effect</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-black border-2 border-white p-4 text-center">
                    <p className="text-retro-magenta text-xs font-bold uppercase mb-2 bg-white inline-block px-1">Local Events</p>
                    <p className="text-4xl font-bold font-pixel-header text-retro-yellow">{indicators.multiplier_effect.local_events}</p>
                    <p className="text-white text-xs mt-1 font-bold">Events across 8 countries</p>
                </div>
                <div className="bg-black border-2 border-white p-4 text-center">
                    <p className="text-retro-magenta text-xs font-bold uppercase mb-2 bg-white inline-block px-1">Expected Reach</p>
                    <p className="text-4xl font-bold font-pixel-header text-retro-cyan">{indicators.multiplier_effect.expected_reach}</p>
                    <p className="text-white text-xs mt-1 font-bold">People impacted locally</p>
                </div>
                <div className="bg-black border-2 border-white p-4 text-center">
                    <p className="text-retro-magenta text-xs font-bold uppercase mb-2 bg-white inline-block px-1">Timeline</p>
                    <p className="text-xl font-bold font-pixel-header text-retro-green pt-2">{indicators.multiplier_effect.timeline}</p>
                    <p className="text-white text-xs mt-1 font-bold pt-1">{indicators.multiplier_effect.digital_content}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ImpactPage;
