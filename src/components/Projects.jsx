import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    const projects = [
        {
            title: 'Checker Application',
            description: 'Background verification system for recruiters to verify candidate details before hiring. Designed with modular architecture, RESTful APIs, and achieved 100% test coverage with JUnit and Mockito.',
            tags: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&fit=crop&w=1770&q=80',
            github: 'https://github.com/shivakrishna17/checker-application',
            demo: '#'
        },
        {
            title: 'MedplusMart',
            description: 'E-commerce catalog page with advanced filtering, sorting, and product listing features. Utilized React.js, Redux for state management, and Spring Boot backend with Redis caching for optimal performance.',
            tags: ['Java', 'Spring Boot', 'React.js', 'Redux', 'Redis'],
            image: 'public/medplusmart.jpg',
            github: 'https://www.medplusmart.com/',
            demo: '#'
        },
        {
            title: 'Chat Application',
            description: 'Real-time chat application built using Java web sockets and Java Swing for seamless communication.',
            tags: ['Java', 'WebSockets', 'Java Swing'],
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&fit=crop&w=1770&q=80',
            github: 'https://github.com/shivakrishna17/chatApplication',
            demo: '#'
        },
        {
            title: 'Course Management System',
            description: 'Full-stack application for managing courses, students, and educational content with robust backend APIs and database management.',
            tags: ['Java', 'Spring Boot', 'MySQL'],
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&fit=crop&w=1770&q=80',
            github: 'https://github.com/shivakrishna17/course-management',
            demo: '#'
        }
    ];

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleItems(3);
            else if (window.innerWidth >= 768) setVisibleItems(2);
            else setVisibleItems(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, projects.length - visibleItems);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const shiftAmount = 100 / visibleItems;

    return (
        <section id="projects" className="py-20 bg-transparent dark:bg-gray-900 dark:border-t dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work and personal projects.
                    </p>
                </div>

                <div className="relative overflow-hidden px-4 -mx-4">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * shiftAmount}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.title}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 hover:border-blue-500/50"
                                    >
                                        <div className="relative h-48 overflow-hidden group/img">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                <a href={project.github} target='_blank' className="p-2 bg-white/20 dark:bg-gray-700 backdrop-blur-sm rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition-colors">
                                                    <Github className="h-6 w-6 text-white" />
                                                </a>
                                                <a href={project.demo} target='_blank' className="p-2 bg-white/20 dark:bg-gray-700 backdrop-blur-sm rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition-colors">
                                                    <ExternalLink className="h-6 w-6 text-white" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    {currentIndex > 0 && (
                        <button
                            onClick={prevProject}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 transition-all z-10 ml-2"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    )}
                    {currentIndex < maxIndex && (
                        <button
                            onClick={nextProject}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 transition-all z-10 mr-2"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
