import { mergeAttributes } from '@tiptap/core'
import Mention from '@tiptap/extension-mention'
import {
  computeImageSrc,
  computeKeystoneStyle,
  computeRuneStyle,
} from './constMentionNode.ts.js'
import { constructMentionAttrs } from './constuctMentionAttrs.js'

export const BadgeMentions = Mention.extend({
  name: 'mentions',

  addAttributes() {
    return {
      'data-id': 0,
      'data-key': null,
      'data-name': null,
    }
  },

  deleteTriggerWithBackspace: true,

  parseHTML() {
    return [{ tag: 'mentions' }]
  },

  renderHTML({
    HTMLAttributes,
    node,
  }: {
    HTMLAttributes: Record<string, any>
    node: { attrs: Record<string, any> }
  }) {
    const item = node.attrs
    const attrs = constructMentionAttrs(item)
    const outer = mergeAttributes(HTMLAttributes, attrs)

    return [
      'button',
      outer,
      [
        'div',
        {
          class:
            `grid size-6 place-items-center overflow-hidden rounded-lg drop-shadow-sm ${
              computeRuneStyle(item)}`,
        },
        [
          'img',
          {
            alt: item['data-name'],
            class: `size-6 ${computeKeystoneStyle(item)}`,
            src: computeImageSrc(item),
          },
        ],
      ],
      item['data-name'],
    ]
  },
})
