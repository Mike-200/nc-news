import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://nc-news-app-mj.herokuapp.com/api",
});

export const getAllArticles = async (sort_by) => {
  let path = `/articles?sort_by=${sort_by}`;
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data;
};

export const getArticleById = async (article_id) => {
  let path = `/articles/${article_id}`;
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data;
};

export const getAllTopics = async () => {
  let path = "/topics";
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data.topics;
};

export const getArticleComments = async (article_id) => {
  let path = `/articles/${article_id}/comments`;
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data.comments;
};

export const getAllUsers = async () => {
  let path = `/users`;
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data;
};

export const getLoggedInUser = async (username) => {
  let path = `/users/${username}`;
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data.user;
};

export const postComment = async (article_id, itemBody) => {
  let path = `/articles/${article_id}/comments`;
  const { reply } = await baseApi.post(path, itemBody).catch((err) => {
    return err.response;
  });
  return reply;
};

export const getAllComments = async () => {
  let path = "/comments";
  const { data } = await baseApi.get(path).catch((err) => {
    return err.response;
  });
  return data;
};

export const deleteComment = async (comment_id) => {
  let path = `/comments/${comment_id}`;
  const { reply } = await baseApi.delete(path).catch((err) => {
    console.log("error>>>", err.response);
    return err.response;
  });
  return reply;
};

export const increaseArticleCounter = async (article_id, votes) => {
  let path = `/articles/${article_id}`;
  const itemBody = { inc_votes: votes };
  const { reply } = await baseApi.patch(path, itemBody).catch((err) => {
    return err.response;
  });
  return reply;
};
