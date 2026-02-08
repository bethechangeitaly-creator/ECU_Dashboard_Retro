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
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">The Journey</h1>
                    <p className="text-slate-600 mt-1">7 Days • 7 Themes • 1 Body</p>
                </div>
            </div>

            {/* Day Selector Stepper */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between gap-2 overflow-x-auto">
                    {days.map((day, index) => (
                        <button
                            key={day.day}
                            onClick={() => goToDay(index)}
                            className={`flex-1 min-w-[120px] p-4 rounded-xl border-2 transition-all ${index === currentDayIndex
                                ? `border-${day.color}-500 bg-${day.color}-50 shadow-md`
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            <div className="text-center">
                                <div className={`text-xs font-bold uppercase tracking-wider ${index === currentDayIndex ? `text-${day.color}-600` : 'text-slate-400'
                                    }`}>
                                    Day {day.day}
                                </div>
                                <div className={`text-sm font-semibold mt-1 ${index === currentDayIndex ? 'text-slate-900' : 'text-slate-600'
                                    }`}>
                                    {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'][index]}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Day Detail Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentDay.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <DayDetailView day={currentDay} />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
                <button
                    onClick={prevDay}
                    disabled={currentDayIndex === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${currentDayIndex === 0
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600'
                        }`}
                >
                    <ChevronLeft size={20} />
                    Previous Day
                </button>
                <button
                    onClick={nextDay}
                    disabled={currentDayIndex === days.length - 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${currentDayIndex === days.length - 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                        }`}
                >
                    Next Day
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

// Day Detail View Component
const DayDetailView = ({ day }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const color = day.color || 'indigo';

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className={`bg-${color}-50 border-b border-${color}-100 p-8`}>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 bg-white text-${color}-600 text-sm font-bold rounded-lg shadow-sm uppercase tracking-wide`}>
                                Day {day.day}
                            </span>
                            <span className="text-slate-500 font-medium">{day.date}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{day.theme}</h2>
                        <p className={`text-${color}-700 font-semibold text-lg`}>{day.body_part}</p>
                    </div>
                    <div className={`bg-gradient-to-br from-${color}-500 to-${color}-600 p-4 rounded-2xl shadow-lg`}>
                        <Calendar size={40} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200">
                <div className="flex overflow-x-auto">
                    {['overview', 'activities', 'methods', 'impact'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-4 font-semibold text-sm uppercase tracking-wide transition-all border-b-2 ${activeTab === tab
                                ? `border-${color}-500 text-${color}-600`
                                : 'border-transparent text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
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
    <div className="space-y-8">
        {/* Metaphor Explanation */}
        {day.metaphor_explanation && (
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Globe size={18} className="text-indigo-500" />
                    The Metaphor
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg italic">
                    "{day.metaphor_explanation}"
                </p>
            </div>
        )}

        {/* Theme Description */}
        <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Theme Description</h3>
            <p className="text-slate-700 leading-relaxed text-lg">{day.description}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Key Objectives */}
            <div className="bg-white rounded-xl p-6 border-2 border-indigo-100">
                <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target size={18} />
                    Key Objectives
                </h3>
                <ul className="space-y-3">
                    {(day.key_objectives || []).map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-indigo-600">{i + 1}</span>
                            </div>
                            <span className="text-slate-700 leading-relaxed">{obj}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lead Partner */}
            <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Users size={18} />
                    Lead Partner
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <span className="text-2xl">{getCountryFlag(day.lead_partner?.country)}</span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-lg">{day.lead_partner?.organization}</p>
                            <p className="text-sm text-slate-600">{day.lead_partner?.country} • Facilitating Day {day.day}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Youthpass Competencies */}
        {day.youthpass_competencies && day.youthpass_competencies.length > 0 && (
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">
                    Youthpass Competencies Developed
                </h3>
                <div className="flex flex-wrap gap-2">
                    {day.youthpass_competencies.map((comp, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white text-amber-700 text-sm font-semibold rounded-lg border border-amber-200">
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
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-indigo-300 transition-all">
                {/* Session Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-slate-500">{session.learning_type}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{session.title}</h4>
                    </div>
                    <button
                        onClick={() => toggleSession(index)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors"
                    >
                        {isExpanded ? 'Hide Details' : 'View Details'}
                    </button>
                </div>

                {/* Session Quick Info */}
                <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-emerald-600" />
                        <span className="text-slate-600">{session.facilitator}</span>
                    </div>
                    {session.methods && (
                        <div className="flex items-center gap-1.5">
                            <Target size={16} className="text-violet-600" />
                            <span className="text-slate-600">{session.methods.slice(0, 2).join(', ')}</span>
                            {session.methods.length > 2 && <span className="text-slate-400">+{session.methods.length - 2} more</span>}
                        </div>
                    )}
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 leading-relaxed mb-4">{session.description}</p>

                        {session.methods && session.methods.length > 0 && (
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Methods Used:</p>
                                <div className="flex flex-wrap gap-2">
                                    {session.methods.map((method, i) => (
                                        <span key={i} className="px-2 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded border border-violet-200">
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
        <div className="space-y-6">
            {/* Morning Sessions */}
            {amSessions.length > 0 && (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                            <Sun className="text-amber-600" size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-amber-700 text-lg">Morning Sessions</h3>
                            <p className="text-sm text-slate-500">{amSessions.length} activities</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {amSessions.map((session, i) => (
                            <SessionCard key={`am-${i}`} session={session} index={`am-${i}`} />
                        ))}
                    </div>
                </div>
            )}

            {/* Afternoon/Evening Sessions */}
            {pmSessions.length > 0 && (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                            <Moon className="text-indigo-600" size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-indigo-700 text-lg">Afternoon & Evening Sessions</h3>
                            <p className="text-sm text-slate-500">{pmSessions.length} activities</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {pmSessions.map((session, i) => (
                            <SessionCard key={`pm-${i}`} session={session} index={`pm-${i}`} />
                        ))}
                    </div>
                </div>
            )}

            {/* Session Count Summary */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-center text-slate-600">
                    <span className="font-bold text-slate-900">{(day.sessions || []).length} sessions</span> carefully designed using non-formal education methodologies
                </p>
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
        'Art-Based': 'rose',
        'Participatory': 'emerald',
        'Simulation': 'amber',
        'Experiential': 'blue',
        'Reflective': 'violet',
        'Digital': 'cyan',
        'Mind-Body': 'pink',
        'Other NFE': 'slate'
    };

    return (
        <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-sm font-bold text-indigo-700 uppercase tracking-wider mb-2">Non-Formal Education Methods</h3>
                <p className="text-indigo-900">
                    This day utilizes <span className="font-bold">{allMethods.length} unique NFE methodologies</span> across {(day.sessions || []).length} sessions
                </p>
            </div>

            {/* Methods by Category */}
            {Object.entries(methodsByCategory).map(([category, methods]) => (
                <div key={category} className="space-y-3">
                    <h4 className={`text-sm font-bold text-${categoryColors[category]}-600 uppercase tracking-wider flex items-center gap-2`}>
                        <div className={`w-3 h-3 rounded-full bg-${categoryColors[category]}-500`}></div>
                        {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {methods.map((method, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 border-2 border-slate-200 hover:border-indigo-300 transition-all">
                                <p className="font-semibold text-slate-900 mb-2">{method.name}</p>
                                <p className="text-xs text-slate-500">
                                    Used in: <span className="text-slate-700 font-medium">{method.usedIn[0]}</span>
                                    {method.usedIn.length > 1 && <span className="ml-1">+{method.usedIn.length - 1} more</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Link to Methodology Hub */}
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6 border border-violet-200">
                <h4 className="font-bold text-violet-900 mb-2">Want to learn more?</h4>
                <p className="text-violet-700 text-sm mb-4">
                    Visit the Methodology Hub for detailed descriptions, learning theories, and best practices for each method.
                </p>
                <button
                    onClick={() => navigate('/methodology')}
                    className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                >
                    Explore Methodology Hub →
                </button>
            </div>
        </div>
    );
};

const ImpactTab = ({ day }) => (
    <div className="space-y-6">
        {/* EU Youth Goal */}
        {day.eu_youth_goal && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">#{day.eu_youth_goal.number}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                            European Youth Goal Addressed
                        </h3>
                        <p className="text-xl font-bold text-blue-900 mb-2">{day.eu_youth_goal.title}</p>
                        <p className="text-blue-700 leading-relaxed">{day.eu_youth_goal.connection}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Erasmus+ Priorities Grid */}
        <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Erasmus+ Horizontal Priorities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white rounded-xl p-4 border-2 border-emerald-200 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <span className="text-xl">🌍</span>
                    </div>
                    <p className="font-semibold text-emerald-900 text-sm">Inclusion & Diversity</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-green-200 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-green-100 flex items-center justify-center">
                        <span className="text-xl">♻️</span>
                    </div>
                    <p className="font-semibold text-green-900 text-sm">Environment & Sustainability</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-cyan-200 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-cyan-100 flex items-center justify-center">
                        <span className="text-xl">💻</span>
                    </div>
                    <p className="font-semibold text-cyan-900 text-sm">Digital Transformation</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-violet-200 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-violet-100 flex items-center justify-center">
                        <span className="text-xl">🗳️</span>
                    </div>
                    <p className="font-semibold text-violet-900 text-sm">Participation in Democracy</p>
                </div>
            </div>
        </div>

        {/* Learning Outcomes / Youthpass */}
        {day.youthpass_competencies && day.youthpass_competencies.length > 0 && (
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target size={18} />
                    Youthpass Competencies Developed
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {day.youthpass_competencies.map((comp, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-amber-200">
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-white">{i + 1}</span>
                            </div>
                            <span className="text-slate-800 font-medium">{comp}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Key Objectives Recap */}
        {day.key_objectives && day.key_objectives.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Day Objectives Recap</h3>
                <ul className="space-y-2">
                    {day.key_objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span>{obj}</span>
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
