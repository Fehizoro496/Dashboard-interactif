import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchArticles, addArticle, updateArticle, deleteArticle } from "@/services/articleService";

export const useArticles = () => {
  const queryClient = useQueryClient();

  const { data: articles, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: fetchArticles ,staleTime:1000*60*5});

  const addMutation = useMutation({ mutationFn:addArticle,
    onSuccess: () => queryClient.invalidateQueries({queryKey:["products"]}),
  });

  const updateMutation = useMutation({ mutationFn:updateArticle,
    onSuccess: () => queryClient.invalidateQueries({queryKey:["products"]}),
  });

  const deleteMutation = useMutation({ mutationFn:deleteArticle,
    onSuccess: () => queryClient.invalidateQueries({queryKey:["products"]}),
  });

  return { articles, isLoading, error, addMutation, updateMutation, deleteMutation };
};