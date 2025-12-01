import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useAchievements } from '../context/AchievementContext';

const commands = {
    help: 'Available commands: email, github, whoami, clear',
    whoami: 'Sayan - Full-stack Developer, AI Enthusiast, and Tech Explorer.',
    email: 'mailto:sayanbnk2008@gmail.com', // Replace with actual email if different
    github: 'https://github.com/Sayanthegamer',
    clear: 'clear',
};

const ContactTerminal = () => {
    const [input, setInput] = useState('');
    const { unlockAchievement } = useAchievements();
    const [history, setHistory] = useState<{ type: 'input' | 'output'; content: string }[]>([
        { type: 'output', content: 'Welcome to Sayan\'s Terminal v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (history.length > 2) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input' as const, content: cmd }];

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        if (commands[trimmedCmd as keyof typeof commands]) {
            unlockAchievement('hacker');
            const output = commands[trimmedCmd as keyof typeof commands];
            if (trimmedCmd === 'email' || trimmedCmd === 'github') {
                newHistory.push({ type: 'output', content: `Opening ${trimmedCmd}...` });
                window.open(output, '_blank');
            } else {
                newHistory.push({ type: 'output', content: output });
            }
        } else if (trimmedCmd !== '') {
            newHistory.push({ type: 'output', content: `Command not found: ${trimmedCmd}. Type "help" for list.` });
        }

        setHistory(newHistory);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl font-mono text-sm md:text-base"
                >
                    {/* Terminal Header */}
                    <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                            <Terminal size={14} className="shrink-0" />
                            <span className="truncate">visitor@sayan-portfolio:~</span>
                        </div>
                        <div className="w-10 hidden md:block" /> {/* Spacer for centering */}
                    </div>

                    {/* Terminal Body */}
                    <div
                        className="p-4 md:p-6 h-[300px] md:h-[400px] overflow-y-auto cursor-text"
                        onClick={() => inputRef.current?.focus()}
                    >
                        <div className="space-y-2">
                            {history.map((entry, i) => (
                                <div key={i} className={`${entry.type === 'input' ? 'text-slate-100' : 'text-slate-400'}`}>
                                    {entry.type === 'input' ? (
                                        <span className="flex gap-2">
                                            <span className="text-emerald-400">➜</span>
                                            <span className="text-sky-400">~</span>
                                            <span>{entry.content}</span>
                                        </span>
                                    ) : (
                                        <span className="block pl-6">{entry.content}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="mt-2 flex gap-2 items-center">
                            <span className="text-emerald-400">➜</span>
                            <span className="text-sky-400">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-base md:text-sm text-slate-100 placeholder-slate-600"
                            />
                        </form>
                        <div ref={bottomRef} />
                    </div>
                </motion.div>

                <p className="text-center text-slate-500 text-sm mt-8">
                    Prefer standard contact? <a href="mailto:sayanthegamer@gmail.com" className="text-sky-400 hover:underline">Email me directly</a>
                </p>
            </div>
        </section>
    );
};

export default ContactTerminal;
