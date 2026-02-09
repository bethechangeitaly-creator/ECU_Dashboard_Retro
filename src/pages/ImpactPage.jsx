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
        <div className="space-y-2 xs:space-y-3 font-pixel-body">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-blue border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-base xs:text-lg lg:text-4xl font-bold mb-4 font-pixel-header lg:tracking-widest uppercase retro-shadow break-words text-center lg:text-left overflow-hidden">Impact Lab</h1>
                    <p className="text-white text-xs xs:text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan break-words w-full lg:w-auto text-center lg:text-left">
                        &gt; Measurable objectives & outcomes
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 xs:gap-4 text-xs md:text-sm">
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto">
                            <Target size={18} className="text-retro-cyan" />
                            <span className="font-bold text-retro-cyan uppercase">7 SMART Objectives</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto">
                            <Globe size={18} className="text-retro-green" />
                            <span className="font-bold text-retro-green uppercase">6 EU Youth Goals</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto">
                            <TrendingUp size={18} className="text-retro-yellow" />
                            <span className="font-bold text-retro-yellow uppercase">100% Measurable</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="bg-retro-black border-4 border-retro-gray p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto custom-scrollbar">
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
                <div className="bg-retro-light-gray border-4 border-retro-white p-3 xs:p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px]">
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
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className={`px-2 py-1 bg-black text-white text-xs font-bold font-pixel-header uppercase border-2 border-retro-gray`}>
                                        DAY {obj.day}
                                    </span>
                                    <span className="text-sm text-retro-gray font-bold uppercase">&gt; {obj.body_part}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-pixel-header uppercase break-words hyphens-auto leading-tight">{obj.title}</h3>
                                <p className="text-black leading-relaxed mb-4 font-bold border-l-4 border-retro-light-gray pl-4 break-words">
                                    {obj.objective}
                                </p>
                            </div>
                        </div>

                        {/* Target */}
                        <div className={`${colors.bg} border-2 border-black p-4 mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                            <div className="flex items-start space-x-3">
                                <div className="bg-white border-2 border-black p-1 hidden md:block">
                                    <Target className={`${colors.text} flex-shrink-0`} size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-black uppercase tracking-wider mb-1 bg-white inline-block px-1 border border-black">Target</p>
                                    <p className="text-white font-bold font-pixel-header text-[10px] sm:text-xs drop-shadow-md break-words">{obj.target}</p>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="bg-retro-light-gray border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-dark-gray uppercase tracking-wider mb-1 underline">Baseline</p>
                                <p className="text-xs font-bold text-black font-mono break-words hyphens-auto">{obj.metrics.baseline}</p>
                            </div>
                            <div className="bg-retro-light-gray border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-dark-gray uppercase tracking-wider mb-1 underline">Measurement</p>
                                <p className="text-xs font-bold text-black font-mono break-words hyphens-auto">{obj.metrics.measurement}</p>
                            </div>
                            <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xs font-bold text-retro-green uppercase tracking-wider mb-1 underline">Success Criteria</p>
                                <p className="text-xs font-bold text-black font-mono break-words hyphens-auto">{obj.metrics.success_criteria}</p>
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
            className="grid grid-cols-1 xl:grid-cols-2 gap-3"
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

                        <div className="p-6 flex-1 flex flex-col items-center">
                            {/* Number Badge */}
                            <div className={`inline-flex items-center justify-center px-4 py-1 ${colors.bg} text-white border-2 border-black font-bold text-xl mb-4 font-pixel-header shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                #{goal.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-black mb-6 font-pixel-header uppercase leading-tight break-words hyphens-auto text-center max-w-[95%] overflow-hidden">
                                {goal.title}
                            </h3>

                            {/* Description Box */}
                            <div className="w-full bg-retro-light-gray/30 border-2 border-black p-4 flex-1 text-left relative shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
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
            className="grid grid-cols-1 xl:grid-cols-2 gap-3"
        >
            {priorities.map((priority, idx) => {
                const colors = getRetroColorClasses(priority.color);
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 xs:p-5 flex flex-col h-full relative"
                    >
                        {/* Header: Title */}
                        <div className="mb-6">
                            <h3 className="text-xl xs:text-2xl font-bold text-black font-pixel-header uppercase leading-none break-words hyphens-auto w-full">
                                {priority.name}
                            </h3>
                        </div>

                        {/* Body: Description with Left Border */}
                        <div className="flex-1 pl-4 border-l-4 border-black mb-6">
                            <p className="text-black font-bold font-pixel-body leading-relaxed text-sm">
                                {priority.description}
                            </p>
                        </div>

                        {/* Footer Section Wrapper */}
                        <div className="mt-auto">
                            {/* Impact Badge - Below Description */}
                            <div className={`w-36 h-24 ${colors.bg} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-2 mb-6 transform hover:scale-105 transition-transform`}>
                                <div className="text-4xl font-bold text-white font-pixel-header leading-none mb-1">{priority.impact_percentage}%</div>
                                <div className="text-[10px] text-white font-bold uppercase bg-black px-1">Impact Level</div>
                            </div>

                            {/* Retro Progress Bar - Bottom */}
                            <div className="w-full h-8 bg-retro-light-gray border-4 border-black relative">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex pointer-events-none">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className="flex-1 border-r-2 border-retro-gray last:border-r-0"></div>
                                    ))}
                                </div>
                                {/* Fill */}
                                <div
                                    className={`${colors.bg} h-full border-r-4 border-black transition-all relative z-10 opacity-80`}
                                    style={{ width: `${priority.impact_percentage}%` }}
                                ></div>
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
        className="space-y-6 xs:space-y-8"
    >
        {/* Direct Participants Section - Kept for context but adjusted padding */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold text-black mb-8 flex items-center space-x-3 border-b-4 border-retro-blue pb-2">
                <Users size={28} className="text-retro-blue" />
                <span className="font-pixel-header uppercase">Direct Participants</span>
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
                {Object.entries(indicators.direct_participants).map(([key, value]) => (
                    <div key={key} className="bg-retro-black border-2 border-retro-gray p-5 text-center flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-3xl xs:text-4xl font-bold text-retro-green font-pixel-header mb-2 text-shadow-glow">{value}</p>
                        <p className="text-[10px] text-retro-white font-bold uppercase whitespace-normal break-words leading-tight">{key.replace(/_/g, ' ')}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Expected Outcomes Section - Refactored to Vertical Cards */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold text-black mb-10 flex items-center space-x-3 border-b-4 border-retro-green pb-2">
                <CheckCircle2 size={28} className="text-retro-green" />
                <span className="font-pixel-header uppercase">Expected Outcomes</span>
            </h3>

            <div className="space-y-6">
                {Object.entries(indicators.expected_outcomes).map(([key, value]) => {
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
                        <div key={key} className="bg-retro-light-gray/20 border-4 border-black p-6 hover:bg-retro-green/5 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-8 h-8 bg-retro-green border-2 border-black flex items-center justify-center flex-shrink-0">
                                    <div className="w-4 h-2.5 bg-transparent border-b-4 border-l-4 border-white -rotate-45 -mt-1"></div>
                                </div>
                                <h4 className="text-xl font-bold text-black font-pixel-body underline underline-offset-4 decoration-retro-gray uppercase break-words leading-tight">
                                    {key.replace(/_/g, ' ')}
                                </h4>
                            </div>

                            <div className="mb-4">
                                <p className="text-6xl font-bold text-retro-green font-pixel-header tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                    {value}
                                </p>
                            </div>

                            <div className="border-t-2 border-dashed border-retro-gray pt-3">
                                <p className="text-sm text-black font-bold font-pixel-body leading-relaxed">
                                    &gt; {descriptions[key] || "Measurable outcomes and targets achieveable"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Multiplier Effect Section - Refactored to Vertical Pink Stack */}
        <div className="bg-retro-magenta border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 flex flex-col border-b-8 border-white pb-4">
                    <span className="flex items-center space-x-2 text-xs mb-2">
                        <TrendingUp size={16} className="text-white" />
                        <span className="font-pixel-header uppercase opacity-80">Impact Scaling</span>
                    </span>
                    <span className="font-pixel-header uppercase tracking-tighter text-xl xs:text-2xl lg:text-4xl leading-none">Multiplier Effect</span>
                </h3>

                <div className="space-y-8">
                    {/* Local Events Card */}
                    <div className="bg-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transform -rotate-1">
                        <div className="inline-block bg-white text-retro-magenta px-2 py-0.5 text-xs font-pixel-header mb-4 uppercase">Local Events</div>
                        <div className="text-4xl xs:text-5xl lg:text-7xl font-bold font-pixel-header text-retro-yellow leading-none tracking-tight">{indicators.multiplier_effect.local_events}</div>
                        <p className="text-white text-sm mt-4 font-bold border-t border-white/30 pt-2">8 events across participating countries</p>
                    </div>

                    {/* Expected Reach Card */}
                    <div className="bg-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transform rotate-1">
                        <div className="inline-block bg-white text-retro-magenta px-2 py-0.5 text-xs font-pixel-header mb-4 uppercase">Expected Reach</div>
                        <div className="text-4xl xs:text-5xl lg:text-7xl font-bold font-pixel-header text-retro-cyan leading-none tracking-tight">{indicators.multiplier_effect.expected_reach}</div>
                        <p className="text-white text-sm mt-4 font-bold border-t border-white/30 pt-2">Minimum 160 reach (8x20) across all regions</p>
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                        <div className="inline-block bg-white text-retro-magenta px-2 py-0.5 text-xs font-pixel-header mb-4 uppercase">Timeline</div>
                        <div className="text-lg xs:text-xl lg:text-3xl font-bold font-pixel-header text-retro-green uppercase leading-tight tracking-tight">
                            Within 3 months post-exchange
                        </div>
                        <p className="text-white text-sm mt-4 font-bold border-t border-white/30 pt-2">
                            Digital content: {indicators.multiplier_effect.digital_content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ImpactPage;
