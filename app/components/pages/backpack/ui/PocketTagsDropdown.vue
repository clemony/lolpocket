<script lang="ts" setup>
import Fuse from 'fuse.js'
import { championPositions } from '~~/shared/appdata'

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed(() => p)

const tags = ref<string[]>([]) // global pool of tags
const newTag = ref<string>('')

// Fuzzy search setup
const fuse = computed(() => new Fuse(tags.value, { threshold: 0.3 }))

// Matches while typing
const matches = computed(() =>
  newTag.value.trim() ? fuse.value.search(newTag.value).map(r => r.item) : []
)

const filteredTags = computed(() => {
  const q = newTag.value.trim().toLowerCase()
  if (!q)
    return ps().tags
  return ps().tags.filter(tag => tag.toLowerCase().includes(q))
})
const open = ref(false)

watch(
  () => open.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
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
      class="grid max-h-70 w-54 -translate-y-5 auto-rows-max justify-center p-0">
      <div
        class="group relative flex h-10 w-54 w-full items-center gap-3 px-3 pt-2">
        <icon
          name="lucide:tags"
          class="size-5 opacity-50" />
        <input
          v-model="newTag"
          placeholder="attach new tag"
          class="text-2 h-10 w-full pr-4 transition-all duration-200 placeholder:italic focus:placeholder:opacity-0"
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
          size="8"
          class="btn-square absolute top-2.5 right-1 size-6 shrink-0 opacity-100 group-has-[:placeholder-shown]:opacity-0"
          @click="newTag = ''">
          <icon
            name="x-sm"
            class="size-4 **:stroke-[1.5]" />
        </Button>
      </div>
      <Separator />
      <div
        class="grid max-h-55 max-w-54 overflow-x-hidden overflow-y-auto px-0.5 pt-1 pb-2">
        <!-- tags -->
        <Label
          v-for="item in filteredTags"
          :key="item"
          variant="ghost"
          size="sm"
          class="w-full max-w-52 justify-start gap-2.5 pl-3.25 text-start"
          @select.prevent>
          <input
            v-model="pocket.tags"
            :value="item"
            type="checkbox"
            :checked="pocket.tags.includes(item)"
            class="checkbox checkbox-sm checkbox-neutral checked:bg-neutral/80 shadow-xs drop-shadow-xs" />
          <icon
            name="hash"
            class="text-bc/80 !size-3.75" />
          <span class="-ml-2.5 w-full truncate">
            {{ item }}
          </span>
        </Label>

        <div
          v-if="!filteredTags.length"
          class="grid w-full place-items-center py-6">
          <div class="w-fit justify-start space-y-1">
            <p class="flex items-center gap-3">
              <span class="text-1 badge border-b4/80 shadow-sm drop-shadow-xs">
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
