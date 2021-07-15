import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postComment } from "../utils/utils";
import { UserContext } from "../contexts/User";

const AddComments = ({ showAddCommentsPage, setShowAddCommentsPage }) => {
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [commentsPostedSuccessfully, setCommentsPostedSuccessfully] =
    useState("");
  // const [errorInPostCommentData, setErrorInPostCommentData] = useState(false)
  const [itemBody, setItemBody] = useState({
    username: loggedInUser.username,
    body: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (itemBody.username === "<not logged in>" || !itemBody.username) {
      setCommentsPostedSuccessfully(
        "You must be logged in to post a comment. \nLog in and try again"
      );
      return;
    }
    if (!itemBody.body) {
      setCommentsPostedSuccessfully(
        "You have not entered a comment. Try again"
      );
      return;
    }
    postComment(article_id, itemBody);
    setCommentsPostedSuccessfully("Comment posted successfully");
  }

  function handleChange(event, keyToChange) {
    setCommentsPostedSuccessfully("");
    setItemBody((currItemBody) => {
      //console.log("currItemBody>>>", currItemBody);
      const copyOfItemBody = {
        ...currItemBody,
        [keyToChange]: event.target.value,
      };
      //console.log("copyOfItemBody", copyOfItemBody);
      return copyOfItemBody;
    });
    //console.log("itemBody>>>", itemBody);
  }

  return (
    <div>
      <h2 className="TitleCard">Add a comment</h2>
      <form onSubmit={handleSubmit}>
        <p>You are logged in as {loggedInUser.username}</p>

        <label>Enter your comment here </label>
        <input onChange={(event) => handleChange(event, "body")}></input>
        <button>submit</button>
      </form>

      <p>{commentsPostedSuccessfully}</p>
      {commentsPostedSuccessfully === "Comment posted successfully" ? (
        [
          <Link to="/articles">
            <button>Return to articles</button>
          </Link>,

          <Link to={`/articles/${article_id}/comments`}>
            <button>View all the comments about htis article</button>
          </Link>,
        ]
      ) : (
        <button
          onClick={() => {
            setShowAddCommentsPage(false);
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default AddComments;
