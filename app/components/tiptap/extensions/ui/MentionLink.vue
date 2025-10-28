<script setup lang="ts">
import { NodeViewWrapper } from '@tiptap/vue-3'

const { node } = defineProps({
  node: Object,
})

const isChampion = computed (() => node.attrs.label === 'champions')
</script>

<template>
  <NodeViewWrapper class="inline">
    <BtnLink
      v-if="isChampion"
      :to="`/champions/${ix().champKeyById(node.attrs.id)}`">
      <ChampionIcon
        class="size-6 rounded-full"
        :k="String(node.attrs.id)" />
      {{ ix().champNameById(node.attrs.id) }}
    </BtnLink>
    <HoverCard
      v-else
      button>
      <HoverCardTrigger>
        <Item
          :id="Number(node.attrs.id)"
          :quality="100"
          alt="Item Image"
          :class="cn('opacity-96 size-full z-0 pointer-events-none top-0 left-0 z-0 size-5 rounded-full')" />

        {{ ix().itemNameById(node.attrs.id) }}
      </HoverCardTrigger>

      <LazyHoverCardContent
        :side-offset="8"
        side="top"
        variant="neutral"
        class="!w-98  p-0 max-h-[420px] inset-shadow-xs ">
        <HoverCardArrow />
        <LazyItemData
          :id="node.attrs.id" />
      </LazyHoverCardContent>
    </HoverCard>
  </NodeViewWrapper>
</template>