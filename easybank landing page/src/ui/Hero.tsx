import heroDesktop from "../assets/bg-intro-desktop.svg";
import heroMobile from "../assets/bg-intro-mobile.svg";
import heroPhones from "../assets/image-mockups.png";
import { Button, MobileMenu} from "../components"

interface HeroProps{
  openMenu: boolean;
}


const Hero = ({openMenu}:HeroProps) => {

  return (
    <section className="flex flex-col-reverse md:flex-row md:place-items-center overflow-x-hidden">
      <article className="md:max-w-[60%] max-w-[90%] mx-auto md:ml-36">
        <div className="mb-8">
        <h1 className="hero-header-text">Next generation digital banking</h1>
          <p className="hero-statement">
          Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.
          </p>
        </div>
        <div className="text-center md:text-left pb-20">
          <Button>Request Invite</Button>
        </div>
      </article>

      <div className="relative overflow-y-hidden lg:overflow-hidden">
        {openMenu && (<MobileMenu />)}   
        <picture className="">
          <source className="object-cover"
            media="(min-width:768px)" srcSet={heroDesktop} />
          <img className=""
            src={heroMobile} alt={heroMobile} />
        </picture>
        <img className="absolute z-50 -top-20 md:-top-60 md:-right-20"
          src={heroPhones} alt={heroPhones} />
      </div>
      <div className="">
        
      </div>
    </section>
  )
}

export default Hero
