import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, color, trend, subtitle }) => {
    // Extract base color name to map to retro colors if needed, or just use as is but with retro styling
    // For retro feel, we might want to map 'indigo' to 'retro-blue', etc.
    // For now, keeping original colors but changing container style is safest for data consistency.

    const textColor = color.replace('bg-', 'text-');

    return (
        <div className={`${color} p-4 xs:p-5 md:p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-0 h-full`}>
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2 border-2 border-black bg-white`}>
                    <Icon size={24} strokeWidth={2.5} className={textColor} />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-bold font-pixel-body ${trend.includes('+') ? 'text-retro-dark-green bg-retro-green border border-black' : (trend === 'active' ? 'text-black bg-retro-light-gray border border-black' : 'text-retro-gray bg-retro-light-gray border border-black')} px-2 py-1`}>
                        {trend}
                    </div>
                )}
            </div>

            <div>
                <p className="text-xs font-bold text-white font-pixel-body uppercase tracking-wider mb-1">{title}</p>
                <h4 className="text-sm xs:text-base sm:text-lg md:text-xl xl:text-2xl font-bold font-pixel-header text-white break-words leading-none whitespace-nowrap">{value}</h4>
                {subtitle && (
                    <p className="text-xs text-white font-pixel-body mt-2 border-t border-white pt-2">{subtitle}</p>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
