import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectData from '../data/ecu_project_data.json';
import { ChevronLeft, ChevronRight, Calendar, Users, Target, Globe, Sun, Moon } from 'lucide-react';

/**
 * The Journey Page - 7-Day Interactive Explorer
 * Core module showing the full program day-by-day
 */
const JourneyPage = () => {
    const navigate = useNavigate();
    const { dayId } = useParams();
    const days = projectData.days || projectData.project?.timetable || [];

    // Color mapping for each day (7 unique retro colors)
    const dayColors = [
        { bg: 'bg-retro-red', border: 'border-retro-red', text: 'text-white' },      // Day 1
        { bg: 'bg-retro-orange', border: 'border-retro-orange', text: 'text-white' }, // Day 2
        { bg: 'bg-retro-yellow', border: 'border-retro-yellow', text: 'text-black' }, // Day 3
        { bg: 'bg-retro-green', border: 'border-retro-green', text: 'text-white' },   // Day 4
        { bg: 'bg-retro-cyan', border: 'border-retro-cyan', text: 'text-black' },     // Day 5
        { bg: 'bg-retro-blue', border: 'border-retro-blue', text: 'text-white' },     // Day 6
        { bg: 'bg-retro-magenta', border: 'border-retro-magenta', text: 'text-white' } // Day 7
    ];

    // If no day is selected, show the first day
    const currentDayIndex = dayId
        ? days.findIndex(d => d.day === parseInt(dayId))
        : 0;

    const currentDay = days[currentDayIndex];

    const goToDay = (index) => {
        navigate(`/journey/${days[index].day}`);
    };

    const nextDay = () => {
        if (currentDayIndex < days.length - 1) {
            goToDay(currentDayIndex + 1);
        }
    };

    const prevDay = () => {
        if (currentDayIndex > 0) {
            goToDay(currentDayIndex - 1);
        }
    };

    return (
        <div className="space-y-6 font-pixel-body">
            {/* Page Header */}
            {/* Retro Box Header: THE JOURNEY */}
            <div className="bg-[#B5F288] border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-3 mb-6 relative">
                <div className="border-2 border-retro-gray p-2 flex flex-col items-center text-center">
                    <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold text-black font-pixel-header uppercase tracking-widest leading-none mb-3">
                        The Journey
                    </h1>
                    <div className="bg-black px-4 py-1.5 border-2 border-retro-cyan shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
                        <p className="text-retro-cyan text-xs xs:text-sm lg:text-base font-bold uppercase tracking-widest leading-none">
                            &gt; 7 Days • 7 Themes • 1 Body
                        </p>
                    </div>
                </div>
            </div>

            {/* Day Selector Stepper */}
            <div className="bg-retro-black border-4 border-retro-gray p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between gap-2 overflow-x-auto custom-scrollbar pb-2">
                    {days.map((day, index) => {
                        const dayColor = dayColors[index] || dayColors[0];
                        return (
                            <button
                                key={day.day}
                                onClick={() => goToDay(index)}
                                className={`flex-1 min-w-[120px] p-2 border-2 transition-all relative ${index === currentDayIndex
                                    ? `${dayColor.bg} ${dayColor.border} -translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
                                    : 'bg-retro-gray border-black hover:bg-retro-light-gray hover:border-white text-gray-400 hover:text-black'
                                    }`}
                            >
                                <div className="text-center">
                                    <div className={`text-xs font-bold uppercase tracking-wider font-pixel-body ${index === currentDayIndex ? dayColor.text : 'text-black'
                                        }`}>
                                        Day {day.day}
                                    </div>
                                    <div className={`text-sm font-bold mt-1 font-pixel-header uppercase ${index === currentDayIndex ? dayColor.text : 'text-black/50'
                                        }`}>
                                        {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'][index]}
                                    </div>
                                </div>
                                {index === currentDayIndex && (
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-black"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Day Detail Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentDay.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2, ease: "steps(4)" }}
                >
                    <DayDetailView day={currentDay} />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-end pt-4 border-t-4 border-retro-gray border-dashed gap-2">
                <button
                    onClick={prevDay}
                    disabled={currentDayIndex === 0}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase font-pixel-header transition-all border-2 ${currentDayIndex === 0
                        ? 'bg-retro-gray text-retro-dark-gray border-retro-dark-gray cursor-not-allowed opacity-50'
                        : 'bg-white text-black border-black hover:bg-retro-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-px active:shadow-none'
                        }`}
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    onClick={nextDay}
                    disabled={currentDayIndex === days.length - 1}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase font-pixel-header transition-all border-2 ${currentDayIndex === days.length - 1
                        ? 'bg-retro-gray text-retro-dark-gray border-retro-dark-gray cursor-not-allowed opacity-50'
                        : 'bg-retro-blue text-white border-white hover:bg-retro-cyan hover:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-px active:shadow-none'
                        }`}
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

// Day Detail View Component
const DayDetailView = ({ day }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const color = day.color || 'indigo';

    // Color mapping for each day (same as in JourneyPage)
    const dayColors = [
        { bg: 'bg-retro-red', border: 'border-retro-red', text: 'text-white' },
        { bg: 'bg-retro-orange', border: 'border-retro-orange', text: 'text-white' },
        { bg: 'bg-retro-yellow', border: 'border-retro-yellow', text: 'text-black' },
        { bg: 'bg-retro-green', border: 'border-retro-green', text: 'text-white' },
        { bg: 'bg-retro-cyan', border: 'border-retro-cyan', text: 'text-black' },
        { bg: 'bg-retro-blue', border: 'border-retro-blue', text: 'text-white' },
        { bg: 'bg-retro-magenta', border: 'border-retro-magenta', text: 'text-white' }
    ];
    const currentDayColor = dayColors[day.day - 1] || dayColors[0];

    const tabBorders = {
        'overview': 'border-retro-blue',
        'activities': 'border-retro-green',
        'methods': 'border-retro-orange',
        'impact': 'border-retro-magenta'
    };

    return (
        <div className="bg-retro-white border-4 border-retro-gray shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            {/* Header Redesigned to match ContentSlider */}
            <div className={`${currentDayColor.bg} border-b-4 border-black pt-0 pb-6 px-4 xs:px-6 sm:p-8 relative overflow-hidden min-h-[180px] flex flex-col justify-start m-0`}>
                {/* High-visibility Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
                </div>

                {/* Scanlines Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}>
                </div>

                <div className="relative z-10 space-y-6">
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className={`px-4 py-1.5 border-2 border-white ${currentDayColor.bg} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]`}>
                            <span className="text-sm xs:text-base font-bold text-white uppercase tracking-widest leading-none">Day {day.day}</span>
                        </div>
                        <div className="px-4 py-1.5 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                            <span className="text-sm xs:text-base font-bold text-black uppercase tracking-widest leading-none">{day.date}</span>
                        </div>
                    </div>

                    {/* Theme Title */}
                    <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tighter leading-none uppercase break-words hyphens-auto overflow-hidden retro-shadow font-pixel-header">
                        {day.theme}
                    </h2>

                    {/* Body Part metadata */}
                    <div className="flex items-center gap-3 border-l-4 border-white pl-4">
                        <span className="text-white text-base xs:text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                            <span className="animate-blink">&gt;</span> {day.body_part}
                        </span>
                    </div>
                </div>

                {/* Optional Icon/Calendar Overlay */}
                <div className="absolute top-4 right-4 opacity-20 hidden sm:block">
                    <Calendar size={80} className="text-white" strokeWidth={1} />
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b-4 border-retro-gray bg-retro-gray px-4 pt-4 flex gap-2 overflow-x-auto">
                {['overview', 'activities', 'methods', 'impact'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-bold text-sm uppercase tracking-wide transition-all border-t-4 border-l-4 border-r-4 ${activeTab === tab
                            ? `bg-retro-white border-retro-gray text-black -mb-1 pb-3 z-10 relative`
                            : 'bg-retro-dark-gray border-black text-retro-light-gray hover:bg-retro-light-gray hover:text-black mt-2'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8 min-h-[400px]">
                {activeTab === 'overview' && <OverviewTab day={day} />}
                {activeTab === 'activities' && <ActivitiesTab day={day} />}
                {activeTab === 'methods' && <MethodsTab day={day} />}
                {activeTab === 'impact' && <ImpactTab day={day} />}
            </div>
        </div>
    );
};

// Tab Components
const OverviewTab = ({ day }) => (
    <div className="space-y-8 animate-in fade-in duration-300">
        {/* Metaphor Explanation */}
        {day.metaphor_explanation && (
            <div className="bg-retro-cyan border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-2 bg-white inline-block px-2 border-2 border-black">
                    <Globe size={18} />
                    The Metaphor
                </h3>
                <p className="text-black leading-relaxed text-lg font-bold font-pixel-body">
                    "{day.metaphor_explanation}"
                </p>
            </div>
        )}

        {/* Theme Description */}
        <div>
            <h3 className="text-sm font-bold text-retro-gray uppercase tracking-wider mb-3 bg-black text-white inline-block px-2 py-1">Theme Description</h3>
            <p className="text-black leading-relaxed text-lg font-bold border-l-4 border-black pl-4">{day.description}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Key Objectives */}
            <div className="bg-white p-6 border-4 border-retro-blue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-sm font-bold text-white bg-retro-blue inline-block px-2 py-1 uppercase tracking-wider mb-4 border-2 border-black">
                    Key Objectives
                </h3>
                <ul className="space-y-3">
                    {(day.key_objectives || []).map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-retro-blue text-white font-bold flex items-center justify-center border-2 border-black flex-shrink-0">
                                <span className="text-xs">{i + 1}</span>
                            </div>
                            <span className="text-black font-bold leading-relaxed break-words min-w-0">{obj}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lead Partner */}
            <div className="bg-white p-6 border-4 border-retro-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-sm font-bold text-white bg-retro-green inline-block px-2 py-1 uppercase tracking-wider mb-4 border-2 border-black">
                    Lead Partner
                </h3>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-transparent">
                        <span className="text-5xl filter drop-shadow-sm">{getCountryFlag(day.lead_partner?.country)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-black text-xs xs:text-sm sm:text-lg md:text-xl font-pixel-header uppercase leading-tight mb-1 break-words overflow-hidden">
                            {day.lead_partner?.organization}
                        </p>
                        <p className="text-xs sm:text-base text-retro-gray font-bold">{day.lead_partner?.country}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Youthpass Competencies */}
        {day.youthpass_competencies && day.youthpass_competencies.length > 0 && (
            <div className="bg-retro-yellow/20 p-6 border-4 border-retro-orange border-dashed">
                <h3 className="text-sm font-bold text-black bg-retro-orange inline-block px-2 py-1 uppercase tracking-wider mb-3 border-2 border-black">
                    Youthpass Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                    {day.youthpass_competencies.map((comp, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white text-black text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all cursor-default">
                            {comp}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const ActivitiesTab = ({ day }) => {
    const [expandedSessions, setExpandedSessions] = useState({});

    const toggleSession = (index) => {
        setExpandedSessions(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Group sessions by period (AM/PM)
    const amSessions = (day.sessions || []).filter(s => s.period === 'AM');
    const pmSessions = (day.sessions || []).filter(s => s.period === 'PM');

    const SessionCard = ({ session, index }) => {
        const isExpanded = expandedSessions[index];

        return (
            <div className={`bg-white p-4 border-4 border-black hover:border-retro-blue transition-all mb-4 ${isExpanded ? 'shadow-[4px_4px_0px_0px_#000]' : 'shadow-[2px_2px_0px_0px_#aaa]'}`}>
                {/* Session Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold bg-black text-white px-1 font-pixel-body uppercase">{session.learning_type}</span>
                        </div>
                        <h4 className="text-lg font-bold text-black font-pixel-header uppercase break-words leading-tight hyphens-auto">{session.title}</h4>
                    </div>
                    <button
                        onClick={() => toggleSession(index)}
                        className="px-2 py-1 bg-retro-light-gray border-2 border-black text-xs font-bold uppercase hover:bg-white hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-px active:shadow-none"
                    >
                        {isExpanded ? '[-]' : '[+]'}
                    </button>
                </div>

                {/* Session Quick Info */}
                <div className="flex flex-wrap gap-3 text-sm mt-2 border-t-2 border-dashed border-gray-300 pt-2">
                    <div className="flex items-center gap-1.5 font-bold text-retro-dark-gray">
                        <span className="text-retro-green">●</span>
                        <span>{session.facilitator}</span>
                    </div>
                    {session.methods && (
                        <div className="flex items-center gap-1.5 font-bold text-retro-dark-gray">
                            <span className="text-retro-magenta">●</span>
                            <span>{session.methods.slice(0, 2).join(', ')}</span>
                            {session.methods.length > 2 && <span className="text-retro-gray">+{session.methods.length - 2}</span>}
                        </div>
                    )}
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                    <div className="mt-4 pt-4 border-t-2 border-black bg-retro-light-gray/20 -mx-4 px-4 pb-2">
                        <p className="text-black leading-relaxed mb-4 font-bold font-pixel-body">{session.description}</p>

                        {session.methods && session.methods.length > 0 && (
                            <div>
                                <p className="text-xs font-bold text-retro-gray uppercase mb-2">[ METHODS ]</p>
                                <div className="flex flex-wrap gap-2">
                                    {session.methods.map((method, i) => (
                                        <span key={i} className="px-2 py-1 bg-white text-black text-xs font-bold border border-black shadow-[1px_1px_0px_0px_#000]">
                                            {method}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Morning Sessions */}
            {amSessions.length > 0 && (
                <div className="border-l-4 border-retro-yellow pl-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-retro-yellow border-2 border-black flex items-center justify-center">
                            <Sun className="text-black" size={20} />
                        </div>
                        <h3 className="font-bold text-black text-lg font-pixel-header uppercase">Morning</h3>
                    </div>
                    <div>
                        {amSessions.map((session, i) => (
                            <SessionCard key={`am-${i}`} session={session} index={`am-${i}`} />
                        ))}
                    </div>
                </div>
            )}

            {/* Afternoon/Evening Sessions */}
            {pmSessions.length > 0 && (
                <div className="border-l-4 border-retro-blue pl-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-retro-blue border-2 border-black flex items-center justify-center">
                            <Moon className="text-white" size={20} />
                        </div>
                        <h3 className="font-bold text-black text-lg font-pixel-header uppercase">Afternoon</h3>
                    </div>
                    <div>
                        {pmSessions.map((session, i) => (
                            <SessionCard key={`pm-${i}`} session={session} index={`pm-${i}`} />
                        ))}
                    </div>
                </div>
            )}

            <div className="bg-black text-retro-green p-2 font-pixel-body text-center text-xs uppercase border-2 border-retro-gray">
                &gt; Total Sessions: {(day.sessions || []).length} _
            </div>
        </div>
    );
};

const MethodsTab = ({ day }) => {
    const navigate = useNavigate();

    // Extract all unique methods from all sessions
    const allMethods = (day.sessions || []).reduce((acc, session) => {
        if (session.methods) {
            session.methods.forEach(method => {
                if (!acc.some(m => m.name === method)) {
                    // Find which session uses this method
                    const usedIn = (day.sessions || []).filter(s => s.methods?.includes(method)).map(s => s.title);
                    acc.push({
                        name: method,
                        usedIn: usedIn
                    });
                }
            });
        }
        return acc;
    }, []);

    // Categorize methods (simple heuristic based on keywords)
    const categorizeMethod = (methodName) => {
        const lower = methodName.toLowerCase();
        if (lower.includes('mapping') || lower.includes('art') || lower.includes('visual')) return 'Art-Based';
        if (lower.includes('circle') || lower.includes('café') || lower.includes('world')) return 'Participatory';
        if (lower.includes('game') || lower.includes('simulation') || lower.includes('role')) return 'Simulation';
        if (lower.includes('outdoor') || lower.includes('trek') || lower.includes('visit')) return 'Experiential';
        if (lower.includes('reflection') || lower.includes('debriefing')) return 'Reflective';
        if (lower.includes('digital') || lower.includes('online')) return 'Digital';
        if (lower.includes('meditation') || lower.includes('mindfulness') || lower.includes('body')) return 'Mind-Body';
        return 'Other NFE';
    };

    // Group methods by category
    const methodsByCategory = allMethods.reduce((acc, method) => {
        const category = categorizeMethod(method.name);
        if (!acc[category]) acc[category] = [];
        acc[category].push(method);
        return acc;
    }, {});

    const categoryColors = {
        'Art-Based': 'text-retro-red',
        'Participatory': 'text-retro-green',
        'Simulation': 'text-retro-orange',
        'Experiential': 'text-retro-blue',
        'Reflective': 'text-retro-magenta',
        'Digital': 'text-retro-cyan',
        'Mind-Body': 'text-pink-500',
        'Other NFE': 'text-retro-gray'
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-retro-blue/10 p-4 border-2 border-retro-blue border-dashed">
                <h3 className="text-sm font-bold text-retro-blue uppercase tracking-wider mb-2">[ SYSTEM_INFO ]</h3>
                <p className="text-black font-bold font-pixel-body">
                    Active Methodologies: <span className="bg-retro-blue text-white px-2">{allMethods.length}</span>
                </p>
            </div>

            {/* Methods by Category */}
            {Object.entries(methodsByCategory).map(([category, methods]) => (
                <div key={category} className="space-y-3">
                    <h4 className={`text-sm font-bold ${categoryColors[category]} uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1`}>
                        <div className={`w-3 h-3 bg-black`}></div>
                        {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {methods.map((method, i) => (
                            <div key={i} className="bg-white p-4 border-2 border-black hover:bg-yellow-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-y-1">
                                <p className="font-bold text-black mb-2 font-pixel-body decoration-2 underline">{method.name}</p>
                                <div className="text-xs text-retro-gray font-bold">
                                    <span className="bg-black text-white px-1 mr-1">USED IN:</span>
                                    {method.usedIn[0]}
                                    {method.usedIn.length > 1 && <span className="ml-1">+{method.usedIn.length - 1}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Link to Methodology Hub */}
            <div className="bg-black p-6 border-4 border-retro-magenta shadow-[8px_8px_0px_0px_rgba(255,0,255,0.2)]">
                <h4 className="font-bold text-retro-magenta mb-2 font-pixel-header uppercase">Want to learn more?</h4>
                <p className="text-white text-sm mb-4 font-bold font-pixel-body">
                    &gt; Access the central Methodology Hub database...
                </p>
                <button
                    onClick={() => navigate('/methodology')}
                    className="px-4 py-2 bg-retro-magenta text-white font-bold border-2 border-white hover:bg-white hover:text-retro-magenta transition-colors uppercase font-pixel-body"
                >
                    [ EXECUTE: GOTO_METHODOLOGY ]
                </button>
            </div>
        </div>
    );
};

const ImpactTab = ({ day }) => (
    <div className="space-y-6 animate-in fade-in duration-300">
        {/* EU Youth Goal */}
        {day.eu_youth_goal && (
            <div className="bg-retro-blue/10 p-6 border-4 border-retro-blue">
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-retro-blue flex items-center justify-center flex-shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                        <span className="text-lg font-bold text-white font-pixel-header">#{day.eu_youth_goal.number}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-retro-blue uppercase tracking-wider mb-2 bg-white inline-block px-1 border border-black">
                            European Youth Goal
                        </h3>
                        <p className="text-xl font-bold text-black mb-2 font-pixel-header uppercase break-words leading-tight hyphens-auto">{day.eu_youth_goal.title}</p>
                        <p className="text-black font-bold font-pixel-body border-l-4 border-retro-blue pl-4">{day.eu_youth_goal.connection}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Erasmus+ Priorities Grid */}
        <div>
            <h3 className="text-sm font-bold text-retro-gray uppercase tracking-wider mb-4 border-b-2 border-retro-gray inline-block">Horizontal Priorities</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 border-2 border-black text-center shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">🌍</div>
                    <p className="font-bold text-black text-sm uppercase tracking-tight">Inclusion & Diversity</p>
                </div>
                <div className="bg-white p-6 border-2 border-black text-center shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">♻️</div>
                    <p className="font-bold text-black text-sm uppercase tracking-tight">Sustainability</p>
                </div>
                <div className="bg-white p-6 border-2 border-black text-center shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">💻</div>
                    <p className="font-bold text-black text-sm uppercase tracking-tight break-words">Digital Transf.</p>
                </div>
                <div className="bg-white p-6 border-2 border-black text-center shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">🗳️</div>
                    <p className="font-bold text-black text-sm uppercase tracking-tight break-words">Democracy</p>
                </div>
            </div>
        </div>

        {/* Youthpass */}
        {day.youthpass_competencies && day.youthpass_competencies.length > 0 && (
            <div className="bg-retro-orange/20 p-6 border-4 border-retro-orange shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                <h3 className="text-sm font-bold text-black bg-retro-orange inline-block px-2 py-1 uppercase tracking-wider mb-4 border-2 border-black">
                    Competencies
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {day.youthpass_competencies.map((comp, i) => (
                        <div key={i} className="flex flex-col xs:flex-row items-start xs:items-center gap-4 bg-white p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-sm font-bold">{i + 1}</span>
                            </div>
                            <span className="text-black font-bold text-sm xs:text-base uppercase tracking-tight leading-tight break-words">{comp}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Key Objectives Recap */}
        {day.key_objectives && day.key_objectives.length > 0 && (
            <div className="bg-retro-light-gray p-6 border-4 border-retro-gray">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4 border-b-2 border-black inline-block">Day Checklist</h3>
                <ul className="space-y-2">
                    {day.key_objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-black font-pixel-body">
                            <span className="text-retro-green font-bold">[OK]</span>
                            <span className="font-bold uppercase text-xs pt-1">{obj}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

// Helper function for country flags
const getCountryFlag = (countryCode) => {
    const flags = {
        'IT': '🇮🇹',
        'DE': '🇩🇪',
        'MK': '🇲🇰',
        'GR': '🇬🇷',
        'FR': '🇫🇷',
        'PT': '🇵🇹',
        'RO': '🇷🇴',
        'TR': '🇹🇷'
    };
    return flags[countryCode] || '🌍';
};


export default JourneyPage;
