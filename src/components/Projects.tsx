import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';
import { useAchievements } from '../context/AchievementContext';

const projects = [
    {
        title: 'Student Manager Pro',
        description: 'A comprehensive educational platform for managing student records, fees, and academic performance.',
        longDescription: 'Student Manager Pro is a robust administrative tool designed for educational institutions. It streamlines the complex process of student data management, from admission to graduation. The system provides intuitive dashboards for tracking attendance, managing fee payments, and generating detailed academic reports.',
        challenges: [
            'Designing a complex database schema to handle relationships between students, classes, and fee structures.',
            'Implementing a secure authentication system to protect sensitive student data.',
            'Creating a responsive UI that handles large data tables efficiently on mobile devices.'
        ],
        features: [
            'Comprehensive Student Profiles & Records',
            'Fee Management & Payment Tracking',
            'Academic Performance Analysis',
            'Data Export & Report Generation'
        ],
        tech: ['React', 'Node.js', 'LocalStorage', 'Tailwind CSS'],
        github: 'https://github.com/Sayanthegamer/Student-Management-System',
        demo: 'https://student-management-nine-tawny.vercel.app/',
        image: '/student-manager-preview.png',
    },
    {
        title: 'PhiloMind',
        description: 'An AI-powered philosophy companion that facilitates deep, meaningful dialogue about life and ethics.',
        longDescription: 'PhiloMind is a unique AI application designed to be a digital philosopher. Powered by Google\'s GenAI, it engages users in Socratic dialogue, helping them explore complex ethical dilemmas and philosophical concepts. The interface uses elegant typography (Cormorant Garamond) to create a contemplative atmosphere.',
        challenges: [
            'Prompt engineering the AI to maintain a philosophical persona and avoid generic chatbot responses.',
            'Implementing "Save as Image" functionality to let users share profound quotes.',
            'Creating a "glassmorphism" UI that feels modern yet timeless.'
        ],
        features: [
            'Deep Philosophical Dialogue with AI',
            'Socratic Questioning Engine',
            'Shareable Quote Generation',
            'Elegant, Distraction-Free Design'
        ],
        tech: ['React', 'Google GenAI', 'Lucide React', 'Tailwind'],
        github: 'https://github.com/Sayanthegamer/PhiloMind',
        demo: 'https://philomind.vercel.app/',
        image: '/philomind-preview.png',
    },
    {
        title: 'Aether | Quiet Reflection',
        description: 'A generative space for poetic thought where users can transmute their noise into silence.',
        longDescription: 'Aether is a generative art and poetry application. It invites users to input their current mood or "noise," which the AI then transmutes into a unique piece of poetry. The experience is enhanced by a dreamlike, calming interface that encourages mindfulness and reflection.',
        challenges: [
            'Integrating Google GenAI to generate contextually relevant and emotionally resonant poetry.',
            'Designing a "mood input" system that feels organic rather than form-based.',
            'Creating an immersive, calming visual atmosphere using soft colors and typography.'
        ],
        features: [
            'AI-Generated Poetry based on Mood',
            'Generative Art & Visuals',
            'Mindfulness & Reflection Tools',
            'Seamless, Dreamlike User Interface'
        ],
        tech: ['React', 'Google GenAI', 'Framer Motion', 'Vite'],
        github: 'https://github.com/Sayanthegamer/Aether',
        demo: 'https://a-e-t-h-e-r-inky.vercel.app/',
        image: '/aether-preview.png',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const { unlockAchievement } = useAchievements();

    return (
        <section id="projects" className="section">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center font-serif"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => {
                                setSelectedProject(project);
                                unlockAchievement('deep_diver');
                            }}
                            className="cursor-pointer group"
                        >
                            <SpotlightCard className="h-full flex flex-col bg-slate-900/50 border-slate-800 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-sky-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-sky-400 text-sm font-medium mt-auto group/link">
                                        View Details
                                        <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
