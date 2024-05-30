import logo from "../assets/logo.svg";
import mobileMenu from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";
import { navLinks } from "../constants";
import { Button} from "../components";

interface NavbarProps{
  openMenu: boolean;
  toggleMenu: () => void;
}

const Navbar = ({openMenu,toggleMenu}:NavbarProps) => {

  return (
    <nav className="relative shadow-sm w-full m-auto bg-white ">
      <div className="flex justify-between items-center p-6 width-wrapper">
          <div className="max-w-[200px]">
            <img src={logo} alt={logo} />
          </div>
          <ul className="hidden md:flex justify-evenly items-center gap-2.5 tracking-light text-neutral-dark">
            {navLinks.map((nav) => (
              <li className="my-0 py-0"
                key={nav.id}><a className="nav-link"
                  href={nav.link}>{nav.title}</a></li>
            ))}
          </ul>    
          <div className="block md:hidden cursor-pointer duration-1000 ease-in" onClick={toggleMenu}>
            <img src={openMenu ? closeBtn: mobileMenu} alt={mobileMenu} />
        </div>
      
          <div className="hidden md:flex items-center">
            <Button>Request Invite</Button>
          </div>
 
      </div>
    </nav>
  )
}

export default Navbar;
