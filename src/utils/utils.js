import axios from "axios";
const baseApi = axios.create({
  baseURL: "https://nc-news-app-mj.herokuapp.com/api",
});

export const getAllArticles = async () => {
  let path = "/articles";
  const { data } = await baseApi.get(path);
  return data.articles;
};

export const getArticleById = async (article_id) => {
  let path = `/articles/${article_id}`;
  const { data } = await baseApi.get(path);
  return data.article;
};

export const getAllTopics = async () => {
  let path = "/topics";
  const { data } = await baseApi.get(path);
  return data.topics;
};

export const getArticleComments = async (article_id) => {
  let path = `/articles/${article_id}/comments`;
  const { data } = await baseApi.get(path);
  return data.comments;
};

export const getAllUsers = async () => {
  let path = `/users`;
  const { data } = await baseApi.get(path);
  return data;
};

export const getLoggedInUser = async (username) => {
  let path = `/users/${username}`;
  const { data } = await baseApi.get(path);
  return data.user;
};

export const postComment = async (article_id, itemBody) => {
  let path = `/articles/${article_id}/comments`;
  const { data } = await baseApi.post(path, itemBody);
  return data;
};

export const increaseArticleCounter = async (article_id) => {
  let path = `/articles/${article_id}`;
  const itemBody = { inc_votes: 1 };
  const { reply } = await baseApi.patch(path, itemBody);
  return reply;
};

export const getAllComments = async () => {
  let path = "/comments";
  const { data } = await baseApi.get(path);
  //console.log("data>>>", data);
  return data;
};
