<script setup lang="ts">
import type { Editor } from "@tiptap/core"
import type { EmojiItem } from "@tiptap/extension-emoji"
import { filterEmoji } from "~~/shared/utils/tiptap/filterEmoji"

const { editor } = defineProps<{
  editor: Editor | null
}>()

const query = shallowRef<string>("")

const emojiList = computed(() => editor?.storage.emoji.emojis ?? [])

const search = useSearch(emojiList, query, {
  keys: ["shortcodes", "tags"]
})

const results = computed(() =>
  search.value.length ? search.value : emojiList.value.toSpliced(0, 20)
)

const selectedIndex = ref(0)
// const selectedItem = computed(() => items[selectedIndex.value])

const groups = [
  {
    name: "Search Results",
    class: "!size-4.5",
    icon: "search"
  },
  {
    keywords: ["face"],
    name: "Face",
    class: "!size-4.5 **:stroke-[1.9]",
    icon: "smile"
  },
  //
  {
    keywords: [],
    name: "People & Body",
    class: "**:stroke-[2.1]",
    icon: "user",
    groups: ["people & body"]
  },
  {
    keywords: [],
    name: "Animals & Nature",
    class: "size-5.5 ",
    icon: "cat",
    groups: ["animals & nature"]
  },
  {
    keywords: [],
    name: "Food & Drink",
    class: "**:stroke-[2]",
    icon: "lucide:coffee",
    groups: ["food & drink"]
  },
  {
    keywords: [],
    name: "Travel & Places",
    icon: "lucide:plane",
    groups: ["travel & places"]
  },
  {
    keywords: [],
    name: "Activities",
    icon: "lucide-lab:ice-skate",
    groups: ["activities"]
  },
  {
    keywords: [],
    name: "Objects",
    class: "**:stroke-[1.5] translate-x-0.5",
    icon: "lucide-lab:bottle-spray",
    groups: ["objects"]
  },

  {
    // no key or group
    keywords: ["regional"],
    name: "Symbols & Miscellaneous",
    icon: "and",
    groups: ["symbols", "github", "components", "flags"]
  }
]

const tab = shallowRef<number>(1)

const filter = computed(() => {
  const emoji = ref<EmojiItem[]>([])
  const group = groups[tab.value]
  if (!editor) return null
  const emojiArray = filterEmoji(editor)

  if (!group) return null

  if (tab.value === 0) return results.value

  if (group?.keywords?.length) {
    group?.keywords.forEach((k) => {
      emoji.value.push(...emojiArray.filter((e) => e.tags.includes(k)))
    })
  }

  if (group?.groups?.length) {
    group.groups.forEach((k) =>
      emoji.value.push(...emojiArray.filter((e) => e.group?.includes(k)))
    )
  }

  if (group?.name === "Symbols & Miscellaneous") {
    emoji.value.push(
      ...[
        ...emojiArray
          .filter((e: EmojiItem) => !e.tags?.length && !e.group?.length)
          .filter((e: EmojiItem) => !e.tags.includes("Face")),
        ...emojiArray.filter((e: EmojiItem) => e.group?.includes("github"))
      ]
    )
  }

  return emoji.value
})

watch(
  () => query.value.length,
  (newVal) => {
    if (newVal > 0 && tab.value !== 0) tab.value = 0
  }
)

watch(
  () => query.value,
  (newVal) => {
    if (newVal === "" && tab.value !== 0) tab.value = 1
  }
)

const invert = shallowRef<boolean>(false)

watch(
  () => tab.value,
  (newVal, oldVal) => {
    if (newVal < oldVal) invert.value = true
    else invert.value = false
  }
)
</script>

<template>
  <UPopover>
    <UButton
      class="size-7"
      square
      variant="ghost"
      on="inset"
      hover="inset"
      @click.stop>
      <icon
        class="mt-px size-4.25! opacity-70 transition-all duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90"
        name="smile" />
    </UButton>

    <LazyPopoverContent
      class="relative h-90 max-h-90 w-78 -translate-x-2 overflow-hidden rounded-xl px-0 py-px inset-shadow-xs"
      data-theme="base"
      align="start">
      <div
        class="absolute top-0 z-1 w-full overflow-hidden bg-linear-to-b from-p0 from-6% to-transparent to-30% px-2 pt-2 pb-1.5">
        <UInputGroup
          class="bg-brightness-104 h-11 w-full rounded-xl border-p3/80 bg-p0/74! bg-blend-screen shadow-xs shadow-black/4 backdrop-blur-sm">
          <UInputGroupSearch />
          <UInputGroupInput v-model:model-value="query" />
          <LazyInputClear
            @clear-input="
              () => {
                query = ''
                tab = 1
              }
            " />
        </UInputGroup>

        <UInput
          v-model:model-value="is().filters.query"
          icon="i-search"
          class="peer"
          placeholder="search">
          <template #trailing>
            <LazyInputClear @clear-input="is().filters.query = ''" />
          </template>
        </UInput>
      </div>
      <TransitionSlide class="size-full overflow-auto" :invert>
        <div
          :key="tab"
          class="grid w-full grid-cols-[repeat(auto-fill,minmax(24px,1fr))] justify-between gap-x-1 gap-y-0.5 overflow-auto px-2 pt-14 pb-18">
          <EmojiButton
            v-for="(item, index) in filter"
            :key="index"
            :item
            :index
            @click="editor?.chain().focus().setEmoji(item.name).run()"
            @mousedown.prevent="selectedIndex = index" />
        </div>
      </TransitionSlide>

      <div
        class="absolute bottom-0 w-full bg-linear-to-t from-p0 from-12% to-transparent to-40% px-2 pb-2">
        <Tabs
          v-model:model-value="tab"
          class="bg-brightness-104 flex h-9 w-full items-center rounded-xl border border-p3/80 bg-p0/70 px-1 bg-blend-screen shadow-md shadow-black/4 backdrop-blur-sm"
          as="div">
          <TabsList class="w-full justify-stretch" variant="none" size="md">
            <Tooltip v-for="(group, i) in groups" :key="i">
              <TooltipTrigger as-child>
                <TabsTrigger
                  class="group/btn h-7 *:opacity-40 hover:*:opacity-90 on:*:opacity-100 on:**:text-nc"
                  :disabled="group.name === 'Search Results' && !query.length"
                  :value="i">
                  <icon
                    :name="group.icon"
                    :class="
                      cn('absolute size-5 ds-xs **:stroke-[1.7]', group.class)
                    " />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom" :side-offset="8">
                {{ group.name }}
              </TooltipContent>
            </Tooltip>
            <TabIndicator class="*:bg-neutral/80!" color="neutral" />
          </TabsList>
        </Tabs>
      </div>
    </LazyPopoverContent>
  </UPopover>
</template>
