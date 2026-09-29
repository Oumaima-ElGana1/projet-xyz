import type { ReactElement } from "react";
import type { Tweet } from "../types/Tweet";
import { Link } from 'react-router-dom'


type TweetPreviewProps = {
    tweet : Tweet,
    linkToDetail?:boolean
}
export function TweetPreview({ tweet }: TweetPreviewProps): ReactElement {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }) 

  return (
    <article className="tweet-preview">
      <header>
        <strong>{tweet.authorName}</strong>
        <p>@{tweet.authorHand}</p>
        <p>{formattedDate}</p>
      </header>

      {tweet.image && (
        <Link to={`/tweets/${tweet.id}`}>
          <img
            src={tweet.image.url}
            alt={tweet.image.alt}
            className="tweet-image"
          />
        </Link>
      )}

      <p>{tweet.content}</p>

      <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
    </article>
  )
}