<script lang="ts" setup>
const { name, id } = defineProps<{
  name: string
  id: number
}>()
</script>

<template>
  <div class="flex items-center gap-1 -mr-2">
    <!--
  <label
    v-tippy="'Add Favorite'"
    class="rating cursor-pointer !pointer-events-auto rating-xs  group" @click.stop>
    <input
      v-model="as.favoriteItems"
      type="checkbox"
      :value="id"
      name="favorite-item"
      :aria-label="`favorite ${name}`"
      class="mask mask-heart bg-nc"
      :class="{ 'group-hover:opacity-40 dst  transition-all duration-300': !as.favoriteItems.includes(id) }" />
  </label> -->
    <a
      v-tippy="'Official Wiki'"
      class="btn btn-sm btn-ghost btn-square size-7 hover:bgneutral hover:*:text-nc "
      :href="getWikiLink(name)"
      target="_blank"
      alt="link to league wiki">
      <icon
        name="link-lg"
        class="size-4 dst" />
    </a>
  </div>
</template>