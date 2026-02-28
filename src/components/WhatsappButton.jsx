import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 50, y: "-50%", rotate: -90 }}
            animate={{ x: 0 }}
            whileHover={{ x: -10, backgroundColor: "#000" }}
            className="fixed -rotate-90 -right-20 top-1/2 z-[9999] flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 h-12 shadow-xl transition-colors duration-300"
        >
            <FaWhatsapp size={18} className="rotate-90" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] hidden md:block">
                WHATSAPP
            </span>

            <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute left-0 h-full w-[2px] bg-white/50"
            />
        </motion.a>
    );
};

export default WhatsAppButton;