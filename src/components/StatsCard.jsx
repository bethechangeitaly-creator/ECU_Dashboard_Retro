import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, color, trend, subtitle }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${color.replace('bg-', 'bg-').replace('600', '50').replace('500', '50')} ${color.replace('bg-', 'text-')}`}>
                    <Icon size={20} className="" />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-semibold ${trend.includes('+') ? 'text-emerald-600 bg-emerald-50' : 'text-slate-500 bg-slate-100'} px-2 py-1 rounded-full`}>
                        {trend}
                    </div>
                )}
            </div>

            <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</p>
                <h4 className="text-2xl font-bold text-slate-900">{value}</h4>
                {subtitle && (
                    <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
