import footerLogo from "../assets/footer-logo.svg";
import { Button, Linker } from "../components";
import { socialMedia } from "../constants";

const footerSectionOne = ["About Us", "Contact", "Blog"];
const footerSectionTwo = ["Careers", "Support", "Privacy Policy"];


const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="p-4">
        <div className="my-4 flex flex-col md:flex-row md:justify-between justify-center items-center max-w-[85%] mx-auto">
          {/* section 1 */}
          <div className="flex flex-col justify-between min-h-[100px]">
          <img src={footerLogo} alt={footerLogo} />
          <ul className="flex gap-2 my-4">
            {socialMedia.map((social) => (
              <li key={social.id}><Linker><img className="social-media-link" src={social.icon} alt={social.icon} /></Linker></li>
            ))}
          </ul>
          </div>
          {/* section 2 */}
          <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center md:translate-x-[-25px]
           lg:translate-x-[-110px] xl:translate-x-[-220px]">
            <ul className="text-center md:text-left pt-4 md:pt-0 mx-2">
              {footerSectionOne.map((link) => (
                <li className="my-2" key={link}><Linker>{link}</Linker></li>
              ))}
            </ul>

            <ul className="text-center md:text-left pb-4 md:pb-0 mx-2">
              {footerSectionTwo.map((link) => (
                <li className="my-2" key={link}><Linker>{link}</Linker></li>
              ))}
            </ul>
          </div>

          {/* section 3 */}
          <div className="grid grid-cols-1 gap-8 md:gap-4">
            <div className="text-center md:text-right">
              <Button>Request Invite</Button>
            </div>
            <div>
              <p className="text-neutral-dark text-sm font-light md:text-right">© Easybank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
