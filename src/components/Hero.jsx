import { motion } from "framer-motion";

import { styles } from "../styles";
import video from "../assets/hero7.mp4"
import { SectionWrapper } from "../hoc";



const Hero = () => {
  return (
    <section className={'relative'}> {/*backgroud*/}{/**/}

      <div
        className={`xl:mt-12 flex flex-col md:flex-row gap-10 overflow-hidden`}
      >
        <div
          className={`flex flex-col justify-center items-center md:mt-5 md:w-1/2 ${styles.paddingX}`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#7976D5]'>Akshay<br className='sm:block hidden' /> Jayaram</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Welcome to my digital <br className='sm:block hidden' />
              playground!
            </p>
          </div>
        </div>

        <div className={`flex flex-1 md:h-auto ${styles.paddingX}`}>
          <video src={video} autoPlay loop muted />
        </div>

      </div>

      {/*scroll animation*/}
      <div className='relative xs:top-10 top-20  w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero");