import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partnersData from '../data/ecu_partners_data.json';
import {
    Globe, Users, MapPin, Building2, Mail, ArrowLeft, ExternalLink,
    Heart, Lightbulb, TrendingUp, Compass, Mountain, Anchor, Film, Target, X
} from 'lucide-react';

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

    return (
        <div className="space-y-8 font-pixel-body relative min-h-screen">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-magenta border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pixel-header tracking-widest uppercase retro-shadow">Partners & People</h1>
                    <p className="text-white text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan">
                        &gt; A consortium of 8 organizations across Europe
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Globe size={18} className="text-retro-cyan" />
                            <span className="font-bold text-retro-cyan uppercase">8 Countries</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Users size={18} className="text-retro-green" />
                            <span className="font-bold text-retro-green uppercase">40 Participants</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Heart size={18} className="text-retro-red" />
                            <span className="font-bold text-retro-red uppercase">50% Fewer Opps</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Partners Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${selectedPartner ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}
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
                            onClick={() => setSelectedPartner(partner)}
                            className={`group cursor-pointer bg-white border-4 border-black hover:border-retro-white hover:-translate-y-1 transition-all duration-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full`}
                        >
                            {/* Header Stripe */}
                            <div className={`h-4 ${colors.bg} border-b-4 border-black`}></div>

                            <div className="p-6 flex flex-col flex-grow">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${colors.lightBg} border-2 border-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]`}>
                                    <IconComponent size={32} className={`${colors.text}`} />
                                </div>

                                {/* Country & Role */}
                                <div className="mb-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-2xl font-bold text-black font-pixel-header">{partner.country_code}</span>
                                        {partner.role === 'Coordinator' && (
                                            <span className="px-2 py-1 bg-retro-yellow border-2 border-black text-black text-[10px] font-bold uppercase tracking-wide">
                                                Coord
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-retro-gray font-bold uppercase">{partner.country_name}</p>
                                </div>

                                {/* Organization Name */}
                                <h3 className="text-sm md:text-base font-bold text-black mb-2 font-pixel-header uppercase min-h-[3rem]">
                                    {partner.organization}
                                </h3>

                                {/* City */}
                                <div className="flex items-center space-x-2 text-retro-dark-gray text-xs font-bold mb-4 uppercase">
                                    <MapPin size={14} />
                                    <span>{partner.city}</span>
                                </div>

                                <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-400">
                                    <div className={`flex items-center justify-between`}>
                                        <div className="flex items-center space-x-2 text-black font-bold text-xs">
                                            <Users size={14} />
                                            <span>{partner.participants} PAX</span>
                                        </div>
                                        <div className="w-6 h-6 bg-black flex items-center justify-center text-white">
                                            <ArrowLeft size={14} className="transform rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Partner Detail Modal / Window */}
            <AnimatePresence>
                {selectedPartner && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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

/**
 * Partner Detail View Component
 */
const PartnerDetailView = ({ partner, onClose }) => {
    const IconComponent = iconMap[partner.icon] || Building2;
    const colors = getRetroColorClasses(partner.color);
    const tabs = ['Info', 'People', 'System'];
    const [activeTab, setActiveTab] = useState('Info');

    return (
        <>
            {/* Window Title Bar */}
            <div className={`bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white border border-black"></div>
                    <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider">
                        Partner_Details_Viewer.exe
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="w-6 h-6 bg-retro-light-gray border-2 border-white shadow-[1px_1px_0px_0px_#000] flex items-center justify-center active:border-t-black active:border-l-black active:bg-gray-400 active:shadow-none"
                >
                    <X size={14} className="text-black" />
                </button>
            </div>

            {/* Window Content */}
            <div className="p-6">
                {/* Partner Header */}
                <div className={`${colors.bg} border-4 border-black p-6 mb-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]`}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <IconComponent size={40} className={`${colors.text}`} />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-pixel-header uppercase text-white drop-shadow-md">{partner.organization}</h2>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase">
                                <span className="bg-black px-2 py-1 border border-white text-white">
                                    {partner.country_code} - {partner.country_name}
                                </span>
                                {partner.role === 'Coordinator' && (
                                    <span className="bg-retro-yellow text-black px-2 py-1 border border-black animate-pulse">
                                        Project Coordinator
                                    </span>
                                )}
                                <span className="bg-white text-black px-2 py-1 border border-black">
                                    PID: {partner.pid}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* About Box */}
                        <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            <h3 className="text-sm font-bold text-black uppercase mb-4 bg-retro-light-gray border-2 border-black inline-block px-2 py-1">
                                [ Organization Profile ]
                            </h3>
                            <p className="text-black text-sm md:text-base leading-relaxed font-bold">
                                {partner.description}
                            </p>

                            <div className="mt-4 pt-4 border-t-2 border-black border-dashed">
                                <h4 className="text-xs font-bold text-retro-gray uppercase mb-2">Primary Mission:</h4>
                                <p className="text-black italic font-bold border-l-4 border-retro-gray pl-4">
                                    "{partner.mission}"
                                </p>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="bg-retro-light-gray border-2 border-black p-4">
                            <h4 className="text-xs font-bold text-black uppercase mb-3 border-b-2 border-black pb-1">Focus Areas</h4>
                            <div className="flex flex-wrap gap-2">
                                {partner.focus_areas.map((area, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-2 py-1 bg-white border-2 border-black text-black text-xs font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all cursor-default`}
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-6">
                        <div className="bg-black p-4 border-4 border-retro-gray shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                            <h3 className="text-retro-green font-pixel-header text-sm mb-4 uppercase text-center border-b-2 border-retro-gray pb-2">Stats__Log</h3>
                            <div className="space-y-4 text-xs font-bold font-mono">
                                <div className="flex justify-between text-retro-light-gray">
                                    <span>LOCATION:</span>
                                    <span className="text-white text-right">{partner.city}</span>
                                </div>
                                <div className="flex justify-between text-retro-light-gray">
                                    <span>PAX_COUNT:</span>
                                    <span className="text-white text-right">{partner.participants}</span>
                                </div>
                                <div className="flex justify-between text-retro-light-gray">
                                    <span>LEADERS:</span>
                                    <span className="text-white text-right">1</span>
                                </div>
                                <div className="flex justify-between text-retro-light-gray">
                                    <span>STATUS:</span>
                                    <span className="text-retro-green text-right">ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Personnel */}
                        <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            <h3 className="text-sm font-bold text-black uppercase mb-4 flex items-center gap-2">
                                <Users size={16} />
                                Team Roster
                            </h3>
                            <div className="space-y-4">
                                {partner.key_people.map((person, idx) => (
                                    <div key={idx} className="bg-retro-light-gray p-3 border-2 border-black">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-black uppercase text-sm">{person.name}</span>
                                        </div>
                                        <div className={`text-[10px] font-bold ${colors.text} uppercase mb-2 border-b border-black pb-1`}>{person.role}</div>
                                        <p className="text-xs text-black leading-tight mb-2">
                                            {person.bio}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-retro-gray text-white font-bold uppercase border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-black active:translate-y-1 active:shadow-none transition-all font-pixel-body"
                    >
                        Close Window
                    </button>
                </div>
            </div>
        </>
    );
};

export default PartnersPage;
