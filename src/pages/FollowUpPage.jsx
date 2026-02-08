import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Globe, TrendingUp, CheckCircle2, Sparkles, MessageSquare, Camera } from 'lucide-react';

/**
 * Follow-Up Page - Post-Exchange Actions and Local Impact - Retro Edition
 */
const FollowUpPage = () => {
    const timeline = [
        {
            phase: 'Immediate (September 2026)',
            icon: CheckCircle2,
            color: 'retro-green',
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
            color: 'retro-blue',
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
            color: 'retro-magenta',
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
            color: 'retro-yellow',
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
            color: 'retro-red',
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
            color: 'retro-red'
        },
        {
            country: 'DE',
            title: 'Intercultural Dialogue Café',
            description: 'Body mapping and identity workshop with youth from migrant backgrounds.',
            expected_reach: 20,
            color: 'retro-orange'
        },
        {
            country: 'MK',
            title: 'Skopje Sustainability Fair',
            description: 'Zero-waste challenge and carbon footprint workshop at local community center.',
            expected_reach: 30,
            color: 'retro-green'
        },
        {
            country: 'GR',
            title: 'Theatre & Emotions Workshop',
            description: 'Theatre of the Oppressed session exploring emotional awareness for local youth.',
            expected_reach: 18,
            color: 'retro-blue'
        },
        {
            country: 'FR',
            title: 'Paris Digital Cleanup Day',
            description: 'Combined digital cleanup and algorithm awareness workshop for urban youth.',
            expected_reach: 22,
            color: 'retro-magenta'
        },
        {
            country: 'PT',
            title: 'European Paths Game Night',
            description: 'Mobility simulation game with rural youth in Alentejo region.',
            expected_reach: 15,
            color: 'retro-cyan'
        },
        {
            country: 'RO',
            title: 'Community Action Day',
            description: 'Hands-on local volunteer project with youth from Tara Dornelor.',
            expected_reach: 20,
            color: 'retro-green'
        },
        {
            country: 'TR',
            title: 'Istanbul Youth Summit',
            description: 'Multi-session program combining several ECU methods for local organizations.',
            expected_reach: 25,
            color: 'retro-orange'
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
        <div className="space-y-8 font-pixel-body">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-red border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pixel-header tracking-widest uppercase retro-shadow">Follow-Up & Impact</h1>
                    <p className="text-white text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-yellow">
                        &gt; Post-Exchange Action Plan
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Globe size={18} className="text-retro-cyan" />
                            <span className="font-bold text-retro-cyan uppercase">8 Local Events</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Users size={18} className="text-retro-green" />
                            <span className="font-bold text-retro-green uppercase">160+ Reach</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Calendar size={18} className="text-retro-yellow" />
                            <span className="font-bold text-retro-yellow uppercase">6-Month Plan</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Timeline */}
            <div className="bg-retro-light-gray border-4 border-retro-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray mb-6 -mx-2 -mt-2">
                    <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider pl-2">
                        Timeline_Viewer.exe
                    </span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

                <div className="space-y-6 relative border-l-4 border-black ml-4 pl-4 md:ml-8 md:pl-8">
                    {timeline.map((phase, idx) => {
                        const IconComponent = phase.icon;

                        // Map retro colors
                        let colorClass = "text-black";
                        let borderColor = "border-black";
                        if (phase.color === "retro-green") { colorClass = "text-retro-green"; borderColor = "border-retro-green"; }
                        else if (phase.color === "retro-blue") { colorClass = "text-retro-blue"; borderColor = "border-retro-blue"; }
                        else if (phase.color === "retro-magenta") { colorClass = "text-retro-magenta"; borderColor = "border-retro-magenta"; }
                        else if (phase.color === "retro-yellow") { colorClass = "text-retro-yellow"; borderColor = "border-retro-yellow"; }
                        else if (phase.color === "retro-red") { colorClass = "text-retro-red"; borderColor = "border-retro-red"; }

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                <div className={`absolute -left-[44px] md:-left-[60px] top-4 w-6 h-6 bg-white border-2 border-black rounded-full z-10 box-shadow-hard`}></div>

                                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                                    <div className={`absolute top-0 right-0 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase border-b-2 border-l-2 border-white`}>
                                        Phase {idx + 1}
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                            <IconComponent size={24} className={colorClass} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-bold text-black mb-3 font-pixel-header">{phase.phase}</h3>
                                            <ul className="space-y-2">
                                                {phase.actions.map((action, aidx) => (
                                                    <li key={aidx} className="flex items-start space-x-2">
                                                        <div className="mt-1">
                                                            <div className="w-2 h-2 bg-black"></div>
                                                        </div>
                                                        <span className="text-black font-bold text-sm leading-tight">{action}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Local Multiplier Events */}
            <div className="relative">
                <div className="bg-black text-white inline-block px-4 py-2 border-4 border-double border-white mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                    <h2 className="text-xl font-bold font-pixel-header uppercase">Local Multiplier Events</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {multiplierEvents.map((event, idx) => {
                        // Map retro colors
                        let colorClass = "text-black";
                        let borderClass = "border-black";
                        let bgClass = "bg-white";

                        if (event.color === "retro-red") { colorClass = "text-retro-red"; borderClass = "border-retro-red"; }
                        else if (event.color === "retro-orange") { colorClass = "text-retro-orange"; borderClass = "border-retro-orange"; }
                        else if (event.color === "retro-green") { colorClass = "text-retro-green"; borderClass = "border-retro-green"; }
                        else if (event.color === "retro-blue") { colorClass = "text-retro-blue"; borderClass = "border-retro-blue"; }
                        else if (event.color === "retro-magenta") { colorClass = "text-retro-magenta"; borderClass = "border-retro-magenta"; }
                        else if (event.color === "retro-cyan") { colorClass = "text-retro-cyan"; borderClass = "border-retro-cyan"; }

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all`}
                            >
                                <div className="flex items-start justify-between mb-3 border-b-2 border-black pb-2 border-dashed">
                                    <span className={`px-2 py-1 bg-black text-white text-xs font-bold font-pixel-header uppercase`}>
                                        {event.country}
                                    </span>
                                    <div className={`flex items-center space-x-1 border border-black px-2 py-0.5 bg-retro-light-gray`}>
                                        <Users size={12} className="text-black" />
                                        <span className="text-xs font-bold text-black">{event.expected_reach}+</span>
                                    </div>
                                </div>
                                <h3 className={`text-lg font-bold text-black mb-2 font-pixel-header uppercase truncate ${colorClass}`}>{event.title}</h3>
                                <p className="text-sm text-black font-bold leading-relaxed font-pixel-body">
                                    {event.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Info Overlay */}
                <div className="mt-8 bg-retro-blue border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
                    {/* Dithering pattern overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Calendar size={24} className="text-retro-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 font-pixel-header uppercase text-shadow-retro">To Be Planned</h3>
                        <p className="text-white font-bold text-sm uppercase max-w-md mx-auto bg-black p-2 border border-white">
                            Specific local events will be designed collaboratively by participants during the exchange (October-December 2026)
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-black border-4 border-retro-gray p-8 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2 border-b-4 border-retro-green pb-2 w-fit">
                    <TrendingUp size={28} className="text-retro-green" />
                    <span className="font-pixel-header text-retro-white">Total Impact Reach</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(impactMetrics).map(([key, value], idx) => (
                        <div key={key} className="bg-retro-gray/20 border border-retro-gray p-4">
                            <p className="text-retro-yellow text-xs font-bold mb-2 uppercase tracking-wide bg-black w-fit px-1">
                                {key.replace('_', ' ')}
                            </p>
                            <p className="text-xl font-bold font-pixel-body">{value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FollowUpPage;
