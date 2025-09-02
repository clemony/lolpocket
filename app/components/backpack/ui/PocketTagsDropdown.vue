<script lang="ts" setup>
import { championPositions } from '~~/shared/appdata'

import Fuse from 'fuse.js'

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed (() => p)

const tags = ref<string[]>([]) // global pool of tags
const newTag = ref<string>('')

// Fuzzy search setup
const fuse = computed(() => new Fuse(tags.value, { threshold: 0.3 }))

// Matches while typing
const matches = computed(() =>
  newTag.value.trim()
    ? fuse.value.search(newTag.value).map(r => r.item)
    : [],
)

const filteredTags = computed(() => {
  const q = newTag.value.trim().toLowerCase()
  if (!q)
    return ps().tags
  return ps().tags.filter(tag => tag.toLowerCase().includes(q))
})
const open = ref(false)

watch(() => open.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <!-- tag -->
  <Popover v-model:open="open">
    <slot>
      <PopoverTrigger as-child>
        <Button
          variant="ghost"
          :class="cn('size-11 ', { 'btn-active': open })">
          <icon name="tag" />
        </Button>
      </PopoverTrigger>
    </slot>
    <LazyPopPopoverContent
      side="bottom"
      class="w-54 -translate-y-5 p-0 grid auto-rows-max justify-center  max-h-70 ">
      <div class=" relative  pt-2 w-54 px-3 h-10 group gap-3 flex items-center w-full ">
        <icon
          name="lucide:tags"
          class="size-5 opacity-50 " />
        <input
          v-model="newTag"
          placeholder="attach new tag"
          class="h-10 placeholder:italic   w-full pr-4 text-2 focus:placeholder:opacity-0 transition-all duration-200"
          @keydown.stop
          @keydown.enter.prevent="
            () => {
              const tag = newTag.trim().toLowerCase()
              if (tag && !pocket.tags.includes(tag)) {
                pocket.tags.push(tag)
                ps().tags.push(tag)
              }
              newTag = '' // reset → shows full list again
            }
          " />

        <Button
          variant="ghost"
          size="xs"
          class="btn-square absolute top-2.5 right-1 shrink-0 group-has-[:placeholder-shown]:opacity-0 opacity-100 size-6"
          @click="newTag = ''">
          <icon
            name="x-sm"
            class="size-4 **:stroke-[1.5]" />
        </Button>
      </div>
      <Separator />
      <div class="max-w-54 overflow-x-hidden max-h-55 pb-2 px-0.5 pt-1 overflow-y-auto grid">
        <!-- tags -->
        <Label
          v-for="item in filteredTags"
          :key="item"
          variant="ghost"
          size="sm"
          class="pl-3.25 gap-2.5 w-full max-w-52 justify-start text-start"
          @select.prevent>
          <input
            v-model="pocket.tags"
            :value="item"
            type="checkbox"
            :checked="pocket.tags.includes(item)"
            class="checkbox checkbox-sm checkbox-neutral drop-shadow-xs shadow-xs checked:bg-neutral/80" />
          <icon
            name="hash"
            class="!size-3.75 text-bc/80" />
          <span class="truncate w-full -ml-2.5">
            {{ item }}
          </span>
        </Label>

        <div
          v-if="!filteredTags.length"
          class="w-full py-6 grid place-items-center">
          <div class="w-fit justify-start space-y-1">
            <p class=" flex items-center gap-3">
              <span class=" text-1 drop-shadow-xs shadow-sm  badge border-b4/80">
                ENTER
              </span>
              to
            </p>
            <p>create & attach</p>
          </div>
        </div>
      </div>
    </LazyPopPopoverContent>
  </Popover>
</template>