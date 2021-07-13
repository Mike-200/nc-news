import { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../utils/utils";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [articleFilter, setArticleFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((apiArticles) => {
      setArticles(apiArticles);
    });
    getAllTopics()
      .then((apiTopics) => {
        setTopics(apiTopics);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  {
    /* <p>Topic: {article.topic}</p>
<p>Author: {article.author}</p>
<p>Date created: {article.created_at}</p>
<p>
{article.comment_count} comments{" "}
<Link to="/comments">
<button onClick={() => viewComments(article.article_id)}>
View
</button>
</Link>
</p>
<p>
{article.votes} likes <button>I like it too !</button>
</p> */
  }

  const filterResults = () => {
    return articles.map((article) => {
      if (articleFilter === article.topic || articleFilter === "all") {
        return (
          <li key={article.article_id} className="ResultsCard">
            <Link to={`/articles/${article.article_id}`}>
              <p>{article.title}</p>
            </Link>
            <Link to={`/articles/${article.article_id}/comments`}>
              <p>This article has {article.comment_count} comment/s</p>
            </Link>
          </li>
        );
      }
    });
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading data...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="TitleCard">Articles - {articleFilter}</h2>
      <h4>
        Filter by topic{" "}
        <select
          name="topic"
          id="topic"
          onChange={(event) => {
            console.log(event.target.value);
            setArticleFilter(event.target.value);
          }}
        >
          {/* <option value="">-- Select --</option> */}
          <option value="all">all</option>
          {topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
        </select>
      </h4>
      <ul>{filterResults()}</ul>
    </div>
  );
};

export default Articles;
