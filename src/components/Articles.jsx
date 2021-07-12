import { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../utils/utils";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((apiArticles) => {
      setArticles(apiArticles);
    });
    setIsLoading(false);
  }, [articles]);

  useEffect(() => {
    getAllTopics().then((apiTopics) => {
      setTopics(apiTopics);
    });
    //console.log(topics);
  }, [topics]);

  const viewComments = (article_id) => {
    console.log("article_id>>>", article_id);
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
      <h2>All Articles</h2>
      <h4>
        Filter by topic{" "}
        <select
          name="topic"
          id="topic"
          placeholder="Select topic"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        >
          <option value="">-- Select --</option>
          <option value="all">all</option>
          {topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
        </select>
      </h4>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="ArticlesCard">
              <p>Title: {article.title}</p>
              <p>Topic: {article.topic}</p>
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
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
