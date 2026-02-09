import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Book, Video, Image, FileCode, Calendar, AlertTriangle, Lock } from 'lucide-react';

/**
 * Resource Center Page - Documents, Templates, and Downloads - Retro Edition
 */
const ResourcesPage = () => {
    const resourceCategories = [
        {
            id: 'project_docs',
            title: 'Project Documents',
            icon: FileText,
            color: 'retro-blue',
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
            color: 'retro-green',
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
            color: 'retro-magenta',
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
            color: 'retro-orange',
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
            color: 'retro-red',
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
            color: 'retro-cyan',
            resources: [
                { name: 'Project Logo Pack', type: 'ZIP', size: '12 MB', description: 'Logos, brand guidelines, and visual identity' },
                { name: 'Social Media Kit', type: 'ZIP', size: '24 MB', description: 'Templates, graphics, and sample posts' },
                { name: 'Photography Guidelines', type: 'PDF', size: '342 KB', description: 'Best practices for documenting the exchange' },
                { name: 'Press Release Template', type: 'DOCX', size: '67 KB', description: 'Customizable press release for partners' }
            ]
        }
    ];

    return (
        <div className="space-y-8 font-pixel-body overflow-x-hidden w-full">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-cyan border-4 border-retro-white p-4 xs:p-6 md:p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="relative z-10">
                    <h1 className="text-base xs:text-lg lg:text-fluid-2xl font-bold mb-4 font-pixel-header lg:tracking-widest uppercase retro-shadow break-words text-center lg:text-left overflow-hidden">Resource Center</h1>
                    <p className="text-white text-xs xs:text-lg mb-6 font-bold bg-black inline-block px-2 border-2 border-retro-cyan break-words w-full lg:w-auto text-center lg:text-left">
                        &gt; Download Database
                    </p>
                    <div className="flex flex-wrap gap-2 xs:gap-4 text-xs xs:text-sm">
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-2 xs:px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <FileText size={16} className="text-retro-yellow" />
                            <span className="font-bold text-retro-yellow uppercase">25+ Resources</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-retro-black border-2 border-white px-2 xs:px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Download size={16} className="text-retro-green" />
                            <span className="font-bold text-retro-green uppercase">Open Access</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Demo/Approval Disclaimer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-retro-yellow border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center space-x-3"
            >
                <div className="bg-black text-retro-yellow p-2 border-2 border-white">
                    <AlertTriangle className="flex-shrink-0 animate-retro-blink" size={24} />
                </div>
                <div className="flex-1">
                    <h3 className="text-black font-bold font-pixel-header text-sm uppercase mb-1">Demonstration Mode</h3>
                    <p className="text-black font-bold leading-tight text-xs uppercase">
                        Full access and download functionality will be activated upon official project approval.
                    </p>
                </div>
            </motion.div>

            {/* Resource Categories */}
            {resourceCategories.map((category, idx) => {
                const IconComponent = category.icon;

                // Map retro colors
                let headerColor = "bg-retro-gray";
                if (category.color === "retro-blue") headerColor = "bg-retro-blue";
                else if (category.color === "retro-green") headerColor = "bg-retro-green";
                else if (category.color === "retro-magenta") headerColor = "bg-retro-magenta";
                else if (category.color === "retro-orange") headerColor = "bg-retro-orange";
                else if (category.color === "retro-red") headerColor = "bg-retro-red";
                else if (category.color === "retro-cyan") headerColor = "bg-retro-cyan";

                return (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-retro-light-gray border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
                    >
                        {/* Window Title Bar style header */}
                        <div className={`${headerColor} px-2 py-2 flex flex-nowrap items-center border-b-4 border-retro-gray mb-4 gap-2`}>
                            <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center mr-1 md:mr-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                                <IconComponent size={16} className="text-black" />
                            </div>
                            <h2 className="text-white font-bold font-pixel-header text-xs md:text-sm uppercase tracking-wider flex-1 text-shadow-retro break-words min-w-[150px]">
                                {category.title}
                            </h2>
                            <div className="bg-black text-white text-[10px] md:text-xs px-2 py-0.5 border border-white font-bold ml-auto">
                                {category.resources.length} FILES
                            </div>
                        </div>

                        <div className="bg-white border-2 border-black mx-2 xs:mx-4 mb-4 p-1 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]">
                            <div className="space-y-1">
                                {category.resources.map((resource, ridx) => (
                                    <div
                                        key={ridx}
                                        className={`grid grid-cols-[1fr_auto] gap-3 items-center p-3 hover:bg-retro-blue hover:text-white group transition-colors cursor-pointer border-b border-dashed border-gray-300 last:border-0`}
                                    >
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="font-bold text-xs xs:text-sm uppercase font-pixel-header text-black group-hover:text-retro-yellow break-words leading-tight">{resource.name}</h3>
                                                <span className={`px-1 py-0.5 bg-retro-light-gray text-black border border-black text-[10px] uppercase font-bold shrink-0`}>
                                                    {resource.type}
                                                </span>
                                            </div>
                                            <p className="text-xs xs:text-sm font-bold uppercase mb-1 break-words leading-tight text-black">{resource.description}</p>
                                            <p className="text-xs font-mono text-black group-hover:text-retro-light-gray">{resource.size}</p>
                                        </div>
                                        <div className="flex items-center justify-center w-10">
                                            <button className={`p-2 bg-retro-light-gray text-retro-gray border-2 border-white shadow-[1px_1px_0px_0px_#000] group-hover:bg-retro-red group-hover:text-white group-hover:border-black`} title="Locked">
                                                <Lock size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            })}

            {/* Toolkit Notice */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-magenta border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-white relative overflow-hidden"
            >
                {/* Dithering pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 relative z-10 text-center md:text-left">
                    <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto md:mx-0">
                        <Book size={32} className="text-retro-magenta" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2 font-pixel-header uppercase text-retro-yellow text-shadow-retro">Open-Source Toolkit</h2>
                        <div className="bg-black border-2 border-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                            <p className="text-white font-bold leading-relaxed mb-2 font-pixel-body text-sm uppercase">
                                All resources will be compiled into a comprehensive open-source toolkit and released publicly <strong>3 months after the exchange</strong> (December 2026).
                            </p>
                            <div className="h-2 bg-retro-gray w-full border border-white mt-2">
                                <div className="h-full bg-retro-green w-1/4 animate-pulse"></div>
                            </div>
                            <p className="text-retro-green text-[10px] mt-1 text-right font-bold">LOADING... 25%</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResourcesPage;
