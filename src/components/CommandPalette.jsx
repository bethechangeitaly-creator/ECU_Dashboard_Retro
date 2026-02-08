import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Map, FileText, Heart, Brain, BookOpen, Rocket, X, ArrowRight } from 'lucide-react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    // Toggle with Cmd+K / Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        const handleOpenEvent = () => setIsOpen(true);

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('open-command-palette', handleOpenEvent);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('open-command-palette', handleOpenEvent);
        };
    }, []);

    // Searchable Data
    const items = [
        { category: 'Pages', name: 'Dashboard', icon: Search, path: '/' },
        { category: 'Pages', name: '7-Day Journey', icon: Map, path: '/journey' },
        { category: 'Pages', name: 'Partnership Network', icon: FileText, path: '/partners' },
        { category: 'Pages', name: 'Impact Lab', icon: Heart, path: '/impact' },
        { category: 'Pages', name: 'Project DNA', icon: Brain, path: '/dna' },
        { category: 'Pages', name: 'Methodology Hub', icon: BookOpen, path: '/methodology' },
        { category: 'Pages', name: 'Resource Center', icon: FileText, path: '/resources' },
        { category: 'Pages', name: 'Follow-Up Plan', icon: Rocket, path: '/followup' },

        { category: 'Journey', name: 'Day 1: The Skin (Identity)', icon: Map, path: '/journey/1' },
        { category: 'Journey', name: 'Day 2: The Feet (Movement)', icon: Map, path: '/journey/2' },
        { category: 'Journey', name: 'Day 3: The Stomach (Emotions)', icon: Map, path: '/journey/3' },
        { category: 'Journey', name: 'Day 4: The Heart (Connection)', icon: Map, path: '/journey/4' },
        { category: 'Journey', name: 'Day 5: The Head (Critical Thinking)', icon: Map, path: '/journey/5' },
        { category: 'Journey', name: 'Day 6: The Hands (Creation)', icon: Map, path: '/journey/6' },
        { category: 'Journey', name: 'Day 7: The Full Body (Integration)', icon: Map, path: '/journey/7' },

        { category: 'Resources', name: 'Full Project Application', icon: FileText, path: '/resources' },
        { category: 'Resources', name: 'Timetable', icon: FileText, path: '/resources' },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Limit to 8 results

    // Navigation Logic
    useEffect(() => {
        const handleNavigation = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    navigate(filteredItems[selectedIndex].path);
                    setIsOpen(false);
                    setQuery('');
                }
            }
        };

        window.addEventListener('keydown', handleNavigation);
        return () => window.removeEventListener('keydown', handleNavigation);
    }, [isOpen, filteredItems, selectedIndex, navigate]);

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.1 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden flex flex-col"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-4 border-b border-slate-100">
                            <Search className="text-slate-400 mr-3" size={20} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search pages, days, or resources..."
                                className="flex-1 bg-transparent border-none outline-none text-lg text-slate-800 placeholder-slate-400"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-slate-100 rounded-md text-slate-400 transition-colors"
                            >
                                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded border border-slate-200">ESC</span>
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredItems.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredItems.map((item, index) => {
                                        const Icon = item.icon;
                                        const isSelected = index === selectedIndex;
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    navigate(item.path);
                                                    setIsOpen(false);
                                                }}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors ${isSelected ? 'bg-indigo-50' : 'hover:bg-slate-50'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg mr-4 ${isSelected ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                                                    <Icon size={18} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`text-sm font-medium ${isSelected ? 'text-indigo-900' : 'text-slate-700'}`}>
                                                        {item.name}
                                                    </h4>
                                                    <span className="text-xs text-slate-400">{item.category}</span>
                                                </div>
                                                {isSelected && (
                                                    <ArrowRight size={16} className="text-indigo-400" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-6 py-12 text-center text-slate-500">
                                    <p>No results found for "{query}"</p>
                                </div>
                            )}
                        </div>

                        {/* Footer Hints */}
                        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-4 text-xs text-slate-400">
                            <span className="flex items-center"><span className="mr-1">↑↓</span> to navigate</span>
                            <span className="flex items-center"><span className="mr-1">↵</span> to select</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
