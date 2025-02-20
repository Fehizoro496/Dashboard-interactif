export default interface Article {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }|null
}

export type ArticleFormData = {
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
}