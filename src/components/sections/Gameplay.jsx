import { RevealOnScroll } from '../RevealOnScroll';

export const Gameplay = () => {
    return (
        <section
            id="gameplay"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent text-center">
                        Featured Gameplay
                    </h2>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Myth compiler [CB] WORLD #1 MAX理論値 (Milthm)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/04/04
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: CB 11.4<br/>
                                Rating: 13.59<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/57uKQIth8N8"
                                    title="Myth compiler [CB] (Milthm)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Aegleseeker [FTR] (Arcaea)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/03/29
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: FTR 11.2<br/>
                                Potential: 13.10<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/75QWFxzviQM"
                                    title="Aegleseeker [FTR] (Arcaea)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                PRAGMATISM -RESURRECTION- [BYD] (Arcaea)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/03/27
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: BYD 11.2<br/>
                                Potential: 13.10<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/sVxzqxyk-sg"
                                    title="PRAGMATISM -RESURRECTION- [BYD] (Arcaea)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Axium Divergence [BYD] (Arcaea)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2026/03/15
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: BYD 11.3<br/>
                                Potential: 13.07<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/ep8DReHGXH0"
                                    title="Axium Divergence [BYD] (Arcaea)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Igallta [AT] (Phigros)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/11/27
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: AT 17.4<br/>
                                RKS: 16.87<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/MEGL_rjWnbc"
                                    title="Igallta [AT] (Phigros)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                LABYRINTHOX [MSV] (Paradigm: Reboot)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/11/11
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: MSV 16.9<br/>
                                Rating: 121.9060<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/_RGjZOVRJJQ"
                                    title="LABYRINTHOX [MSV] (Paradigm: Reboot)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                AbsoluTe disoRdeR [AT] (Phigros)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/10/30
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: AT 17.2<br/>
                                RKS: 16.79<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/xvhI5ZAFLDo"
                                    title="AbsoluTe disoRdeR [AT] (Phigros)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Rei [CB] (Milthm)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/09/26
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: CB 12.8<br/>
                                Rating: 13.31<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/iRarb7IeqKk"
                                    title="Rei [CB] (Milthm)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                artemis [Hard] (DEEMO II)
                            </h3>
                            <h4 className="text-lg mb-2">
                                2025/05/03
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Difficulty: Hard 11.0<br/>
                                Skill: 216.20<br/>
                            </p>
                            <div className="rounded-xl overflow-hidden mb-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/zOcn58FLKMI"
                                    title="artemis [Hard] (DEEMO II)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                    </div>

                    { /* Second grid to center last item */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 place-items-center">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
                    hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition w-full md:col-span-2 md:w-1/2"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Sunscreen Alarm
                            </h3>
                            <h4 className="text-lg mb-2">
                                09/2023 - 11/2023
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Prototyped a device that sets a timer based on the detected UV levels
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["STM32CubeIDE", "C"].map((tag, key) => (
                                    <span className="bg-purple-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                            hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition-all"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </RevealOnScroll>
        </section>
    );
};