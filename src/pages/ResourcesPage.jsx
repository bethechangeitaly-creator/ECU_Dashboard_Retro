import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Book, Video, Image, FileCode, Calendar, AlertTriangle, Lock } from 'lucide-react';

/**
 * Resource Center Page - Documents, Templates, and Downloads
 */
const ResourcesPage = () => {
    const resourceCategories = [
        {
            id: 'project_docs',
            title: 'Project Documents',
            icon: FileText,
            color: 'blue',
            resources: [
                { name: 'Full Project Application', type: 'PDF', size: '2.4 MB', description: 'Complete YE KA152 Final Draft submission' },
                { name: 'Partnership Agreement', type: 'PDF', size: '856 KB', description: 'Signed agreement between 8 partner organizations' },
                { name: 'Budget Overview', type: 'XLSX', size: '124 KB', description: 'Detailed budget breakdown by partner' },
                { name: 'Risk Assessment & Safety Plan', type: 'PDF', size: '643 KB', description: 'Comprehensive safety protocols and emergency procedures' }
            ]
        },
        {
            id: 'timetable',
            title: 'Timetable & Schedule',
            icon: Calendar,
            color: 'emerald',
            resources: [
                { name: 'Complete 7-Day Timetable', type: 'PDF', size: '1.2 MB', description: 'Hour-by-hour program for all 7 days' },
                { name: 'Facilitator Guide', type: 'PDF', size: '3.1 MB', description: 'Detailed instructions for each session' },
                { name: 'Daily Checklist', type: 'PDF', size: '245 KB', description: 'Materials and logistics for each day' }
            ]
        },
        {
            id: 'methodology',
            title: 'Methodology & Activities',
            icon: Book,
            color: 'purple',
            resources: [
                { name: 'Body Mapping Guide', type: 'PDF', size: '1.8 MB', description: 'Step-by-step instructions for Day 1 activity' },
                { name: 'Fact-Checking Lab Toolkit', type: 'PDF', size: '2.2 MB', description: 'Complete materials for Day 5 media literacy workshop' },
                { name: 'Theatre of the Oppressed Manual', type: 'PDF', size: '1.5 MB', description: 'Facilitation guide for Day 4 emotional workshops' },
                { name: 'European Paths Simulation', type: 'PDF', size: '982 KB', description: 'Game materials and rules for Day 2 mobility activity' },
                { name: '30+ NFE Methods Collection', type: 'PDF', size: '4.2 MB', description: 'Complete methodology library used throughout the exchange' }
            ]
        },
        {
            id: 'templates',
            title: 'Templates & Forms',
            icon: FileCode,
            color: 'amber',
            resources: [
                { name: 'Youthpass Template', type: 'DOCX', size: '89 KB', description: 'Official Youthpass reflection template' },
                { name: 'Participant Application Form', type: 'PDF', size: '156 KB', description: 'Standard application for youth participants' },
                { name: 'Daily Reflection Sheet', type: 'PDF', size: '78 KB', description: 'Template for Reflection Families' },
                { name: 'Local Event Planning Template', type: 'DOCX', size: '124 KB', description: 'Template for organizing Multiplier Events' },
                { name: 'Evaluation Survey', type: 'Google Form', size: 'Online', description: 'Pre/post exchange evaluation questionnaire' }
            ]
        },
        {
            id: 'guidelines',
            title: 'Guidelines & Policies',
            icon: Book,
            color: 'rose',
            resources: [
                { name: 'Participant Info Pack', type: 'PDF', size: '1.9 MB', description: 'Essential information for participants before arrival' },
                { name: 'Code of Conduct', type: 'PDF', size: '234 KB', description: 'Behavioral expectations and agreements' },
                { name: 'Inclusion & Accessibility Guide', type: 'PDF', size: '567 KB', description: 'Support for participants with fewer opportunities' },
                { name: 'Sustainability Practices', type: 'PDF', size: '445 KB', description: 'Green travel, zero-waste, and environmental guidelines' }
            ]
        },
        {
            id: 'dissemination',
            title: 'Dissemination & Media',
            icon: Image,
            color: 'indigo',
            resources: [
                { name: 'Project Logo Pack', type: 'ZIP', size: '12 MB', description: 'Logos, brand guidelines, and visual identity' },
                { name: 'Social Media Kit', type: 'ZIP', size: '24 MB', description: 'Templates, graphics, and sample posts' },
                { name: 'Photography Guidelines', type: 'PDF', size: '342 KB', description: 'Best practices for documenting the exchange' },
                { name: 'Press Release Template', type: 'DOCX', size: '67 KB', description: 'Customizable press release for partners' }
            ]
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">Resource Center</h1>
                    <p className="text-white/90 text-lg mb-6">
                        Documents, templates, guidelines, and toolkits for the ECU Youth Exchange
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <FileText size={18} />
                            <span className="font-semibold">25+ Resources</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Download size={18} />
                            <span className="font-semibold">Open Access</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Demo/Approval Disclaimer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-sm flex items-start space-x-3"
            >
                <AlertTriangle className="text-amber-500 mt-0.5 flex-shrink-0" size={24} />
                <div>
                    <h3 className="text-amber-800 dark:text-amber-300 font-bold text-lg mb-1">Demonstration Mode</h3>
                    <p className="text-amber-700 dark:text-amber-200 leading-relaxed">
                        These resources are currently illustrative for demonstration purposes.
                        Full access and download functionality will be activated upon official project approval.
                    </p>
                </div>
            </motion.div>

            {/* Resource Categories */}
            {resourceCategories.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-xl flex items-center justify-center`}>
                                <IconComponent size={24} className={`text-${category.color}-600 dark:text-${category.color}-400`} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                                <p className="text-sm text-slate-500 dark:text-gray-400">{category.resources.length} resources available</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {category.resources.map((resource, ridx) => (
                                <div
                                    key={ridx}
                                    className={`flex items-start justify-between p-4 bg-slate-50 dark:bg-gray-700/50 rounded-lg hover:bg-${category.color}-50 dark:hover:bg-${category.color}-900/20 transition-colors group`}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <h3 className="font-bold text-slate-900 dark:text-white">{resource.name}</h3>
                                            <span className={`px-2 py-0.5 bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-700 dark:text-${category.color}-300 text-xs font-semibold rounded`}>
                                                {resource.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-gray-300 mb-1">{resource.description}</p>
                                        <p className="text-xs text-slate-400 dark:text-gray-500">{resource.size}</p>
                                    </div>
                                    <button className={`ml-4 flex-shrink-0 p-2 bg-slate-100 dark:bg-gray-800 text-slate-400 dark:text-gray-500 rounded-lg cursor-not-allowed border border-transparent dark:border-gray-700`} title="Locked until project approval">
                                        <Lock size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })}

            {/* Toolkit Notice */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-xl shadow-lg p-8 text-white"
            >
                <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <Book size={28} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">Open-Source Toolkit</h2>
                        <p className="text-white/90 leading-relaxed mb-4">
                            All resources will be compiled into a comprehensive open-source toolkit and released publicly <strong>3 months after the exchange</strong> (December 2026).
                        </p>
                        <p className="text-white/80 text-sm">
                            The toolkit will be available in multiple languages and freely accessible to youth workers, educators, and organizations worldwide.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResourcesPage;
