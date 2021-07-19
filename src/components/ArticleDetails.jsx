import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, increaseArticleCounter } from "../utils/utils";
import AddComments from "./AddComments";

const ArticleDetails = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState([]);
  const [showAddCommentsPage, setShowAddCommentsPage] = useState(false);
  const [votesChange, setVotesChange] = useState(0);
  const [votingError, setVotingError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((apiArticle) => {
        if (!apiArticle.article) {
          setHasError(true);
        } else {
          setArticleDetails(apiArticle.article);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  const increaseVotes = (votes) => {
    setVotingError(false);
    setVotesChange((currVotesChange) => {
      return currVotesChange + votes;
    });
    increaseArticleCounter(article_id, votes).catch((err) => {
      setVotingError(true);
      setVotesChange((currVotesChange) => {
        return (currVotesChange = 0);
      });
    });
  };

  if (hasError) {
    return (
      <main>
        <h3>You have manually entered an invalid article id</h3>
        <Link to="/articles">
          <button>Click to view all articles</button>
        </Link>
      </main>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading data...</h2>
        <Link to="/">
          <button>Return to Home page</button>
        </Link>
      </div>
    );
  }

  return (
    <main>
      <h2 className="ArticleDetail__TitleCard">{articleDetails.title}</h2>
      <div className="Home__Cards">
        <p>Written by {articleDetails.author}</p>
        <p>Topic - {articleDetails.topic}</p>
        <p>Created - {articleDetails.created_at}</p>
        <p>{articleDetails.body}</p>
        <p>Likes: {articleDetails.votes + votesChange}</p>
        <button
          disabled={votesChange > 0}
          onClick={() => {
            increaseVotes(1);
          }}
        >
          I like this article !
        </button>
        <button
          disabled={votesChange < 0}
          onClick={() => {
            increaseVotes(-1);
          }}
        >
          I really dislike this article !
        </button>
        {/* the following code is for when voting number are changed from 1 */}
        {/* {votesChange > 0 ? (
          <p>I think that enough voting - don't you !!!</p>
        ) : null} */}
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
