"use client";

import { motion } from "framer-motion";
import { Command, Compass, Disc, Fingerprint, Hexagon, Layers, Wind } from "lucide-react";

const clients = [
    { icon: Command, name: "Command Inc." },
    { icon: Compass, name: "Compass Web" },
    { icon: Disc, name: "Disc Media" },
    { icon: Fingerprint, name: "SecurePrint" },
    { icon: Hexagon, name: "Hexagon UI" },
    { icon: Layers, name: "Layered Systems" },
    { icon: Wind, name: "Wind Designs" },
];

export const ClientsMarquee = () => {
    return (
        <section className="py-14 border-y border-border/30 bg-background/50 relative overflow-hidden flex flex-col items-center">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <p className="text-sm font-medium text-foreground/50 mb-10 uppercase tracking-widest z-10 relative">
                Trusted by Leading Businesses Worldwide
            </p>

            <div className="flex overflow-hidden w-full group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex whitespace-nowrap gap-24 min-w-max group-hover:[animation-play-state:paused]"
                >
                    {/* We duplicate the array to create a seamless loop */}
                    {[...clients, ...clients].map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 text-foreground/40 hover:text-foreground/80 transition-colors grayscale hover:grayscale-0 cursor-pointer"
                        >
                            <client.icon className="w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tight">{client.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
