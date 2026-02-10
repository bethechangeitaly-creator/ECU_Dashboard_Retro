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
        <div className="relative font-pixel-body">
            {/* Mail Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 border-2 transition-all ${isOpen
                    ? 'bg-retro-blue border-white text-white shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.5)] translate-y-1'
                    : 'bg-retro-light-gray border-white text-black hover:bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none dark:bg-dark-elevated dark:border-dark-border dark:text-retro-white dark:hover:bg-dark-surface dark:shadow-[4px_4px_0px_0px_#000]'
                    }`}
            >
                <div className="relative">
                    <Mail size={20} />
                    {messages.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-retro-red text-white text-[10px] font-bold px-1.5 border border-black animate-retro-blink">
                            {messages.length}
                        </span>
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
                            transition={{ duration: 0.1 }}
                            className="absolute right-0 mt-4 w-80 max-w-[calc(100vw-2rem)] bg-retro-light-gray dark:bg-dark-surface border-4 border-retro-white dark:border-dark-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden"
                        >
                            {/* Window Title Bar */}
                            <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray">
                                <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider">
                                    Inbox_Messages
                                </span>
                                {messages.length > 0 && (
                                    <span className="text-[10px] font-bold bg-retro-white text-black px-1.5 border border-black">{messages.length} New</span>
                                )}
                            </div>

                            <div className="bg-white dark:bg-dark-elevated border-2 border-black dark:border-dark-border border-t-0 max-h-[300px] overflow-y-auto p-2">
                                {messages.length > 0 ? (
                                    messages.map((msg) => {
                                        const Icon = msg.icon;
                                        return (
                                            <div key={msg.id} className="mb-2 last:mb-0 relative group">
                                                <div className="bg-retro-light-gray border-2 border-retro-gray p-3 hover:bg-white hover:border-black transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                                                    <div className="flex gap-3">
                                                        <div className={`mt-0.5 w-6 h-6 border-2 border-black bg-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                                            <Icon size={14} className="text-retro-blue" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-black uppercase mb-1 font-pixel-header">{msg.title}</h4>
                                                            <p className="text-xs text-black leading-tight mb-2 font-bold">{msg.message}</p>
                                                            <span className="text-[10px] text-retro-dark-gray font-bold bg-white px-1 border border-retro-gray">{msg.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="p-4 text-center text-retro-dark-gray font-bold text-xs uppercase">
                                        No new messages.
                                    </div>
                                )}
                            </div>

                            {messages.length > 0 && (
                                <div className="bg-retro-light-gray dark:bg-dark-surface p-2 border-t-4 border-retro-white dark:border-dark-border text-center">
                                    <button
                                        onClick={markAllAsRead}
                                        className="px-4 py-1 bg-retro-gray text-white text-xs font-bold uppercase border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-black active:translate-y-1 active:shadow-none"
                                    >
                                        Clear Inbox
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
// Force Rebuild 1
