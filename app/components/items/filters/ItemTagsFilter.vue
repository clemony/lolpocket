<script setup lang="ts">
import { itemTags } from '#shared/appdata'

const { state } = defineProps<{
  state: any
}>()
const is = useItemStore()
const tags = ref()
function handleReset() {
  is.itemGridApi?.refreshCells()
}
// TODO FIx this for ag grid rfresh
function handleChange() {
  is.itemGridApi?.refreshCells()
}
</script>

<template>
  <transition-slide
    group
    class="flex flex-wrap gap-5 relative justify-between">
    <button
      class="btn btn-square btn-xl absolute left-0"
      type="reset"
      @click="handleReset()">
      <icon
        name="x-sm"
        class="size-6 dst" />
    </button>

    <label
      v-for="tag in itemTags"
      :key="tag.id"
      v-tippy="{ content: tag.name }"
      :aria-label="tag.id"
      class="size-fit grid place-items-center btn !size-14 btn-xl mr-0 btn-square"
      :class="{
        '!bgneutral !borderneutral !shadowneutral/20 !shadow-sm order-first  ml-20.5':
          state.filters.tags && state.filters.tags.includes(tag.id),
        'first-of-type:ml-20.5': !state.filters.tags,
      }">
      <input
        v-model="tags"
        class="peer hidden absolute"
        type="radio"
        :value="tag.id"
        name="item-Rolesition"
        @change="handleChange()" />

      <component
        :is="`i-${tag.icon}`"
        class="size-6.5 drop-shadow-sm"
        :class="{
          '!text-nc ':
            state.filters.tags && state.filters.tags.includes(tag.id),
          '!size-5 opacity-80': tag.id == 'Movement',
        }" />
    </label>
  </transition-slide>
</template>

<style scoped></style>
