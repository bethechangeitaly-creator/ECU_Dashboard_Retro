
import React from 'react';

const PartnerWidget = ({ partners }) => {
    return (
        <div className="col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Partnership Network</h3>
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-700 px-2 py-1 rounded-md">8 Countries</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="group p-4 rounded-xl border border-slate-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/20 transition-all cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <span className="text-2xl" role="img" aria-label={`Flag of ${partner.country}`}>{partner.flag}</span>
                            <span className="text-xs font-bold text-slate-400 dark:text-gray-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors uppercase">{partner.country}</span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1 leading-tight">{partner.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{partner.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerWidget;
