import { AboutCards } from "../components";
import { aboutFeatures } from "../constants";

const About = () => {
  return (
    <section className=" bg-neutral-light my-10">
      <div className="md:max-w-[80%] md:mx-20 py-8">
        <article className="max-w-[90%] mx-auto">
          <h1 className="section-header">Why choose Easybank?</h1>
          <p className="text-neutral-dark text-center leading-normal tracking-light text-[14px] md:text-base lg:text-left lg:max-w-[60%]">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </article>
        <div className="card-wrapper">
          {aboutFeatures.map((about) => (
            <AboutCards key={about.id} {...about}  />
         ))}
        </div>
        </div>
    </section>
  )
}

export default About;
