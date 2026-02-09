import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectData from '../data/ecu_project_data.json';
import partnersData from '../data/ecu_partners_data.json';
import PartnerDetailView from '../components/PartnerDetailView';
import StatsCard from '../components/StatsCard';
import ContentSlider from '../components/ContentSlider';
import { gameAudio } from '../utils/gameAudio';
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
        <div className="bg-retro-black p-0.5 xs:p-1 md:p-2 border-2 border-retro-gray min-w-[40px] xs:min-w-[50px] md:min-w-[70px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] md:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="block text-sm xs:text-lg md:text-xl font-bold font-pixel-header text-retro-green leading-none">{String(value).padStart(2, '0')}</span>
            <span className="text-[7px] xs:text-[10px] md:text-xs text-retro-light-gray uppercase tracking-widest font-pixel-body">{label}</span>
        </div>
    );

    return (
        <div className="space-y-8 font-pixel-body">
            {/* Hero Section - Project Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-dark-blue border-4 border-retro-white p-4 md:p-6 lg:p-12 text-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>

                <div className="relative z-10 block md:flex md:items-start md:justify-between">
                    <div className="w-full md:flex-1 md:min-w-0">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold lg:tracking-widest mb-2 font-pixel-header retro-shadow text-white leading-tight break-words hyphens-auto md:pr-6 overflow-hidden text-center lg:text-left">
                            Esplorando il Corpo Umano
                        </h1>
                        <p className="text-xs sm:text-lg lg:text-xl text-retro-cyan mb-3 font-bold uppercase tracking-wide break-words leading-tight overflow-hidden text-center lg:text-left">
                            &gt; Youth Exchange • Erasmus+ KA152 • September 2026
                        </p>
                        <p className="text-retro-light-gray max-w-2xl leading-relaxed mb-4 font-bold bg-black/50 p-3 md:p-4 border border-retro-gray text-white text-xs sm:text-sm lg:text-base mx-auto text-center lg:text-left lg:mx-0">
                            A transformative 7-day Youth Exchange using the human body as a metaphor
                            to address mental health, misinformation, mobility, and sustainability through
                            non-formal education.
                        </p>
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                            <RetroBadge icon="🌍" text="8 Countries" />
                            <RetroBadge icon="👥" text="40 Participants" />
                            <RetroBadge icon="📅" text="7 Days in Sicily" />
                            <RetroBadge icon="💜" text="50% Fewer Opportunities" />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="bg-retro-red p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                            <Heart size={64} className="text-white fill-white" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-4">
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
                        <div>
                            <ContentSlider days={days} onExplore={(day) => navigate(`/journey/${day.day}`)} />
                        </div>
                    </div>

                    {/* Countdown / Next Up Card */}
                    <div className="flex-1 bg-black border-4 border-retro-gray p-4 lg:p-8 text-white relative overflow-hidden flex flex-col items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] min-h-[200px] gap-6">
                        {/* High-visibility Grid Background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 pointer-events-none"></div>

                        <div className="relative z-10 text-center space-y-2">
                            <h3 className="text-3xl xs:text-4xl font-bold flex items-center justify-center gap-3 font-pixel-header text-retro-yellow tracking-tighter uppercase">
                                <Rocket className="text-retro-yellow animate-bounce" size={28} />
                                Coming Soon
                            </h3>
                            <p className="text-retro-light-gray text-xs xs:text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                <span>&gt;</span> September 15, 2026 • Sicily, Italy
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-nowrap justify-center gap-2 xs:gap-3 lg:gap-5 w-full overflow-hidden">
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
            <div className="bg-white border-4 border-black p-3 xs:p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold text-black mb-6 font-pixel-header uppercase border-b-4 border-black pb-2 inline-block">Project Highlights</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="bg-retro-cyan border-8 border-black p-4 xs:p-5 sm:p-8 lg:p-10 text-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '100% 4px' }}>
                </div>

                <div className="relative z-10 block space-y-8">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-pixel-header uppercase tracking-tighter leading-none border-b-4 border-black pb-4 inline-block">
                            Venue: Furnari, Sicily
                        </h3>
                        <p className="text-sm xs:text-base lg:text-lg leading-relaxed mb-8 font-bold border-l-4 border-black pl-4 xs:pl-6 max-w-2xl">
                            The Youth Exchange will take place at <strong className="uppercase decoration-4 underline underline-offset-4">Tindari Village</strong> in Furnari,
                            Messina, Sicily, Italy.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 xs:gap-6">
                            <div className="px-6 py-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:min-w-[160px] sm:w-auto">
                                <p className="text-[10px] xs:text-xs font-bold uppercase tracking-widest text-retro-gray mb-1">Arrival Day</p>
                                <p className="text-lg xs:text-xl font-bold font-pixel-header">Sept 14, 2026</p>
                            </div>
                            <div className="px-6 py-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:min-w-[160px] sm:w-auto">
                                <p className="text-[10px] xs:text-xs font-bold uppercase tracking-widest text-retro-gray mb-1">Departure Day</p>
                                <p className="text-lg xs:text-xl font-bold font-pixel-header">Sept 22, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RetroBadge = ({ icon, text }) => (
    <div className="w-full lg:w-auto px-1 py-1 lg:px-4 lg:py-2 bg-black text-white text-[9px] md:text-[10px] lg:text-xs font-bold font-pixel-body border-2 border-retro-gray shadow-[2px_2px_0px_0px_#aaa] hover:translate-y-px hover:shadow-none transition-all cursor-default flex items-center justify-center gap-1 lg:gap-2">
        <span>{icon}</span>
        <span>{text}</span>
    </div>
);

// Partnership Network Component (FIXED)
const PartnershipNetwork = () => {
    const navigate = useNavigate();
    const [selectedPartner, setSelectedPartner] = useState(null);

    // Simplified list for the dashboard view
    const dashboardPartners = [
        { country: 'IT', flag: '🇮🇹', org: 'Be The Change', role: 'Coordinator' },
        { country: 'DE', flag: '🇩🇪', org: 'Future Makers Alliance', role: 'Partner' },
        { country: 'MK', flag: '🇲🇰', org: 'Level Up', role: 'Partner' },
        { country: 'GR', flag: '🇬🇷', org: 'DefiniTely Maybe', role: 'Partner' },
        { country: 'FR', flag: '🇫🇷', org: 'Autarcie Productions', role: 'Partner' },
        { country: 'PT', flag: '🇵🇹', org: 'Autonomia e Descoberta', role: 'Partner' },
        { country: 'RO', flag: '🇷🇴', org: 'Asociatia Bradul', role: 'Partner' },
        { country: 'TR', flag: '🇹🇷', org: 'BEKGED', role: 'Partner' },
    ];

    const handlePartnerClick = (countryCode) => {
        const fullPartnerData = partnersData.partners.find(p => p.country_code === countryCode);
        if (fullPartnerData) {
            setSelectedPartner(fullPartnerData);
        }
    };

    return (
        <div className="bg-retro-white border-4 border-retro-gray p-4 lg:p-6 h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
                <div>
                    <h3 className="text-lg font-bold text-black font-pixel-header uppercase">Partners_Net</h3>
                    <p className="text-xs text-retro-gray font-bold uppercase">&gt; 8 Countries Consortium</p>
                </div>
                <div className="bg-retro-green px-3 py-1 border-2 border-black lg:hidden">
                    <p className="text-black font-bold text-sm font-pixel-header">08</p>
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
                {dashboardPartners.map((partner, index) => (
                    <div
                        key={partner.country}
                        onClick={() => {
                            gameAudio.playClick();
                            handlePartnerClick(partner.country);
                        }}
                        onMouseEnter={() => gameAudio.playHover()}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white hover:bg-retro-yellow transition border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer"
                    >
                        <div className="text-xl flex p-1 border border-gray-400 bg-gray-100 self-start sm:self-center">{partner.flag}</div>
                        <div className="flex-1 min-w-0 w-full">
                            <p className="font-bold text-black text-sm uppercase break-words leading-tight h-auto overflow-visible">{partner.org}</p>
                            <p className="text-[10px] sm:text-xs text-retro-gray font-bold line-clamp-1">{partner.country}{index === 0 && ' <COORDINATOR>'}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-2 border-t-4 border-black border-dashed">
                <button
                    onClick={() => {
                        gameAudio.playClick();
                        navigate('/partners');
                    }}
                    onMouseEnter={() => gameAudio.playHover()}
                    className="w-full px-4 py-2 bg-retro-green text-black border-2 border-black font-bold hover:bg-white transition flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                >
                    <Users size={18} />
                    <span className="uppercase">View Database</span>
                </button>
            </div>

            {/* Partner Detail Modal */}
            <AnimatePresence>
                {selectedPartner && (
                    <div className="fixed top-16 left-0 lg:left-72 right-0 bottom-0 z-40 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPartner(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-retro-light-gray border-4 border-retro-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col font-pixel-body"
                        >
                            <PartnerDetailView
                                partner={selectedPartner}
                                onClose={() => setSelectedPartner(null)}
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
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
            onClick={() => {
                gameAudio.playClick();
                onClick();
            }}
            onMouseEnter={() => gameAudio.playHover()}
            className={`p-4 lg:p-6 bg-white border-4 ${borderColor} h-full transition-all duration-0 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
        >
            <div className={`mb-4 p-3 bg-black text-white border-2 border-gray-500 inline-block`}>
                <Icon size={32} />
            </div>
            <h4 className="font-bold text-black mb-2 text-lg font-pixel-header uppercase break-words leading-tight">{title}</h4>
            <p className="text-sm text-retro-gray font-bold font-pixel-body leading-relaxed">{description}</p>
        </div>
    );
};

// Quick Module Card Component
const QuickModuleCard = ({ title, description, icon: Icon, href, color }) => {
    const navigate = useNavigate();
    const colorMap = {
        indigo: 'bg-[#4338CA]',     // IMPACT LAB - vibrant blue/indigo
        pink: 'bg-[#A21CAF]',       // PROJECT DNA - purple/magenta  
        purple: 'bg-[#D946EF]',     // METHODOLOGY HUB - bright pink/magenta
        rose: 'bg-[#E74C3C]',       // FOLLOW-UP - red/orange
    };

    const bgColor = colorMap[color] || colorMap.indigo;

    return (
        <div
            onClick={() => {
                gameAudio.playClick();
                navigate(href);
            }}
            onMouseEnter={() => gameAudio.playHover()}
            className={`cursor-pointer ${bgColor} border-4 border-white p-4 lg:p-6 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all`}
        >
            <Icon size={32} className="mb-3" />
            <h3 className="font-bold text-lg mb-1 font-pixel-header uppercase break-words leading-tight">{title}</h3>
            <p className="text-white/80 text-sm font-pixel-body font-bold">&gt; {description}</p>
        </div>
    );
};



export default DashboardPage;
