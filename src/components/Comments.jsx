import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddComments from "./AddComments";
import { getArticleComments } from "../utils/utils";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [showAddCommentsPage, setShowAddCommentsPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(article_id)
      .then((apiComments) => {
        if (!apiComments) {
          setHasError(true);
        } else {
          setComments(apiComments);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  const addALike = () => {
    console.log("I like it");
    // back end api not written yet to accept these likes
  };

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

  if (hasError) {
    return (
      <div>
        <h3>You have manually entered an invalid article id</h3>
        <Link to="/articles">
          <button>Click to view all articles</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="TitleCard">Comments</h2>
      <div>
        {showAddCommentsPage === false ? (
          <button
            onClick={() => {
              setShowAddCommentsPage(true);
            }}
          >
            Add your own comment about this article
          </button>
        ) : (
          <AddComments
            showAddCommentsPage={showAddCommentsPage}
            setShowAddCommentsPage={setShowAddCommentsPage}
          />
        )}
      </div>

      <ul className="Grid__Container">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="ResultsCard">
              <p>{comment.author}</p>
              <p> - commented - </p>
              <p>{comment.body}</p>
              <p>Likes {comment.votes}</p>
              <button onClick={addALike}>I like this comment !</button>
              <button>I really dislike this comment !</button>

              <p> </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
