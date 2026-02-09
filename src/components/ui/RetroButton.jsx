import React from 'react';
import { motion } from 'framer-motion';
import { gameAudio } from '../../utils/gameAudio';

const RetroButton = ({ children, onClick, className = '', variant = 'primary', ...props }) => {

    const playHover = () => gameAudio.playHover();
    const handleClick = (e) => {
        gameAudio.playClick();
        if (onClick) onClick(e);
    };

    const variants = {
        primary: "bg-retro-blue text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
        secondary: "bg-retro-light-gray text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
        danger: "bg-retro-red text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
        success: "bg-retro-green text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={handleClick}
            className={`font-pixel-header uppercase text-xs md:text-sm px-4 py-2 transition-all duration-75 ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default RetroButton;
