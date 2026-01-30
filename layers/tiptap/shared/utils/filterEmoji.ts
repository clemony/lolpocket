import type { Editor } from '@tiptap/core'
import type { EmojiItem } from '@tiptap/extension-emoji'

export function filterEmoji(editor: Editor): EmojiItem[] {
  return editor.storage.emoji.emojis
    .filter(e => !['relaxed', 'frowning_face'].includes(e.name))
    .sort((a, b) => {
      const aIsFace = a.tags?.includes('Face')
      const bIsFace = b.tags?.includes('Face')
      const aNoTags = !a.tags.length
      const bNoTags = !b.tags.length

      // Faces first
      if (aIsFace && !bIsFace)
        return -1
      if (bIsFace && !aIsFace)
        return 1

      // Regional indicators last
      if (aNoTags && !bNoTags)
        return 1
      if (bNoTags && !aNoTags)
        return -1

      return 0
    })
}
