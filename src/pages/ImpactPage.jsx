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

/**
 * Impact Lab Page - Complete Implementation
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
        <div className="space-y-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Impact Lab</h1>
                    <p className="text-white/90 text-lg mb-6">
                        Measurable objectives, EU alignment, and transformative outcomes
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Target size={18} />
                            <span className="font-semibold">7 SMART Objectives</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Globe size={18} />
                            <span className="font-semibold">6 EU Youth Goals</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <TrendingUp size={18} />
                            <span className="font-semibold">100% Measurable</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
                {tabs.map(tab => {
                    const IconComponent = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 border border-slate-200 dark:border-gray-700'
                                }`}
                        >
                            <IconComponent size={20} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {activeTab === 'objectives' && <ObjectivesTab objectives={smart_objectives} />}
                {activeTab === 'goals' && <GoalsTab goals={eu_youth_goals} />}
                {activeTab === 'priorities' && <PrioritiesTab priorities={erasmus_priorities} />}
                {activeTab === 'indicators' && <IndicatorsTab indicators={impact_indicators} />}
            </AnimatePresence>
        </div>
    );
};

/**
 * SMART Objectives Tab
 */
const ObjectivesTab = ({ objectives }) => {
    // Helper for color classes
    const getObjColorClasses = (color) => {
        const variants = {
            rose: {
                borderStart: 'border-rose-500',
                badgeBg: 'bg-rose-100 dark:bg-rose-900/30',
                badgeText: 'text-rose-700 dark:text-rose-400',
                targetBg: 'bg-rose-50 dark:bg-rose-900/20',
                targetIcon: 'text-rose-600 dark:text-rose-400',
                targetText: 'text-rose-900 dark:text-rose-200'
            },
            amber: {
                borderStart: 'border-amber-500',
                badgeBg: 'bg-amber-100 dark:bg-amber-900/30',
                badgeText: 'text-amber-700 dark:text-amber-400',
                targetBg: 'bg-amber-50 dark:bg-amber-900/20',
                targetIcon: 'text-amber-600 dark:text-amber-400',
                targetText: 'text-amber-900 dark:text-amber-200'
            },
            emerald: {
                borderStart: 'border-emerald-500',
                badgeBg: 'bg-emerald-100 dark:bg-emerald-900/30',
                badgeText: 'text-emerald-700 dark:text-emerald-400',
                targetBg: 'bg-emerald-50 dark:bg-emerald-900/20',
                targetIcon: 'text-emerald-600 dark:text-emerald-400',
                targetText: 'text-emerald-900 dark:text-emerald-200'
            },
            blue: {
                borderStart: 'border-blue-500',
                badgeBg: 'bg-blue-100 dark:bg-blue-900/30',
                badgeText: 'text-blue-700 dark:text-blue-400',
                targetBg: 'bg-blue-50 dark:bg-blue-900/20',
                targetIcon: 'text-blue-600 dark:text-blue-400',
                targetText: 'text-blue-900 dark:text-blue-200'
            },
            violet: {
                borderStart: 'border-violet-500',
                badgeBg: 'bg-violet-100 dark:bg-violet-900/30',
                badgeText: 'text-violet-700 dark:text-violet-400',
                targetBg: 'bg-violet-50 dark:bg-violet-900/20',
                targetIcon: 'text-violet-600 dark:text-violet-400',
                targetText: 'text-violet-900 dark:text-violet-200'
            },
            pink: {
                borderStart: 'border-pink-500',
                badgeBg: 'bg-pink-100 dark:bg-pink-900/30',
                badgeText: 'text-pink-700 dark:text-pink-400',
                targetBg: 'bg-pink-50 dark:bg-pink-900/20',
                targetIcon: 'text-pink-600 dark:text-pink-400',
                targetText: 'text-pink-900 dark:text-pink-200'
            },
            cyan: {
                borderStart: 'border-cyan-500',
                badgeBg: 'bg-cyan-100 dark:bg-cyan-900/30',
                badgeText: 'text-cyan-700 dark:text-cyan-400',
                targetBg: 'bg-cyan-50 dark:bg-cyan-900/20',
                targetIcon: 'text-cyan-600 dark:text-cyan-400',
                targetText: 'text-cyan-900 dark:text-cyan-200'
            }
        };
        return variants[color] || variants.rose;
    };

    return (
        <motion.div
            key="objectives"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {objectives.map((obj, idx) => {
                const colors = getObjColorClasses(obj.color);
                return (
                    <motion.div
                        key={obj.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-4 ${colors.borderStart} p-6`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className={`px-3 py-1 ${colors.badgeBg} ${colors.badgeText} text-xs font-bold rounded-full`}>
                                        DAY {obj.day}
                                    </span>
                                    <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">{obj.body_part}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{obj.title}</h3>
                                <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">
                                    {obj.objective}
                                </p>
                            </div>
                        </div>

                        {/* Target */}
                        <div className={`${colors.targetBg} rounded-lg p-4 mb-4`}>
                            <div className="flex items-start space-x-3">
                                <Target className={`${colors.targetIcon} flex-shrink-0 mt-1`} size={20} />
                                <div>
                                    <p className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider mb-1">Target</p>
                                    <p className={`${colors.targetText} font-semibold`}>{obj.target}</p>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-4">
                                <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Baseline</p>
                                <p className="text-sm text-slate-700 dark:text-gray-300">{obj.metrics.baseline}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-4">
                                <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Measurement</p>
                                <p className="text-sm text-slate-700 dark:text-gray-300">{obj.metrics.measurement}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-4">
                                <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Success</p>
                                <p className="text-sm text-slate-700 dark:text-gray-300">{obj.metrics.success_criteria}</p>
                            </div>
                        </div>

                        {/* Methods */}
                        <div className="mt-4">
                            <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-2">Methods Used</p>
                            <div className="flex flex-wrap gap-2">
                                {obj.methods.map((method, midx) => (
                                    <span key={midx} className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 text-sm rounded-lg">
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
    // Color mappings to avoid dynamic Tailwind class issues
    const colorClasses = {
        rose: { top: 'bg-rose-500', icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400', badge: 'bg-rose-600' },
        violet: { top: 'bg-violet-500', icon: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400', badge: 'bg-violet-600' },
        blue: { top: 'bg-blue-500', icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400', badge: 'bg-blue-600' },
        amber: { top: 'bg-amber-500', icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400', badge: 'bg-amber-600' },
        pink: { top: 'bg-pink-500', icon: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400', badge: 'bg-pink-600' },
        emerald: { top: 'bg-emerald-500', icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-600' },
    };

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
                const colors = colorClasses[goal.color] || colorClasses.rose;
                return (
                    <motion.div
                        key={goal.number}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden"
                    >
                        <div className={`h-2 ${colors.top}`}></div>
                        <div className="p-6">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <IconComponent size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className={`inline-flex items-center justify-center w-8 h-8 ${colors.badge} text-white rounded-full font-bold text-sm mb-2`}>
                                        #{goal.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{goal.title}</h3>
                                </div>
                            </div>
                            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                                {goal.connection}
                            </p>
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
    // Color mappings to avoid dynamic Tailwind class issues
    const colorClasses = {
        indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', bar: 'bg-indigo-500' },
        emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500' },
        blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', bar: 'bg-blue-500' },
        purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', bar: 'bg-purple-500' },
    };

    return (
        <motion.div
            key="priorities"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {priorities.map((priority, idx) => {
                const colors = colorClasses[priority.color] || colorClasses.indigo;
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{priority.name}</h3>
                                <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                                    {priority.description}
                                </p>
                            </div>
                            <div className={`ml-6 flex-shrink-0 ${colors.bg} rounded-xl p-4 text-center`}>
                                <p className={`text-3xl font-bold ${colors.text}`}>{priority.impact_percentage}%</p>
                                <p className="text-xs text-slate-600 dark:text-gray-400 font-semibold mt-1">Impact</p>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 dark:bg-gray-700 rounded-full h-2">
                            <div
                                className={`${colors.bar} h-2 rounded-full transition-all`}
                                style={{ width: `${priority.impact_percentage}%` }}
                            ></div>
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
        className="space-y-6"
    >
        {/* Direct Participants */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                <Users size={28} className="text-indigo-600 dark:text-indigo-400" />
                <span>Direct Participants</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(indicators.direct_participants).map(([key, value]) => (
                    <div key={key} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{value}</p>
                        <p className="text-xs text-slate-600 dark:text-gray-400 font-semibold capitalize">{key.replace(/_/g, ' ')}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Expected Outcomes */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                <CheckCircle2 size={28} className="text-emerald-600 dark:text-emerald-400" />
                <span>Expected Outcomes</span>
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
                        <div key={key} className="flex items-start space-x-3 bg-slate-50 dark:bg-gray-700/50 rounded-lg p-4">
                            <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-slate-700 dark:text-gray-300 capitalize mb-1">
                                    {key.replace(/_/g, ' ')}
                                </p>
                                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{value}</p>
                                <p className="text-xs text-slate-500 dark:text-gray-400 leading-tight">
                                    {descriptions[key] || "Measurable project outcome"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Multiplier Effect */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <TrendingUp size={28} />
                <span>Multiplier Effect</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <p className="text-white/80 text-sm font-semibold mb-2">Local Events</p>
                    <p className="text-4xl font-bold">{indicators.multiplier_effect.local_events}</p>
                    <p className="text-white/70 text-sm mt-1">Events across 8 countries</p>
                </div>
                <div>
                    <p className="text-white/80 text-sm font-semibold mb-2">Expected Reach</p>
                    <p className="text-4xl font-bold">{indicators.multiplier_effect.expected_reach}</p>
                    <p className="text-white/70 text-sm mt-1">People impacted locally</p>
                </div>
                <div>
                    <p className="text-white/80 text-sm font-semibold mb-2">Timeline</p>
                    <p className="text-2xl font-bold">{indicators.multiplier_effect.timeline}</p>
                    <p className="text-white/70 text-sm mt-1">{indicators.multiplier_effect.digital_content}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ImpactPage;
