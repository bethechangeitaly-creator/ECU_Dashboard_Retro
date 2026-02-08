import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageCenter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'alert',
            title: 'Coordinator Access',
            message: 'The private Coordinator Section will be activated automatically upon official project approval.',
            time: '2 mins ago',
            icon: MessageSquare,
            color: 'amber'
        }
    ]);

    const markAllAsRead = () => {
        setMessages([]);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Mail Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition w-12 h-12 flex items-center justify-center"
            >
                <div className="relative">
                    <Mail size={20} />
                    {messages.length > 0 && (
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                    )}
                </div>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for closing */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden"
                        >
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                                <h3 className="font-semibold text-slate-800">Messages</h3>
                                {messages.length > 0 && (
                                    <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{messages.length} New</span>
                                )}
                            </div>

                            <div className="max-h-[300px] overflow-y-auto">
                                {messages.length > 0 ? (
                                    messages.map((msg) => {
                                        const Icon = msg.icon;
                                        return (
                                            <div key={msg.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors last:border-0 relative group">
                                                <div className="flex gap-3">
                                                    <div className={`mt-1 w-8 h-8 rounded-full bg-${msg.color}-100 flex items-center justify-center flex-shrink-0`}>
                                                        <Icon size={14} className={`text-${msg.color}-600`} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{msg.title}</h4>
                                                        <p className="text-xs text-slate-600 leading-relaxed mb-1">{msg.message}</p>
                                                        <span className="text-[10px] text-slate-400 font-medium">{msg.time}</span>
                                                    </div>
                                                </div>
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="p-8 text-center text-slate-500">
                                        <p className="text-sm">No new messages</p>
                                    </div>
                                )}
                            </div>

                            {messages.length > 0 && (
                                <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 text-center">
                                    <button
                                        onClick={markAllAsRead}
                                        className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                                    >
                                        Clear messages
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MessageCenter;
