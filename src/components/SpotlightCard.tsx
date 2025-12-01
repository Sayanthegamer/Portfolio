import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = "", isInverted = false }: { children: React.ReactNode, className?: string, isInverted?: boolean }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        let x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (isInverted) {
            x = rect.width - x;
        }

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 ${className}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(56, 189, 248, 0.1), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </motion.div>
    );
};

export default SpotlightCard;
