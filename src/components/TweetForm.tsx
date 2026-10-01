import { useState, type ChangeEvent, type FormEvent, type ReactElement } from "react"

const CONTENT_MAX_LENGTH = 280

export type TweetFormProps = {
  onSubmit: (content: string) => void
}

export function TweetForm({ onSubmit }: TweetFormProps): ReactElement {
  const [content, setContent] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value)
  }

  const trimmedContent = content.trim()
  const remainingChars = CONTENT_MAX_LENGTH - content.length
  const isInvalid = trimmedContent.length === 0 || remainingChars < 0

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (isInvalid) {
      return
    }

    onSubmit(trimmedContent)
    setContent("")
  }

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Quoi de neuf ?"
        rows={3}
        value={content}
        onChange={handleChange}
      />

      <div className="tweet-form-footer">
        <span
          className={`chars-counter ${remainingChars < 0 ? "over-limit" : ""}`}
        >
          {remainingChars}
        </span>

        <button
          type="submit"
          className="post-btn small"
          disabled={isInvalid}
        >
          Poster
        </button>
      </div>
    </form>
  )
}