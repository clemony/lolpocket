import Emoji, { gitHubEmojis } from '@tiptap/extension-emoji'
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/vue-3'
import { Mentions } from '~/composables/tiptap'

export function renderCommentHTML(doc: Doc) {
  const html = generateHTML(doc, [
    StarterKit,
    Mentions,
    Emoji.configure({
      emojis: gitHubEmojis,
      enableEmoticons: true,
      HTMLAttributes: {
        class: 'github_emoji',
      },
    }),
  ])

  return html
}
