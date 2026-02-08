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
                        return (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedPartner(partner)}
                                className="group cursor-pointer bg-white rounded-xl shadow-sm border-2 border-slate-200 hover:border-${partner.color}-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                {/* Country Flag Header */}
                                <div className={`h-2 bg-${partner.color}-500`}></div>

                                <div className="p-6">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-${partner.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={28} className={`text-${partner.color}-600`} />
                                    </div>

                                    {/* Country & Role */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-2xl font-semibold text-slate-900">{partner.country_code}</span>
                                            {partner.role === 'Coordinator' && (
                                                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                                                    Coordinator
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500">{partner.country_name}</p>
                                    </div>

                                    {/* Organization Name */}
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 h-14">
                                        {partner.organization}
                                    </h3>

                                    {/* City */}
                                    <div className="flex items-center space-x-1 text-slate-600 text-sm mb-4">
                                        <MapPin size={14} />
                                        <span>{partner.city}</span>
                                    </div>

                                    {/* Participants Count */}
                                    <div className={`flex items-center justify-between px-3 py-2 bg-${partner.color}-50 rounded-lg`}>
                                        <div className="flex items-center space-x-2">
                                            <Users size={16} className={`text-${partner.color}-600`} />
                                            <span className="text-sm font-semibold text-slate-700">
                                                {partner.participants} participants
                                            </span>
                                        </div>
                                        <ArrowLeft size={16} className={`text-${partner.color}-600 transform rotate-180 group-hover:translate-x-1 transition-transform`} />
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
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
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
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
                        <Building2 size={24} className={`text-${partner.color}-600`} />
                        <span>About the Organization</span>
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        {partner.description}
                    </p>

                    <h4 className="font-semibold text-slate-900 mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                        {partner.focus_areas.map((area, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1.5 bg-${partner.color}-100 text-${partner.color}-700 text-sm font-medium rounded-lg`}
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Info</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">PID</p>
                            <p className="text-slate-900 font-mono text-sm">{partner.pid}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-slate-900">{partner.city}, {partner.country_name}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Participants</p>
                            <p className="text-slate-900">{partner.participants} youth + 1 Group Leader</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Role</p>
                            <p className="text-slate-900">{partner.role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key People */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                    <Users size={24} className={`text-${partner.color}-600`} />
                    <span>Key Personnel</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {partner.key_people.map((person, idx) => (
                        <div key={idx} className={`border-l-4 border-${partner.color}-500 bg-slate-50 p-5 rounded-r-lg`}>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{person.name}</h4>
                            <p className={`text-sm font-semibold text-${partner.color}-600 mb-3`}>{person.role}</p>
                            <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                {person.bio}
                            </p>
                            <div className={`bg-white border border-${partner.color}-200 rounded-lg p-3`}>
                                <p className="text-xs font-semibold text-slate-600 mb-1">ECU Contribution:</p>
                                <p className="text-sm text-slate-700">
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
