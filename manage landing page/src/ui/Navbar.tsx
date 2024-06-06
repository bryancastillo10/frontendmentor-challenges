import logo from "../assets/logo.svg";
import { navigation } from "../constants";
import { Button } from "../components";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className=" max-w-[70%] m-auto flex justify-between items-center p-8">
        <div className="">
          <img src={logo} alt={logo} />
        </div>
        <ul className="flex justify-center items-center gap-4 tracking-light text-darkBlue">
          {navigation.map((nav) => (
            <li key={nav.id}>{nav.title}</li>
          ))}
        </ul>
        <div className="">
          <Button>Get Started</Button>
        </div>

        <div className="md:hidden">{/* Mobile Menu */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
