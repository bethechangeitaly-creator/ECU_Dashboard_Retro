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
        <div className="bg-retro-black p-2 border-2 border-retro-gray min-w-[70px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="block text-xl font-bold font-pixel-header text-retro-green">{String(value).padStart(2, '0')}</span>
            <span className="text-xs text-retro-light-gray uppercase tracking-widest font-pixel-body">{label}</span>
        </div>
    );

    return (
        <div className="space-y-8 font-pixel-body">
            {/* Hero Section - Project Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-dark-blue border-4 border-retro-white p-8 md:p-12 text-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>

                <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-4 font-pixel-header retro-shadow text-white">
                            Esplorando il Corpo Umano
                        </h1>
                        <p className="text-xl text-retro-cyan mb-6 font-bold uppercase tracking-wide">
                            &gt; Youth Exchange • Erasmus+ KA152 • September 2026
                        </p>
                        <p className="text-retro-light-gray max-w-2xl leading-relaxed mb-6 font-bold bg-black/50 p-4 border border-retro-gray text-white">
                            A transformative 7-day Youth Exchange using the human body as a metaphor
                            to address mental health, misinformation, mobility, and sustainability through
                            non-formal education.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <RetroBadge icon="🌍" text="8 Countries" />
                            <RetroBadge icon="👥" text="40 Participants" />
                            <RetroBadge icon="📅" text="7 Days in Sicily" />
                            <RetroBadge icon="💜" text="50% Fewer Opportunities" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-retro-red p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                            <Heart size={64} className="text-white fill-white" />
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
                    color="bg-emerald-500" // Mapped inside stats card if needed, or visually handled there
                    trend="+100%"
                    subtitle="Youth + Leaders"
                />
                <StatsCard
                    title="Countries"
                    value={stats.partner_countries || 8}
                    icon={Globe}
                    color="bg-blue-500"
                    trend="active"
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
                        <div className="flex items-center justify-between mb-4 border-b-4 border-retro-gray pb-2 bg-retro-light-gray dark:bg-retro-black p-2 transition-colors">
                            <div>
                                <h2 className="text-xl font-bold text-black dark:text-retro-white font-pixel-header uppercase">The 7-Day Journey</h2>
                                <p className="text-retro-gray dark:text-retro-light-gray text-xs uppercase tracking-wider">&gt; Explore the body metaphor program</p>
                            </div>
                            <button
                                onClick={() => navigate('/journey')}
                                className="flex items-center gap-2 px-4 py-2 bg-retro-blue text-white font-bold hover:bg-white hover:text-black hover:border-retro-blue border-2 border-white transition shadow-[2px_2px_0px_0px_#fff]"
                            >
                                <span className="uppercase">View All</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <ContentSlider days={days} onExplore={(day) => navigate(`/journey/${day.day}`)} />
                    </div>

                    {/* Countdown / Next Up Card */}
                    <div className="flex-1 bg-retro-black border-4 border-retro-gray p-6 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[140px] gap-4">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>

                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-1 flex items-center justify-center md:justify-start gap-2 font-pixel-header text-retro-yellow">
                                <Rocket className="text-retro-yellow" size={20} />
                                Coming Soon
                            </h3>
                            <p className="text-retro-light-gray text-sm uppercase tracking-widest">&gt; September 15, 2026 • Sicily, Italy</p>
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
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold text-black mb-6 font-pixel-header uppercase border-b-4 border-black pb-2 inline-block">Project Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HighlightCard
                        icon={Sparkles}
                        title="Body Metaphor"
                        description="Each day explores a body part as a metaphor for societal challenges."
                        color="purple"
                        onClick={() => navigate('/dna')}
                    />
                    <HighlightCard
                        icon={Target}
                        title="EU Youth Goals"
                        description="Aligned with EU Youth Strategy pillars: ENGAGE, CONNECT, and EMPOWER."
                        color="indigo"
                        onClick={() => navigate('/impact', { state: { activeTab: 'goals' } })}
                    />
                    <HighlightCard
                        icon={Globe}
                        title="Multiplier Events"
                        description="8 local events reaching 160+ people, extending impact across Europe."
                        color="emerald"
                        onClick={() => navigate('/followup')}
                    />
                </div>
            </div>

            {/* Quick Access Modules */}
            <div>
                <h2 className="text-xl font-bold text-black dark:text-retro-white mb-4 font-pixel-header uppercase bg-retro-light-gray dark:bg-retro-black inline-block p-2 border-2 border-black dark:border-retro-gray transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Explore More</h2>
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
            {/* Location styled in retro way */}
            <div className="bg-retro-cyan border-4 border-black p-8 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-6">
                    <div className="bg-white p-4 border-2 border-black">
                        <MapPin size={40} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 font-pixel-header uppercase">Venue: Furnari, Sicily</h3>
                        <p className="leading-relaxed mb-4 font-bold border-l-4 border-black pl-4">
                            The Youth Exchange will take place at <strong className="uppercase decoration-2 underline">Tindari Village</strong> in Furnari,
                            Messina, Sicily, Italy.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-white border-2 border-black">
                                <p className="text-xs font-bold uppercase">Arrival Day</p>
                                <p className="text-lg font-bold">Sept 14, 2026</p>
                            </div>
                            <div className="px-4 py-2 bg-white border-2 border-black">
                                <p className="text-xs font-bold uppercase">Departure Day</p>
                                <p className="text-lg font-bold">Sept 22, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RetroBadge = ({ icon, text }) => (
    <span className="px-4 py-2 bg-black text-white text-xs font-bold font-pixel-body border-2 border-retro-gray shadow-[2px_2px_0px_0px_#aaa] hover:translate-y-px hover:shadow-none transition-all cursor-default">
        {icon} {text}
    </span>
);

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
        <div className="bg-retro-white border-4 border-retro-gray p-6 h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
                <div>
                    <h3 className="text-lg font-bold text-black font-pixel-header uppercase">Partners_Net</h3>
                    <p className="text-xs text-retro-gray font-bold uppercase">&gt; 8 Countries Consortium</p>
                </div>
                <div className="bg-retro-green px-3 py-1 border-2 border-black">
                    <p className="text-black font-bold text-sm font-pixel-header">08</p>
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
                {partners.map((partner, index) => (
                    <div
                        key={partner.country}
                        className="flex items-center gap-3 p-3 bg-white hover:bg-retro-yellow transition border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer"
                    >
                        <div className="text-xl flex p-1 border border-gray-400 bg-gray-100">{partner.flag}</div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-black truncate text-sm uppercase">{partner.org}</p>
                            <p className="text-xs text-retro-gray font-bold">{partner.country}{index === 0 && ' <COORDINATOR>'}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-2 border-t-4 border-black border-dashed">
                <button
                    onClick={() => window.location.href = '/partners'}
                    className="w-full px-4 py-2 bg-retro-green text-black border-2 border-black font-bold hover:bg-white transition flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                >
                    <Users size={18} />
                    <span className="uppercase">View Database</span>
                </button>
            </div>
        </div>
    );
};

// Highlight Card Component
const HighlightCard = ({ icon: Icon, title, description, color, onClick }) => {
    // Rough mapping to retro colors
    const borderColors = {
        amber: 'border-retro-orange',
        indigo: 'border-retro-blue',
        emerald: 'border-retro-green',
        purple: 'border-retro-magenta',
        pink: 'border-retro-red',
    };

    // Fallback
    const borderColor = borderColors[color] || 'border-black';

    return (
        <div
            onClick={onClick}
            className={`p-6 bg-white border-4 ${borderColor} h-full transition-all duration-0 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
        >
            <div className={`mb-4 p-3 bg-black text-white border-2 border-gray-500 inline-block`}>
                <Icon size={32} />
            </div>
            <h4 className="font-bold text-black mb-2 text-lg font-pixel-header uppercase">{title}</h4>
            <p className="text-sm text-retro-gray font-bold font-pixel-body leading-relaxed">{description}</p>
        </div>
    );
};

// Quick Module Card Component
const QuickModuleCard = ({ title, description, icon: Icon, href, color }) => {
    const bgColors = {
        indigo: 'bg-retro-blue',
        amber: 'bg-retro-orange',
        purple: 'bg-retro-magenta',
        rose: 'bg-retro-red',
        pink: 'bg-retro-dark-magenta'
    };
    const bgColor = bgColors[color] || 'bg-black';

    return (
        <div
            onClick={() => window.location.href = href}
            className={`cursor-pointer ${bgColor} border-4 border-white p-6 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all`}
        >
            <Icon size={32} className="mb-3" />
            <h3 className="font-bold text-lg mb-1 font-pixel-header uppercase">{title}</h3>
            <p className="text-white/80 text-sm font-pixel-body font-bold">&gt; {description}</p>
        </div>
    );
};



export default DashboardPage;
