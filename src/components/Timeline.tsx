import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Briefcase, Rocket, Shield, Bot } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const milestones = [
    {
        year: '2020',
        title: 'The Spark',
        description: 'Started my coding journey with the fundamentals of the web: HTML, CSS, and JavaScript.',
        icon: Code,
        color: 'text-sky-400',
    },
    {
        year: '2021',
        title: 'Expanding Horizons',
        description: 'Ventured into Python and learned version control with Git and GitHub.',
        icon: Rocket,
        color: 'text-emerald-400',
    },
    {
        year: '2022',
        title: 'Security Focus',
        description: 'Dove into cybersecurity, taking Ethical Hacking courses on TryHackMe.',
        icon: Shield,
        color: 'text-rose-400',
    },
    {
        year: '2023',
        title: 'AI & Web Dev',
        description: 'Took on advanced web development challenges, leveraging AI tools to accelerate learning.',
        icon: Bot,
        color: 'text-violet-400',
    },
    {
        year: '2024',
        title: 'Full-Stack Architecture',
        description: 'Expanded to the backend with Node.js and databases. Built complex full-stack applications and learned about system architecture.',
        icon: Briefcase,
        color: 'text-amber-400',
    },
    {
        year: '2025',
        title: 'Continuous Growth',
        description: 'Currently refining my skills and balancing development with academic pursuits.',
        icon: GraduationCap,
        color: 'text-pink-400',
    },
];

const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section id="timeline" className="section relative overflow-hidden">
            <div className="w-full max-w-4xl px-4 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-20 text-center font-serif"
                >
                    My Journey
                </motion.h2>

                <div ref={containerRef} className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2">
                        <motion.div
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-sky-500 via-violet-500 to-emerald-500"
                        />
                    </div>

                    <div className="space-y-8 md:space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500 -translate-x-1/2 z-10 mt-6 md:mt-8 shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                                    <div className="absolute inset-0 rounded-full bg-sky-500 animate-ping opacity-20"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                    <SpotlightCard className="p-6 bg-slate-900/80 border-slate-800">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl bg-slate-800/50 ${milestone.color}`}>
                                                <milestone.icon size={24} />
                                            </div>
                                            <div>
                                                <span className={`text-sm font-bold ${milestone.color}`}>{milestone.year}</span>
                                                <h3 className="text-xl font-bold text-slate-100">{milestone.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {milestone.description}
                                        </p>
                                    </SpotlightCard>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
