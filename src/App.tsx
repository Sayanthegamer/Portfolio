import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import ContactTerminal from './components/ContactTerminal';
import Footer from './components/Footer';
import Background from './components/Background';

import { AchievementProvider } from './context/AchievementContext';

function App() {
  return (
    <AchievementProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30">
        <Background />

        <main className="relative z-10 flex flex-col gap-20 md:gap-32 pb-20">
          <Hero />
          <TechStack />
          <Hobbies />
          <Timeline />
          <Projects />
          <ContactTerminal />
        </main>

        <Footer />
      </div>
    </AchievementProvider>
  );
}

export default App;
