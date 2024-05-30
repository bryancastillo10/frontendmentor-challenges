import { Linker } from ".";

interface NewsCardsProps{
  image: string;
  title: string;
  author: string;
  content: string;
}

const NewsCards = ({image,title,author,content}:NewsCardsProps) => {
  return (
    <article className="card-container">
      <div className="block min-h-[100px]">
        <img className="rounded-t-lg md:h-[150px] w-full object-cover" src={image} alt={image} />
      <div className= "news-details">
        <p className="news-author">{author}</p>
          <h1 className="news-title"><Linker>{title}</Linker></h1>
          <p className="news-statement">{content}</p>
        </div>
      </div>
    </article>
  )
}

export default NewsCards;
