import { RevealOnScroll } from '../RevealOnScroll';
import Nihilith from '../../assets/nihilith.png';
import Arcaea from '../../assets/Arcaea.png';
import Phigros from '../../assets/Phigros.webp';
import Milthm from '../../assets/Milthm.webp';
import ParadigmReboot from '../../assets/ParadigmReboot.png';

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent text-center">
                        About
                    </h2>

                    <div className="glass rounded-xl p-8">
                        <a
                            href="https://www.youtube.com/@nihilRG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center mb-16"
                        >
                            <img
                                src={Nihilith}
                                alt="YouTube Channel Logo"
                                className="h-50 w-50 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(6,182,212,0.7)]"
                            />
                        </a>

                        <p className="text-gray-300 mb-6">
                            From the remains of a Shiba Inu drowning in his ramen cup, a four-foot, four-winged deity emerged—pristine, divine, and bored out of her mind. Now I wander the mortal realm, dominating rhythm games in search of anything that's worth my time.
                        </p>
                        <p className="text-gray-300 mb-6">
                            How did an obese dog become a celestial being with a different height, weight, and gender? Beats me.
                        </p>
                    </div>

                    <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 mt-8
    hover:shadow-[0_2px_8px_rgba(6,182,212,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Q&A</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <div className="space-y-2">
                                <strong> Why "nihilith?" </strong>
                            </div>
                            <li>
                                nihil- → Nihility: because nothing truly holds meaning…
                            </li>
                            <li>
                                -lith → Divinity and finality: fitting for an all-powerful goddess like me~
                            </li>
                            <li>
                                Also, it just sounds cool. Admit it.
                            </li>
                            <div className="space-y-2">
                                <strong> Why four wings? </strong>
                            </div>
                            <li>
                                Two to soar above mortals. Two more to flex on them.
                            </li>
                            <div className="space-y-2">
                                <strong> Are you single? </strong>
                            </div>
                            <li>
                                My only affair is with rhythm games. Besides, mortals are too fragile to handle me.
                            </li>
                            <li>
                                My vessel, on the other hand... eternally a lost cause.
                            </li>
                            <div className="space-y-2">
                                <strong> Can I still call you "Ramen?" </strong>
                            </div>
                            <li>
                                Would you call a phoenix by its ashes?
                            </li>
                            <div className="space-y-2">
                                <strong> What’s harder: university or rhythm games? </strong>
                            </div>
                            <li>
                                In university, students fight for their lives to pass.
                            </li>
                            <li>
                                In rhythm games, they cry over a single miss.
                            </li>
                            <li>
                                I feast on both.
                            </li>
                            <div className="space-y-2">
                                <strong> How do I get better at rhythm games? </strong>
                            </div>
                            <li>
                                Play.
                            </li>
                            <li>
                                Keep playing.
                            </li>
                            <li>
                                Cry.
                            </li>
                            <li>
                                <span style={{ textDecoration: 'line-through' }}>Accept that I'll always be better.</span>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 mt-8
    hover:shadow-[0_2px_8px_rgba(6,182,212,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Timeline</h3>

                        <div className="space-y-8 text-gray-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Arcaea</strong> - 03/2023</h4>
                                    <li>Reached 12.5pt - 03/2024</li>
                                    <li>First 10+ PM (Inverted World [ETR]) - 09/2024</li>
                                    <li>Reached 13pt - 07/2025</li>
                                    <li>First 11 PM (Undying Macula [ETR]) - 10/2025</li>
                                    <li>Best PM (Axium Divergence [BYD]) - 03/2026</li>
                                </div>
                                <a href="https://arcaea.lowiro.com/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={Arcaea} alt="Arcaea" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(6,182,212,0.7)]" />
                                </a>
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Phigros</strong> - 12/2023</h4>
                                    <li>Highest chart constant FC (Rrhar'il [AT]) - 10/2024</li>
                                    <li>Reached 16.5 RKS - 10/2024</li>
                                    <li>Rainbow 45 - 10/2025</li>
                                    <li>First 17 AP (AbsoluTe disoRdeR [AT]) - 10/2025</li>
                                    <li>Best AP (Igallta [AT]) - 11/2025</li>
                                </div>
                                <a href="https://phigros.fandom.com/wiki/Phigros_Wiki" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={Phigros} alt="Phigros" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(6,182,212,0.7)]" />
                                </a>
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Milthm</strong> - 09/2024</h4>
                                    <li>First 12+ AP (Contrasty Angeles [CL]) - 09/2024</li>
                                    <li>First "11" MAX AP (Fragment of Memories [CB]) - 03/2025</li>
                                    <li>Highest chart constant AP (Rei [CB]) - 09/2025</li>
                                    <li>First 11+ MAX AP (HYPER MEMORIES [CB]) - 08/2026</li>
                                </div>
                                <a href="https://milthm.com/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={Milthm} alt="Milthm" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(6,182,212,0.7)]" />
                                </a>
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Paradigm: Reboot</strong> - 06/2025</h4>
                                    <li>First 16+ AD (Cybernetic Vampire [MSV]) - 09/2025</li>
                                    <li>Best AD (LABYRINTHOX [MSV]) - 11/2025</li>
                                </div>
                                <a href="https://paradigmreboot.fandom.com/wiki/Paradigm:_Reboot_Wiki" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={ParadigmReboot} alt="Paradigm: Reboot" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(6,182,212,0.7)]" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};