import { MentionLink } from '#components'
import Mention from '@tiptap/extension-mention'
import { mergeAttributes, VueNodeViewRenderer } from '@tiptap/vue-3'

export const CustomMention = Mention.extend({
  name: 'customMention',
  addNodeView() {
    return VueNodeViewRenderer(MentionLink)
  },
  parseHTML() {
    return [
      {
        tag: 'MentionLink',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['MentionLink', mergeAttributes(HTMLAttributes)]
  },
})