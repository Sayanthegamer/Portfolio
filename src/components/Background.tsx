const Background = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />

            {/* Aurora Orbs - CSS Animation */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[140px] animate-blob animation-delay-2000 mix-blend-screen" />

            <div className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
