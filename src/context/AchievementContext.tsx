import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import AchievementToast from '../components/AchievementToast';

export type AchievementId = 'explorer' | 'curious_mind' | 'hacker' | 'deep_diver';

interface Achievement {
    id: AchievementId;
    title: string;
    description: string;
    icon: string;
}

interface AchievementContextType {
    unlockedAchievements: AchievementId[];
    unlockAchievement: (id: AchievementId) => void;
    resetAchievements: () => void;
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export const achievements: Record<AchievementId, Achievement> = {
    explorer: {
        id: 'explorer',
        title: 'Explorer',
        description: 'Scrolled to the very bottom.',
        icon: '🗺️',
    },
    curious_mind: {
        id: 'curious_mind',
        title: 'Curious Mind',
        description: 'Flipped a card to learn more.',
        icon: '🧐',
    },
    hacker: {
        id: 'hacker',
        title: 'Hacker',
        description: 'Executed a terminal command.',
        icon: '💻',
    },
    deep_diver: {
        id: 'deep_diver',
        title: 'Deep Diver',
        description: 'Explored a project in detail.',
        icon: '🤿',
    },
};

export const AchievementProvider = ({ children }: { children: ReactNode }) => {
    const [unlockedAchievements, setUnlockedAchievements] = useState<AchievementId[]>(() => {
        const saved = localStorage.getItem('achievements');
        return saved ? JSON.parse(saved) : [];
    });
    const [currentToast, setCurrentToast] = useState<Achievement | null>(null);

    useEffect(() => {
        localStorage.setItem('achievements', JSON.stringify(unlockedAchievements));
    }, [unlockedAchievements]);

    const unlockAchievement = (id: AchievementId) => {
        if (!unlockedAchievements.includes(id)) {
            setUnlockedAchievements((prev) => [...prev, id]);
            setCurrentToast(achievements[id]);

            // Play a subtle sound (safely)
            try {
                const audio = new Audio('/achievement.mp3');
                audio.volume = 0.5;
                audio.play().catch((e) => console.log('Audio play failed (expected if no interaction/file):', e));
            } catch (e) {
                console.log('Audio initialization failed:', e);
            }

            // Hide toast after 4 seconds
            setTimeout(() => {
                setCurrentToast(null);
            }, 4000);
        }
    };

    const resetAchievements = () => {
        setUnlockedAchievements([]);
        localStorage.removeItem('achievements');
        console.log('Achievements reset');
    };

    return (
        <AchievementContext.Provider value={{ unlockedAchievements, unlockAchievement, resetAchievements }}>
            {children}
            <AchievementToast achievement={currentToast} onClose={() => setCurrentToast(null)} />
        </AchievementContext.Provider>
    );
};

export const useAchievements = () => {
    const context = useContext(AchievementContext);
    if (context === undefined) {
        throw new Error('useAchievements must be used within an AchievementProvider');
    }
    return context;
};
