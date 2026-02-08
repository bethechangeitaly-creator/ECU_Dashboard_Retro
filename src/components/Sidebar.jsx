import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, FileText, BarChart3, Lightbulb, BookOpen, Rocket, Heart, X, Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const Sidebar = ({ isOpen, onClose }) => {
    const [colorTheme, setTheme] = useDarkMode();

    const menuItems = [
        { id: 'dashboard', path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'journey', path: '/journey', icon: Calendar, label: 'The Journey' },
        { id: 'partners', path: '/partners', icon: Users, label: 'Partners & People' },
        { id: 'impact', path: '/impact', icon: BarChart3, label: 'Impact Lab' },
        { id: 'dna', path: '/dna', icon: Lightbulb, label: 'Project DNA' },
        { id: 'methodology', path: '/methodology', icon: BookOpen, label: 'Methodology Hub' },
        { id: 'resources', path: '/resources', icon: FileText, label: 'Resource Center' },
        { id: 'followup', path: '/followup', icon: Rocket, label: 'Follow-Up' },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 lg:hidden font-pixel-body"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-72 bg-retro-black h-screen border-r-4 border-retro-white flex flex-col fixed left-0 top-0 z-50
                transform transition-transform duration-300 ease-steps-start
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 font-pixel-body
            `}>
                {/* Logo Area */}
                <div className="p-6 lg:p-8 flex items-center justify-between border-b-4 border-retro-gray bg-retro-dark-blue">
                    <div className="flex items-center gap-4">
                        <div className="bg-retro-red p-2 border-2 border-white text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Heart size={24} fill="currentColor" strokeWidth={3} />
                        </div>
                        <div>
                            <h1 className="font-pixel-header text-sm text-retro-white tracking-widest uppercase retro-shadow">ECU SYSTEM</h1>
                            <span className="text-[10px] text-retro-green bg-retro-black px-2 py-0.5 border border-retro-green mt-1 inline-block">V.1.0_READY</span>
                        </div>
                    </div>
                    {/* Close button for mobile */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 hover:bg-retro-red hover:text-white transition-colors border-2 border-transparent hover:border-white"
                    >
                        <X size={20} className="text-retro-white" />
                    </button>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-4 space-y-4 mt-8 overflow-y-auto">
                    <p className="px-4 text-xs font-bold text-retro-light-gray uppercase tracking-widest mb-2 border-b-2 border-retro-gray inline-block pb-1">.MODULES</p>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            end={item.path === '/'}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all duration-0 border-2 ${isActive
                                    ? 'bg-retro-blue text-white border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1 translate-y-1'
                                    : 'text-retro-light-gray border-transparent hover:bg-retro-gray hover:text-white hover:border-retro-white'
                                }`
                            }
                        >
                            <item.icon size={20} className="retro-icon" strokeWidth={2.5} />
                            <span className="uppercase tracking-wide">{item.label}</span>
                        </NavLink>
                    ))}

                    <div className="pt-4 mt-8 border-t-4 border-retro-gray">
                        <p className="px-4 text-xs font-bold text-retro-light-gray uppercase tracking-widest mb-4">.CONFIG</p>
                        <button
                            onClick={() => setTheme(colorTheme)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-retro-light-gray border-2 border-transparent hover:bg-retro-yellow hover:text-black hover:border-white transition-all duration-0"
                        >
                            {colorTheme === 'light' ? (
                                <>
                                    <Sun size={20} strokeWidth={2.5} />
                                    <span className="uppercase">Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <Moon size={20} strokeWidth={2.5} />
                                    <span className="uppercase">Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Footer simple credit */}
                <div className="p-4 text-[10px] text-center text-retro-gray uppercase font-pixel-body tracking-widest">
                    SYSTEM ONLINE_
                </div>
            </div>
        </>
    );
};

export default Sidebar;
