import type { ReactElement } from "react"
import { TweetPreview } from "./TweetPreview"
import type { Tweet } from "../types/Tweet"

type TweetsListProps = {
  tweets: Array<Tweet>
}

export function TweetsList({ tweets }: TweetsListProps): ReactElement {
  return (
    <section className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} />
      ))}
    </section>
  )
}