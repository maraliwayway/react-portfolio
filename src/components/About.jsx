import profilePic from "../assets/maraProfile.png"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
            About <span className="text-neutral-500"> Me </span>
        </h2>
        <div className="flex items-center justify-center">
            <p className="font-light tracking-tighter"> {ABOUT_TEXT}</p>
        </div>
    </div>
  )
}

export default About