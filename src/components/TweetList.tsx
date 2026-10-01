import type { ReactElement } from "react"
import { TweetPreview } from "./TweetPreview"
import type { Tweet } from "../types/Tweet"

export type TweetsListProps = {
  tweets: Array<Tweet>
  onToggleLike: (id: string) => void
}

export function TweetsList({ tweets, onToggleLike }: TweetsListProps): ReactElement {
  return (
    <div className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview 
          key={tweet.id} 
          tweet={tweet} 
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  )
}