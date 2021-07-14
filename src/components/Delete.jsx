import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { getAllComments } from "../utils/utils";

const Delete = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const filterResults = () => {
    const filteredComments = comments.filter(
      (comment) => loggedInUser.username === comment.author
    );
    return filteredComments.map((comment) => {
      return (
        <li key={filteredComments.comment_id} className="ResultsCard">
          <p>article_id: {comment.article_id}</p>
          {/* <p>author: {comment.author}</p> */}
          <p>{comment.body}</p>

          {/* <Link to={`/comments/${article.article_id}`}>
            <p>{article.title}</p>
          </Link>
          <Link to={`/comments/${article.article_id}/comments`}>
            <p>This article has {article.comment_count} comment/s</p>
          </Link> */}
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
      <h2 className="TitleCard">Delete comments you have made</h2>
      <ul>{filterResults()}</ul>
    </div>
  );
};

export default Delete;
