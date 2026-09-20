import type { ReactElement } from "react";
import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
    tweet : Tweet
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
        <img
          src={tweet.image.url}
          alt={tweet.image.alt}
          className="tweet-image"
        />
      )}

      <p>{tweet.content}</p>
    </article>
  )
}