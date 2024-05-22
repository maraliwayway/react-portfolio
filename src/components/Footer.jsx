import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="pb-20 pt-20">
        <motion.p 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1}}
            className="my-10 text-center mb-4 text-neutral-400">
            Coded with React and Tailwind CSS
        </motion.p>
        <motion.p 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1}}
            className="text-center mb-4 text-neutral-400">
            Mara Liwayway David, May 2024
        </motion.p>
    </div>
  )
}

export default Footer