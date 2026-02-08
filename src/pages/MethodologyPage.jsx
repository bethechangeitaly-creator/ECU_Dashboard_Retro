import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Filter, Lightbulb, Users, Palette, Heart } from 'lucide-react';

/**
 * Methodology Hub Page - NFE Methods Library
 */
const MethodologyPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Methods', count: 21, color: 'slate' },
        { id: 'art', name: 'Art-Based', count: 8, color: 'purple' },
        { id: 'participatory', name: 'Participatory', count: 7, color: 'blue' },
        { id: 'simulation', name: 'Simulation & Games', count: 5, color: 'emerald' },
        { id: 'experiential', name: 'Experiential', count: 4, color: 'amber' },
        { id: 'reflective', name: 'Reflective', count: 3, color: 'rose' },
        { id: 'digital', name: 'Digital', count: 3, color: 'indigo' }
    ];

    const methods = [
        // Art-Based
        { name: "Body Mapping", category: "art", description: "Participants create life-size body outlines on paper and fill them with symbols, colors, words representing their identity, experiences, and feelings.", days: [1], color: "purple" },
        { name: "Theatre of the Oppressed", category: "art", description: "Interactive theatre technique where participants explore social issues and power dynamics through role-play and dramatization.", days: [4], color: "purple" },
        { name: "Visual Storytelling", category: "art", description: "Using drawing, photography, or collage to narratives and experiences without relying solely on verbal communication.", days: [2, 6], color: "purple" },
        { name: "Symbolic Ritual", category: "art", description: "Creating meaningful ceremonies with symbolic actions to mark important moments and transitions in the learning journey.", days: [1, 7], color: "purple" },

        // Participatory
        { name: "Circle Work", category: "participatory", description: "Democratic dialogue format where all participants sit in a circle, ensuring equal voice and shared leadership.", days: [1, 4, 7], color: "blue" },
        { name: "World Café", category: "participatory", description: "Structured conversational process for knowledge sharing where small groups discuss questions at different 'café tables'.", days: [3], color: "blue" },
        { name: "Open Space Technology", category: "participatory", description: "Self-organizing meeting format allowing participants to create their own agenda and choose discussions based on passion and responsibility.", days: [6], color: "blue" },
        { name: "Reflection Families", category: "participatory", description: "Stable small groups (5-6 people) that meet daily to process experiences, share discoveries, and connect activities to personal learning.", days: [1, 2, 3, 4, 5, 6, 7], color: "blue" },

        // Simulation & Games
        { name: "European Paths Simulation", category: "simulation", description: "Interactive game simulating migration experiences and mobility challenges across European borders.", days: [2], color: "emerald" },
        { name: "News Factory", category: "simulation", description: "Participants create fake news and propaganda to understand mechanisms of disinformation from the inside.", days: [5], color: "emerald" },
        { name: "Role Play", category: "simulation", description: "Participants assume different roles to explore perspectives, practice skills, and understand complex situations.", days: [2, 4, 5], color: "emerald" },

        // Experiential
        { name: "Outdoor Mindfulness", category: "experiential", description: "Nature-based activities combining movement, breathing, and sensory awareness to develop emotional regulation.", days: [4], color: "amber" },
        { name: "Community Action", category: "experiential", description: "Hands-on local volunteer activity connecting participants directly with the host community.", days: [6], color: "amber" },
        { name: "Maker Lab", category: "experiential", description: "Creative workspace where participants build tangible prototypes and solutions for community challenges.", days: [6], color: "amber" },
        { name: "Km0 Cooking", category: "experiential", description: "Collaborative cooking using local, seasonal ingredients to explore sustainable food systems practically.", days: [3], color: "amber" },

        // Reflective
        { name: "Youthpass Reflection", category: "reflective", description: "Structured process connecting daily experiences to 8 key competencies for personal, social, and professional development.", days: [1, 2, 3, 4, 5, 6, 7], color: "rose" },
        { name: "Debriefing Sessions", category: "reflective", description: "Facilitated group discussions after activities to extract learning, process emotions, and make meaning.", days: [1, 2, 3, 4, 5, 6, 7], color: "rose" },
        { name: "Emotional Mapping", category: "reflective", description: "Visual technique mapping emotions to body parts and experiences to increase emotional awareness.", days: [4], color: "rose" },

        // Digital
        { name: "Fact-Checking Lab", category: "digital", description: "Hands-on workshop teaching participants to verify online information using professional fact-checking tools and techniques.", days: [5], color: "indigo" },
        { name: "Digital Cleanup", category: "digital", description: "Practical session deleting unused files, emails, and apps to reduce digital carbon footprint.", days: [5], color: "indigo" },
        { name: "Algorithm Workshop", category: "digital", description: "Interactive session revealing how social media algorithms create filter bubbles and influence information consumption.", days: [5], color: "indigo" }
    ];

    const filteredMethods = methods.filter(method => {
        const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
        const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            method.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Methodology Hub</h1>
                    <p className="text-white/90 text-lg mb-6">
                        Explore 21 Non-Formal Education methods used throughout the exchange
                    </p>
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                        <BookOpen size={18} />
                        <span className="font-semibold">{methods.length} Methods | 7 Categories</span>
                    </div>
                </div>
            </motion.div>

            {/* Search & Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search methods..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${selectedCategory === cat.id
                                ? `bg-${cat.color}-600 text-white`
                                : `bg-${cat.color}-100 text-${cat.color}-700 hover:bg-${cat.color}-200`
                                }`}
                        >
                            {cat.name} ({cat.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Methods Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredMethods.map((method, idx) => (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className={`h-1 bg-${method.color}-500 rounded-t-xl mb-4 -mx-6 -mt-6`}></div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{method.name}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                {method.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {method.days.map(day => (
                                    <span key={day} className={`px-2 py-1 bg-${method.color}-100 text-${method.color}-700 text-xs font-semibold rounded`}>
                                        Day {day}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredMethods.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-500">No methods found matching your criteria. Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
};

export default MethodologyPage;
