import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/maraProfile.png"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl lg:mt-16 lg:text-8xl">
                        Mara
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Aspiring Software Engineer
                    </span>
                    <p className="my-2 max-w-xl py-6">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-full" src={profilePic} alt="Mara" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero