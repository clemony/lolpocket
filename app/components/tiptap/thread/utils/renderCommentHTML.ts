import Emoji, { gitHubEmojis } from '@tiptap/extension-emoji'
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/vue-3'
import { MentionLeague } from '~tiptap'

export function renderCommentHTML(doc: Doc) {
  const html = generateHTML(doc, [
    StarterKit,
    MentionLeague,
    Emoji.configure({
      emojis: gitHubEmojis,
      enableEmoticons: true,
    }),

  ])

  return html
}