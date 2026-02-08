import React from 'react';
import { Search, Menu } from 'lucide-react';

import NotificationCenter from './NotificationCenter';
import MessageCenter from './MessageCenter';

const Header = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between py-4 lg:py-6 px-4 lg:px-8 bg-transparent">
            <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <Menu size={24} className="text-gray-600" />
                </button>

                <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">Overview of the ECU Youth Exchange</p>
                </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                {/* Search - hidden on mobile */}
                <div
                    className="relative cursor-pointer group hidden md:block"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search... (Cmd+K)"
                        readOnly
                        className="pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none w-48 lg:w-64 shadow-sm text-gray-500 dark:text-gray-300 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-gray-400 font-mono group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">⌘K</div>
                </div>

                {/* Mobile search button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                >
                    <Search size={20} className="text-gray-600" />
                </button>

                <div className="flex items-center gap-1 lg:gap-2">
                    <MessageCenter />
                    <NotificationCenter />
                </div>
            </div>
        </header>
    );
};

export default Header;
