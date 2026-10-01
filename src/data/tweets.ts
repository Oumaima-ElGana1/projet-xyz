import type { Tweet } from "../types/Tweet"
export const initialTweets : Tweet[] = [
  {
    id: "1",
    authorName: "Ilyess",
    authorHand: "ilyvs",
    content: "J'ai un pote à moi qui vient de devenir dentiste le avant/après qu'il ait trouvé un taff mdrrr arrêtez pas l'école les ptits",
    createdAt: "2026-09-18T08:15:30.000Z",
    likes : 34,
    likedByMe : false
  },
  {
    id: "2",
    authorName: "Sarah",
    authorHand: "212PourS",
    content: "Un grand homme à dit <<plus il y a de stylo det de papier dans une filière plus il y a d'avenir",
    createdAt: "2026-09-18T07:22:10.000Z",
    likes : 1000,
    likedByMe : true
  },
  {
    id: "3",
    authorName: "Aurélie",
    authorHand: "Greenfw__",
    content: "Erreur de débutant : Dire au couturier la date exacte de l'événement.....",
    createdAt: "2026-09-17T16:45:00.000Z",
    likes : 2, 
    likedByMe : true
  },
  {
    id: "4",
    authorName: "Jackson",
    authorHand: "so__diO9",
    content: "Le son il était grave boosté pour l'époque arrêtez de vous donner un genre en haissant la musique ?????",
    createdAt: "2026-09-17T14:10:45.000Z",
    likes : 34000,
    likedByMe : true
  },
  {
    id: "5",
    authorName: "Oumaima",
    authorHand: "Oumaiiiimaa__",
    content: "Mais au final, est ce que la meilleure des soirées ne serait pas juste un crochet et un animé ??",
    createdAt: "2026-09-17T06:30:12.000Z",
    likes : 1000000,
    likedByMe : true
  },
  {
    id: "6",
    authorName: "Julien Lefebvre",
    authorHand: "julien_ai",
    content: "People can't handle and tolerate a man doing household chores even in fiction !!",
    createdAt: "2026-09-16T18:05:00.000Z", 
    likes : 23333,
    likedByMe : true
  },
  {
    id: "7",
    authorName: "Emma Petit",
    authorHand: "emma_photo",
    content: "j'ai reussi à prendre en photo l'eclipse, j'espère que mon appareil photo n'est pas mort hein...",
    createdAt: "2026-09-16T19:50:22.000Z", 
    likes : 40, 
    likedByMe : false
  },
  {
    id: "8",
    authorName: "Nicolas David",
    authorHand: "nico_setup",
    content: "J'ai enfin l'âge pour ecouter tout les secrets de famille, je vous jure je suis comme un ouf ",
    createdAt: "2026-09-15T11:12:00.000Z",
    likes : 29, 
    likedByMe : true
  },
  {
    id: "9",
    authorName: "Inès Leroy",
    authorHand: "ines_code",
    content: "Le mois de septembre pitié c'est tellement long j'ai l'impression que les cours ont repris depuis 6 mois la...",
    createdAt: "2026-09-15T09:40:15.000Z",
    likes : 10000,
    likedByMe : true
  },
  {
    id: "10",
    authorName: "Alexandre Mercier",
    authorHand: "alex_product",
    content: "<<je dois réviser je peux grv pas sortir>>...Je viens de passer 5h à faire une sieste je reconnais meme plus ma chambre MDRRR",
    createdAt: "2026-09-14T15:20:00.000Z", 
    likes : 1, 
    likedByMe : false
  },
  {
    id: "11",
    authorName: "Oumaima EL GANA",
    authorHand: "ouMs.1110",
    content: "Mais qu'on me sorte de cette salle de classe pitié...Tout me soule et puis le mois de septembre il veut pas finir hein",
    createdAt: "2026-09-14T15:20:00.000Z",
    parentId : "2",
    likes : 190000,
    likedByMe : true
  },
  {
    id: "12",
    authorName: "Salma",
    authorHand: "SGANS_ELG",
    content: "J'ai remarqué un truc en étude supp c tellement rare de rencontrer qlq de la mm mentalité encore au lycée mm ville mm quartier ça influence votre pensé mais dans le supp c'est rare",
    createdAt: "2026-09-14T15:20:00.000Z",
    parentId: "4",
    likes : 567,
    likedByMe : true
  }
]