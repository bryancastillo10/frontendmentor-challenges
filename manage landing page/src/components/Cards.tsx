interface CardsProps {
  name: string;
  image: string;
  content: string;
}

const Cards = ({ name, image, content }: CardsProps) => {
  return (
    <div className="bg-[#f4f3f2] min-h-[200px] border w-full flex flex-col shrink-0">
      <div className="flex place-content-center">
        <img
          className="size-28 rounded-full border-2 translate-y-[-40px]"
          src={`../assets/${image}.png`}
          alt={image}
        />
      </div>
      <div className="flex flex-col  items-center p-4 mb-8 translate-y-[-40px]">
        <h1 className="text-darkBlue font-bold my-4">{name}</h1>
        <p className="max-w-[70%] mx-auto text-center text-darkGrayBlue">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Cards;
