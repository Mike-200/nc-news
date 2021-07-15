import { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../utils/utils";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [articleFilter, setArticleFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy).then((apiArticles) => {
      setArticles(apiArticles);
    });
    getAllTopics()
      .then((apiTopics) => {
        setTopics(apiTopics);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [sortBy]);

  // I produced this filtering code before remembering that the api could handle the filtering
  // Rather than change it, I have left it in, as the sorting demonstrates the functionality of passing queries to the endpoint
  const filterResults = () => {
    const filteredArticles = articles.filter(
      (article) => articleFilter === article.topic || articleFilter === "all"
    );
    return filteredArticles.map((article) => {
      return (
        <li key={filteredArticles.article_id} className="ResultsCard">
          <Link to={`/articles/${article.article_id}`}>
            <p>{article.title}</p>
          </Link>
          <div className="Articles__dateAndVotes">
            <span>Posted on {article.created_at.slice(0, 10)}</span>
            <span>{article.votes} votes received</span>
          </div>
          <Link to={`/articles/${article.article_id}/comments`}>
            <p>This article has {article.comment_count} comment/s</p>
          </Link>
        </li>
      );
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
      <h4 className="FilterAndSort">
        <span>
          Filter by topic{" "}
          <select
            name="topic"
            id="topic"
            onChange={(event) => {
              //console.log(event.target.value);
              setArticleFilter(event.target.value);
            }}
          >
            {/* <option value="">-- Select --</option> */}
            <option value="all">all</option>
            {topics.map((topic) => {
              return <option key={topic.slug}>{topic.slug}</option>;
            })}
          </select>
        </span>
        <span>
          Sort by{" "}
          <select
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
          >
            <option value="created_at">date posted</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes received</option>
          </select>
        </span>
      </h4>
      <main>
        <ul>{filterResults()}</ul>
      </main>
    </div>
  );
};

export default Articles;
