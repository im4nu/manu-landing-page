import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {FiCommand, FiPenTool, FiMonitor} from 'react-icons/fi'

export default function DesignPattern(){
    const DesignPattern = [
        { icon: FiCommand, item: 'Prototipagem' },
        { icon: FiPenTool, item: 'WebDesign' },
        { icon: FiMonitor, item: 'Desenvolvimento' },
    ]
    return(
    <div className="window">
        <nav>
            <ul>
                 <li>
                    <motion.div className="underline" layoutId="underline" />
                </li>
            </ul>
        </nav>
        <main>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    // key={}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <FiCommand color="#DEDEDE" size={24} />
                </motion.div>
            </AnimatePresence>
        </main>
    </div>
    )
}