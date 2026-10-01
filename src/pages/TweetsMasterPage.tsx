import type { ReactElement } from 'react'
import { TweetsList } from '../components/TweetList' 
import { initialTweets } from '../data/tweets'

export function TweetsMasterPage(): ReactElement {
  return (
    <section className="tweets-master-page">
      <TweetsList tweets={initialTweets} />
    </section>
  )
  const rootTweets = initialTweets.filter(tweet => !tweet.parentId)
}