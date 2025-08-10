<script setup lang="ts">
const { filtered } = defineProps<{
  filtered: number[]
}>()

definePageMeta({
  name: 'items',
  alias: '/library/items',

  meta: {
    title: 'Items',
    section: 'library',
    icon: 'bow',
  },
})

const ix = useIndexStore()
</script>

<template>
  <div class="absolute inset-0 top-0 left-0 overflow-y-auto  py-24 pr-18 pl-8 ">
    <transition-slide
      group
      class="flex flex-wrap justify-stretch content-start size-full">
      <div
        v-for="item in ix.items"
        :key="item.id"
        :data-state="filtered.includes(item.id) ? 'visible' : 'hidden'"

        class="group relative overflow-visible   data-[state=hidden]:scale-0 data-[state=hidden]:size-0
data-[state=visible]:scale-100 data-[state=visible]:size-28 grid place-items-center">
        <LazyPopoverItem
          v-show="filtered.includes(item.id)"
          :id="item.id"
          class="  aspect-square  rounded-lg  max-w-22 size-22 **:size-22'" />
      </div>
    </transition-slide>
  </div>
</template>