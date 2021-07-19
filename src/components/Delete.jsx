import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { deleteComment, getAllComments } from "../utils/utils";

let commentToBeDeleted = 0;

const Delete = () => {
  const { loggedInUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  // let commentToBeDeleted = 0;
  //console.log("Delete.loggedInUser>>>", loggedInUser);
  //console.log("Delete.defaultUser>>>", defaultUser);

  useEffect(() => {
    setIsLoading(true);
    getAllComments()
      .then((apiComments) => {
        setComments(apiComments);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = () => {
    //console.log("line 28 commentToBeDeleted>>>", commentToBeDeleted);
    deleteComment(commentToBeDeleted);
    setComments((currComments) =>
      currComments.filter(
        (comment) => comment.comment.id === commentToBeDeleted
      )
    );
    setShowDeleteConfirmation(false);
    // how do I re-render after the delete
  };

  const filterResults = () => {
    const filteredComments = comments.filter(
      (comment) => loggedInUser.username === comment.author
    );
    return filteredComments.map((comment) => {
      return (
        <li key={comment.comment_id} className="ResultsCard">
          {/* <p>article_id: {comment.article_id}</p> */}
          {/* <p>author: {comment.author}</p> */}
          <p>- you wrote -</p>
          <p> </p>
          <p>{comment.body}</p>
          <p>- about the article on -</p>
          <p>{comment.title}</p>
          <button
            onClick={() => {
              commentToBeDeleted = comment.comment_id;
              setShowDeleteConfirmation(true);
            }}
          >
            delete this comment
          </button>
          <p> </p>
          {showDeleteConfirmation === true &&
          commentToBeDeleted === comment.comment_id ? (
            <div>
              <p>Confirm delete</p>
              <button
                onClick={() => {
                  handleDelete();
                }}
              >
                OK
              </button>
              <button
                onClick={() => {
                  commentToBeDeleted = 0;
                  setShowDeleteConfirmation(false);
                }}
              >
                Cancel
              </button>
              <p> </p>
            </div>
          ) : null}
        </li>
      );
    });
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

  return (
    <div>
      <h2 className="TitleCard">
        Delete comments made by {loggedInUser.username}
      </h2>
      {loggedInUser.username === "<not logged in>" ? (
        <div>
          <h3>You must be logged in to be able to delete comments</h3>
          <h3>Log in and try again</h3>
          <Link to="/users">
            <button>Login</button>
          </Link>
        </div>
      ) : null}

      <ul className="Grid__Container">{filterResults()}</ul>
    </div>
  );
};

export default Delete;
