import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, increaseArticleCounter } from "../utils/utils";
import AddComments from "./AddComments";

const ArticleDetails = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState([]);
  const [showAddCommentsPage, setShowAddCommentsPage] = useState(false);
  const [votesChange, setVotesChange] = useState(1);
  const [votingError, setVotingError] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((apiArticle) => {
      setArticleDetails(apiArticle);
    });
  }, [articleDetails]);

  const increaseVotes = () => {
    setVotingError(false);
    setVotesChange((currVotesChange) => {
      console.log("votesChange>>>", votesChange);
      return currVotesChange + 1;
    });
    increaseArticleCounter(article_id).catch((err) => {
      setVotingError(true);
      setVotesChange(0);
    });
  };

  return (
    <main>
      <h2 className="TitleCard">{articleDetails.title}</h2>
      <div className="ResultsCard">
        <p>Written by {articleDetails.author}</p>
        <p>Topic - {articleDetails.topic}</p>
        <p>Created - {articleDetails.created_at}</p>
        <p>{articleDetails.body}</p>
        <p>Likes: {articleDetails.votes}</p>
        <button disabled={votesChange > 5} onClick={increaseVotes}>
          I like this article !
        </button>
        {votesChange > 5 ? (
          <p>I think that enough voting - don't you !!!</p>
        ) : null}
        {votingError ? <p>Error. Vote not registered</p> : null}
        <Link to={`/articles/${articleDetails.article_id}/comments`}>
          <p>View comments about this article</p>
        </Link>
      </div>
      <div>
        {showAddCommentsPage === false ? (
          <button
            onClick={() => {
              setShowAddCommentsPage(true);
            }}
          >
            Add your own comment
          </button>
        ) : (
          <AddComments
            showAddCommentsPage={showAddCommentsPage}
            setShowAddCommentsPage={setShowAddCommentsPage}
          />
        )}
      </div>
    </main>
  );
};

export default ArticleDetails;
