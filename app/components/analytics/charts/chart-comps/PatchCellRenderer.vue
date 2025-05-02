<script lang="ts" setup>
const { params } = defineProps<{
  params: any
}>()
console.log('💠 - params:', params)

const patch = computed (() => {
  return params.valueFormatted.split(', ')
})
</script>

<template>
  <div class="size-full p-2 items-center">
    <Popover>
      <PopoverTrigger class="items-center hover:ring hover:ring-neutral/60 h-9 flex bg-b1 pl-3 pr-8 relative w-full rounded-lg border-b3 overflow-hidden inset-shadow-xs  flex-nowrap">
        <span class="truncate text-bc/70 text-left grow ">
          {{ params.valueFormatted }}
        </span>
        <div class="absolute right-1   aspect-square grid place-items-center w-6 border-l h-full border-l-b3">
        <icon name="add-sm"  class="shrink-0 size-5.5 stroke-[1.5] dst  text-accent/70"/>
   
        </div>
      </PopoverTrigger>
      <ScrollPopperContent class="w-41">
          <div class="font-semibold tracking-tight opacity-50 mb-2">
          Played Patch
          </div>
        <ul class="space-y-2">
          <li v-for="p in patch" :key="p" class=" pl-3">
            {{ p }}
          </li>
        </ul>
      </ScrollPopperContent>
    </Popover>
  </div>
</template>