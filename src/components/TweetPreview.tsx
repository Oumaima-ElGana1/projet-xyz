import type { ReactElement } from "react"
import { Link } from "react-router-dom"
import type { Tweet } from "../types/Tweet"

export type TweetPreviewProps = {
  tweet: Tweet
  linkToDetail?: boolean
  onToggleLike: (id: string) => void
}

export function TweetPreview({
  tweet,
  linkToDetail = true,
  onToggleLike,
}: TweetPreviewProps): ReactElement {
  return (
    <article className="tweet-preview">
      {tweet.image && (
        linkToDetail ? (
          <Link to={`/tweets/${tweet.id}`}>
            <img src={tweet.image.url} alt={tweet.image.alt} />
          </Link>
        ) : (
          <img src={tweet.image.url} alt={tweet.image.alt} />
        )
      )}

      <div className="tweet-content">
        <header>
          <strong>{tweet.authorName}</strong> <span>@{tweet.authorHand}</span>
        </header>

        <p>{tweet.content}</p>

        {linkToDetail && (
          <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
        )}

        {/* Le bouton J'aime / Je n'aime plus et le compteur */}
        <div className="tweet-actions">
          <button
            type="button"
            className="like-btn"
            onClick={() => onToggleLike(tweet.id)}
          >
            {tweet.likedByMe ? "Je n'aime plus" : "J'aime"}
          </button>
          <span className="likes-count">{tweet.likes}</span>
        </div>
      </div>
    </article>
  )
}