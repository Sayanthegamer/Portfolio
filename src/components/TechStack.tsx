import { motion } from 'framer-motion';
import {
    Code2, Globe, Layout, Server, Settings, Terminal,
    Lock, Braces, Flame, Sparkles
} from 'lucide-react';

const techStack = [
    { icon: Code2, name: 'React', color: 'text-sky-400' },
    { icon: Server, name: 'Node.js', color: 'text-emerald-400' },
    { icon: Flame, name: 'Firebase', color: 'text-orange-500' },
    { icon: Layout, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: Globe, name: 'Next.js', color: 'text-slate-100' },
    { icon: Settings, name: 'TypeScript', color: 'text-blue-400' },
    { icon: Terminal, name: 'Linux', color: 'text-yellow-400' },
    { icon: Lock, name: 'Security', color: 'text-red-400' },
    { icon: Sparkles, name: 'Google AI Studio', color: 'text-blue-500' },
    { icon: Braces, name: 'GraphQL', color: 'text-pink-400' },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 overflow-hidden bg-slate-950/50">
            <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-slate-200 font-serif"
                >
                    Technologies I Work With
                </motion.h2>
            </div>

            <div className="relative flex flex-col gap-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-4 md:gap-8 px-4"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-800 whitespace-nowrap"
                            >
                                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                                <span className="text-slate-300 font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-4 md:gap-8 px-4"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                    >
                        {[...techStack, ...techStack, ...techStack].reverse().map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-800 whitespace-nowrap"
                            >
                                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                                <span className="text-slate-300 font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
