import { RevealOnScroll } from '../RevealOnScroll';
import intro from '../../assets/intro.mp4';

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background video (auto-play once) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    src={intro}
                    className="w-full h-full object-cover opacity-10"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
            <RevealOnScroll>
                <div className="text-center z-20 px-4">

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        The self-proclaimed "Ninth Seeker".
                    </p>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent leading-right">
                        nihilith
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        A goddess reborn in rhythm.<br />
                        Bound to her vessel of mortal frailty and mediocre skill.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="#gameplay"
                            className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                        >
                            View Gameplay
                        </a>

                        <a
                            href="https://youtube.com/@nihilRG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-pink-400/50 text-pink-400 py-3 px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-cyan-400/10"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};