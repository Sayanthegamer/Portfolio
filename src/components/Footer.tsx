import { Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAchievements } from '../context/AchievementContext';

const Footer = () => {
    const { unlockAchievement } = useAchievements();

    return (
        <footer className="py-8 border-t border-slate-800 bg-slate-900 text-center">
            <motion.div
                onViewportEnter={() => unlockAchievement('explorer')}
                className="flex justify-center gap-6 mb-4"
            >
                <a href="https://github.com/Sayanthegamer" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                    <Github size={24} />
                </a>

                <a href="mailto:sayanbnk2008@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                    <Mail size={24} />
                </a>
            </motion.div>
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Sayan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
