import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, FileText, Palette, BarChart3, Lightbulb, BookOpen, Rocket, Heart } from 'lucide-react';

const Sidebar = () => {
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

    const utilityItems = [
        // { id: 'ui-components', path: '/ui-components', icon: Palette, label: 'UI Components' },
    ];

    return (
        <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
            {/* Logo Area */}
            <div className="p-8 flex items-center gap-3 border-b border-gray-100">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl text-white shadow-lg">
                    <Heart size={24} fill="currentColor" />
                </div>
                <div>
                    <h1 className="font-bold text-xl text-gray-800 tracking-tight">ECU Dashboard</h1>
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full">Interactive</span>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Main Modules</p>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        {item.label}
                    </NavLink>
                ))}

                {/* <div className="pt-6">
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Utilities</p>
                    {utilityItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </div> */}
            </nav>

            {/* Footer */}
            {/* <div className="p-4 border-t border-gray-100">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white text-center">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1">Erasmus+ KA152</p>
                    <p className="text-sm font-semibold">Sept 2026</p>
                </div>
            </div> */}
        </div>
    );
};

export default Sidebar;
