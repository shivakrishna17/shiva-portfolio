import { motion } from 'framer-motion';
import {
    Server,
    Database as DatabaseIcon,
    Settings,
    Code
} from 'lucide-react';

const About = () => {
    const skills = [
        {
            icon: Code,
            title: 'Frontend',
            description: 'React.js, TypeScript, JavaScript, HTML, CSS, JSP'
        },
        {
            icon: Server,
            title: 'Backend',
            description: 'Java, Spring Boot, Spring Framework, REST APIs, Microservices'
        },
        {
            icon: DatabaseIcon,
            title: 'Database',
            description: 'MySQL, Oracle SQL, MongoDB, Redis'
        },
        {
            icon: Settings,
            title: 'Tools & DevOps',
            description: 'Git, Jenkins, GitLab, GitHub, Linux, Docker'
        }
    ];

    return (
        <section id="about" className="py-20 bg-transparent dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'm a passionate developer who loves solving complex problems and turning ideas into reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                                <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
