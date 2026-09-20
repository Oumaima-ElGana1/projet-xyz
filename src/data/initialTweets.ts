import type { Tweet } from "../types/Tweet"
export const initialTweets: Tweet[] = [
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    authorName: "Alice Martin",
    authorHand: "alicemartin_dev",
    content: "Enfin terminé la refonte de mon portfolio sous Next.js et Tailwind CSS ! Qu'en pensez-vous ?",
    image: {
      url: "https://picsum.photos/id/1/600/300",
      alt: "Aperçu d'un ordinateur de travail"
    },
    createdAt: "2026-09-18T08:15:30.000Z"
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    authorName: "Thomas Dubois",
    authorHand: "thomas_tech",
    content: "Le café du matin après un déploiement réussi en production à 7h. Rien de plus apaisant.",
    image: {
      url: "https://picsum.photos/id/1060/600/300",
      alt: "Une tasse de café fumante sur un bureau"
    },
    createdAt: "2026-09-18T07:22:10.000Z"
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    authorName: "Sophie Bernard",
    authorHand: "sophie_design",
    content: "Journée sans image aujourd'hui, que du code pur et dur.",
    // Pas d'image ici pour tester ton affichage conditionnel
    image: undefined as any, // ou simplement omettre la propriété si ton type TweetImage est optionnel
    createdAt: "2026-09-17T16:45:00.000Z"
  }
]