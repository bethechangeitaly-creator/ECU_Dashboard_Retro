import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, Mail, X, ChevronDown, Terminal, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageCenter from './MessageCenter';
import NotificationCenter from './NotificationCenter';
import { gameAudio } from '../utils/gameAudio';
import InstitutionalLogos from './InstitutionalLogos';

const Header = ({ onMenuClick }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        gameAudio.playSuccess(); // Play success sound on search
        // Open CommandPalette instead of showing modal
        window.dispatchEvent(new Event('open-command-palette'));
        setSearchQuery('');
    };

    const handleMouseEnter = () => {
        gameAudio.playHover();
    };

    const handleClick = () => {
        // gameAudio.playClick(); // Handled globally now
    };

    return (
        <>
            <header className="h-16 bg-retro-light-gray dark:bg-retro-dark-gray border-b-4 border-retro-gray flex items-center justify-between px-4 sticky top-0 z-30 shadow-md">
                <div className="flex items-center">
                    <button
                        onClick={(e) => { handleClick(); onMenuClick(e); }}
                        onMouseEnter={handleMouseEnter}
                        className="lg:hidden mr-2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white bg-retro-light-gray shrink-0 text-black relative z-50"
                    >
                        <Menu size={24} />
                    </button>



                    {/* Desktop Branding */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="hidden lg:block">
                            <InstitutionalLogos variant="header" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Retro Search Bar */}
                    <div className="hidden lg:block relative">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="SEARCH_CMD..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-black text-retro-green font-pixel-body px-4 py-1 pr-10 w-40 lg:w-64 border-2 border-retro-gray focus:outline-none focus:border-retro-green uppercase shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] transition-all"
                            />
                            <button
                                type="submit"
                                onMouseEnter={handleMouseEnter}
                                onClick={handleClick}
                                className="absolute right-1 top-1 text-retro-green hover:text-white"
                            >
                                <Terminal size={16} />
                            </button>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="absolute right-8 top-1.5 w-2 h-4 bg-retro-green"
                            />
                        </form>
                    </div>

                    {/* Mobile Search Trigger */}
                    <div className="lg:hidden">
                        <button
                            onClick={(e) => { handleClick(); handleSearch(e); }}
                            className="p-1 text-black dark:text-retro-white hover:text-retro-blue transition-colors"
                        >
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Icons with Retro Dropdowns */}
                    <div className="flex items-center space-x-2">
                        <div onMouseEnter={handleMouseEnter} onClick={handleClick}>
                            <MessageCenter />
                        </div>
                        <div onMouseEnter={handleMouseEnter} onClick={handleClick}>
                            <NotificationCenter />
                        </div>
                    </div>

                    {/* Clock */}
                    <div className="hidden lg:flex flex-col items-end border-l-2 border-retro-gray pl-4">
                        <span className="font-pixel-header text-xs font-bold pointer-events-none">
                            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="text-[10px] text-retro-gray uppercase pointer-events-none">
                            Sys_Time
                        </span>
                    </div>
                </div>
            </header >
        </>
    );
};

export default Header;
