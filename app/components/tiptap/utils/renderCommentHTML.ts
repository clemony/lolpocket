import Emoji, { gitHubEmojis } from '@tiptap/extension-emoji'
import { CharacterCount } from '@tiptap/extensions'
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/vue-3'
import { CustomMention, emojiSuggestions, mentionSuggestions } from '~tiptap'

export function renderCommentHTML(doc: Doc) {
  console.log('🌱 - renderCommentHTML - doc:', doc)

  const html = generateHTML(doc, [
    StarterKit,
    /*     CharacterCount.configure({ limit: 2000 }),
    CustomMention.configure({
      deleteTriggerWithBackspace: true,
      suggestions: mentionSuggestions
    }),
    Emoji.configure({
      emojis: gitHubEmojis,
      enableEmoticons: true,
      suggestion: emojiSuggestions
    }), */

  ])

  console.log('🌱 - renderCommentHTML - html:', html)
  return html
}