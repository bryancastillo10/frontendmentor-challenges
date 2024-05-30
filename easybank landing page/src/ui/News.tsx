import { NewsCards } from "../components";
import { newsFeatures } from "../constants";

const News = () => {
  return (
    <section className="bg-white">
      <div className="width-wrapper">
        <div className="section-header">
          <h1>Latest Articles</h1>
        </div>
        <div className="lg:ml-[-20px] mb-12
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {newsFeatures.map((news) => (
            <NewsCards key={news.id} {...news}  />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News;
