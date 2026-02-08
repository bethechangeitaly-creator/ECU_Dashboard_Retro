import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Filter, Lightbulb, Users, Palette, Heart, Settings } from 'lucide-react';

/**
 * Methodology Hub Page - NFE Methods Library - Retro Edition
 */
const MethodologyPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Methods', count: 21, color: 'retro-gray' },
        { id: 'art', name: 'Art-Based', count: 8, color: 'retro-magenta' },
        { id: 'participatory', name: 'Participatory', count: 7, color: 'retro-blue' },
        { id: 'simulation', name: 'Simulation', count: 5, color: 'retro-green' },
        { id: 'experiential', name: 'Experiential', count: 4, color: 'retro-orange' },
        { id: 'reflective', name: 'Reflective', count: 3, color: 'retro-red' },
        { id: 'digital', name: 'Digital', count: 3, color: 'retro-cyan' }
    ];

    const methods = [
        // Art-Based
        { name: "Body Mapping", category: "art", description: "Participants create life-size body outlines on paper and fill them with symbols, colors, words representing their identity, experiences, and feelings.", days: [1], color: "retro-magenta" },
        { name: "Theatre of the Oppressed", category: "art", description: "Interactive theatre technique where participants explore social issues and power dynamics through role-play and dramatization.", days: [4], color: "retro-magenta" },
        { name: "Visual Storytelling", category: "art", description: "Using drawing, photography, or collage to narratives and experiences without relying solely on verbal communication.", days: [2, 6], color: "retro-magenta" },
        { name: "Symbolic Ritual", category: "art", description: "Creating meaningful ceremonies with symbolic actions to mark important moments and transitions in the learning journey.", days: [1, 7], color: "retro-magenta" },

        // Participatory
        { name: "Circle Work", category: "participatory", description: "Democratic dialogue format where all participants sit in a circle, ensuring equal voice and shared leadership.", days: [1, 4, 7], color: "retro-blue" },
        { name: "World Café", category: "participatory", description: "Structured conversational process for knowledge sharing where small groups discuss questions at different 'café tables'.", days: [3], color: "retro-blue" },
        { name: "Open Space Technology", category: "participatory", description: "Self-organizing meeting format allowing participants to create their own agenda and choose discussions based on passion and responsibility.", days: [6], color: "retro-blue" },
        { name: "Reflection Families", category: "participatory", description: "Stable small groups (5-6 people) that meet daily to process experiences, share discoveries, and connect activities to personal learning.", days: [1, 2, 3, 4, 5, 6, 7], color: "retro-blue" },

        // Simulation & Games
        { name: "European Paths Simulation", category: "simulation", description: "Interactive game simulating migration experiences and mobility challenges across European borders.", days: [2], color: "retro-green" },
        { name: "News Factory", category: "simulation", description: "Participants create fake news and propaganda to understand mechanisms of disinformation from the inside.", days: [5], color: "retro-green" },
        { name: "Role Play", category: "simulation", description: "Participants assume different roles to explore perspectives, practice skills, and understand complex situations.", days: [2, 4, 5], color: "retro-green" },

        // Experiential
        { name: "Outdoor Mindfulness", category: "experiential", description: "Nature-based activities combining movement, breathing, and sensory awareness to develop emotional regulation.", days: [4], color: "retro-orange" },
        { name: "Community Action", category: "experiential", description: "Hands-on local volunteer activity connecting participants directly with the host community.", days: [6], color: "retro-orange" },
        { name: "Maker Lab", category: "experiential", description: "Creative workspace where participants build tangible prototypes and solutions for community challenges.", days: [6], color: "retro-orange" },
        { name: "Km0 Cooking", category: "experiential", description: "Collaborative cooking using local, seasonal ingredients to explore sustainable food systems practically.", days: [3], color: "retro-orange" },

        // Reflective
        { name: "Youthpass Reflection", category: "reflective", description: "Structured process connecting daily experiences to 8 key competencies for personal, social, and professional development.", days: [1, 2, 3, 4, 5, 6, 7], color: "retro-red" },
        { name: "Debriefing Sessions", category: "reflective", description: "Facilitated group discussions after activities to extract learning, process emotions, and make meaning.", days: [1, 2, 3, 4, 5, 6, 7], color: "retro-red" },
        { name: "Emotional Mapping", category: "reflective", description: "Visual technique mapping emotions to body parts and experiences to increase emotional awareness.", days: [4], color: "retro-red" },

        // Digital
        { name: "Fact-Checking Lab", category: "digital", description: "Hands-on workshop teaching participants to verify online information using professional fact-checking tools and techniques.", days: [5], color: "retro-cyan" },
        { name: "Digital Cleanup", category: "digital", description: "Practical session deleting unused files, emails, and apps to reduce digital carbon footprint.", days: [5], color: "retro-cyan" },
        { name: "Algorithm Workshop", category: "digital", description: "Interactive session revealing how social media algorithms create filter bubbles and influence information consumption.", days: [5], color: "retro-cyan" }
    ];

    const filteredMethods = methods.filter(method => {
        const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
        const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            method.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-8 font-pixel-body">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-magenta border-4 border-retro-white p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pixel-header tracking-widest uppercase retro-shadow">Methodology Hub</h1>
                    <p className="text-white text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan">
                        &gt; NFE Methods Library v1.0
                    </p>
                    <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
                        <BookOpen size={18} className="text-retro-yellow" />
                        <span className="font-bold text-retro-yellow uppercase">{methods.length} Methods | 7 Categories</span>
                    </div>
                </div>
            </motion.div>

            {/* Search & Filter */}
            <div className="bg-retro-light-gray border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
                {/* Window Title Bar */}
                <div className="bg-retro-blue px-2 py-1 flex items-center justify-between border-b-4 border-retro-gray mb-6 -mx-2 -mt-2">
                    <span className="text-white font-bold font-pixel-header text-xs uppercase tracking-wider pl-2">
                        Search_Filter.exe
                    </span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-retro-light-gray border border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <Search className="text-black" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="SEARCH DATABASE..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border-2 border-black bg-white text-black font-bold uppercase placeholder-retro-gray shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:bg-retro-yellow focus:text-black"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => {
                        // Determine retro color class for background/text
                        let colorClass = "bg-retro-white text-black";
                        if (selectedCategory === cat.id) {
                            if (cat.id === 'all') colorClass = "bg-black text-white";
                            else if (cat.id === 'art') colorClass = "bg-retro-magenta text-white";
                            else if (cat.id === 'participatory') colorClass = "bg-retro-blue text-white";
                            else if (cat.id === 'simulation') colorClass = "bg-retro-green text-black";
                            else if (cat.id === 'experiential') colorClass = "bg-retro-orange text-black";
                            else if (cat.id === 'reflective') colorClass = "bg-retro-red text-white";
                            else if (cat.id === 'digital') colorClass = "bg-retro-cyan text-black";
                        }

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 font-bold text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all ${colorClass} ${selectedCategory !== cat.id ? 'hover:bg-white' : ''}`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Methods Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredMethods.map((method, idx) => {
                        // Map colors
                        let borderColor = "border-black";
                        let headerColor = "bg-retro-gray";
                        let textColor = "text-black";

                        if (method.color === "retro-magenta") { headerColor = "bg-retro-magenta"; }
                        else if (method.color === "retro-blue") { headerColor = "bg-retro-blue"; }
                        else if (method.color === "retro-green") { headerColor = "bg-retro-green"; }
                        else if (method.color === "retro-orange") { headerColor = "bg-retro-orange"; }
                        else if (method.color === "retro-red") { headerColor = "bg-retro-red"; }
                        else if (method.color === "retro-cyan") { headerColor = "bg-retro-cyan"; }


                        return (
                            <motion.div
                                key={method.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
                            >
                                <div className={`h-6 ${headerColor} border-b-4 border-black flex items-center px-2`}>
                                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-black mb-3 font-pixel-header uppercase leading-tight">{method.name}</h3>
                                    <div className="bg-retro-light-gray border-2 border-black p-3 mb-4 flex-1 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]">
                                        <p className="text-sm text-black font-bold leading-relaxed font-pixel-body">
                                            {method.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {method.days.map(day => (
                                            <span key={day} className={`px-2 py-1 bg-black text-white text-[10px] font-bold uppercase border border-retro-gray`}>
                                                Day {day}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </motion.div>

            {filteredMethods.length === 0 && (
                <div className="text-center py-12 bg-retro-light-gray border-4 border-retro-white border-dashed">
                    <p className="text-retro-gray font-bold font-pixel-header uppercase text-sm">No data found in sector.</p>
                </div>
            )}
        </div>
    );
};

export default MethodologyPage;
