import HeroGraphs from "../assets/illustration-intro.svg";
import { Button } from "../components";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center gap-8 max-w-[70%] mx-auto">
        <div className="flex flex-col gap-8 max-w-[75%]">
          <h1 className="font-bold text-4xl tracking-normal text-darkBlue lg:max-w-[70%] xl:max-w-[50%] leading-tight">
            Bring everyone together to build better products.
          </h1>
          <p className="text-base text-darkGrayBlue lg:max-w-[70%] xl:max-w-[55%] text-pretty ">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="min-w-fit">
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="max-w-[50%] mx-auto">
          <img src={HeroGraphs} alt={HeroGraphs} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
