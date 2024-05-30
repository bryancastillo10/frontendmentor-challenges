
interface AboutCardsProps{
  title: string;
  description: string;
  image: string;
}


const AboutCards = ({title,description,image}:AboutCardsProps) => {
  return (
    <article className="card-container">
        <div className="my-4 max-w-[50%] mx-auto lg:max-w-full lg:mx-0">
          <img src={image} alt={image} />
      </div>
      <div className="flex flex-col gap-2">
      <h1 className="text-xl text-primary text-center lg:text-left">{title}</h1>
      <p className="text-sm text-center lg:leading-normal 
         leading-loose max-w-[95%] lg:max-w-[85%]
         lg:mx-0 mx-auto text-neutral-dark lg:text-left">{description}</p>
      </div>
    </article>
  )
}

export default AboutCards;
