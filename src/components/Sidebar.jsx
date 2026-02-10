import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard, Map, Users, Target, Dna, BookOpen, FileText,
    ArrowRightLeft, Power, Settings, Heart, Volume2, VolumeX, Moon, Sun, Info
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { gameAudio } from '../utils/gameAudio';

const Sidebar = ({ isOpen, onClose }) => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        const muted = gameAudio.toggleMute();
        setIsMuted(muted);
        if (!muted) gameAudio.playClick();
    };

    const handleMouseEnter = () => {
        if (!isMuted) gameAudio.playHover();
    };

    const handleClick = () => {
        if (window.innerWidth < 1024) onClose();
    };

    const navItems = [
        { path: '/', label: 'System_Dash', icon: LayoutDashboard },
        { path: '/journey', label: 'Journey_Log', icon: Map },
        { path: '/partners', label: 'Partners_DB', icon: Users },
        { path: '/impact', label: 'Impact_Lab', icon: Target },
        { path: '/dna', label: 'Project_DNA', icon: Dna },
        { path: '/methodology', label: 'Method_Hub', icon: BookOpen },
        { path: '/resources', label: 'Res_Center', icon: FileText },
        { path: '/followup', label: 'Action_Plan', icon: ArrowRightLeft },
    ];

    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-72 bg-retro-light-gray dark:bg-retro-dark-gray border-r-4 border-retro-gray transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    } flex flex-col shadow-2xl`}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-6 bg-retro-light-gray dark:bg-retro-dark-gray border-b-4 border-retro-gray">
                    <div className="flex items-center gap-3">
                        <div className="bg-retro-red p-2 border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                            <Heart size={20} className="text-white fill-white" />
                        </div>
                        <h1 className="font-pixel-header font-bold text-sm uppercase tracking-wider text-black dark:text-white">
                            ECU SYSTEM
                        </h1>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    <div className="mb-4">
                        <p className="px-4 text-[10px] font-bold text-retro-gray uppercase mb-2 tracking-wider">
                            Main_Modules
                        </p>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={handleClick}
                                    onMouseEnter={handleMouseEnter}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 transition-all duration-200 font-pixel-body uppercase tracking-wide cursor-pointer group ${isActive
                                            ? 'bg-retro-blue text-white border-2 border-white shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]'
                                            : 'text-retro-gray hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-retro-gray hover:border-2 hover:border-black'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <Icon size={18} className="shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="font-bold text-sm md:text-base">{item.label}</span>
                                            {isActive && <motion.span layoutId="active-dot" className="ml-auto w-2 h-2 bg-retro-green animate-blink" />}
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </div>

                    <div className="mt-8 border-t-2 border-retro-gray pt-4">
                        <p className="px-4 text-[10px] font-bold text-retro-gray uppercase mb-2 tracking-wider">
                            System_Control
                        </p>
                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-retro-gray hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-retro-dark-gray hover:border-2 hover:border-black transition-all font-pixel-body uppercase font-bold"
                            onMouseEnter={handleMouseEnter}
                            onClick={() => {
                                handleClick();
                                window.dispatchEvent(new CustomEvent('open-preferences'));
                            }}
                        >
                            <Settings size={18} />
                            <span>Preferences</span>
                        </button>
                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-retro-gray hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-retro-dark-gray hover:border-2 hover:border-black transition-all font-pixel-body uppercase font-bold"
                            onMouseEnter={handleMouseEnter}
                            onClick={() => {
                                handleClick();
                                window.dispatchEvent(new CustomEvent('open-credits'));
                            }}
                        >
                            <Info size={18} />
                            <span>Credits</span>
                        </button>
                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-retro-red hover:text-white hover:bg-retro-red dark:hover:bg-retro-dark-red hover:border-2 hover:border-black transition-all font-pixel-body uppercase font-bold"
                            onMouseEnter={handleMouseEnter}
                            onClick={() => {
                                handleClick();
                                window.dispatchEvent(new CustomEvent('open-disclaimer'));
                            }}
                        >
                            <Power size={18} />
                            <span>Log_Out</span>
                        </button>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t-4 border-retro-gray bg-retro-light-gray dark:bg-retro-dark-gray">
                    <div className="text-[10px] text-retro-gray text-center font-mono">
                        MEM: 640K OK <br />
                        © 2026 ECU CORP
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
