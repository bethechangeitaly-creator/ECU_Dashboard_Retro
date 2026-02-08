import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, User } from 'lucide-react';

const DayView = ({ dayData, onClose, partners }) => {
    if (!dayData) return null;

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Find partner info (simplified logic)
    const leadPartnerCode = dayData.activities[0]?.lead || 'IT';
    const leadPartner = partners.find(p => p.code === leadPartnerCode) || { name: 'Multiple', focus: 'Collaboration' };

    // Helper to get color class map (safelist colors in tailwind config if dynamic classes used)
    // For now we use inline styles or standard classes.
    // We'll use a standard gray for generic and specific colors for accents.

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10 font-sans"
            >
                {/* Header Section */}
                <div className={`relative p-8 text-white bg-gradient-to-r from-gray-800 to-gray-900 border-b-4 border-${dayData.color}`}>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex flex-col gap-1">
                        <span className="uppercase tracking-widest text-xs font-bold text-gray-400">
                            Day {dayData.day} • {dayData.date}
                        </span>
                        <h2 className="text-4xl font-extrabold flex items-center gap-3">
                            {dayData.part}
                        </h2>
                        <p className="text-xl font-medium text-gray-300 italic mt-2">
                            "{dayData.theme}"
                        </p>
                    </div>
                </div>

                {/* Body Section */}
                <div className="p-8 space-y-8">

                    {/* Partner Info */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-gray-700">
                            <User size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Lead Partner: {leadPartner.name} ({leadPartner.code})</h3>
                            <p className="text-gray-600 leading-relaxed mt-1">{leadPartner.focus}</p>
                        </div>
                    </div>

                    {/* Schedule / Timeline */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Clock className="text-gray-500" /> Daily Statistics & Schedule
                        </h3>

                        <div className="relative pl-4 border-l-2 border-gray-200 space-y-8">
                            {dayData.activities.map((act, idx) => (
                                <div key={idx} className="relative pl-6">
                                    {/* Timeline dot */}
                                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-300"></span>

                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                        <h4 className="font-bold text-gray-800 text-lg">{act.title}</h4>
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            {act.time}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Facilitated by <span className="font-semibold text-gray-700">{act.lead}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 border-t bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                        Close Dashboard
                    </button>
                </div>

            </motion.div>
        </div>
    );
};

export default DayView;
