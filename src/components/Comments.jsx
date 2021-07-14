import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddComments from "./AddComments";
import { getArticleComments } from "../utils/utils";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [showAddCommentsPage, setShowAddCommentsPage] = useState(false);

  //console.log("article_id>>>", article_id);

  useEffect(() => {
    getArticleComments(article_id).then((apiComments) => {
      setComments(apiComments);
    });
    // .then(console.log("comments>>>", comments));
  }, [article_id]);

  const addALike = () => {
    console.log("I like it");
  };

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
              Add your own comment
            </button>
          ) : (
            // </Link>
            <AddComments
              showAddCommentsPage={showAddCommentsPage}
              setShowAddCommentsPage={setShowAddCommentsPage}
            />
          )}
        </div>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="ResultsCard">
                <p>{comment.author}</p>
                <p> - commented - </p>
                <p>{comment.body}</p>
                <p>Likes {comment.votes}</p>
                <button onClick={addALike}>I like this comment !</button>
                <p> </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Comments;
