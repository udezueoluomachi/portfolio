'use client';

import { ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-32 container mx-auto px-4 md:px-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">LET&apos;S BUILD<br />THE FUTURE</h2>
                    <p className="text-xl text-dim max-w-md mb-12">
                        I&apos;m currently available for freelance projects and open to full-time opportunities.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:basilchimaobi2@gmail.com" className="block text-2xl hover:text-dim transition-colors">
                            basilchimaobi2@gmail.com
                        </a>
                        <div className="flex gap-8 pt-8">
                            <a href="https://github.com/udezueoluomachi" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white transition-colors">GITHUB</a>
                            <a href="https://linkedin.com/in/oluomachi-udezue-085240264" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white transition-colors">LINKEDIN</a>
                            <a href="https://x.com/udezueoluomachi" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white transition-colors">TWITTER / X</a>
                        </div>
                    </div>
                </div>

                <form className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-sm text-dim">NAME</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-dim">EMAIL</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-dim">MESSAGE</label>
                        <textarea className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors h-32 resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button type="submit" className="group flex items-center gap-4 text-xl font-bold hover:text-dim transition-colors">
                        SEND MESSAGE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            </div>
        </section>
    );
}
