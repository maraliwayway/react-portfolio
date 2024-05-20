import profilePic from "../assets/maraProfile.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="pb-20 pt-20">
        <h2 className="my-10 text-center text-4xl font-semibold">
            About Me
        </h2>
        <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center">
            <p> {ABOUT_TEXT}</p>
        </motion.div>
    </div>
  )
}

export default About