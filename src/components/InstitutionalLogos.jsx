import React from 'react';

export const LogoAIG = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {/* Refined Pixel G / Italian Flag Icon */}
        <div className="grid grid-cols-3 w-6 h-4 border-2 border-black dark:border-retro-gray bg-white shrink-0 overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="bg-[#008C45]"></div> {/* Green */}
            <div className="bg-[#FFFFFF]"></div> {/* White */}
            <div className="bg-[#CD212A]"></div> {/* Red */}
        </div>
        <div className="flex flex-col">
            <span className="font-pixel-header text-[9px] leading-tight text-black dark:text-retro-white font-bold tracking-tight">AIG</span>
            <span className="font-pixel-body text-[10px] leading-none text-retro-gray dark:text-retro-light-gray uppercase font-bold tracking-tighter">AGENZIA GIOVENTÙ</span>
        </div>
    </div>
);

export const LogoErasmus = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {/* Refined Pixel EU Flag - 12 Stars Circle */}
        <div className="w-7 h-5 bg-[#003399] border-2 border-black dark:border-retro-gray flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden">
            <svg viewBox="0 0 12 8" className="w-full h-full p-0.5" style={{ shapeRendering: 'crispEdges' }}>
                {/* 12 Stars Arrangement */}
                <rect x="5.5" y="0.5" width="1" height="1" fill="#FFCC00" /> {/* 12 */}
                <rect x="8" y="1.2" width="1" height="1" fill="#FFCC00" />  {/* 1 */}
                <rect x="9.8" y="3" width="1" height="1" fill="#FFCC00" />  {/* 2 */}
                <rect x="10.5" y="5" width="1" height="1" fill="#FFCC00" /> {/* 3 */}
                <rect x="9.8" y="7" width="1" height="1" fill="#FFCC00" />  {/* 4 */}
                <rect x="8" y="8.8" width="1" height="1" fill="#FFCC00" />  {/* 5 */}
                <rect x="5.5" y="9.5" width="1" height="1" fill="#FFCC00" /> {/* 6 */}
                <rect x="3" y="8.8" width="1" height="1" fill="#FFCC00" />  {/* 7 */}
                <rect x="1.2" y="7" width="1" height="1" fill="#FFCC00" />  {/* 8 */}
                <rect x="0.5" y="5" width="1" height="1" fill="#FFCC00" />  {/* 9 */}
                <rect x="1.2" y="3" width="1" height="1" fill="#FFCC00" />  {/* 10 */}
                <rect x="3" y="1.2" width="1" height="1" fill="#FFCC00" />  {/* 11 */}
            </svg>
        </div>
        <div className="flex flex-col">
            <span className="font-pixel-header text-[10px] leading-tight text-black dark:text-retro-white font-bold">Erasmus+</span>
            <span className="font-pixel-body text-[10px] leading-none text-retro-gray dark:text-retro-light-gray font-bold tracking-tighter uppercase whitespace-nowrap">Programma UE</span>
        </div>
    </div>
);

const InstitutionalLogos = ({ variant = "header", className = "" }) => {
    const containerClasses = variant === "header"
        ? "flex items-center gap-4"
        : "flex flex-wrap justify-center gap-8 p-4 bg-retro-light-gray dark:bg-dark-surface border-4 border-black dark:border-dark-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

    return (
        <div className={`${containerClasses} ${className}`}>
            <a
                href="https://agenziagioventu.gov.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform active:translate-y-0.5"
            >
                <LogoAIG />
            </a>
            {variant === "header" && <div className="h-8 w-1 bg-retro-gray opacity-30"></div>}
            <a
                href="https://www.erasmusplus.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform active:translate-y-0.5"
            >
                <LogoErasmus />
            </a>
        </div>
    );
};

export default InstitutionalLogos;
