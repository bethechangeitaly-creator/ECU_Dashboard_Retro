import React from 'react';
import { Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

import NotificationCenter from './NotificationCenter';
import MessageCenter from './MessageCenter';

const Header = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between py-4 lg:py-6 px-4 lg:px-8 bg-retro-black border-b-4 border-retro-white">
            <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-retro-gray transition-colors border-2 border-transparent hover:border-white"
                >
                    <Menu size={24} className="text-retro-white" />
                </button>

                <div>
                    <h2 className="text-xl lg:text-2xl font-bold font-pixel-header text-retro-white retro-shadow tracking-widest uppercase">Dashboard</h2>
                    <p className="text-xs lg:text-sm text-retro-light-gray font-pixel-body hidden sm:block uppercase tracking-wide">&gt;&gt; ECU Youth Exchange System</p>
                </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                {/* Search - Terminal Style */}
                <div
                    className="relative cursor-pointer group hidden md:block"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                >
                    <div className="flex items-center pl-4 pr-4 py-2 bg-black border-2 border-retro-gray shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] w-48 lg:w-64 hover:border-retro-white transition-colors">
                        <span className="text-retro-green font-bold mr-2 text-sm">&gt;</span>
                        <span className="text-retro-green font-pixel-body text-sm uppercase tracking-wider">SEARCH_CMD</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="ml-1 w-2.5 h-4 bg-retro-green block"
                        />
                    </div>
                </div>

                {/* Mobile search button */}
                <button
                    className="md:hidden p-2 hover:bg-retro-gray transition-colors border-2 border-transparent hover:border-white"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                >
                    <Search size={20} className="text-retro-white" />
                </button>

                <div className="flex items-center gap-2 lg:gap-4">
                    <MessageCenter />
                    <NotificationCenter />
                </div>
            </div>
        </header>
    );
};

export default Header;
// Force Rebuild 1
