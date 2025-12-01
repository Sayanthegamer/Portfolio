import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAchievements } from '../context/AchievementContext';

interface FlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
}

const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { unlockAchievement } = useAchievements();

    const handleFlip = () => {
        if (!isFlipped) {
            unlockAchievement('curious_mind');
        }
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="relative w-full h-full perspective-1000 cursor-pointer"
            onClick={handleFlip}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                    {frontContent}
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    {backContent}
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCard;
