import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partnersData from '../data/ecu_partners_data.json';
import {
    Globe, Users, MapPin, Building2, Mail, ArrowLeft, ExternalLink,
    Heart, Lightbulb, TrendingUp, Compass, Mountain, Anchor, Film, Target
} from 'lucide-react';

// Icon mapping
const iconMap = {
    Heart, Lightbulb, TrendingUp, Users, Film, Compass, Mountain, Anchor, Target
};

// Helper to get static classes for colors
const getColorClasses = (color) => {
    const variants = {
        rose: {
            borderHover: 'hover:border-rose-400 dark:hover:border-rose-500',
            headerBg: 'bg-rose-500',
            iconBg: 'bg-rose-100 dark:bg-rose-900/30',
            iconText: 'text-rose-600 dark:text-rose-400',
            badgeBg: 'bg-rose-50 dark:bg-rose-900/20',
            badgeText: 'text-rose-700 dark:text-rose-300' // Added for consistency
        },
        amber: {
            borderHover: 'hover:border-amber-400 dark:hover:border-amber-500',
            headerBg: 'bg-amber-500',
            iconBg: 'bg-amber-100 dark:bg-amber-900/30',
            iconText: 'text-amber-600 dark:text-amber-400',
            badgeBg: 'bg-amber-50 dark:bg-amber-900/20',
            badgeText: 'text-amber-700 dark:text-amber-300'
        },
        emerald: {
            borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500',
            headerBg: 'bg-emerald-500',
            iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
            iconText: 'text-emerald-600 dark:text-emerald-400',
            badgeBg: 'bg-emerald-50 dark:bg-emerald-900/20',
            badgeText: 'text-emerald-700 dark:text-emerald-300'
        },
        blue: {
            borderHover: 'hover:border-blue-400 dark:hover:border-blue-500',
            headerBg: 'bg-blue-500',
            iconBg: 'bg-blue-100 dark:bg-blue-900/30',
            iconText: 'text-blue-600 dark:text-blue-400',
            badgeBg: 'bg-blue-50 dark:bg-blue-900/20',
            badgeText: 'text-blue-700 dark:text-blue-300'
        },
        violet: {
            borderHover: 'hover:border-violet-400 dark:hover:border-violet-500',
            headerBg: 'bg-violet-500',
            iconBg: 'bg-violet-100 dark:bg-violet-900/30',
            iconText: 'text-violet-600 dark:text-violet-400',
            badgeBg: 'bg-violet-50 dark:bg-violet-900/20',
            badgeText: 'text-violet-700 dark:text-violet-300'
        },
        pink: {
            borderHover: 'hover:border-pink-400 dark:hover:border-pink-500',
            headerBg: 'bg-pink-500',
            iconBg: 'bg-pink-100 dark:bg-pink-900/30',
            iconText: 'text-pink-600 dark:text-pink-400',
            badgeBg: 'bg-pink-50 dark:bg-pink-900/20',
            badgeText: 'text-pink-700 dark:text-pink-300'
        },
        cyan: {
            borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500',
            headerBg: 'bg-cyan-500',
            iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
            iconText: 'text-cyan-600 dark:text-cyan-400',
            badgeBg: 'bg-cyan-50 dark:bg-cyan-900/20',
            badgeText: 'text-cyan-700 dark:text-cyan-300'
        },
        orange: {
            borderHover: 'hover:border-orange-400 dark:hover:border-orange-500',
            headerBg: 'bg-orange-500',
            iconBg: 'bg-orange-100 dark:bg-orange-900/30',
            iconText: 'text-orange-600 dark:text-orange-400',
            badgeBg: 'bg-orange-50 dark:bg-orange-900/20',
            badgeText: 'text-orange-700 dark:text-orange-300'
        }
    };
    return variants[color] || variants.rose;
};

/**
 * Partners & People Page - Complete Implementation
 * Displays all 8 partner organizations and key personnel
 */
