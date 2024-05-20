import logo from "../assets/maraLogo.png"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mara-liwayway-david-239470231/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition duration-500 hover:text-cyan-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/maraliwayway" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition duration-500 hover:text-cyan-600">
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}

export default Navbar