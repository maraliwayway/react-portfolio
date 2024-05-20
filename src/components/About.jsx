import profilePic from "../assets/maraProfile.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="pb-20 pt-20">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1}}
            className="my-10 text-center text-4xl font-semibold">
            About Me
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center">
            <p> {ABOUT_TEXT}</p>
        </motion.div>
    </div>
  )
}

export default About