import { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.5, ease: EASE },
    },
};

export const popIn: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "tween", duration: 0.55, ease: EASE },
    },
};

export const section: Variants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
};

export const header: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE, type: "tween" },
    },
};

export const grid: Variants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const card: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: EASE, type: "tween" },
    },
};

export const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.02 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};