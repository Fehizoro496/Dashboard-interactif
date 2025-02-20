import Article, {ArticleFormData} from "@/types/Article";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchArticles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addArticle = async (article: ArticleFormData) => {
  const response = await axios.post(API_URL, article);
  return response.data;
};

export const updateArticle = async (article: Article) => {
  const response = await axios.put(`${API_URL}/${article.id}`, article);
  return response.data;
};

export const deleteArticle = async (article: Article) => {
  await axios.delete(`${API_URL}/${article.id}`);
};
