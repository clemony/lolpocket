import type { NodeViewProps } from '~tiptap'
import { Mention, mergeAttributes, VueNodeViewRenderer } from '~tiptap'
import MentionLinkRaw from '~/components/tiptap/extensions/mentions/MentionLink.vue'

const MentionLink = MentionLinkRaw as unknown as Component<NodeViewProps>
export const MentionLeague = Mention.extend({
  name: 'mentionChampionsAndItems',
  addAttributes() {
    return {
      item: {
        id: 0,
        key: '',
        name: '',
      },
      label: '',
    }
  },
  addNodeView() {
    return VueNodeViewRenderer(MentionLink)
  },
  deleteTriggerWithBackspace: true,
  parseHTML() {
    return [
      {
        tag: 'MentionLink',
      },
    ]
  },
  renderHTML({ HTMLAttributes, node }) {
    const { item, label } = node.attrs

    if (label === 'champion') {
      return [
        'a',
        mergeAttributes(HTMLAttributes, {
          'data-id': item.id,
          'data-key': item.key,
          'alt': item.name,
          'class': 'mention',
          'data-label': label,
          'data-tip': `go to ${item.name}'s profile`,
          'href': `/champions/${item.key}`,
        }),

        [
          'img',
          {
            alt: item.name,
            src: `/img/champions/${item.id}.webp`,
          },
        ],
        item.name,
      ]
    }

    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        'data-id': item.id,
        'data-key': item.key,
        'class': 'mention',
        'data-label': label,
      }),
      [
        'img',
        {
          alt: item.name,
          src: `/img/items/${item.id}.webp`,
        },
      ],
      item.name,
    ]
  }
})