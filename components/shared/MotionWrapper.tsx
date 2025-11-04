'use client';

import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';

/**
 * Generic MotionWrapper component
 * 
 * Supports any motion element (div, section, span, etc.)
 * with full TypeScript inference for both motion props and HTML attributes.
 */
type MotionTag = keyof typeof motion;

type MotionWrapperProps<T extends MotionTag> = {
    as?: T;
    children: React.ReactNode;
} & React.ComponentProps<typeof motion.div> &
    MotionProps;

export default function MotionWrapper<T extends MotionTag = 'div'>({
    as,
    children,
    ...props
}: MotionWrapperProps<T>) {
    const MotionTag = (motion[as || 'div'] || motion.div) as any;
    return <MotionTag {...props}>{children}</MotionTag>;
}
