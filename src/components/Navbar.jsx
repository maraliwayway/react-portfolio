import logo from "../assets/maraLogo.png"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />  
        <FaGithub />
      </div>
    </nav>
  )
}

export default Navbar