import Article from "../article/article.component";

import { BLOG_DATA } from "./blog.util";
import "./blog.styles.scss";

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="blog__heading">
        <h1 className="blog__heading__gradient-text">
          Our blog is constantly updated with posts
        </h1>
      </div>
      <div className="blog__container">
        <div className="blog__container__first-article">
          <Article
            imgUrl={BLOG_DATA.firstArticle.img}
            date={BLOG_DATA.firstArticle.date}
            text={BLOG_DATA.firstArticle.text}
          />
        </div>
        <div className="blog__container__rest">
          {BLOG_DATA.rest.map(({ date, text, img }, index) => (
            <Article key={index} imgUrl={img} date={date} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
