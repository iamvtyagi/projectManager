/**
 * Tailwind utility classes for futuristic UI components
 * These replace the CSS classes from index.css
 */

// Button styles
export const neonButtonCyan = "relative overflow-hidden transition-all duration-300 ease-in-out z-10 bg-black/70 border border-neon-cyan/30 text-neon-cyan hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] active:scale-95";

export const neonButtonPurple = "relative overflow-hidden transition-all duration-300 ease-in-out z-10 bg-black/70 border border-neon-purple/30 text-neon-purple hover:text-white hover:border-neon-purple hover:shadow-[0_0_15px_rgba(157,0,255,0.5)] active:scale-95";

export const holoButton = "relative overflow-hidden transition-all duration-300 ease-in-out z-10 bg-black/70 border border-neon-purple/30 text-white hover:text-neon-purple hover:border-neon-purple hover:shadow-[0_0_15px_rgba(157,0,255,0.5)] active:scale-95";

// Card styles
export const cyberCard = "relative overflow-hidden transition-all duration-300 ease-in-out z-10 bg-black/60 backdrop-blur-md border border-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:-translate-y-1 hover:scale-[1.02]";

export const cyberCardPurple = "relative overflow-hidden transition-all duration-300 ease-in-out z-10 bg-black/60 backdrop-blur-md border border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-[0_0_20px_rgba(157,0,255,0.2)] hover:-translate-y-1 hover:scale-[1.02]";

// Input styles
export const cyberInput = "w-full px-3 py-3 bg-black/70 border border-neon-cyan/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-500 font-mono transition-all duration-300";

export const cyberInputPurple = "w-full px-3 py-3 bg-black/70 border border-neon-purple/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple text-white placeholder-gray-500 font-mono transition-all duration-300";

// Select styles
export const cyberSelect = "w-full px-3 py-3 bg-black/70 border border-neon-cyan/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-500 font-mono transition-all duration-300 appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2300f2ff%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E')] bg-no-repeat bg-[right_10px_center] bg-[length:16px] pr-10";

// Badge styles
export const cyberBadge = "bg-black/70 border border-neon-cyan/30 text-neon-cyan font-mono text-xs py-1 px-2 rounded inline-flex items-center justify-center shadow-[0_0_10px_rgba(0,242,255,0.1)]";

export const cyberBadgePurple = "bg-black/70 border border-neon-purple/30 text-neon-purple font-mono text-xs py-1 px-2 rounded inline-flex items-center justify-center shadow-[0_0_10px_rgba(157,0,255,0.1)]";

// Divider styles
export const cyberDivider = "h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent border-none my-6 relative";

// Background styles
export const cyberBackground = "bg-black relative overflow-hidden";

export const cyberGrid = "absolute inset-0 bg-cyber-grid-dense z-0 opacity-20";

// Animation classes
export const pageTransition = "animate-[pageTransition_0.5s_cubic-bezier(0.16,1,0.3,1)]";

export const fadeIn = "animate-[fadeIn_0.4s_cubic-bezier(0.16,1,0.3,1)]";

export const slideUp = "animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]";

// Text styles
export const holoText = "bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent animate-[text-shimmer_2s_linear_infinite]";

// Loader styles
export const cyberLoader = "inline-block w-5 h-5 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin relative";
