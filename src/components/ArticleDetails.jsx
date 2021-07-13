import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../utils/utils";

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((apiArticle) => {
      setArticleDetails(apiArticle);
    });
    //   .then(console.log(articleDetails));
  });

  // const viewComments = (article_id) => {
  //   console.log("article_id>>>", article_id);
  // };

  return (
    <main>
      <h2 className="TitleCard">{articleDetails.title}</h2>
      <div className="ResultsCard">
        <p>Written by {articleDetails.author}</p>
        <p>Topic - {articleDetails.topic}</p>
        <p>Created - {articleDetails.created_at}</p>
        <p>{articleDetails.body}</p>
        <p>Likes: {articleDetails.votes}</p>

        <Link to={`/articles/${articleDetails.article_id}/comments`}>
          <p>
            View people's comments on this article
            {/* {articleDetails.comment_count} comments{" "}
            <button onClick={() => viewComments(articleDetails.article_id)}>
              View
            </button>
          </Link> */}
          </p>
        </Link>
      </div>
    </main>
  );
};

export default ArticleDetails;
