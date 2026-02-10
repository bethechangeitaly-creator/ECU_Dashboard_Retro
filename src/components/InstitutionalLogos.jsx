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
        {/* Refined Pixel EU Flag Icon */}
        <div className="w-6 h-4 bg-[#003399] border-2 border-black dark:border-retro-gray flex items-center justify-center p-0.5 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-3 grid-rows-3 gap-0.5 w-full h-full">
                <div className="bg-transparent"></div><div className="bg-[#FFCC00] w-full h-full scale-[0.5]"></div><div className="bg-transparent"></div>
                <div className="bg-[#FFCC00] w-full h-full scale-[0.5]"></div><div className="bg-transparent"></div><div className="bg-[#FFCC00] w-full h-full scale-[0.5]"></div>
                <div className="bg-transparent"></div><div className="bg-[#FFCC00] w-full h-full scale-[0.5]"></div><div className="bg-transparent"></div>
            </div>
        </div>
        <div className="flex flex-col">
            <span className="font-pixel-header text-[10px] leading-tight text-black dark:text-retro-white font-bold">Erasmus+</span>
            <span className="font-pixel-body text-[10px] leading-none text-retro-gray dark:text-retro-light-gray font-bold tracking-tighter">PROGRAMMA UE</span>
        </div>
    </div>
);

const InstitutionalLogos = ({ variant = "header", className = "" }) => {
    const containerClasses = variant === "header"
        ? "flex items-center gap-4"
        : "flex flex-wrap justify-center gap-8 p-4 bg-retro-light-gray dark:bg-retro-dark-gray border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

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
