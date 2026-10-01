import { useContext, type ReactElement } from 'react'
import { TweetsList } from '../components/TweetList'
import { TweetForm } from '../components/TweetForm'
import { TweetsContext } from '../contexts/TweetsContext'

export function TweetsMasterPage(): ReactElement {
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!
  const rootTweets = tweets.filter(tweet => !tweet.parentId)

  return (
    <section className="tweets-master-page">
      <div className="compose">
        <div className="avatar" />
        <TweetForm onSubmit={addTweet} />
      </div>
      <TweetsList tweets={rootTweets} onToggleLike={toggleLike} />
    </section>
  )
}