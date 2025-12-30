import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { SITE } from '../config/site';

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: SITE.github, label: 'GitHub' },
        { icon: Linkedin, href: SITE.linkedin, label: 'LinkedIn' },
        { icon: Mail, href: `mailto:${SITE.email}`, label: 'Email' }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900 transition-colors duration-300 pt-16 -mt-[1px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
                        Available for Hire
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm <span className="text-blue-600 dark:text-blue-500">Shiva Krishna</span>
                        <br />
                        <span className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400">Full Stack Developer</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        I build exceptional digital experiences that combine innovative design with robust functionality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 w-full sm:w-48"
                        >
                            View Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href={SITE.resume}
                            download
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors w-full sm:w-48"
                        >
                            Resume <Download className="ml-2 h-5 w-5" />
                        </a> 
                    </div>

                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="p-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full shadow-md hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
                        <img
                            src={import.meta.env.BASE_URL + 'IMG20251101180852.jpg'}
                            alt="Profile"
                            loading="lazy"
                            className="rounded-full w-full h-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl relative z-10"
                            style={{ objectPosition: 'center 10%' }}
                        />
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;
