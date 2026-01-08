import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Summon = () => {

    return (
        <section
            id="summon"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full md:w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent text-center">
                        Summon Vessel
                    </h2>
                    <p className="text-gray-300 mb-6 text-center">
                        He's probably too busy to respond. <br />
                        But will that stop you? <br />
                    </p>
                    <div className="flex justify-center mb-10">
                        <a
                            href="https://acupoframenistasty.github.io/portfolio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-pink-400/50 text-pink-400 py-3 px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-cyan-400/10"
                        >
                            Nah, I'd win.
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};