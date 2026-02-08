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
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-64 bg-white dark:bg-gray-800 h-screen border-r border-gray-100 dark:border-gray-700 flex flex-col fixed left-0 top-0 z-50
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0
            `}>
                {/* Logo Area */}
                <div className="p-6 lg:p-8 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl text-white shadow-lg">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-gray-800 dark:text-gray-100 tracking-tight">ECU Dashboard</h1>
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full">Interactive</span>
                        </div>
                    </div>
                    {/* Close button for mobile */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <X size={20} className="text-gray-500 dark:text-gray-400" />
                    </button>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                    <p className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Main Modules</p>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            end={item.path === '/'}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200'
                                }`
                            }
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}

                    <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Preferences</p>
                        <button
                            onClick={() => setTheme(colorTheme)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-200"
                        >
                            {colorTheme === 'light' ? (
                                <>
                                    <Sun size={20} />
                                    <span>Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <Moon size={20} />
                                    <span>Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Footer simple credit */}
                <div className="p-4 text-xs text-center text-gray-400 dark:text-gray-600">
                    ECU v1.0
                </div>
            </div>
        </>
    );
};

export default Sidebar;
