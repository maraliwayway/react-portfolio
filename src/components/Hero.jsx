import profilePic from "../assets/maraProfile.png"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-10 pt-20 text-7xl lg:mt-16 lg:text-7xl font-semibold">
                        Hi, I'm Mara 👋🏼
                    </h1>
                    <span className="font-light bg-gradient-to-r from-blue-400 via-slate-400 to-cyan-500 bg-clip-text text-2xl tracking-tight text-transparent">
                        Aspiring Software Engineer
                    </span>
                    <p className="my-2 max-w-xl py-2">
                        I'm <span className="text-cyan-500 font-bold"> Mara Liwayway David </span>, a second-year Computing Science student at Simon Fraser University. I am an active advocate of fostering fun and inclusive learning environments. When I'm offline, I'm usually jamming out with my vocals, reading, or spending time outdoors! I'm Mara Liwayway David, a second-year Computing Science student at Simon Fraser University. I am an active advocate of fostering fun and inclusive learning environments. When I'm offline, I'm usually jamming out with my vocals, reading, or spending time outdoors!
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" src={profilePic} alt="Mara" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero