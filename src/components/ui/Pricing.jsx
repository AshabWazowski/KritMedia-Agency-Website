"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$99",
        period: "/mo",
        description: "Essential maintenance for growing businesses.",
        features: [
            "99.9% Uptime Monitoring",
            "Weekly Automated Backups",
            "Basic Security Audits",
            "Email Support",
        ],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$199",
        period: "/mo",
        description: "Advanced hosting and priority support for pros.",
        features: [
            "99.99% Uptime SLA",
            "Daily Automated Backups",
            "Advanced Security & Malware Scans",
            "Monthly SEO Audits",
            "Priority 24/7 Support",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "$499",
        period: "/mo",
        description: "Custom solutions with dedicated infrastructure out of the box.",
        features: [
            "100% Uptime Guarantee",
            "Real-time Backups",
            "Enterprise-grade Security",
            "Continuous SEO Optimization",
            "Dedicated Account Manager",
        ],
        highlighted: false,
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Pricing = () => {
    return (
        <section className="py-24 px-4 w-full relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                >
                    Maintenance & <span className="text-accent">Hosting</span> Plans
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-foreground/70 text-lg"
                >
                    Transparent, predictable pricing for world-class infrastructure and peace of mind. Let us handle the technicals while you scale.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={cn(
                            "relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2",
                            plan.highlighted
                                ? "bg-gradient-to-b from-secondary to-background border-2 border-primary shadow-[0_0_40px_-10px_var(--color-primary)] lg:-my-6"
                                : "glass lg:my-0"
                        )}
                    >
                        {plan.highlighted && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-foreground/60 text-sm h-10">{plan.description}</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                            <span className="text-foreground/50 font-medium">{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={cn(
                            "w-full py-4 rounded-xl font-medium transition-all",
                            plan.highlighted
                                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95"
                        )}>
                            Choose {plan.name}
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
