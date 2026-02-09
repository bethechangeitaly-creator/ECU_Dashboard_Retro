import React from 'react';

const MobileWindow = ({ children, className = '', title = '' }) => {
    return (
        <div className={`
            bg-white 
            border-2 xs:border-2 md:border-4 border-black 
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            p-3 xs:p-4 md:p-6 
            relative 
            ${className}
        `}>
            {title && (
                <div className="absolute -top-3 left-2 bg-retro-light-gray px-2 border-2 border-black">
                    <span className="font-pixel-header font-bold text-xs uppercase">{title}</span>
                </div>
            )}
            {children}
        </div>
    );
};

export default MobileWindow;
