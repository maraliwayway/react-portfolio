import profilePic from "../assets/maraProfile.png"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="pb-20 pt-20">
        <h2 className="my-10 text-center text-4xl font-semibold">
            About Me
        </h2>
        <div className="flex items-center justify-center">
            <p> {ABOUT_TEXT}</p>
        </div>
    </div>
  )
}

export default About