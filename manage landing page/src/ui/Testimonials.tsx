import { Button, Cards } from "../components";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[70%] mx-auto">
        <div className="my-4">
          <h1 className="text-center font-bold text-darkBlue text-4xl">
            What they’ve said
          </h1>
        </div>
        <div className="flex justify-center items-center gap-8 bg-veryLightGray">
          {feedback.map((content) => (
            <Cards key={content.id} {...content} />
          ))}
        </div>
        <div className="text-center my-4">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
