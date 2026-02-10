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
    Sparkles, BookOpen, Rocket, ArrowRight, ExternalLink, Brain, Map
} from 'lucide-react';
import sicilyGif from '../assets/sicily_boomerang.gif';

/**
 * Dashboard Home Page - Full Implementation
 * Comprehensive overview with all sections properly designed
 */
const DashboardPage = () => {
    const navigate = useNavigate();
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [showSicilyMap, setShowSicilyMap] = useState(false);
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
                className="bg-retro-dark-blue border-4 border-black p-4 md:p-6 lg:p-12 text-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
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
                        <div className="bg-retro-red p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
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
                    color="bg-[#4338CA]" // Impact Lab Indigo
                    subtitle="Youth + Leaders"
                />
                <StatsCard
                    title="Countries"
                    value={stats.partner_countries || 8}
                    icon={Globe}
                    color="bg-[#A21CAF]" // Project DNA Purple/Magenta
                    subtitle="European Partners"
                />
                <StatsCard
                    title="Duration"
                    value={`${stats.days_duration || 7} Days`}
                    icon={Calendar}
                    color="bg-[#D946EF]" // Methodology Hub Bright Pink
                    subtitle="Sept 15-21, 2026"
                />
                <StatsCard
                    title="Inclusion"
                    value="50%"
                    icon={Heart}
                    color="bg-[#E74C3C]" // Follow-Up Red/Orange
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
                    <PartnershipNetwork onPartnerSelect={setSelectedPartner} />
                </div>
            </div>

            {/* Partner Detail Modal - Moved to end of DashboardPage for better stack handling */}
            <AnimatePresence>
                {selectedPartner && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
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

            {/* Project Highlights */}
            <div className="bg-white dark:bg-dark-surface border-4 border-black dark:border-dark-border p-3 xs:p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold text-black dark:text-retro-white mb-6 font-pixel-header uppercase border-b-4 border-black dark:border-dark-border pb-2 inline-block">Project Highlights</h2>
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
            <div className="bg-retro-cyan border-4 sm:border-8 border-black p-3 xs:p-4 sm:p-6 lg:p-8 text-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '100% 4px' }}>
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-5">
                    {/* Title row */}
                    <h3 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold font-pixel-header uppercase tracking-tighter leading-tight border-b-4 border-black pb-3 break-words">
                        <span className="hidden sm:inline">Venue: Furnari, Sicily</span>
                        <span className="sm:hidden">Venue:<br />Furnari, Sicily</span>
                    </h3>

                    {/* Description */}
                    <p className="text-sm xs:text-base lg:text-lg leading-relaxed font-bold border-l-4 border-black pl-4 xs:pl-6">
                        The Youth Exchange will take place at <strong className="uppercase decoration-4 underline underline-offset-4">Tindari Village</strong> in Furnari,
                        Messina, Sicily, Italy.
                    </p>

                    {/* Bottom row: dates + map button aligned */}
                    <div className="flex flex-wrap items-stretch gap-3 xs:gap-4 sm:gap-5">
                        <div className="px-3 xs:px-4 py-3 bg-white dark:bg-dark-surface border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-1 min-w-0">
                            <p className="text-[9px] xs:text-[10px] font-bold uppercase tracking-widest text-retro-gray mb-0.5">Arrival</p>
                            <p className="text-base xs:text-lg sm:text-xl font-bold font-pixel-header dark:text-retro-white">
                                <span className="hidden sm:inline">Sept 14, 2026</span>
                                <span className="sm:hidden">14/09</span>
                            </p>
                        </div>
                        <div className="px-3 xs:px-4 py-3 bg-white dark:bg-dark-surface border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-1 min-w-0">
                            <p className="text-[9px] xs:text-[10px] font-bold uppercase tracking-widest text-retro-gray mb-0.5">Departure</p>
                            <p className="text-base xs:text-lg sm:text-xl font-bold font-pixel-header dark:text-retro-white">
                                <span className="hidden sm:inline">Sept 22, 2026</span>
                                <span className="sm:hidden">22/09</span>
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                gameAudio.playClick();
                                setShowSicilyMap(true);
                            }}
                            onMouseEnter={() => gameAudio.playHover()}
                            className="flex-shrink-0 w-full sm:w-auto order-last flex flex-col items-center justify-center gap-1 px-4 xs:px-5 sm:px-6 py-3 sm:py-0 bg-black text-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] hover:bg-retro-yellow hover:text-black active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                        >
                            <Map size={24} className="sm:w-7 sm:h-7" />
                            <span className="text-[10px] xs:text-xs font-bold font-pixel-body uppercase tracking-wider">Map</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sicily Map Retro Monitor Modal */}
            <AnimatePresence>
                {showSicilyMap && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setShowSicilyMap(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black"
                        />
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            className="relative z-10 w-full max-w-md cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Monitor outer shell */}
                            <div className="bg-[#b0b0b0] rounded-lg p-3 sm:p-4 border-4 border-[#888] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                                style={{ boxShadow: 'inset 2px 2px 0px #d0d0d0, inset -2px -2px 0px #808080, 8px 8px 0px 0px rgba(0,0,0,1)' }}>
                                {/* Title bar */}
                                <div className="bg-[#000080] px-3 py-1.5 mb-2 flex items-center justify-between border-2 border-[#444]">
                                    <span className="text-white text-xs font-bold font-pixel-body tracking-wide flex items-center gap-2">
                                        <MapPin size={12} /> sicily_map.gif
                                    </span>
                                    <button
                                        onClick={() => setShowSicilyMap(false)}
                                        className="bg-[#c0c0c0] text-black text-xs font-bold px-2 py-0.5 border-2 hover:bg-red-400 transition"
                                        style={{ borderColor: '#fff #808080 #808080 #fff' }}
                                    >
                                        X
                                    </button>
                                </div>
                                {/* Screen area */}
                                <div className="bg-black border-4 border-[#333] p-1 relative overflow-hidden rounded-sm">
                                    {/* CRT scanline overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none opacity-15"
                                        style={{ backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.3) 50%)', backgroundSize: '100% 3px' }}>
                                    </div>
                                    {/* CRT vignette */}
                                    <div className="absolute inset-0 z-10 pointer-events-none rounded-sm"
                                        style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6)' }}>
                                    </div>
                                    <img
                                        src={sicilyGif}
                                        alt="Sicily - Messina location"
                                        className="w-full h-auto block relative z-0"
                                    />
                                </div>
                                {/* Monitor bottom label */}
                                <div className="mt-2 flex items-center justify-center">
                                    <span className="text-[10px] text-[#555] font-bold font-pixel-body tracking-widest uppercase">RetroVision CRT</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const RetroBadge = ({ icon, text }) => (
    <div className="w-full lg:w-auto px-1 py-1 lg:px-4 lg:py-2 bg-black text-white text-[9px] md:text-[10px] lg:text-xs font-bold font-pixel-body border-2 border-retro-gray shadow-[2px_2px_0px_0px_#aaa] hover:translate-y-px hover:shadow-none transition-all cursor-default flex items-center justify-center gap-1 lg:gap-2">
        <span>{icon}</span>
        <span>{text}</span>
    </div>
);

// Partnership Network Component
const PartnershipNetwork = ({ onPartnerSelect }) => {
    const navigate = useNavigate();

    // Simplified list for the dashboard view
    const dashboardPartners = [
        { country: 'EU', flag: '🇪🇺', org: 'Agenzia Italiana per la Gioventù', role: 'Institutional', url: 'https://agenziagioventu.gov.it/' },
        { country: 'EU', flag: '🇪🇺', org: 'Erasmus+ Program', role: 'Institutional', url: 'https://www.erasmusplus.it/' },
        { country: 'IT', flag: '🇮🇹', org: 'Be The Change', role: 'Coordinator' },
        { country: 'DE', flag: '🇩🇪', org: 'Future Makers Alliance', role: 'Partner' },
        { country: 'MK', flag: '🇲🇰', org: 'Level Up', role: 'Partner' },
        { country: 'GR', flag: '🇬🇷', org: 'DefiniTely Maybe', role: 'Partner' },
        { country: 'FR', flag: '🇫🇷', org: 'Autarcie Productions', role: 'Partner' },
        { country: 'PT', flag: '🇵🇹', org: 'Autonomia e Descoberta', role: 'Partner' },
        { country: 'RO', flag: '🇷🇴', org: 'Asociatia Bradul', role: 'Partner' },
        { country: 'TR', flag: '🇹🇷', org: 'BEKGED', role: 'Partner' },
    ];

    const handlePartnerClick = (partner) => {
        if (partner.role === 'Institutional' && partner.url) {
            window.open(partner.url, '_blank');
            return;
        }
        const fullPartnerData = partnersData.partners.find(p => p.organization === partner.org);
        if (fullPartnerData) {
            onPartnerSelect(fullPartnerData);
        }
    };

    return (
        <div className="bg-retro-white dark:bg-dark-surface border-4 border-retro-gray dark:border-dark-border p-4 lg:p-6 h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
                <div>
                    <h3 className="text-lg font-bold text-black font-pixel-header uppercase">Partners_Net</h3>
                    <p className="text-xs text-retro-gray font-bold uppercase">&gt; 10 Organizations Consortium</p>
                </div>
                <div className="bg-retro-green px-3 py-1 border-2 border-black lg:hidden">
                    <p className="text-black font-bold text-sm font-pixel-header">10</p>
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
                {dashboardPartners.map((partner, index) => (
                    <div
                        key={partner.org}
                        onClick={() => {
                            gameAudio.playClick();
                            handlePartnerClick(partner);
                        }}
                        onMouseEnter={() => gameAudio.playHover()}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white dark:bg-dark-elevated hover:bg-retro-yellow transition border-2 border-black dark:border-dark-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer"
                    >
                        <div className="text-xl flex p-1 border border-gray-400 bg-gray-100 self-start sm:self-center">{partner.flag}</div>
                        <div className="flex-1 min-w-0 w-full">
                            <p className="font-bold text-black text-sm uppercase break-words leading-tight h-auto overflow-visible">{partner.org}</p>
                            <p className="text-[10px] sm:text-xs text-retro-gray font-bold line-clamp-1">
                                {partner.country}
                                {partner.role === 'Coordinator' && ' <COORDINATOR>'}
                                {partner.role === 'Institutional' && ' <INSTITUTIONAL>'}
                            </p>
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
            className={`p-4 lg:p-6 bg-white dark:bg-dark-elevated border-4 ${borderColor} h-full transition-all duration-0 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
        >
            <div className={`mb-4 p-3 bg-black text-white border-2 border-gray-500 inline-block`}>
                <Icon size={32} />
            </div>
            <h4 className="font-bold text-black dark:text-retro-white mb-2 text-lg font-pixel-header uppercase break-words leading-tight">{title}</h4>
            <p className="text-sm text-retro-gray dark:text-retro-light-gray font-bold font-pixel-body leading-relaxed">{description}</p>
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
            className={`cursor-pointer ${bgColor} border-4 border-black p-4 lg:p-6 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all`}
        >
            <Icon size={32} className="mb-3" />
            <h3 className="font-bold text-lg mb-1 font-pixel-header uppercase break-words leading-tight">{title}</h3>
            <p className="text-white/80 text-sm font-pixel-body font-bold">&gt; {description}</p>
        </div>
    );
};



export default DashboardPage;
