import React from 'react';
import { Search } from 'lucide-react';

import NotificationCenter from './NotificationCenter';
import MessageCenter from './MessageCenter';

const Header = () => {
    return (
        <header className="flex items-center justify-between py-6 px-8 bg-transparent">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                <p className="text-sm text-gray-500">Overview of the ECU Youth Exchange</p>
            </div>

            <div className="flex items-center gap-6">
                <div
                    className="relative cursor-pointer group"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search or jump to... (Cmd+K)"
                        readOnly
                        className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none w-64 shadow-sm text-gray-500 cursor-pointer hover:border-gray-300 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500 font-mono group-hover:bg-gray-200 transition-colors">⌘K</div>
                </div>

                <div className="flex items-center gap-2">
                    <MessageCenter />
                    <NotificationCenter />
                </div>
            </div>
        </header>
    );
};

export default Header;
