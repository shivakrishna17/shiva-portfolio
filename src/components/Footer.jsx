import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent dark:bg-gray-900 py-12 dark:border-t dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Logo" className="h-10 w-10 object-contain rounded-full border border-blue-500/30 p-0.5" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Shiva Krishna</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            © {new Date().getFullYear()} Shiva Krishna. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/shivakrishna17" target="_blank" rel="noopener noreferrer" aria-label="Shiva's GitHub" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/shiva-krishna-065553147/" target="_blank" rel="noopener noreferrer" aria-label="Shiva's LinkedIn" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:shivakrishna17@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Shiva" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
