import { Navbar, Hero, About, Testimonials, Banner, Footer } from "./ui";
import desktopFiller from "./assets/bg-simplify-section-desktop.svg";

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${desktopFiller})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Hero />
        <About />
      </div>
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
