import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Globe, TrendingUp, CheckCircle2, Sparkles, MessageSquare, Camera } from 'lucide-react';

/**
 * Follow-Up Page - Post-Exchange Actions and Local Impact
 */
const FollowUpPage = () => {
    const timeline = [
        {
            phase: 'Immediate (September 2026)',
            icon: CheckCircle2,
            color: 'emerald',
            actions: [
                'Final evaluation and debriefing session (Day 7)',
                'Youthpass certificates issued to all 32 participants',
                'Group photos and closing ceremony',
                'Exchange documentation complete'
            ]
        },
        {
            phase: 'Week 1-4 (October 2026)',
            icon: MessageSquare,
            color: 'blue',
            actions: [
                'Digital follow-up meeting with all 8 Group Leaders',
                'Participants share reflections and final learning outcomes',
                'Local action plans refined and finalized',
                'Social media dissemination campaign begins'
            ]
        },
        {
            phase: 'Months 1-3 (Oct-Dec 2026)',
            icon: Users,
            color: 'purple',
            actions: [
                '8 Local Multiplier Events organized (1 per partner country)',
                'Minimum reach: 160 people (20 per event)',
                'Participants become local facilitators and ambassadors',
                'Document and share local actions through videos and photos'
            ]
        },
        {
            phase: 'Month 3 (December 2026)',
            icon: Sparkles,
            color: 'amber',
            actions: [
                'Open-source toolkit compiled and finalized',
                'All methodology materials translated and formatted',
                'Toolkit released publicly in multiple languages',
                'Dissemination webinar for youth workers across Europe'
            ]
        },
        {
            phase: 'Months 4-6 (Jan-Mar 2027)',
            icon: TrendingUp,
            color: 'rose',
            actions: [
                'Impact report drafted with quantitative and qualitative data',
                'Compile success stories and testimonials',
                'Final financial reporting to Erasmus+ National Agency',
                'Partnership evaluation and future collaboration planning'
            ]
        }
    ];

    const multiplierEvents = [
        {
            country: 'IT',
            title: 'Messina Youth Festival',
            description: 'Interactive workshop on media literacy and fact-checking for local high school students.',
            expected_reach: 25,
            color: 'rose'
        },
        {
            country: 'DE',
            title: 'Intercultural Dialogue Café',
            description: 'Body mapping and identity workshop with youth from migrant backgrounds.',
            expected_reach: 20,
            color: 'amber'
        },
        {
            country: 'MK',
            title: 'Skopje Sustainability Fair',
            description: 'Zero-waste challenge and carbon footprint workshop at local community center.',
            expected_reach: 30,
            color: 'emerald'
        },
        {
            country: 'GR',
            title: 'Theatre & Emotions Workshop',
            description: 'Theatre of the Oppressed session exploring emotional awareness for local youth.',
            expected_reach: 18,
            color: 'blue'
        },
        {
            country: 'FR',
            title: 'Paris Digital Cleanup Day',
            description: 'Combined digital cleanup and algorithm awareness workshop for urban youth.',
            expected_reach: 22,
            color: 'violet'
        },
        {
            country: 'PT',
            title: 'European Paths Game Night',
            description: 'Mobility simulation game with rural youth in Alentejo region.',
            expected_reach: 15,
            color: 'pink'
        },
        {
            country: 'RO',
            title: 'Community Action Day',
            description: 'Hands-on local volunteer project with youth from Tara Dornelor.',
            expected_reach: 20,
            color: 'cyan'
        },
        {
            country: 'TR',
            title: 'Istanbul Youth Summit',
            description: 'Multi-session program combining several ECU methods for local organizations.',
            expected_reach: 25,
            color: 'orange'
        }
    ];

    const impactMetrics = {
        direct: '40 participants (32 youth + 8 GL) + 1 facilitator',
        multiplier: '160+ people through 8 local events',
        digital: '500+ people through social media and online content',
        toolkit: 'Unlimited reach through open-source toolkit',
        timeline: '6 months of sustained impact (Sep 2026 - Mar 2027)'
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-700 dark:to-rose-700 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Follow-Up & Impact</h1>
                    <p className="text-white/90 text-lg mb-6">
                        Post-exchange activities, local multiplier events, and sustained impact
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Globe size={18} />
                            <span className="font-semibold">8 Local Events</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Users size={18} />
                            <span className="font-semibold">160+ Minimum Reach</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Calendar size={18} />
                            <span className="font-semibold">6-Month Timeline</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Timeline */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Follow-Up Timeline</h2>
                <div className="space-y-6">
                    {timeline.map((phase, idx) => {
                        const IconComponent = phase.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 bg-${phase.color}-100 dark:bg-${phase.color}-900/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-1`}>
                                        <IconComponent size={24} className={`text-${phase.color}-600 dark:text-${phase.color}-400`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{phase.phase}</h3>
                                        <ul className="space-y-2">
                                            {phase.actions.map((action, aidx) => (
                                                <li key={aidx} className="flex items-start space-x-2">
                                                    <CheckCircle2 size={18} className={`text-${phase.color}-600 dark:text-${phase.color}-400 flex-shrink-0 mt-0.5`} />
                                                    <span className="text-slate-700 dark:text-gray-300">{action}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Local Multiplier Events */}
            <div className="relative">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Local Multiplier Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {multiplierEvents.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-4 border-${event.color}-500 p-6`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className={`px-3 py-1 bg-${event.color}-100 dark:bg-${event.color}-900/30 text-${event.color}-700 dark:text-${event.color}-400 text-sm font-bold rounded-full`}>
                                    {event.country}
                                </span>
                                <div className={`flex items-center space-x-1 bg-${event.color}-50 dark:bg-${event.color}-900/20 px-3 py-1 rounded-full`}>
                                    <Users size={16} className={`text-${event.color}-600 dark:text-${event.color}-400`} />
                                    <span className={`text-sm font-semibold text-${event.color}-700 dark:text-${event.color}-300`}>{event.expected_reach}+</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                                {event.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Frosted Glass Overlay - Adjusted for Dark Mode */}
                <div className="absolute inset-0 top-16 backdrop-blur-sm bg-white/20 dark:bg-black/40 rounded-2xl flex items-center justify-center z-10 border-2 border-slate-200/30 dark:border-gray-700/30">
                    <div className="text-center px-8 py-12 bg-white/60 dark:bg-gray-800/80 p-8 rounded-2xl shadow-sm backdrop-blur-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full mb-4 shadow-lg">
                            <Calendar className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">To Be Planned During Project</h3>
                        <p className="text-slate-800 dark:text-gray-200 font-medium text-lg max-w-md mx-auto">
                            Specific local events will be designed collaboratively by participants during the exchange (October-December 2026)
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700 rounded-xl shadow-lg p-8 text-white"
            >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <TrendingUp size={28} />
                    <span>Total Impact Reach</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(impactMetrics).map(([key, value], idx) => (
                        <div key={key}>
                            <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wide">
                                {key.replace('_', ' ')}
                            </p>
                            <p className="text-2xl font-bold">{value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FollowUpPage;
