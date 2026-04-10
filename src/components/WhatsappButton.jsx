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
            className="fixed bottom-0 right-4 z-[9999] group flex items-center justify-center gap-3 bg-[#25D366] text-white h-16 w-16 rounded-full shadow-xl transition-colors duration-300"
        >
            <FaWhatsapp size={24} className="rotate-90" />
        </motion.a>
    );
};

export default WhatsAppButton;