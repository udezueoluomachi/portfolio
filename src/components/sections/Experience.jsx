'use client';

import { experience } from '@/data/experience';

export default function Experience() {
    return (
        <section className="py-32 container mx-auto px-4 md:px-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-20">EXPERIENCE</h2>

            <div className="space-y-20">
                {experience.map((job, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-8">
                        <div className="md:col-span-4">
                            <h3 className="text-2xl font-bold">{job.company}</h3>
                            <p className="text-dim mt-2">{job.period}</p>
                            <p className="text-sm text-dim mt-1">{job.location}</p>
                        </div>

                        <div className="md:col-span-8">
                            <h4 className="text-xl font-medium mb-4">{job.role}</h4>
                            <p className="text-lg mb-6 text-dim">{job.description}</p>
                            <ul className="list-disc list-inside space-y-2 text-dim">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
