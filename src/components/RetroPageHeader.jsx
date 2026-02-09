import React from 'react';
import { motion } from 'framer-motion';

/**
 * RetroPageHeader Component
 * A standardized, responsive header component for all main pages.
 * 
 * @param {string} title - Main page title
 * @param {string} subtitle - Subtitle/Tagline displayed in black box
 * @param {string} color - Background color class (e.g., 'bg-retro-magenta') - default: 'bg-retro-magenta'
 * @param {Array} stats - Array of stat objects: { icon: IconComponent, value: string, label: string, color: string }
 */
const RetroPageHeader = ({
    title,
    subtitle,
    color = 'bg-retro-magenta',
    patternOpacity = 0.2,
    stats = []
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${color} border-4 border-retro-white p-2 xs:p-6 md:p-8 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
        >
            {/* Dithering pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                    opacity: patternOpacity
                }}
            ></div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Title */}
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-pixel-header lg:tracking-widest uppercase retro-shadow leading-tight w-full">
                    {title}
                </h1>

                {/* Subtitle Badge */}
                {subtitle && (
                    <p className="text-white text-xs xs:text-sm sm:text-lg mb-6 font-bold bg-black inline-block px-3 py-1 border-2 border-retro-cyan break-words w-full lg:w-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                        &gt; {subtitle}
                    </p>
                )}

                {/* Stats Grid */}
                {stats.length > 0 && (
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            // Determine text color based on prop or default to retro-cyan/green/yellow rotation if needed, 
                            // but usually passed in. Default to white if missing.
                            const textColor = stat.color || 'text-white';

                            return (
                                <div
                                    key={idx}
                                    className="flex items-center space-x-2 bg-retro-black border-2 border-white px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full xs:w-auto justify-center xs:justify-start hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    {Icon && <Icon size={18} className={textColor} />}
                                    <div className="flex flex-col items-start leading-none">
                                        <span className={`font-bold ${textColor} uppercase text-xs sm:text-sm`}>
                                            {stat.value} {stat.label}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default RetroPageHeader;