const PartnersPage = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);
    const partners = partnersData.partners || [];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Partners & People</h1>
                    <p className="text-white/90 text-lg mb-6">
                        A consortium of 8 organizations across Europe, united by a shared vision
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Globe size={18} />
                            <span className="font-semibold">8 Countries</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Users size={18} />
                            <span className="font-semibold">40 Participants</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Heart size={18} />
                            <span className="font-semibold">50% Fewer Opportunities</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Partners Grid */}
            {!selectedPartner && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {partners.map((partner, idx) => {
                        const IconComponent = iconMap[partner.icon] || Building2;
                        const colors = getColorClasses(partner.color);

                        return (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedPartner(partner)}
                                className={`group cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 border-slate-200 dark:border-gray-700 ${colors.borderHover} hover:shadow-lg transition-all duration-300 overflow-hidden`}
                            >
                                {/* Country Flag Header */}
                                <div className={`h-2 ${colors.headerBg}`}></div>

                                <div className="p-6">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={28} className={colors.iconText} />
                                    </div>

                                    {/* Country & Role */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-2xl font-semibold text-slate-900 dark:text-white">{partner.country_code}</span>
                                            {partner.role === 'Coordinator' && (
                                                <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full">
                                                    Coordinator
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">{partner.country_name}</p>
                                    </div>

                                    {/* Organization Name */}
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mb-2 line-clamp-2 h-14">
                                        {partner.organization}
                                    </h3>

                                    {/* City */}
                                    <div className="flex items-center space-x-1 text-slate-600 dark:text-gray-400 text-sm mb-4">
                                        <MapPin size={14} />
                                        <span>{partner.city}</span>
                                    </div>

                                    {/* Participants Count */}
                                    <div className={`flex items-center justify-between px-3 py-2 ${colors.badgeBg} rounded-lg`}>
                                        <div className="flex items-center space-x-2">
                                            <Users size={16} className={colors.iconText} />
                                            <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                                                {partner.participants} participants
                                            </span>
                                        </div>
                                        <ArrowLeft size={16} className={`${colors.iconText} transform rotate-180 group-hover:translate-x-1 transition-transform`} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}

            {/* Partner Detail View */}
            <AnimatePresence>
                {selectedPartner && (
                    <PartnerDetailView
                        partner={selectedPartner}
                        onClose={() => setSelectedPartner(null)}
                    />
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-6"
        >
            {/* Back Button */}
            <button
                onClick={onClose}
                className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to all partners</span>
            </button>

            {/* Partner Header Card */}
            <div className={`bg-gradient-to-br from-${partner.color}-500 to-${partner.color}-600 rounded-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <IconComponent size={32} className="text-white" />
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-3xl font-bold">{partner.country_code}</span>
                                    {partner.role === 'Coordinator' && (
                                        <span className="px-3 py-1 bg-white/30 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                            Project Coordinator
                                        </span>
                                    )}
                                </div>
                                <p className="text-white/80">{partner.country_name}</p>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{partner.organization}</h2>
                        <p className="text-white/90 text-lg italic mb-4">"{partner.mission}"</p>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <MapPin size={18} />
                                <span>{partner.city}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users size={18} />
                                <span>{partner.participants} participants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organization Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* About Organization */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                        <Building2 size={24} className={`text-${partner.color}-600 dark:text-${partner.color}-400`} />
                        <span>About the Organization</span>
                    </h3>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
                        {partner.description}
                    </p>

                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                        {partner.focus_areas.map((area, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1.5 bg-${partner.color}-100 dark:bg-${partner.color}-900/30 text-${partner.color}-700 dark:text-${partner.color}-300 text-sm font-medium rounded-lg`}
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Quick Info</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">PID</p>
                            <p className="text-slate-900 dark:text-gray-200 font-mono text-sm">{partner.pid}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-slate-900 dark:text-gray-200">{partner.city}, {partner.country_name}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">Participants</p>
                            <p className="text-slate-900 dark:text-gray-200">{partner.participants} youth + 1 Group Leader</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">Role</p>
                            <p className="text-slate-900 dark:text-gray-200">{partner.role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key People */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                    <Users size={24} className={`text-${partner.color}-600 dark:text-${partner.color}-400`} />
                    <span>Key Personnel</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {partner.key_people.map((person, idx) => (
                        <div key={idx} className={`border-l-4 border-${partner.color}-500 bg-slate-50 dark:bg-gray-700/50 p-5 rounded-r-lg`}>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{person.name}</h4>
                            <p className={`text-sm font-semibold text-${partner.color}-600 dark:text-${partner.color}-400 mb-3`}>{person.role}</p>
                            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                {person.bio}
                            </p>
                            <div className={`bg-white dark:bg-gray-800 border border-${partner.color}-200 dark:border-${partner.color}-900/50 rounded-lg p-3`}>
                                <p className="text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1">ECU Contribution:</p>
                                <p className="text-sm text-slate-700 dark:text-gray-300">
                                    {person.ecu_contribution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PartnersPage;
