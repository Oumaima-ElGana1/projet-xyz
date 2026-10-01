import { useContext, type ReactElement } from 'react'
import { TweetsList } from '../components/TweetList' 
import { TweetsContext } from '../contexts/TweetsContext'
import { TweetForm } from '../components/TweetForm'


export function TweetsMasterPage(): ReactElement {
  const { tweets, addTweet } = useContext(TweetsContext)!
  const rootTweets = tweets.filter(tweet => !tweet.parentId)
  return (
    <section className="tweets-master-page">
        <div className="compose">
            <div className="avatar"/>
            <TweetForm onSubmit={addTweet}/>
        </div>
      <TweetsList tweets={rootTweets} />
    </section>
  )
}