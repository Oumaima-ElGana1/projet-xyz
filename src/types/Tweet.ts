export type Tweet ={
    id : string //UUID
    authorName : string //nom de l'auteur
    authorHand : string //c'est le nom de l'utilisateur sans le @
    content : string //le contenu du tweet
    image?: TweetImage
    createdAt : string //la date doit être au format ISO 8601
    parentId? : string
    likes : number
    likedByMe : boolean
}
export type TweetImage={
    url : string
    alt : string
}