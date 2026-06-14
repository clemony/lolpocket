<script lang="ts" setup>
import { wikiLink } from "~/domain/utils/utils"
import {
  itemQualityText,
  itemRankColor,
} from "~~/shared/constants/items/collection/itemRankColor"
import { itemRank } from "~~/shared/constants/items/index/itemToRank"

const { item } = defineProps<{
  item: Item
}>()
</script>

<template>
  <Separator class="my-3! h-px" size="xs" label="MORE INFO" color="neutral" />
  <div class="anchor ml-1 size-5">
    <UButton
      v-if="item.name"
      external
      size="xs"
      variant="link"
      color="neutral"
      :avatar="{
        src: '/img/logos/wiki.webp',
        size: '3xs',
      }"
      :ui="{
        base: 'text-xs font-normal! text-nc/60 hover:text-nc/90',
        trailingIcon:
          'ml-0.5 size-3 align-top text-nc/60 group-hover/btn:text-nc/90!',
      }"
      :alt="`Link to Official LoL Wiki - ${item.name}`"
      :to="wikiLink(item.name)"
      target="_blank"
      @click.stop>
      <span
        :class="
          cn(
            'italic opacity-90 group-hover/btn:underline group-hover/btn:opacity-100',
            item.rank ? itemQualityText[item.rank ?? ''] : 'text-nc/80'
          )
        "
        >{{ item.name }}</span
      >
      -
      <span class="font-medium">Lol Wiki</span>
    </UButton>
  </div>
</template>
