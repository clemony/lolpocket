<script lang="ts" setup>
const props = defineProps<{
  item: Item
}>()

const item = computed (() => props.item)
</script>

<template>
  <label
    v-tippy="'Add Favorite'"
    class="rating cursor-pointer !pointer-events-auto rating-xs  group" @click.stop>
    <input
      v-model="as.favoriteItems"
      type="checkbox"
      :value="item"
      name="favorite-item"
      :aria-label="`favorite ${item.name}`"
      class="mask mask-heart bg-nc"
      :class="{ 'group-hover:opacity-40 dst  transition-all duration-300': !as.favoriteItems.includes(item) }" />
  </label>
  <a
    v-tippy="'Official Wiki'"
    class="btn btn-sm btn-ghost btn-square size-7 hover:bg-neutral hover:*:text-nc "
    :href="getWikiLink(item.name)"
    target="_blank"
    alt="link to league wiki">
    <icon name="la:wikipedia-w" class="size-6 dst" />
  </a>
</template>