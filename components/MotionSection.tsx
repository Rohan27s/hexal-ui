'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from './vairants';

interface MotionSectionProps {
    children: ReactNode;
}

const MotionSection = ({ children }: MotionSectionProps) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
            transition={{ duration: 1 }}
            variants={fadeInUp}
        >

            {children}
        </motion.section>
    );
};

export default MotionSection;
