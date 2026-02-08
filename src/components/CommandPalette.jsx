import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Map, FileText, Heart, Brain, BookOpen, Rocket, X, ArrowRight, Command } from 'lucide-react';

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
                        className="fixed inset-0 bg-retro-black/50 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.1 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-retro-light-gray border-4 border-retro-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden flex flex-col font-pixel-body"
                    >
                        {/* Window Title Bar */}
                        <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray">
                            <div className="flex items-center gap-2">
                                <Command size={16} className="text-white" />
                                <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider">
                                    Run_Command.exe
                                </span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-5 h-5 bg-retro-light-gray border-2 border-white shadow-[1px_1px_0px_0px_#000] flex items-center justify-center active:border-t-black active:border-l-black active:bg-gray-400 active:shadow-none"
                            >
                                <X size={12} className="text-black" />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="p-4 bg-retro-light-gray">
                            <div className="flex items-center px-4 py-3 bg-white border-2 border-retro-dark-gray shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]">
                                <Search className="text-black mr-3" size={20} />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Type a command or search..."
                                    className="flex-1 bg-transparent border-none outline-none text-lg text-black placeholder-retro-gray font-bold font-pixel-body uppercase"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-2 bg-retro-light-gray border-t-2 border-white">
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
                                                className={`flex items-center px-4 py-2 cursor-pointer transition-colors border-2 ${isSelected
                                                    ? 'bg-retro-blue border-white text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                                    : 'bg-transparent border-transparent text-black hover:bg-white hover:border-black'
                                                    }`}
                                            >
                                                <div className={`mr-4 ${isSelected ? 'text-retro-yellow' : 'text-black'}`}>
                                                    <Icon size={18} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`text-sm font-bold font-pixel-body uppercase ${isSelected ? 'text-white' : 'text-black'}`}>
                                                        {item.name}
                                                    </h4>
                                                    <span className={`text-xs font-bold ${isSelected ? 'text-retro-light-gray' : 'text-retro-dark-gray'}`}>{item.category}</span>
                                                </div>
                                                {isSelected && (
                                                    <ArrowRight size={16} className="text-white animate-pulse" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-6 py-12 text-center text-retro-dark-gray">
                                    <p className="font-bold font-pixel-body uppercase">No matching files found.</p>
                                </div>
                            )}
                        </div>

                        {/* Footer Hints */}
                        <div className="px-4 py-2 bg-retro-light-gray border-t-2 border-retro-gray flex items-center justify-between text-xs text-black font-bold font-pixel-body">
                            <div className="flex gap-4">
                                <span className="flex items-center uppercase"><span className="bg-white border border-black px-1 mr-1 shadow-[1px_1px_0px_0px_#000]">↑↓</span> Navigate</span>
                                <span className="flex items-center uppercase"><span className="bg-white border border-black px-1 mr-1 shadow-[1px_1px_0px_0px_#000]">↵</span> Select</span>
                            </div>
                            <span className="uppercase">Retro_OS v1.0</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
