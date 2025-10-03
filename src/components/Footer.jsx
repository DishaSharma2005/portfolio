import React from 'react';
import { Heart, ArrowUp, Zap, Code, Shield } from 'lucide-react'; // FIX: Added Code and Shield here

// Mock Button Component (Self-Contained)
const Button = ({ children, type = "button", className = "", ...props }) => (
    <button
        type={type}
        className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0f0f0f] border-t border-purple-800/50 py-16 text-gray-400 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Main Footer Content */}
                    <div className="text-center space-y-8">
                        
                        {/* Back to Top Button: Thematic Pokéball
                        <div className="flex justify-center mb-10">
                            <button
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full border-4 border-yellow-400/50 bg-[#2a1a3a] text-yellow-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-yellow-400/50 shadow-xl group animate-pulse-slow"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform animate-spin-slow" />
                            </button>
                        </div> */}

                        {/* Logo/Name */}
                       <div>
                            <h3 
                                className="text-2xl font-extrabold mb-1 tracking-wide"
                                style={{
                                    // Subtle gradient retained for branding
                                    background: "linear-gradient(90deg, #AA00FF 0%, #FFEA00 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Disha Sharma
                            </h3>
                            <p className="text-gray-500 text-sm italic">
                                Curious Programmer | Full Stack Developer
                            </p>
                        </div>

                        {/* Quick Links (Navigation Console) */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm pt-4">
                            {[
                                { name: "Home", href: "#" },
                                { name: "About", href: "#about" },
                                { name: "Projects", href: "#projects" },
                                { name: "Contact", href: "#contact" }
                            ].map((link, index) => (
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    className="text-gray-400 hover:text-purple-400 transition-colors hover:-translate-y-0.5 transform duration-200 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 mx-auto mt-8 mb-6"></div>

                        {/* Copyright & Theme */}
                        <div className="space-y-2">
                            <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                Built with{' '}
                                <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
                                {' '}and a passion for code.
                            </p>
                            
                            <p className="text-xs text-gray-600">
                                © {new Date().getFullYear()} Disha Sharma. All rights reserved.
                            </p>
                            
                            {/* Fun Thematic Animation */}
                            <div className="flex justify-center space-x-3 pt-3">
                                <Zap className="h-4 w-4 text-yellow-400 animate-bounce" style={{ animationDelay: '0s' }} />
                                <Code className="h-4 w-4 text-purple-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                                <Shield className="h-4 w-4 text-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Keyframes for animations */}
            <style>
                {`
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.8; transform: scale(1.05); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 3s ease-in-out infinite;
                    }
                    @keyframes spin-slow {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 15s linear infinite;
                    }
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                    }
                    .animate-bounce {
                        animation: bounce 1s infinite;
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
