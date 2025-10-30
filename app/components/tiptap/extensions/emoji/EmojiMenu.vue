<script setup lang="ts">
import type { Editor, EmojiItem } from '~tiptap'
import { gitHubEmojis } from '@tiptap/extension-emoji'
import { motion } from 'motion-v'

const { editor } = defineProps<{
  editor: Editor | null
}>()

const query = shallowRef<string>('')

const { results: r } = useSimpleSearch(editor.storage.emoji.emojis, query, { keys: ['shortcodes', 'tags'] })

const results = computed (() => [...r.value].splice(0, 20))
const selectedIndex = ref(0)
// const selectedItem = computed(() => items[selectedIndex.value])

const groups = [
  {
    name: 'Search Results',
    class: '!size-4.5',
    icon: 'search'
  },
  {
    keywords: ['face'],
    name: 'Face',
    class: '!size-4.5 **:stroke-[1.9]',
    icon: 'smile',
  },
  //
  {
    keywords: [],
    name: 'People & Body',
    class: '**:stroke-[2.1]',
    groups: ['people & body'],
    icon: 'user',
  },
  {
    keywords: [],
    name: 'Animals & Nature',
    class: 'size-5.5 ',
    groups: ['animals & nature'],
    icon: 'cat'
  },
  {
    keywords: [],
    name: 'Food & Drink',
    class: '**:stroke-[2]',
    groups: ['food & drink'],
    icon: 'lucide:coffee',
  },
  {
    keywords: [],
    name: 'Travel & Places',
    groups: ['travel & places'],
    icon: 'lucide:plane',
  },
  {
    keywords: [],
    name: 'Activities',
    groups: ['activities'],
    icon: 'lucide-lab:ice-skate',
  },
  {
    keywords: [],
    name: 'Objects',
    class: '**:stroke-[1.5] translate-x-0.5',
    groups: ['objects'],
    icon: 'lucide-lab:bottle-spray',
  },

  { // no key or group
    keywords: ['regional'],
    name: 'Symbols & Miscellaneous',
    groups: ['symbols', 'github', 'components', 'flags'],
    icon: 'and',
  },
]

const tab = shallowRef<number>(1)

const filter = computed (() => {
  const emoji = ref<EmojiItem[]>([])
  const group = groups[tab.value]
  console.log('🌱 - group:', group)

  if (!group)
    return null

  if (tab.value === 0)
    return results.value

  if (group?.keywords?.length) {
    group?.keywords.forEach((k) => {
      emoji.value.push(...gitHubEmojis.filter(e => e.tags.includes(k)))
    })
  }

  if (group?.groups?.length)
    group.groups.forEach(k => emoji.value.push(...gitHubEmojis.filter(e => e.group.includes(k))))

  if (group?.name === 'Symbols & Miscellaneous')
    emoji.value.push(...gitHubEmojis.filter(e => !e.tags?.length && !e.group?.length).filter(e => !e.tags.includes('Face')).concat(...gitHubEmojis.filter(e => e.group.includes('github'))))

  return emoji.value
})

watch(() => query.value.length, (newVal) => {
  if (newVal > 0 && tab.value !== 0)
    tab.value = 0
})

watch(() => query.value, (newVal) => {
  if (newVal === '' && tab.value !== 0)
    tab.value = 1
})

const invert = shallowRef<boolean>(false)

watch(() => tab.value, (newVal, oldVal) => {
  if (newVal < oldVal)
    invert.value = true
  else invert.value = false
})
</script>

<template>
  <Popover>
    <PopoverTrigger
      ref="triggerEl"
      size="sq"
      class="size-7"
      variant="ghost"
      active="inset"
      hover="inset"
      @click.stop>
      <icon
        name="smile"
        class="mt-px !size-4.25 opacity-70 transition-all  duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90" />
    </PopoverTrigger>

    <LazyPopoverContent
      ref="target"
      data-theme="base"
      align="start"
      class="tippy-box relative h-90 max-h-90 w-78 -translate-x-2 overflow-hidden rounded-xl px-0 py-px inset-shadow-xs">
      <div class="from-b1 absolute top-0 z-1 w-full overflow-hidden bg-linear-to-b from-6% to-transparent to-30% px-2 pt-2 pb-1.5">
        <InputGroup class="!bg-b1/74 bg-brightness-104 border-b3/80 h-11 w-full rounded-xl  border-[groove] bg-blend-screen    shadow-xs shadow-black/4 backdrop-blur">
          <InputGroupSearch />
          <InputGroupInput v-model:model-value="query" />
          <InputGroupClear
            @clear:input="() => {
              query = ''
              tab = 1
            }" />
        </InputGroup>
      </div>
      <TransitionSlideLeft
        :invert
        class="size-full overflow-auto ">
        <div
          :key="tab"
          class=" grid  w-full  grid-cols-[repeat(auto-fill,minmax(28px,1fr))] justify-between gap-x-1 gap-y-0.5 overflow-auto  px-2  pt-14 pb-18">
          <EmojiButton
            v-for="item, index in filter"
            :key="index"
            :item
            :index
            @click="editor.chain().focus().setEmoji(item.name).run()"
            @mousedown.prevent="selectedIndex = index" />
        </div>
      </TransitionSlideLeft>

      <div class="from-b1 absolute bottom-0 w-full bg-linear-to-t  from-12% to-transparent to-40% px-2 pb-2 ">
        <Tabs
          v-model:model-value="tab"
          as="div"
          class="border-b3/80 bg-brightness-104 bg-b1/70  flex   h-9 w-full items-center  rounded-xl border border-[groove] px-1 bg-blend-screen shadow-md shadow-black/4 backdrop-blur ">
          <TabsList
            variant="none"
            size="md"
            class="w-full justify-stretch ">
            <Tooltip
              v-for="group, i in groups"
              :key="i">
              <TooltipTrigger
                as-child>
                <TabsTrigger
                  :disabled="group.name === 'Search Results' && !query.length"

                  class="group/btn  on:**:text-nc on:*:opacity-100 h-7 *:opacity-40   hover:*:opacity-90 "
                  :value="i">
                  <icon
                    :name="group.icon"
                    :class="cn('size-5 absolute dxs **:stroke-[1.7]', group.class)" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                :side-offset="8">
                {{ group.name }}
              </TooltipContent>
            </Tooltip>
            <TabIndicator
              variant="neutral"
              class="*:!bg-neutral/80" />
          </TabsList>
        </Tabs>
      </div>
    </LazyPopoverContent>
  </Popover>
</template>