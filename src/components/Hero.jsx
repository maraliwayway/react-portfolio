import profilePic from "../assets/maraProfile.png"

const Hero = () => {
  return (
    <div className="pb-40 flex flex-wrap items-center lg:mb-35">
        <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-3/5">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className=" text-6xl lg:mt-16 lg:text-8xl font-medium">
                        Hi, I'm Mara 👋🏼
                    </h1>
                    <span className="font-light tracking-tight text-cyan-500 text-2xl lg:text-3xl pt-10">
                        Aspiring Software Engineer in Surrey, BC
                    </span>
                    
                </div>
            </div>
            <div className="w-full flex items-center lg:w-2/5 lg:p-8">
                <div className="flex items-center justify-center pt-10">
                    <img className="rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" src={profilePic} alt="Mara" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero