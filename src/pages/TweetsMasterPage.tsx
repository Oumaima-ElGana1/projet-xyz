import type { ReactElement } from 'react'
import { TweetsList } from '../components/TweetList' 
import { tweets } from '../data/tweets'

export function TweetsMasterPage(): ReactElement {
  return (
    <section className="tweets-master-page">
      <TweetsList tweets={tweets} />
    </section>
  )
  const rootTweets = tweets.filter(tweet => !tweet.parentId)
}