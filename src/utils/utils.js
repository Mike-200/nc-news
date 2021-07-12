import axios from "axios";
const baseApi = axios.create({
  baseURL: "https://nc-news-app-mj.herokuapp.com/api",
});

export const getAllArticles = async () => {
  let path = "/articles";
  const { data } = await baseApi.get(path);
  // console.log("data.articles>>>", data.articles);
  return data.articles;
};
