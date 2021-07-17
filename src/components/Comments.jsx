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

  //console.log("article_id>>>", article_id);

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
    // .then(console.log("comments>>>", comments));
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
      <main>
        <h3>You have manually entered an invalid article id</h3>
        <Link to="/articles">
          <button>Click to view all articles</button>
        </Link>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h2 className="TitleCard">Comments</h2>
        <div>
          {showAddCommentsPage === false ? (
            // <Link to={`/articles/${articleDetails.article_id}/comments/add`}>
            <button
              onClick={() => {
                setShowAddCommentsPage(true);
              }}
            >
              Add your own comment about this article
            </button>
          ) : (
            // </Link>
            <AddComments
              showAddCommentsPage={showAddCommentsPage}
              setShowAddCommentsPage={setShowAddCommentsPage}
            />
          )}
        </div>

        <ul className="Grid__Container">
          {comments.map((comment) => {
            return (
              <div>
                <li key={comment.comment_id} className="ResultsCard">
                  <p>{comment.author}</p>
                  <p> - commented - </p>
                  <p>{comment.body}</p>
                  <p>Likes {comment.votes}</p>
                  <button onClick={addALike}>I like this comment !</button>
                  <p> </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Comments;
