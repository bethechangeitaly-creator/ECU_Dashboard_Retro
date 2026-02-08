import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CommandPalette from '../components/CommandPalette';

/**
 * Main Layout Component
 * Wraps all pages with Sidebar and Header
 * Mobile-responsive with collapsible sidebar
 */
const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-retro-light-gray dark:bg-retro-black font-pixel-body flex text-black dark:text-retro-white transition-colors duration-200 overflow-hidden relative">
            <div className="crt-overlay pointer-events-none fixed inset-0 z-[100]"></div>
            <CommandPalette />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 lg:ml-72 flex flex-col h-screen overflow-hidden border-l-4 border-retro-gray">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-retro-light-gray dark:bg-retro-dark-blue relative transition-colors duration-200">
                    {/* Grid Background Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    ></div>

                    <div className="max-w-7xl mx-auto relative z-10 border-2 border-retro-white p-2">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
