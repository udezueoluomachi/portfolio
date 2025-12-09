'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ArrowUpRight, Github } from 'lucide-react';

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-32 container">
            <h2 className="text-4xl md:text-6xl font-bold mb-20">SELECTED WORKS</h2>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Project Info */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-dim font-mono">0{index + 1}</span>
                                <div className="h-[1px] w-12 bg-white/20"></div>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-dim transition-colors duration-500">
                                {project.title}
                            </h3>

                            <p className="text-lg text-dim mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-sm text-dim">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dim transition-colors">
                                        LIVE DEMO <ArrowUpRight size={16} />
                                    </a>
                                )}
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dim transition-colors">
                                        CODE <Github size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Project Image (Parallax/Reveal Effect) */}
                        <div className="lg:col-span-7 order-1 lg:order-2 relative overflow-hidden aspect-video bg-white/5">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
