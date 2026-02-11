<script lang="ts" setup>
import Fuse from "fuse.js";

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes["class"]
  pocket?: Pocket
}>()

const pocket = computed(() => p)
const pocketTags = computed<string[]>({
  get: () => pocket.value?.tags ?? [],
  set: (value) => {
    if (pocket.value) pocket.value.tags = value
  },
})

function ensurePocketTags() {
  if (!pocket.value) return null
  if (!pocket.value.tags) pocket.value.tags = []
  return pocket.value.tags
}

const tags = ref<string[]>([]) // global pool of tags
const newTag = ref<string>("")

// Fuzzy search setup
const fuse = computed(() => new Fuse(tags.value, { threshold: 0.3 }))

// Matches while typing
const matches = computed(() =>
  newTag.value.trim() ? fuse.value.search(newTag.value).map((r) => r.item) : []
)

const filteredTags = computed(() => {
  const q = newTag.value.trim().toLowerCase()
  if (!q) return ps().tags
  return ps().tags.filter((tag) => tag.toLowerCase().includes(q))
})
const open = ref(false)

watch(
  () => open.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)
</script>

<template>
  <!-- tag -->
  <UPopover v-model:open="open">
    <slot>
      <UButton as-child>
        <UButton variant="ghost" :class="cn('size-11', { 'btn-active': open })">
          <icon name="tag" />
        </UButton>
      </UButton>
    </slot>
    <LazyPopPopoverContent
      class="grid max-h-70 w-54 -translate-y-5 auto-rows-max justify-center p-0"
      side="bottom">
      <div
        class="group relative flex h-10 w-54 w-full items-center gap-3 px-3 pt-2">
        <icon class="size-5 opacity-50" name="lucide:tags" />
        <input
          v-model="newTag"
          class="h-10 w-full pr-4 text-sm transition-all duration-200 placeholder:italic focus:placeholder:opacity-0"
          placeholder="attach new tag"
          @keydown.stop
          @keydown.enter.prevent="
            () => {
              const tag = newTag.trim().toLowerCase()
              const tags = ensurePocketTags()
              if (tag && tags && !tags.includes(tag)) {
                tags.push(tag)
                if (!ps().tags.includes(tag)) ps().tags.push(tag)
              }
              newTag = '' // reset → shows full list again
            }
          " />

        <UButton
          class="absolute top-2.5 right-1 btn-square size-6 shrink-0 opacity-100 group-has-placeholder-shown:opacity-0"
          variant="ghost"
          size="sm"
          @click="newTag = ''">
          <icon class="size-4 **:stroke-[1.5]" name="x-sm" />
        </UButton>
      </div>
      <Separator />
      <div
        class="grid max-h-55 max-w-54 overflow-x-hidden overflow-y-auto px-0.5 pt-1 pb-2">
        <!-- tags -->
        <Label
          v-for="item in filteredTags"
          :key="item"
          class="w-full max-w-52 justify-start gap-2.5 pl-3.25 text-start"
          variant="ghost"
          size="sm"
          @select.prevent>
          <input
            v-model="pocketTags"
            class="checkbox checkbox-sm checkbox-neutral shadow-xs drop-shadow-xs checked:bg-neutral/80"
            :value="item"
            type="checkbox"
            :checked="pocketTags.includes(item)" />
          <icon class="size-3.75! text-pc/80" name="hash" />
          <span class="-ml-2.5 w-full truncate">
            {{ item }}
          </span>
        </Label>

        <div
          v-if="!filteredTags.length"
          class="grid w-full place-items-center py-6">
          <div class="w-fit justify-start space-y-1">
            <p class="flex items-center gap-3">
              <span class="border-b4/80 badge text-xs shadow-sm drop-shadow-xs">
                ENTER
              </span>
              to
            </p>
            <p>create & attach</p>
          </div>
        </div>
      </div>
    </LazyPopPopoverContent>
  </UPopover>
</template>
