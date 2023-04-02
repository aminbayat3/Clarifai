import "./article.styles.scss";

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="article__content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Explore the complete article</p>
      </div>
    </div>
  );
};

export default Article;
