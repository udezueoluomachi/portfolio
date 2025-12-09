'use client';

import { ArrowRight, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import HackerText from '../ui/HackerText';

export default function Contact() {
    return (
        <section className="py-32 container mx-auto px-4 md:px-12 border-t border-white/10 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-overlay"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: Context */}
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        <HackerText text="INITIALIZE" />
                        <br />
                        <span className="text-dim">CONNECTION</span>
                    </h2>
                    <p className="text-xl text-dim max-w-lg mb-12 leading-relaxed font-mono">
                        // PROTOCOL: OPEN
                        <br />
                        Ready to deploy high-performance engineering solutions?
                        Transmit your signal.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="font-mono text-sm text-dim mb-2">SECURE_CHANNELS:</div>

                        <a href="https://github.com/udezueoluomachi" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-4 text-dim hover:text-white transition-all group border border-white/10 p-4 hover:border-white/40 bg-white/5 hover:bg-white/10">
                            <Github className="w-5 h-5" />
                            <span>GITHUB_REPO</span>
                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a href="https://linkedin.com/in/oluomachi-udezue-085240264" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-4 text-dim hover:text-white transition-all group border border-white/10 p-4 hover:border-white/40 bg-white/5 hover:bg-white/10">
                            <Linkedin className="w-5 h-5" />
                            <span>LINKEDIN_PROFILE</span>
                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a href="https://x.com/udezueoluomachi" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-4 text-dim hover:text-white transition-all group border border-white/10 p-4 hover:border-white/40 bg-white/5 hover:bg-white/10">
                            <Twitter className="w-5 h-5" />
                            <span>X_FEED</span>
                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* RIGHT: Action Center */}
                <div className="relative">

                    {/* Decorative Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20 blur-sm"></div>

                    <div className="bg-black/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 flex flex-col gap-8 relative">

                        <div className="font-mono text-xs text-dim mb-4 border-b border-white/10 pb-4 flex justify-between">
                            <span>COMMAND_CENTER</span>
                            <span className="animate-pulse text-green-500">● ONLINE</span>
                        </div>

                        {/* Resume Action */}
                        <a href="https://docs.google.com/document/d/1YTbxdKV_5J52iWrysrXXNnovkE0KOvxmcO3ODcWyG5c/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-white text-black p-6 flex flex-col gap-2 hover:bg-dim transition-colors">
                            <div className="flex justify-between items-start">
                                <FileText className="w-8 h-8" />
                                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">RESUME</h3>
                                <p className="font-mono text-xs opacity-60">ACCESS_FULL_DOSSIER</p>
                            </div>
                        </a>

                        {/* Email Action */}
                        <a href="mailto:basilchimaobi2@gmail.com" className="group relative overflow-hidden border border-white/20 p-6 flex flex-col gap-2 hover:border-white hover:bg-white/5 transition-all">
                            <div className="flex justify-between items-start">
                                <Mail className="w-8 h-8 text-white" />
                                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">TRANSMIT SIGNAL</h3>
                                <p className="font-mono text-xs text-dim">basilchimaobi2@gmail.com</p>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}
