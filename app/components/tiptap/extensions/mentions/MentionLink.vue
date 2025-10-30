<script setup lang="ts">
import type { Command, NodeViewRenderer, NodeViewRendererProps } from '@tiptap/vue-3'
import { NodeViewWrapper } from '@tiptap/vue-3'

const { node } = defineProps<NodeViewRendererProps & {
  node: NodeViewRenderer
  updateAttributes: () => Command

}>()
console.log('🌱 - node:', node)

const isChampion = computed(() => node.attrs.label === 'champion')
const item = computed <Index>(() => node.attrs.item)
</script>

<template>
  <NodeViewWrapper class="inline w-fit">
    <Popover>
      <PopoverTrigger
        size="7"
        class="mention"
        @click="isChampion ? navigateTo(`/champions/${item.key}`) : null">
        <img
          v-if="isChampion"
          :alt="item.name"
          :src="`/img/champions/${item.id}.webp`" />
        <img
          v-else
          :src="`/img/items/${item.id}.webp`"
          :alt="item.name" />
        {{ isChampion ? item.name : item.name }}
      </PopoverTrigger>

      <LazyPopoverContent
        :side-offset="8"
        side="top"
        variant="neutral"
        class=" !w-98 p-0 inset-shadow-xs ">
        <PopoverArrow />
        <LazyItemData
          v-if="!isChampion"
          :id="item.id" />
      </LazyPopoverContent>
    </Popover>
  </NodeViewWrapper>
</template>