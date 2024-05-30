// import { Container } from "./components";
import { Navbar, Hero,About, News, Footer, Attribution } from "./ui";
import { useState } from "react";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <div className={`${openMenu ? "opacity-80":"opacity-100"}`}>  
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} />
      <Hero openMenu={openMenu} />  
      <About />
      <News />
      <Footer />
      <Attribution/>
    </div>
  )
}

export default App;
