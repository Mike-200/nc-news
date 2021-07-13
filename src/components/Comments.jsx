import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getArticleComments } from "../utils/utils";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  console.log("article_id>>>", article_id);

  useEffect(() => {
    getArticleComments(article_id).then((apiComments) => {
      setComments(apiComments);
    });
    // .then(console.log("comments>>>", comments));
  }, [article_id]);

  return (
    <div>
      <h2 className="TitleCard">Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="ResultsCard">
              <p>{comment.author}</p>
              <p> - commented - </p>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
