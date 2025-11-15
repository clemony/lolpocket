<script setup lang="ts">
import type {
  Command,
  NodeViewRenderer,
  NodeViewRendererProps,
} from '@tiptap/vue-3'
import { NodeViewWrapper } from '@tiptap/vue-3'
import { constructMentionAttrs } from '~/composables/tiptap'
import { attrsToProps } from '~/utils/data/swapDataTypes'

const { node } = defineProps<
  NodeViewRendererProps & {
    node: NodeViewRenderer
    updateAttributes: () => Command
  }
>()

const item = computed(() => node.attrs)
</script>

<template>
  <NodeViewWrapper class="inline w-fit">
    <!--     <Popover> -->
    <div
      v-if="item"
      v-bind="constructMentionAttrs(item)"
      size="6">
      <IndexIcon :item="attrsToProps(item)" />
      {{ item["data-name"] }}
    </div>

    <!--       <LazyPopoverContent
        :side-offset="8"
        side="top"
        variant="neutral"
        class=" !w-98 p-0 inset-shadow-xs ">
        <PopoverArrow />
      </LazyPopoverContent>
    </Popover> -->
  </NodeViewWrapper>
</template>
