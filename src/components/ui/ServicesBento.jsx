"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Settings, Blocks, ShieldCheck, Search, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Web Designing",
        description: "Stunning, human-centric UI/UX designs that elevate your brand and captivate your audience.",
        icon: MonitorPlay,
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Web Development",
        description: "Scalable, high-performance applications built on modern architectures.",
        icon: Blocks,
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Hosting Solutions",
        description: "Secure, blazingly fast hosting tailored for maximum uptime.",
        icon: Database,
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Maintenance",
        description: "Continuous monitoring, security patches, and updates to keep your ecosystem flawless.",
        icon: Settings,
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Website SEO",
        description: "Data-driven SEO strategies that rank you higher and drive organic traffic.",
        icon: Search,
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Security Audits",
        description: "Proactive vulnerability scanning and robust security measures to protect your digital assets.",
        icon: ShieldCheck,
        colSpan: "md:col-span-1 lg:col-span-1",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const ServicesBento = () => {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                >
                    What We Offer for Your <span className="text-accent">Satisfaction</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-foreground/70 text-lg"
                >
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={cn(
                            "group relative p-8 rounded-3xl overflow-hidden bg-card/40 border border-border/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_var(--color-primary)]",
                            service.colSpan
                        )}
                    >
                        {/* Subtle radial gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
