import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partnersData from '../data/ecu_partners_data.json';
import PartnerDetailView from '../components/PartnerDetailView';
import {
    Globe, Users, MapPin, Building2, Mail, ArrowLeft, ExternalLink,
    Heart, Lightbulb, TrendingUp, Compass, Mountain, Anchor, Film, Target, X
} from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';
import RetroPageHeader from '../components/RetroPageHeader';

// Icon mapping
const iconMap = {
    Heart, Lightbulb, TrendingUp, Users, Film, Compass, Mountain, Anchor, Target
};

// Helper to get retro colors
const getRetroColorClasses = (color) => {
    // Map modern color names to retro palette equivalents or robust fallbacks
    const variants = {
        rose: {
            border: 'border-retro-red',
            bg: 'bg-retro-red',
            text: 'text-retro-red',
            lightBg: 'bg-retro-light-gray',
        },
        amber: {
            border: 'border-retro-orange',
            bg: 'bg-retro-orange',
            text: 'text-retro-orange',
            lightBg: 'bg-retro-light-gray',
        },
        emerald: {
            border: 'border-retro-green',
            bg: 'bg-retro-green',
            text: 'text-retro-green',
            lightBg: 'bg-retro-light-gray',
        },
        blue: {
            border: 'border-retro-blue',
            bg: 'bg-retro-blue',
            text: 'text-retro-blue',
            lightBg: 'bg-retro-light-gray',
        },
        violet: {
            border: 'border-retro-magenta',
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        },
        pink: {
            border: 'border-retro-magenta',
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        },
        cyan: {
            border: 'border-retro-cyan',
            bg: 'bg-retro-cyan',
            text: 'text-retro-cyan',
            lightBg: 'bg-retro-light-gray',
        },
        orange: {
            border: 'border-retro-orange',
            bg: 'bg-retro-orange',
            text: 'text-retro-orange',
            lightBg: 'bg-retro-light-gray',
        },
        indigo: {
            border: 'border-retro-blue',
            bg: 'bg-retro-blue',
            text: 'text-retro-blue',
            lightBg: 'bg-retro-light-gray',
        },
        purple: {
            border: 'border-retro-magenta',
            bg: 'bg-retro-magenta',
            text: 'text-retro-magenta',
            lightBg: 'bg-retro-light-gray',
        }
    };
    return variants[color] || variants.rose;
};

/**
 * Partners & People Page - Retro Edition
 * Displays all 8 partner organizations and key personnel
 */
const PartnersPage = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);
    const partners = partnersData.partners || [];

    const headerStats = [
        { icon: Globe, value: "8", label: "Countries", color: "text-retro-cyan" },
        { icon: Users, value: "40", label: "Participants", color: "text-retro-green" },
        { icon: Heart, value: "50%", label: "Fewer Opps", color: "text-retro-red" },
    ];

    return (
        <div className="space-y-8 font-pixel-body relative min-h-screen">
            {/* Header Section */}
            <RetroPageHeader
                title="Partners & People"
                subtitle="A consortium of 8 organizations across Europe"
                color="bg-retro-magenta"
                stats={headerStats}
            />


            {/* Partners Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 xs:gap-6 transition-opacity duration-300 ${selectedPartner ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}
            >
                {partners.map((partner, idx) => {
                    const IconComponent = iconMap[partner.icon] || Building2;
                    const colors = getRetroColorClasses(partner.color);

                    return (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => {
                                gameAudio.playClick();
                                setSelectedPartner(partner);
                            }}
                            onMouseEnter={() => gameAudio.playHover()}
                            className={`group cursor-pointer bg-white border-4 border-black hover:border-retro-white hover:-translate-y-1 transition-all duration-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full`}
                        >
                            {/* Header Stripe */}
                            <div className={`h-4 ${colors.bg} border-b-4 border-black`}></div>

                            <div className="p-3 flex flex-col flex-grow">
                                {/* Pixel Art Logo - Compact */}
                                <div className={`w-16 h-16 ${colors.lightBg} border-2 border-black flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] mx-auto overflow-hidden`}>
                                    {partner.logo_url ? (
                                        <img
                                            src={`${import.meta.env.BASE_URL}${partner.logo_url}`}
                                            alt={`${partner.organization} logo`}
                                            className="w-full h-full object-contain image-pixelated"
                                            style={{ imageRendering: 'pixelated' }}
                                        />
                                    ) : (
                                        <IconComponent size={24} className={`${colors.text}`} />
                                    )}
                                </div>

                                {/* Country & Role - Compact */}
                                <div className="mb-1 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-0.5">
                                        <span className="text-xl font-bold text-black font-pixel-header">{partner.country_code}</span>
                                        {partner.role === 'Coordinator' && (
                                            <span className="px-1.5 py-0.5 bg-retro-yellow border-2 border-black text-black text-[9px] font-bold uppercase tracking-wide">
                                                Coord
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[9px] xs:text-[10px] text-retro-gray font-bold uppercase leading-none">{partner.country_name}</p>
                                </div>

                                {/* Organization Name - Compact */}
                                <h3 className="text-[10px] xs:text-xs font-bold text-black mb-1 font-pixel-header uppercase min-h-[2.5rem] break-words hyphens-auto leading-tight overflow-hidden text-center flex items-center justify-center">
                                    {partner.organization}
                                </h3>

                                {/* City - Compact */}
                                <div className="flex items-center justify-center space-x-1 text-retro-gray text-[10px] font-bold mb-2 uppercase">
                                    <MapPin size={12} />
                                    <span>{partner.city}</span>
                                </div>

                                <div className="mt-auto pt-2 border-t-2 border-dashed border-gray-400">
                                    <div className={`flex items-center justify-between`}>
                                        <div className="flex items-center space-x-1 text-black font-bold text-[9px]">
                                            <Users size={10} />
                                            <span>{partner.participants} PAX</span>
                                        </div>
                                        <div className="w-4 h-4 bg-black flex items-center justify-center text-white">
                                            <ArrowLeft size={10} className="transform rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Institutional Partners Section (Bottom) */}
            <div className="flex flex-wrap justify-center gap-6 px-4 pt-8 border-t-4 border-black border-dashed">
                <motion.a
                    href="https://agenziagioventu.gov.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center group"
                >
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center w-64 h-24">
                        <img
                            src="https://raw.githubusercontent.com/bethechangeitaly-creator/brand/3c08146a330acceb4964a5359a415c6951ddfb26/Logo-AIG-small.png"
                            alt="Agenzia Italiana per la Gioventù"
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                            style={{ imageRendering: 'pixelated' }}
                        />
                    </div>
                    <span className="text-[10px] mt-2 font-bold uppercase text-retro-gray group-hover:text-black">Agenzia Italiana Gioventù</span>
                </motion.a>

                <motion.a
                    href="https://www.erasmusplus.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center group"
                >
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center w-64 h-24">
                        <img
                            src="https://raw.githubusercontent.com/bethechangeitaly-creator/brand/3c08146a330acceb4964a5359a415c6951ddfb26/ErasmusPlus_Small.svg"
                            alt="Erasmus+"
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    <span className="text-[10px] mt-2 font-bold uppercase text-retro-gray group-hover:text-black">Erasmus+ Program</span>
                </motion.a>
            </div>

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

export default PartnersPage;
