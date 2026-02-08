import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CommandPalette from '../components/CommandPalette';

/**
 * Main Layout Component
 * Wraps all pages with Sidebar and Header
 */
const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans flex text-slate-800">
            <CommandPalette />
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-8 pt-6">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
