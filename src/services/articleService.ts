import Article, {ArticleFormData} from "@/types/Article";
import axios from "axios";
import { toast } from 'sonner';

const API_URL = "https://fakestoreapi.com/products";

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch articles");
    throw error;
  }
};

export const addArticle = async (article: ArticleFormData) => {
  try {
    const response = await axios.post(API_URL, article);
    return response.data;
  } catch (error) {
    toast.error("Failed to add article");
    throw error;
  }
};

export const updateArticle = async (article: Article) => {
  try {
    const response = await axios.put(`${API_URL}/${article.id}`, article);
    return response.data;
  } catch (error) {
    toast.error("Failed to update article");
    throw error;
  }
};

export const deleteArticle = async (article: Article) => {
  try {
    await axios.delete(`${API_URL}/${article.id}`);
  } catch (error) {
    toast.error("Failed to delete article");
    throw error;
  }
};
