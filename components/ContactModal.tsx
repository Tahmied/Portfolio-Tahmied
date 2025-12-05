'use client';

import { AnimatePresence, motion } from 'motion/react';
import { X, Check, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setIsLoading(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);

        // Auto close after showing success message
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="!fixed !inset-0 !z-50 !flex !items-center !justify-center !p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="!absolute !inset-0 !bg-black/80 !backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="!relative !w-full !max-w-lg !bg-[#1c1c1c] !border !border-white/10 !rounded-3xl !shadow-2xl !overflow-hidden"
                        style={{
                            boxShadow: "0 0 40px rgba(79, 195, 247, 0.15)"
                        }}
                    >
                        {/* Decorative gradient blob */}
                        <div className="!absolute !-top-20 !-right-20 !w-60 !h-60 !bg-[#4fc3f7]/20 !rounded-full !blur-3xl !pointer-events-none" />
                        <div className="!absolute !-bottom-20 !-left-20 !w-60 !h-60 !bg-purple-500/10 !rounded-full !blur-3xl !pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="!absolute !top-5 !right-5 !p-2 !text-gray-400 hover:!text-[#4fc3f7] !transition-colors !rounded-full hover:!bg-white/5 !z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="!p-8 md:!p-10 !relative !z-0">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <h2 className="!text-4xl !font-bold !mb-3 !bg-gradient-to-r !from-[#4fc3f7] !to-white !bg-clip-text !text-transparent !inline-block">
                                            Let's Talk
                                        </h2>
                                        <p className="!text-gray-400 !mb-8 !text-lg">
                                            Have a project in mind? I'd love to hear about it.
                                        </p>

                                        <form onSubmit={handleSubmit} className="!space-y-5 !mt-4">
                                            <div className="!space-y-2">
                                                <label htmlFor="name" className="!text-sm !font-medium !text-gray-300 !ml-1">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    className="!w-full !mt-1 !px-5 !py-4 !bg-[#121212] !border !border-white/10 !rounded-xl focus:!outline-none focus:!border-[#4fc3f7] focus:!ring-1 focus:!ring-[#4fc3f7] !text-white !placeholder-gray-600 !transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="!space-y-2">
                                                <label htmlFor="email" className="!text-sm !font-medium !text-gray-300 !ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    className="!w-full !px-5 !py-4 !bg-[#121212] !border !border-white/10 !rounded-xl focus:!outline-none focus:!border-[#4fc3f7] focus:!ring-1 focus:!ring-[#4fc3f7] !text-white !placeholder-gray-600 !transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            <div className="!space-y-2">
                                                <label htmlFor="message" className="!text-sm !font-medium !text-gray-300 !ml-1">Message</label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    rows={4}
                                                    className="!w-full !px-5 !py-4 !bg-[#121212] !border !border-white/10 !rounded-xl focus:!outline-none focus:!border-[#4fc3f7] focus:!ring-1 focus:!ring-[#4fc3f7] !text-white !placeholder-gray-600 !transition-all !resize-none"
                                                    placeholder="Tell me about your project..."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="!w-full !py-4 !mt-4 !bg-gradient-to-r !from-[#4fc3f7] !to-[#2196f3] !text-white !font-bold !text-lg !rounded-xl hover:!shadow-[0_0_20px_rgba(79,195,247,0.4)] hover:!scale-[1.02] active:!scale-[0.98] !transition-all !flex !items-center !justify-center !gap-2 disabled:!opacity-50 disabled:hover:!scale-100"
                                            >
                                                {isLoading ? (
                                                    <div className="!w-6 !h-6 !border-2 !border-white/30 !border-t-white !rounded-full !animate-spin" />
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={20} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="!flex !flex-col !items-center !justify-center !py-12 !text-center"
                                    >
                                        <div className="!w-24 !h-24 !bg-[#4fc3f7]/10 !rounded-full !flex !items-center !justify-center !mb-6 !relative">
                                            <div className="!absolute !inset-0 !bg-[#4fc3f7]/20 !rounded-full !animate-ping" />
                                            <Check className="!w-12 !h-12 !text-[#4fc3f7]" />
                                        </div>
                                        <h3 className="!text-3xl !font-bold !text-white !mb-3">Message Sent!</h3>
                                        <p className="!text-gray-400 !text-lg">Thanks for reaching out. I'll get back to you soon.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
