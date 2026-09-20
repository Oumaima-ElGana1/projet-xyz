import './App.css'
import React from 'react'
import {tweets} from './data/tweets'
import { TweetsList } from './components/TweetList'
import { initialTweets } from './data/initialTweets'

function App(): React.JSX.Element {
  return (
    <div>
      <TweetsList tweets={tweets} />
    </div>
  )

}

export default App
