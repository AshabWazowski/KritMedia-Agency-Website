"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(latest) {
                    setDisplayValue(Math.round(latest));
                }
            });
            return controls.stop;
        }
    }, [isInView, value]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

export const AchievementsCounter = () => {
    return (
        <section className="py-24 px-4 w-full border-t border-border/30 bg-background/30">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-start">
                {/* Left Side: Headlines */}
                <div className="flex-1 max-w-lg">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8"
                    >
                        Building Better <span className="text-primary block">Business Together</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6 rounded-2xl bg-secondary/30 border border-primary/20 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold mb-3">Strengthening Connections, Achieving Together</h3>
                        <p className="text-foreground/60 leading-relaxed font-light text-sm">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </motion.div>
                </div>

                {/* Right Side: Animated Stats */}
                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:pt-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col"
                    >
                        <div className="text-4xl lg:text-5xl font-extrabold mb-2 title-font">
                            <AnimatedNumber value={10} suffix="M+" />
                        </div>
                        <p className="text-foreground/60 text-sm leading-relaxed">Proven global project excellence</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <div className="text-4xl lg:text-5xl font-extrabold mb-2 title-font">
                            <AnimatedNumber value={60} suffix="%" />
                        </div>
                        <p className="text-foreground/60 text-sm leading-relaxed">Maximize Revenue, Minimize Risk</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col"
                    >
                        <div className="text-4xl lg:text-5xl font-extrabold mb-2 title-font">
                            <AnimatedNumber value={50} suffix="%" />
                        </div>
                        <p className="text-foreground/60 text-sm leading-relaxed">Sustainable Revenue Expansion</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
