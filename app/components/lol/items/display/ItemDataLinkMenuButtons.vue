<script lang="ts" setup>
const { id, name } = defineProps<{
  name: string
  id: number
}>()
</script>

<template>
  <div class="-mr-2 flex items-center gap-1">
    <!--
  <label
    v-tippy="'Add Favorite'"
    class="rating cursor-pointer !pointer-events-auto rating-xs  group" @click.stop>
    <input
      v-model= as().favoriteItems"
      type="checkbox"
      :value="id"
      name="favorite-item"
      :aria-label="`favorite ${name}`"
      class="mask mask-heart bg-nc"
      :class="{ 'group-hover:opacity-40 dst  transition-all duration-300': as().favoriteItems.includes(id) }" />
  </label> -->
    <a
      v-tippy="'Official Wiki'"
      class="
        hover:bgneutral btn btn-square btn-ghost btn-sm hover:*:text-nc size-7
      "
      :href="wikiLink(name)"
      target="_blank"
      alt="link to league wiki">
      <icon
        name="link-lg"
        class="dst size-4" />
    </a>
  </div>
</template>
