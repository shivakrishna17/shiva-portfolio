import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SITE } from '../config/site';

const Contact = () => {
    const form = useRef();

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        emailjs
            .sendForm(
                'service_dd9hunc',
                'template_28s99ce',
                form.current,
                {
                    publicKey: '9Py16kLI56_zef-03',
                }
            )
            .then(
                () => {
                    setStatus({
                        type: 'success',
                        message: 'Message sent successfully!'
                    });
                    form.current.reset();
                },
                (error) => {
                    setStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again.'
                    });
                    console.error('EmailJS Error:', error.text);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-transparent dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email</h3>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {SITE.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Phone</h3>
                                <a
                                    href="tel:+917730946373"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    +91 7730946373
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Location</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Hyderabad, Telangana, India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success'
                                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                                    : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                                    }`}>
                                    {status.type === 'success'
                                        ? <CheckCircle className="h-5 w-5" />
                                        : <AlertCircle className="h-5 w-5" />}
                                    <span className="text-sm">{status.message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
