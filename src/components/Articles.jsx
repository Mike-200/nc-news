import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setArticles(data);
      })
      .then(setIsLoading(false));
  }, [articles]);

  const viewComments = (article_id) => {
    console.log("article_id>>>", article_id);
  };

  if (isLoading)
    return (
      <div>
        <h2>Loading data...</h2>
      </div>
    );

  return (
    <div>
      <h2>All Articles</h2>
      <h4>Filter by</h4>
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
                <button onClick={() => viewComments(article.article_id)}>
                  View
                </button>
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
