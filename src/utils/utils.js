import axios from "axios";
const baseApi = axios.create({
  baseURL: "https://nc-news-app-mj.herokuapp.com/api",
});

export const getAllArticles = async () => {
  let path = "/articles";
  const { data } = await baseApi.get(path);
  return data.articles;
};

export const getAllTopics = async () => {
  let path = "/topics";
  const { data } = await baseApi.get(path);
  // console.log("data.topics>>>", data.topics);
  return data.topics;
};

export const getArticleComments = async () => {
  let path = "/articles/:article_id/comments";
  const { data } = await baseApi.get(path);
  // console.log("data.comments>>>", data.comments);
  return data.comments;
};
