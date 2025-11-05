import type { NodeViewProps } from '@tiptap/core'
import { constructMentionAttrs } from '#tiptap'
import Mention from '@tiptap/extension-mention'
import { mergeAttributes, VueNodeViewRenderer } from '@tiptap/vue-3'
import MentionLinkRaw from '~/components/tiptap/extensions/mentions/lol-index/MentionEditorBadge.vue'

const MentionLink = MentionLinkRaw as unknown as Component<NodeViewProps>
export const Mentions = Mention.extend({
  name: 'mentions',
  addAttributes() {
    return {
      'data-id': 0,
      'data-key': null,
      'data-name': null,
    }
  },
  addNodeView() {
    return VueNodeViewRenderer(MentionLink)
  },
  deleteTriggerWithBackspace: true,
  parseHTML() {
    return [
      {
        tag: 'mentions',
      },
    ]
  },
  renderHTML({ HTMLAttributes, node }) {
    const item = node.attrs
    const attrs = constructMentionAttrs(item)
    return [
      'button',
      mergeAttributes(HTMLAttributes, attrs),

      [
        'img',
        {
          alt: item['data-name'],
          src: `/img/${attrs['data-label']}s/${item['data-id']}.webp`,
        },
      ],
      item['data-name'],
    ]
  }
})