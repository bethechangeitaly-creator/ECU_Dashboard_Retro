import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, color, trend, subtitle }) => {
    // Extract base color name to map to retro colors if needed, or just use as is but with retro styling
    // For retro feel, we might want to map 'indigo' to 'retro-blue', etc.
    // For now, keeping original colors but changing container style is safest for data consistency.

    return (
        <div className="bg-retro-white p-6 border-4 border-retro-gray shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-0">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2 border-2 border-black ${color.replace('bg-', 'bg-').replace('600', '200').replace('500', '200')} text-black`}>
                    <Icon size={24} strokeWidth={2.5} className="retro-icon" />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-bold font-pixel-body ${trend.includes('+') ? 'text-retro-dark-green bg-retro-green border border-black' : 'text-retro-gray bg-retro-light-gray border border-black'} px-2 py-1`}>
                        {trend}
                    </div>
                )}
            </div>

            <div>
                <p className="text-xs font-bold text-retro-gray font-pixel-body uppercase tracking-wider mb-1">{title}</p>
                <h4 className="text-2xl font-bold font-pixel-header text-black">{value}</h4>
                {subtitle && (
                    <p className="text-xs text-retro-gray font-pixel-body mt-2 border-t border-retro-gray pt-2">{subtitle}</p>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
