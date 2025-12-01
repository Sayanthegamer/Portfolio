import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary font-light mb-6 tracking-[0.2em] uppercase"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 font-serif"
        >
          Sayan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
        >
          <span className="text-slate-200 font-normal">Full-stack Developer</span> &bull; <span className="text-slate-200 font-normal">Musician</span> &bull; <span className="text-slate-200 font-normal">AI Enthusiast</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a href="#tech-stack" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-slate-900/50 border border-slate-700 rounded-full hover:bg-slate-800/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] overflow-hidden">
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce text-slate-500">
          <ArrowDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
