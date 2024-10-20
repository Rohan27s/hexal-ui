'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from './vairants';
var MotionSection = function (_a) {
    var children = _a.children;
    return (<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }} variants={fadeInUp}>

            {children}
        </motion.section>);
};
export default MotionSection;
