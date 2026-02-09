import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CommandPalette from '../components/CommandPalette';
import PreferencesWindow from '../components/PreferencesWindow';
import DisclaimerModal from '../components/DisclaimerModal';

/**
 * Main Layout Component
 * Wraps all pages with Sidebar and Header
 * Mobile-responsive with collapsible sidebar
 */
const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { pathname } = useLocation();
    const mainRef = React.useRef(null);

    // Scroll to top on route change
    React.useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
    }, [pathname]);

    // Global Audio Listener
    React.useEffect(() => {
        const handleGlobalClick = (e) => {
            // Check if the click target is interactive
            const target = e.target.closest('button, a, input[type="submit"], [role="button"]');

            if (target) {
                // Determine if we should play the standard click sound
                // Some components might stopPropagation, so this listener on window capturing phase (or bubbling) helps.
                // We use bubbling phase here (default)

                // Avoid double playing if the component handles it explicitly (though our goal is to remove explicit calls)
                // For now, simple check is enough.
                import('../utils/gameAudio').then(({ gameAudio }) => {
                    gameAudio.playClick();
                });
            }
        };

        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);
    }, []);

    return (
        <div className="min-h-screen h-[100dvh] bg-retro-light-gray dark:bg-retro-black font-pixel-body flex text-black dark:text-retro-white overflow-hidden relative">
            <div className="crt-overlay pointer-events-none fixed inset-0 z-[100]"></div>
            <CommandPalette />
            <PreferencesWindow />
            <DisclaimerModal />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 lg:ml-72 flex flex-col h-[100dvh] overflow-hidden border-l-4 border-retro-gray">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main ref={mainRef} className="flex-1 overflow-y-auto overflow-x-hidden p-0.5 xs:p-1 lg:p-8 pb-24 lg:pb-8 bg-retro-light-gray dark:bg-retro-dark-blue relative has-retro-scrollbar">
                    {/* Grid Background Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    ></div>

                    <div className="max-w-7xl mx-auto relative z-10 border-2 border-retro-white p-0 xs:p-1">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
