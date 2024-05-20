import profilePic from "../assets/maraProfile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
  return (
    <div className="pb-40 flex flex-wrap items-center lg:mb-35">
        <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-3/5">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className=" text-6xl lg:mt-16 lg:text-8xl font-medium">
                        Hi, I'm Mara 👋🏼
                    </motion.h1>

                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="font-light tracking-tight text-cyan-500 text-2xl lg:text-3xl pt-10">
                        Aspiring Software Engineer in Surrey, BC
                    </motion.span>
                    
                </div>
            </div>
            <div className="w-full flex items-center lg:w-2/5 lg:p-8">
                <div className="flex items-center justify-center pt-10">
                    <motion.img 
                        initial={{ x:100, opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" src={profilePic} alt="Mara" title="Mara Liwayway David"/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Hero