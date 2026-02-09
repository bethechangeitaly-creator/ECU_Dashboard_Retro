import React, { useState } from 'react';
import {
    Building2, Users, MapPin, Heart, Lightbulb, TrendingUp, Compass, Mountain, Anchor, Film, Target, X, ArrowLeft,
    Globe, Instagram, Mail, ExternalLink
} from 'lucide-react';
import { gameAudio } from '../utils/gameAudio';

// Icon mapping
const iconMap = {
    Heart, Lightbulb, TrendingUp, Users, Film, Compass,
};

// Helper to get retro colors
const getRetroColorClasses = (color) => {
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

const PartnerDetailView = ({ partner, onClose }) => {
    // Re-create iconMap here to be safe with imports
    const localIconMap = {
        Heart, Lightbulb, TrendingUp, Users, Film, Compass, Mountain, Anchor, Target
    };

    const IconComponent = localIconMap[partner.icon] || Building2;
    const colors = getRetroColorClasses(partner.color);

    return (
        <>
            {/* Window Title Bar */}
            <div className={`bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray sticky top-0 z-20`}>
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <div className="w-4 h-4 bg-white border border-black shrink-0"></div>
                    <span className="text-white font-bold font-pixel-header text-[10px] sm:text-xs uppercase tracking-wider truncate">
                        Partner_Details_Viewer.exe
                    </span>
                </div>
                <button
                    onClick={() => {
                        gameAudio.playClick();
                        onClose();
                    }}
                    onMouseEnter={() => gameAudio.playHover()}
                    className="w-6 h-6 bg-retro-light-gray border-2 border-white shadow-[1px_1px_0px_0px_#000] flex items-center justify-center active:border-t-black active:border-l-black active:bg-gray-400 active:shadow-none"
                >
                    <X size={14} className="text-black" />
                </button>
            </div>

            {/* Window Content */}
            <div className="p-4 xs:p-6">
                <div className={`${colors.bg} border-4 border-black p-4 xs:p-6 mb-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]`}>
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 text-center lg:text-left">
                        <div className="w-16 h-16 xs:w-20 xs:h-20 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-2 lg:mb-0 mx-auto lg:mx-0 overflow-hidden">
                            {partner.logo_url ? (
                                <img
                                    src={`${import.meta.env.BASE_URL}${partner.logo_url}`}
                                    alt={`${partner.organization} logo`}
                                    className="w-full h-full object-contain image-pixelated"
                                    style={{ imageRendering: 'pixelated' }}
                                />
                            ) : (
                                <IconComponent size={32} className={`${colors.text} xs:w-10 xs:h-10`} />
                            )}
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                            <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-3xl font-bold mb-6 lg:mb-2 font-pixel-header uppercase text-white drop-shadow-md break-words leading-tight overflow-hidden w-full text-center lg:text-left">
                                {partner.organization}
                            </h2>
                            <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-center justify-center lg:justify-start gap-2 sm:gap-4 text-[10px] xs:text-xs font-bold uppercase">
                                <div className="flex flex-col xs:flex-row gap-2 w-full lg:w-auto items-center">
                                    <span className="bg-black px-2 py-1 border border-white text-white text-center">
                                        {partner.country_code} - {partner.country_name}
                                    </span>
                                    {partner.role === 'Coordinator' && (
                                        <span className="bg-retro-yellow text-black px-2 py-1 border border-black animate-pulse text-center">
                                            Project Coordinator
                                        </span>
                                    )}
                                </div>
                                <span className="bg-white text-black px-2 py-1 border border-black w-full lg:w-auto text-center">
                                    OID: {partner.pid}
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

                        {/* Contact Info - Polished Version */}
                        {(partner.website || partner.instagram || partner.email) && (
                            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                <h3 className="text-sm font-bold text-black uppercase mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
                                    <div className="bg-retro-blue p-1 border border-black text-white">
                                        <Target size={12} />
                                    </div>
                                    Comm_Link.sys
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {partner.website && (
                                        <a
                                            href={partner.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => gameAudio.playClick()}
                                            onMouseEnter={() => gameAudio.playHover()}
                                            className="group flex flex-col p-0 bg-retro-light-gray border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:bg-gray-300 transition-all overflow-hidden"
                                        >
                                            <div className="bg-retro-blue text-white px-2 py-1 text-[8px] font-bold border-b-2 border-black flex justify-between items-center">
                                                <span>WEB_PORTAL</span>
                                                <Globe size={10} />
                                            </div>
                                            <div className="p-3 flex items-center gap-3">
                                                <div className="p-2 border-2 border-black bg-white text-retro-blue group-hover:bg-retro-blue group-hover:text-white transition-colors">
                                                    <Globe size={18} />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[10px] xs:text-xs font-bold text-black truncate uppercase tracking-tight">
                                                        {partner.website.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-[8px] font-bold text-retro-gray uppercase mt-0.5">
                                                        <span>Browse Node</span>
                                                        <ExternalLink size={8} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {partner.instagram && (
                                        <a
                                            href={partner.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => gameAudio.playClick()}
                                            onMouseEnter={() => gameAudio.playHover()}
                                            className="group flex flex-col p-0 bg-retro-light-gray border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:bg-gray-300 transition-all overflow-hidden"
                                        >
                                            <div className="bg-retro-magenta text-white px-2 py-1 text-[8px] font-bold border-b-2 border-black flex justify-between items-center">
                                                <span>SOCIAL_ID</span>
                                                <Instagram size={10} />
                                            </div>
                                            <div className="p-3 flex items-center gap-3">
                                                <div className="p-2 border-2 border-black bg-white text-retro-magenta group-hover:bg-retro-magenta group-hover:text-white transition-colors">
                                                    <Instagram size={18} />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[10px] xs:text-xs font-bold text-black truncate uppercase tracking-tight">
                                                        @{partner.instagram.split('instagram.com/')[1]?.replace('/', '')}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-[8px] font-bold text-retro-gray uppercase mt-0.5">
                                                        <span>View Profile</span>
                                                        <ExternalLink size={8} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {partner.email && (
                                        <a
                                            href={`mailto:${partner.email}`}
                                            onClick={() => gameAudio.playClick()}
                                            onMouseEnter={() => gameAudio.playHover()}
                                            className="group flex flex-col p-0 bg-retro-light-gray border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:bg-gray-300 transition-all overflow-hidden"
                                        >
                                            <div className="bg-retro-green text-white px-2 py-1 text-[8px] font-bold border-b-2 border-black flex justify-between items-center">
                                                <span>DATA_RELAY</span>
                                                <Mail size={10} />
                                            </div>
                                            <div className="p-3 flex items-center gap-3">
                                                <div className="p-2 border-2 border-black bg-white text-retro-green group-hover:bg-retro-green group-hover:text-white transition-colors">
                                                    <Mail size={18} />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[10px] xs:text-xs font-bold text-black truncate tracking-tight lowercase">
                                                        {partner.email}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-[8px] font-bold text-retro-gray uppercase mt-0.5">
                                                        <span>Send Packet</span>
                                                        <ExternalLink size={8} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
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
                        onClick={() => {
                            gameAudio.playClick();
                            onClose();
                        }}
                        onMouseEnter={() => gameAudio.playHover()}
                        className="px-6 py-2 bg-retro-gray text-white font-bold uppercase border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-black active:translate-y-1 active:shadow-none transition-all font-pixel-body"
                    >
                        Close Window
                    </button>
                </div>
            </div>
        </>
    );
};

export default PartnerDetailView;
