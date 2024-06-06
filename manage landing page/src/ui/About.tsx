import { aboutFeatures } from "../constants";

const About = () => {
  return (
    <section className="pt-12">
      <div className="flex max-w-[70%] mx-auto">
        <div className="max-w-[50%]">
          <h1 className="text-darkBlue text-4xl font-bold lg:max-w-[80%] my-4 pb-8">
            What’s different about Manage?
          </h1>
          <p className="text-darkGrayBlue leading-relaxed font-light max-w-[55%]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="max-w-[50%]">
          {aboutFeatures.map((abt) => (
            <div
              key={abt.id}
              className="flex flex-col justify-center items-start"
            >
              <div className="flex items-center gap-4 my-2">
                <div className="bg-brightRed text-veryLightGray px-4 py-2 rounded-full">
                  {abt.id}
                </div>
                <h1 className="text-darkBlue font-bold">{abt.title}</h1>
              </div>
              <div className=" text-darkGrayBlue ml-[4.5rem] mb-8 min-w-fit text-balance">
                <p>{abt.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
