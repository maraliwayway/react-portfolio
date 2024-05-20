import { FaPython, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbLetterCSmall, TbBrandCpp } from "react-icons/tb";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const Skills = () => {
  return (
    <div className="pb-20 pt-20">
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5}}
            className="my-20 text-center text-4xl font-semibold">
            Skills
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4">
                <FaPython className="text-7xl text-cyan-500" title="Python"/>
            </motion.div>

            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="p-4">
                <DiJavascript1 className="text-7xl text-cyan-500" title="Javascript"/>
            </motion.div>

            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4">
                <FaHtml5 className="text-7xl text-cyan-500" title="HTML"/>
            </motion.div>

            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="p-4">
                <FaCss3Alt className="text-7xl text-cyan-500" title="CSS" />
            </motion.div>

            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4">
                <TbLetterCSmall className="text-7xl text-cyan-500" title="C" />
            </motion.div>

            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="p-4">
                <TbBrandCpp className="text-7xl text-cyan-500" title="C++" />
            </motion.div>

            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-500" title="React" />
            </motion.div>

            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-500" title="Tailwind CSS"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills