import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Zap, Code, CheckCircle } from "lucide-react"; // Imported CheckCircle
import React, { useState } from "react"; // Imported useState

// Placeholder links (Please replace with your actual links)
const MY_GITHUB_URL = "https://github.com/DishaSharma2005";
const MY_LINKEDIN_URL = "https://linkedin.com/in/disha-sharma-25072005d";
const MY_EMAIL = "mailto:sharmadisha25july@gmail.com";

// 🚨 ACTION REQUIRED: Replace this placeholder with your actual Formspree endpoint.
// Example: https://formspree.io/f/xvonnkgg
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkarlvo"; 

export default function Contact() {
    // State to manage form submission status
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // --- 1. SET LOADING STATE ---
        setStatus("loading");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // --- 2. SUCCESS ---
                setStatus("success");
                form.reset(); // Clear the form fields
            } else {
                // --- 3. ERROR (e.g., failed validation, network issue) ---
                setStatus("error");
            }
        } catch (error) {
            // --- 4. NETWORK/FETCH ERROR ---
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    const socialLinks = [
        { icon: Github, label: "Github", status: "Github Profile", href: MY_GITHUB_URL },
        { icon: Linkedin, label: "Linkedin", status: "Let's Connect", href: MY_LINKEDIN_URL },
        { icon: Mail, label: "Mail", status: "Mail Ready", href: MY_EMAIL },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live Connection': return 'bg-green-500';
            case 'Data Storage': return 'bg-purple-500';
            case 'Mail Ready': return 'bg-yellow-500'; // Adjusted for consistency
            default: return 'bg-gray-500';
        }
    };
    
    // Determine button content based on submission status
    const buttonContent = {
        idle: <><Send className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" /> Initiate Transmission</>,
        loading: <><Code className="mr-3 h-5 w-5 animate-spin" /> Transmitting Data...</>,
        success: <><CheckCircle className="mr-3 h-5 w-5" /> Transmission Complete!</>,
        error: <><Zap className="mr-3 h-5 w-5" /> Transmission Failed</>,
    };
    
    // Determine button class based on submission status
    const buttonClass = (status) => {
        let base = "w-full flex items-center justify-center font-bold py-3 rounded-lg transition-all shadow-lg group";
        if (status === 'success') {
            return `${base} bg-green-500 text-white shadow-green-500/30 cursor-default`;
        }
        if (status === 'loading') {
            return `${base} bg-purple-500 text-white shadow-purple-500/30 cursor-wait`;
        }
        if (status === 'error') {
            return `${base} bg-red-500 text-white shadow-red-500/30`;
        }
        // idle state
        return `${base} bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-yellow-400/30`;
    };

    return (
        <section
            id="contact"
            className="relative bg-[#0f0f0f] py-24 px-6 text-white flex flex-col items-center overflow-hidden"
        >
            {/* Subtle Background Glow Effect (Only a hint of purple) */}
            <div 
                className="absolute top-0 w-full h-[500px] bg-purple-600/5 rounded-t-full blur-3xl pointer-events-none"
            ></div>

            {/* Heading */}
            <motion.h2
                className="text-4xl font-black mb-4 text-center tracking-wider relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: "linear-gradient(90deg, #AA00FF 0%, #FFEA00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 5px rgba(255, 234, 0, 0.2))",
                }}
            >
                <Zap className="inline h-6 w-6 mr-3" />
                INITIATE CONTACT
            </motion.h2>

            <p className="text-gray-400 max-w-xl text-center mb-12 relative z-10">
                Send a data packet to start a collaboration or discuss a coding challenge.
            </p>

            <div className="w-full max-w-lg space-y-10 relative z-10">
                
                {/* 1. Contact Form - Streamlined Card */}
                <motion.form
                    // 🚨 IMPORTANT FIX: Added action and method attributes for Formspree
                    onSubmit={handleSubmit}
                    method="POST"
                    action={FORMSPREE_ENDPOINT}
                    className="p-8 w-full rounded-2xl shadow-xl backdrop-blur-md border border-purple-500/50"
                    style={{ background: 'rgba(20, 20, 30, 0.7)' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Transmission Form</h3>
                    
                    {/* Submission Success/Error Message */}
                    {(status === 'success' || status === 'error') && (
                        <div className={`p-4 mb-4 rounded-lg font-bold text-center ${status === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500' : 'bg-red-500/20 text-red-300 border border-red-500'}`}>
                            {status === 'success' ? (
                                <p className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5"/>Success! Data packet received. I'll review it shortly.</p>
                            ) : (
                                <p className="flex items-center justify-center gap-2"><Zap className="h-5 w-5"/>Error! Transmission failed. Please try the direct email link below.</p>
                            )}
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Trainer Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-2 border border-purple-500/50 rounded-lg bg-gray-900/80 text-white focus:ring-2 focus:ring-yellow-400 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Transmission Email</label>
                            <input
                                type="email"
                                name="_replyto" // Required for Formspree to know where to reply
                                placeholder="Your Email Address"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-2 border border-purple-500/50 rounded-lg bg-gray-900/80 text-white focus:ring-2 focus:ring-yellow-400 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                        {/* Message Textarea */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Message (Data Packet)</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project or mission..."
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-2 border border-purple-500/50 rounded-lg bg-gray-900/80 text-white focus:ring-2 focus:ring-yellow-400 outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                            ></textarea>
                        </div>
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={buttonClass(status)}
                            disabled={status === 'loading' || status === 'success'}
                        >
                            {buttonContent[status]}
                        </button>
                    </div>
                </motion.form>

                {/* 2. Connection Console - Simplified Panel */}
                <motion.div
                    className="p-6 rounded-xl bg-gray-900/80 border border-purple-500 shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h4 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                        <Code className="w-5 h-5 text-yellow-400"/>
                        Connection Status
                    </h4>
                    
                    {/* Social Links List */}
                    <div className="space-y-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`flex items-center gap-4 p-3 rounded-lg transition-colors group border border-gray-700 hover:border-yellow-400/50 bg-gray-800/50`}
                            >
                                <div className={`w-3 h-3 rounded-full ${getStatusColor(link.status)} animate-pulse`}></div>
                                <link.icon className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-white">{link.label}</div>
                                    <div className="text-xs text-gray-400 italic">{link.status}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Quick Response Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            <Zap className="h-4 w-4 text-yellow-400" />
                            Status: Transmission usually processed within 24 hours.
                        </p>
                    </div>

                </motion.div>
            </div>

            {/* Footer */}
            <p className="mt-16 text-sm text-white/50 relative z-10">
                © {new Date().getFullYear()} Disha Sharma. All rights reserved.
            </p>
            
            {/* Custom Keyframes */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                .animate-spin { animation: spin 1s linear infinite; }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}