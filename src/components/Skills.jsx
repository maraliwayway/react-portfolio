import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">
            Skills
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="p-4">
                <FaPython className="text-7xl text-cyan-500" />
            </div>

            <div className="p-4">
                <DiJavascript1 className="text-7xl text-cyan-500" />
            </div>

            <div className="p-4">
                <FaHtml5 className="text-7xl text-cyan-500" />
            </div>

            <div className="p-4">
                <FaCss3Alt className="text-7xl text-cyan-500" />
            </div>

            <div className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </div>

            <div className="p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-500" />
            </div>
        </div>
    </div>
  )
}

export default Skills