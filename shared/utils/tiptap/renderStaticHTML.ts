import type { JSONContent } from "@tiptap/core"
import Emoji, { gitHubEmojis } from "@tiptap/extension-emoji"
import { renderToHTMLString } from "@tiptap/static-renderer"

export function renderStaticHTML(content: JSONContent) {
  // --- static HTML generation (SSR safe) ---
  return renderToHTMLString({
    content,
    extensions: [
      /*     BadgeMentions,
      StarterKit, */
      Emoji.configure({
        emojis: gitHubEmojis,
        HTMLAttributes: {
          class: "emoji"
        }
      })
    ]
  })
}
