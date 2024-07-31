import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { credlybadges } from "../constants";

const Badges = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My certificates</p>
                <h2 className={`${styles.sectionHeadText}`}>Badges.</h2>
            </motion.div>
            <div className='flex flex-row justify-center flex-wrap gap-20 mt-10'>
                {credlybadges.map((badge) => (
                    <div
                        data-iframe-width="200"
                        data-iframe-height="270"
                        data-share-badge-id={badge.link}
                        data-share-badge-host="https://www.credly.com"
                    ></div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Badges, "");