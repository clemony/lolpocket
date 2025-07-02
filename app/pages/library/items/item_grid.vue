<script setup lang="ts">

definePageMeta({
  name: 'items',
  title: 'Items',
  section: 'library',
  icon: 'bow',
})


const {  } = defineProps<{
filtered: number[]
}>()


const ix = useIndexStore()
</script>

<template>
 <div class="absolute inset-0 top-0 left-0 overflow-y-auto  py-24 pr-18 pl-8 ">
      <div class=" flex items-center pb-12">
        <h1 class="grow">
          Items
        </h1>
      </div>

      <transition-slide
        group
        class="flex flex-wrap justify-stretch content-start size-full">
        <div
          v-for="item in ix.items"
          :key="item.id"
          :data-state="filtered.includes(item.id) ? 'visible' : 'hidden'"

          class="group relative  overflow-hidden data-[state=hidden]:scale-0 data-[state=hidden]:size-0
data-[state=visible]::scale-100 data-[state=visible]:size-28 grid place-items-center">
          <LazyPopoverItem
            v-show="filtered.includes(item.id)" :id="item.id" class=" group-data-[state=visible]:animate-in ease-[cubic-bezier(.81,.47,.61,1.3)]  group-data-[state=visible]:fade-in  group-data-[state=visible]:zoom-in-50  group-data-[state=hidden]:animate-out   group-data-[state=hidden]:fade-out group-data-[state=hidden]:opacity-0  relative group-data-[state=hidden]:scale-0 h-auto aspect-square  rounded-lg relative max-w-22 size-22 **:size-22'" />
        </div>
      </transition-slide>
    </div>
</template>