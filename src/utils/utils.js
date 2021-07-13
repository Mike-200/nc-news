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
  // console.log("data.topics>>>", data.topics);
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
  //console.log("data.username>>>", data);
  return data;
};
