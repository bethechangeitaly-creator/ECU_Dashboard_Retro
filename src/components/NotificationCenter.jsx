import React, { useState } from 'react';
import { Bell, Bookmark, MessageSquare, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationCenter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'info',
            title: 'System Update',
            message: 'Project status check required. Please bookmark this page.',
            time: 'JUST NOW',
            icon: Info,
            color: 'retro-blue'
        }
    ]);

    const markAllAsRead = () => {
        setNotifications([]);
        setIsOpen(false);
    };

    return (
        <div className="relative font-pixel-body">
            {/* Bell Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 border-2 transition-all ${isOpen
                    ? 'bg-retro-blue border-white text-white shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.5)] translate-y-1'
                    : 'bg-retro-light-gray border-white text-black hover:bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none'
                    }`}
            >
                <div className="relative">
                    <Bell size={20} />
                    {notifications.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-retro-red text-white text-[10px] font-bold px-1.5 border border-black animate-pulse">
                            {notifications.length}
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
                            className="absolute right-0 mt-4 w-80 bg-retro-light-gray border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden"
                        >
                            {/* Window Title Bar */}
                            <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray">
                                <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider">
                                    System_Messages
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_#000] flex items-center justify-center active:border-t-black active:border-l-black active:bg-gray-400 active:shadow-none"
                                >
                                    <X size={10} className="text-black" />
                                </button>
                            </div>

                            <div className="bg-white border-2 border-black border-t-0 max-h-[300px] overflow-y-auto p-2">
                                {notifications.length > 0 ? notifications.map((notif) => {
                                    const Icon = notif.icon;
                                    // Map retro colors
                                    const colorMap = {
                                        "retro-blue": "text-retro-blue",
                                        "retro-red": "text-retro-red",
                                        "retro-green": "text-retro-green",
                                        "retro-yellow": "text-retro-yellow",
                                        "blue": "text-retro-blue"
                                    };
                                    const iconColor = colorMap[notif.color] || "text-black";

                                    return (
                                        <div key={notif.id} className="mb-2 last:mb-0 relative group">
                                            <div className="bg-retro-light-gray border-2 border-retro-gray p-3 hover:bg-white hover:border-black transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                                                <div className="flex gap-3">
                                                    <div className={`mt-0.5 w-6 h-6 border-2 border-black bg-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                                        <Icon size={14} className={iconColor} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-black uppercase mb-1 font-pixel-header">{notif.title}</h4>
                                                        <p className="text-xs text-black leading-tight mb-2 font-bold">{notif.message}</p>
                                                        <span className="text-[10px] text-retro-dark-gray font-bold bg-white px-1 border border-retro-gray">{notif.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }) : (
                                    <div className="p-4 text-center text-retro-dark-gray font-bold text-xs uppercase">
                                        No new messages.
                                    </div>
                                )}
                            </div>

                            <div className="bg-retro-light-gray p-2 border-t-4 border-retro-white text-center">
                                <button
                                    onClick={markAllAsRead}
                                    className="px-4 py-1 bg-retro-gray text-white text-xs font-bold uppercase border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-black active:translate-y-1 active:shadow-none"
                                >
                                    Clear All
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationCenter;
