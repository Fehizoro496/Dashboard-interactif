import { useArticles } from '@/hooks/useArticles'
import Article from '@/types/Article'
import {create} from 'zustand'

interface State {
    listArticles : Article[]
}

interface Action {
    deleteArticleFromList : (article:Article) => void,
    addArticleToList : (article:Article) => void,
    updateArticle : (article:Article) => void,
    setListArticles : (articles:Article[]) => void,
}

export const useListArticleStore = create<State & Action>((set)=>({
    listArticles:[],
    deleteArticleFromList:(article:Article) => set((state)=>({listArticles: state.listArticles.filter(art => art !== article)})),
    addArticleToList: (article: Article) => set((state) => ({listArticles: [...state.listArticles,article]})),
    updateArticle:(article:Article) => set((state) => ({listArticles: update({articleModified:article,listArticles:state.listArticles})})),
    setListArticles:(articles:Article[]) => set((state) => ({listArticles: articles})),
}))

const update:(props:UpdateProps) => Article[] = ({listArticles,articleModified}:UpdateProps)=>{
    let article:Article = listArticles.filter(article=>article.id==articleModified.id)[0]
    let index = listArticles.indexOf(article);
    let temp = listArticles
    temp[index] = articleModified
    return temp
}

interface UpdateProps{
    listArticles:Article[],
    articleModified:Article
}