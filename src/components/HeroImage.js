import React from 'react'
import { motion } from "framer-motion";

const HeroImage = () => {

    const heroAnimation = {
        hidden: {
            x: 200,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 1.3, ease: "easeOut"}
        }
    }

    return (
        <motion.svg variants={heroAnimation} initial="hidden" animate="show" xmlns="http://www.w3.org/2000/svg" width="565" height="565" viewBox="0 0 565 565">
            <motion.g id="Grupo_1" data-name="Grupo 1" transform="translate(-913 -237)">
                <rect  id="Retângulo_5" data-name="Retângulo 5" width="141" height="141" rx="37" transform="translate(1196 237)" fill="#88d317"/>
                <rect id="Retângulo_10" data-name="Retângulo 10" width="141" height="141" rx="37" transform="translate(1196 520)" fill="#88d317"/>
                <rect id="Retângulo_6" data-name="Retângulo 6" width="142" height="142" rx="37" transform="translate(1054 378)" fill="#fff"/>
                <rect id="Retângulo_9" data-name="Retângulo 9" width="142" height="141" rx="37" transform="translate(1054 661)" fill="#fff"/>
                <rect id="Retângulo_8" data-name="Retângulo 8" width="141" height="141" rx="37" transform="translate(913 520)" fill="#fff" opacity="0.43"/>
                <rect id="Retângulo_7" data-name="Retângulo 7" width="141" height="142" rx="37" transform="translate(1337 378)" fill="#88d317" opacity="0.43"/>
                <ellipse id="Elipse_4" data-name="Elipse 4" cx="70.5" cy="71" rx="70.5" ry="71" transform="translate(1196 378)" fill="#fc23c2"/>
                <ellipse id="Elipse_5" data-name="Elipse 5" cx="71" cy="70.5" rx="71" ry="70.5" transform="translate(1054 520)" fill="#0fe"/>
            </motion.g>
        </motion.svg>

    )
}

export default HeroImage
