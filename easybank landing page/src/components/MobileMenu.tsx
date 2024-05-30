import { navLinks } from "../constants";

// interface MobileMenuProps{
//     openMenu: boolean;
// }

const MobileMenu = () => {
  return (
    <div className="absolute z-[100] left-10 right-10 top-4">
        <ul className="text-center p-4 rounded-lg bg-white opacity-100 border shadow ">
              {navLinks.map((nav) => (
                  <li   className="my-4 text-primary text-xl"
                      key={nav.id}>{nav.title}</li>
           ))}   
        </ul>
    </div>
  )
}

export default MobileMenu;
