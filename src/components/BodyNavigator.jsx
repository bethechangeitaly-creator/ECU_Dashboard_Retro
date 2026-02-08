import React from 'react';
import { motion } from 'framer-motion';

const BodyPart = ({ id, d, color, onClick, label }) => {
    return (
        <motion.g
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(id)}
            className="cursor-pointer group"
        >
            <path
                d={d}
                fill="currentColor"
                className={`${color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                stroke="white"
                strokeWidth="2"
            />
            {/* Simplified Tooltip for Widget View */}
            <title>{label}</title>
        </motion.g>
    );
};

const BodyNavigator = ({ onPartSelect }) => {
    // SVG optimized for the card view - removed internal text overlays for cleaner look
    return (
        <div className="relative w-full h-[350px] flex items-center justify-center">
            <svg viewBox="0 0 200 500" className="h-full drop-shadow-lg">
                {/* Head - Day 5 */}
                <BodyPart
                    id="Head"
                    d="M100 20 A 35 35 0 1 1 100 90 A 35 35 0 1 1 100 20 Z"
                    color="text-purple-500"
                    label="HEAD (Day 5)"
                    onClick={onPartSelect}
                />

                {/* Skin - Day 1 */}
                <BodyPart
                    id="Skin"
                    d="M65 90 Q 100 110 135 90 L 150 110 L 50 110 Z"
                    color="text-rose-400"
                    label="SKIN (Day 1)"
                    onClick={onPartSelect}
                />

                {/* Heart - Day 4 */}
                <BodyPart
                    id="Heart"
                    d="M100 110 L 150 110 L 150 200 L 100 200 Z"
                    color="text-red-500"
                    label="HEART (Day 4)"
                    onClick={onPartSelect}
                />

                {/* Hands - Day 6 */}
                <BodyPart
                    id="Hands"
                    d="M50 110 L 20 250 L 40 260 L 65 130 Z M150 110 L 180 250 L 160 260 L 135 130 Z"
                    color="text-orange-500"
                    label="HANDS (Day 6)"
                    onClick={onPartSelect}
                />

                {/* Stomach - Day 3 */}
                <BodyPart
                    id="Stomach"
                    d="M50 110 L 100 110 L 100 200 L 50 200 Z M50 200 L 150 200 L 140 300 L 60 300 Z"
                    color="text-green-500"
                    label="STOMACH (Day 3)"
                    onClick={onPartSelect}
                />

                {/* Feet - Day 2 */}
                <BodyPart
                    id="Feet"
                    d="M60 300 L 95 300 L 90 480 L 55 480 Z M105 300 L 140 300 L 145 480 L 110 480 Z"
                    color="text-blue-500"
                    label="FEET (Day 2)"
                    onClick={onPartSelect}
                />
            </svg>
        </div>
    );
};

export default BodyNavigator;
