import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';

interface Achievement {
    title: string;
    description: string;
    icon: string;
}

interface AchievementToastProps {
    achievement: Achievement | null;
    onClose: () => void;
}

const AchievementToast = ({ achievement, onClose }: AchievementToastProps) => {
    return (
        <AnimatePresence>
            {achievement && (
                <motion.div
                    initial={{ x: "-50%", y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ x: "-50%", y: 0, opacity: 1, scale: 1 }}
                    exit={{ x: "-50%", y: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-4 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-2xl">
                        {achievement.icon}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-amber-400 text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                            <Trophy size={12} />
                            Achievement Unlocked
                        </span>
                        <span className="text-slate-100 font-bold text-sm">
                            {achievement.title}
                        </span>
                        <span className="text-slate-400 text-xs">
                            {achievement.description}
                        </span>
                    </div>

                    <button
                        onClick={onClose}
                        className="ml-2 p-1 rounded-full hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <X size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AchievementToast;
