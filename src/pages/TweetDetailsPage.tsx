import type { ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import { tweets } from '../data/tweets'
import { TweetPreview } from '../components/TweetPreview'
import { TweetsList } from '../components/TweetList'

export function TweetDetailsPage(): ReactElement {
  const { id } = useParams<{ id: string }>()

  const currentTweet = tweets.find(t => t.id === id)
  const replies = tweets.filter(t => t.parentId === id)

  if (!currentTweet) {
    return (
      <div>
        <p>Ce tweet n'existe pas</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div className="tweet-details-page">
      <TweetPreview tweet={currentTweet} linkToDetail={false} />

      <section className="replies-section">
        {replies.length > 0 ? (
          <TweetsList tweets={replies} />
        ) : (
          <p>Aucune réponse pour le moment.</p>
        )}
      </section>
    </div>
  )
}