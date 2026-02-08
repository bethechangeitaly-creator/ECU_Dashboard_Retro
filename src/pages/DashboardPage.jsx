import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from '../data/ecu_project_data.json';
import StatsCard from '../components/StatsCard';
import ContentSlider from '../components/ContentSlider';
import {
    Users, Globe, Calendar, Heart, Target, TrendingUp, MapPin,
    Sparkles, BookOpen, Rocket, ArrowRight, ExternalLink, Brain
} from 'lucide-react';

/**
 * Dashboard Home Page - Full Implementation
 * Comprehensive overview with all sections properly designed
 */
const DashboardPage = () => {
    const navigate = useNavigate();
    const stats = projectData.project?.stats || {};
    const days = projectData.days || projectData.project?.timetable || [];
    const partners = projectData.partners || [];

    // Countdown Logic
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
        const targetDate = new Date('2026-09-15T00:00:00');

        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const CountdownUnit = ({ value, label }) => (
        <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 min-w-[70px]">
            <span className="block text-xl font-bold font-mono">{String(value).padStart(2, '0')}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Hero Section - Project Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                            Esplorando il Corpo Umano
                        </h1>
                        <p className="text-xl text-white/90 mb-6">
                            Youth Exchange • Erasmus+ KA152 • September 2026
                        </p>
                        <p className="text-white/80 max-w-2xl leading-relaxed mb-6">
                            A transformative 7-day Youth Exchange using the human body as a metaphor
                            to address mental health, misinformation, mobility, and sustainability through
                            non-formal education.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                                🌍 8 Countries
                            </span>
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                                👥 40 Participants
                            </span>
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                                📅 7 Days in Sicily
                            </span>
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                                💜 50% Fewer Opportunities
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                            <Heart size={64} className="text-white" fill="white" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Participants"
                    value={stats.total_participants || 40}
                    icon={Users}
                    color="bg-indigo-500"
                    subtitle="Youth + Leaders"
                />
                <StatsCard
                    title="Countries"
                    value={stats.partner_countries || 8}
                    icon={Globe}
                    color="bg-emerald-500"
                    subtitle="European Partners"
                />
                <StatsCard
                    title="Duration"
                    value={`${stats.days_duration || 7} Days`}
                    icon={Calendar}
                    color="bg-amber-500"
                    subtitle="Sept 15-21, 2026"
                />
                <StatsCard
                    title="Inclusion"
                    value="50%"
                    icon={Heart}
                    color="bg-rose-500"
                    subtitle="Fewer Opportunities"
                />
            </div>

            {/* Main Content - Journey Preview + Partnership */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Journey Slider (2/3) */}
                <div className="lg:col-span-2 flex flex-col gap-6 h-full">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The 7-Day Journey</h2>
                                <p className="text-slate-600 dark:text-slate-400">Explore the body metaphor program</p>
                            </div>
                            <button
                                onClick={() => navigate('/journey')}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                            >
                                View All Days
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <ContentSlider days={days} onExplore={(day) => navigate(`/journey/${day.day}`)} />
                    </div>

                    {/* Countdown / Next Up Card */}
                    <div className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-lg min-h-[140px] gap-4">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-1 flex items-center justify-center md:justify-start gap-2">
                                <Rocket className="text-amber-400" size={20} />
                                Coming Soon
                            </h3>
                            <p className="text-slate-300 text-sm">September 15, 2026 • Sicily, Italy</p>
                        </div>
                        <div className="relative z-10 flex flex-wrap justify-center gap-3 text-center">
                            <CountdownUnit value={timeLeft.days} label="Days" />
                            <CountdownUnit value={timeLeft.hours} label="Hours" />
                            <CountdownUnit value={timeLeft.minutes} label="Mins" />
                            <CountdownUnit value={timeLeft.seconds} label="Secs" />
                        </div>
                    </div>
                </div>

                {/* Right: Partnership Network (1/3) */}
                <div className="lg:col-span-1 h-full">
                    <PartnershipNetwork />
                </div>
            </div>

            {/* Project Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Project Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HighlightCard
                        icon={Sparkles}
                        title="Body Metaphor"
                        description="Each day explores a body part as a metaphor for societal challenges and personal growth."
                        color="purple"
                        onClick={() => navigate('/dna')}
                    />
                    <HighlightCard
                        icon={Target}
                        title="EU Youth Goals"
                        description="Aligned with EU Youth Strategy pillars: ENGAGE, CONNECT, and EMPOWER young people."
                        color="indigo"
                        onClick={() => navigate('/impact', { state: { activeTab: 'goals' } })}
                    />
                    <HighlightCard
                        icon={Globe}
                        title="Multiplier Events"
                        description="8 local events reaching 160+ people, extending the project's impact across Europe."
                        color="emerald"
                        onClick={() => navigate('/followup')}
                    />
                </div>
            </div>

            {/* Quick Access Modules */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore More</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <QuickModuleCard
                        title="Impact Lab"
                        description="Objectives & Metrics"
                        icon={TrendingUp}
                        href="/impact"
                        color="indigo"
                    />
                    <QuickModuleCard
                        title="Project DNA"
                        description="Genesis & Philosophy"
                        icon={Brain}
                        href="/dna"
                        color="pink"
                    />
                    <QuickModuleCard
                        title="Methodology Hub"
                        description="NFE Methods Library"
                        icon={BookOpen}
                        href="/methodology"
                        color="purple"
                    />
                    <QuickModuleCard
                        title="Follow-Up"
                        description="Sustainability Plan"
                        icon={Rocket}
                        href="/followup"
                        color="rose"
                    />
                </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-start gap-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                        <MapPin size={40} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Venue: Furnari, Sicily</h3>
                        <p className="text-white/90 leading-relaxed mb-4">
                            The Youth Exchange will take place at <strong>Tindari Village</strong> in Furnari,
                            Messina, Sicily, Italy. A beautiful coastal location providing the perfect setting
                            for learning, connection, and transformation.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <p className="text-sm font-semibold">Arrival Day</p>
                                <p className="text-lg">September 14, 2026</p>
                            </div>
                            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <p className="text-sm font-semibold">Departure Day</p>
                                <p className="text-lg">September 22, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Partnership Network Component (FIXED)
const PartnershipNetwork = () => {
    const partners = [
        { country: 'IT', flag: '🇮🇹', org: 'Be The Change', role: 'Coordinator' },
        { country: 'DE', flag: '🇩🇪', org: 'Future Makers Alliance', role: 'Partner' },
        { country: 'MK', flag: '🇲🇰', org: 'Level Up', role: 'Partner' },
        { country: 'GR', flag: '🇬🇷', org: 'DefiniTely Maybe', role: 'Partner' },
        { country: 'FR', flag: '🇫🇷', org: 'Autarcie Productions', role: 'Partner' },
        { country: 'PT', flag: '🇵🇹', org: 'Autonomia e Descoberta', role: 'Partner' },
        { country: 'RO', flag: '🇷🇴', org: 'Asociatia Bradul', role: 'Partner' },
        { country: 'TR', flag: '🇹🇷', org: 'BEKGED', role: 'Partner' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Partnership Network</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">8 Countries Consortium</p>
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                    <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">8</p>
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
                {partners.map((partner, index) => (
                    <div
                        key={partner.country}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition border border-slate-100 dark:border-gray-700"
                    >
                        <div className="text-3xl">{partner.flag}</div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-slate-900 dark:text-gray-100 truncate text-sm">{partner.org}</p>
                            <p className="text-xs text-slate-500 dark:text-gray-400">{partner.country}{index === 0 && ' • Coordinator'}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-2">
                <button
                    onClick={() => window.location.href = '/partners'}
                    className="w-full px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition flex items-center justify-center gap-2"
                >
                    <Users size={18} />
                    View All Partners
                </button>
            </div>
        </div>
    );
};

// Highlight Card Component
const HighlightCard = ({ icon: Icon, title, description, color, onClick }) => {
    const cardStyles = {
        amber: 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700',
        indigo: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700',
        emerald: 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700',
        purple: 'bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700',
        pink: 'bg-pink-50 dark:bg-pink-900/10 border-pink-200 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-700',
    };

    const iconColors = {
        amber: 'text-amber-600 dark:text-amber-400',
        indigo: 'text-indigo-600 dark:text-indigo-400',
        emerald: 'text-emerald-600 dark:text-emerald-400',
        purple: 'text-purple-600 dark:text-purple-400',
        pink: 'text-pink-600 dark:text-pink-400',
    };

    return (
        <div
            onClick={onClick}
            className={`p-6 rounded-2xl border ${cardStyles[color]} h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer`}
        >
            <div className={`mb-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl inline-block ${iconColors[color]}`}>
                <Icon size={32} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{title}</h4>
            <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
    );
};

// Quick Module Card Component
const QuickModuleCard = ({ title, description, icon: Icon, href, color }) => {
    const colorMap = {
        indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
        amber: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
        purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        rose: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
        pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
    };

    return (
        <div
            onClick={() => window.location.href = href}
            className={`cursor-pointer bg-gradient-to-br ${colorMap[color]} rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1`}
        >
            <Icon size={32} className="mb-3" />
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
        </div>
    );
};

export default DashboardPage;
