
import { motion } from "framer-motion"
import aboutImg from "../assets/maraAboutPic.jpg"

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

        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl w-90 h-90" src={aboutImg} alt="About" />
                </div>
            </motion.div>
        <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center lg:w-1/2">

            <div className="flex flex-col">
            <p className="my-2 max-w-xl py-2">
                I'm <span className="font-bold text-cyan-500"> Mara Liwayway David </span>, a second-year undergraduate student at <span className="text-cyan-500"> Simon Fraser University </span>, pursuing a <span className="text-cyan-500"> Bachelor of Science </span> in <span className="text-cyan-500"> Computing Science </span>.
            </p>

            <p className="my-2 max-w-xl py-2">
                My passion for the technology sector sparked when I participated in Hackergal's 4th annual hackathon in grade 8, where I found joy in problem-solving and thinking creatively. Fast-forwarding, I love to share the amazing wonders of code, especially through teaching. Currently, I work as a <span className="text-cyan-500"> Coding Instructor </span> at <span className="text-cyan-500"> Code Ninjas Surrey </span> and <span className="text-cyan-500"> SFU FAS Outreach with Science AL!VE </span>, where I teach coding to students ranging from elementary to high school level.
            </p>

            <p className="my-2 max-w-xl py-2">
                When I'm offline, you'll find me singing, reading, or spending time outdoors! I'm also interested in zombie apocalypse franchises, anime, and online personality tests (I'm an ISTJ). Feel free to chat about any of these with me - I'm all ears!
            </p>
            
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default About