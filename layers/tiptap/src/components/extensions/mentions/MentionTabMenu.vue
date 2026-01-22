<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { IndexGroup, MentionData } from '~tiptap'
import { useMentionTabMenu } from '~tiptap'

const { editor, mentionData } = defineProps<{
  editor: Editor | null
  mentionData: MentionData
}>()

const isOpen = shallowRef<boolean>(false)
function insertMention(item: Index) {
  editor
    .chain()
    .insertContent({
      attrs: {
        'data-id': item.id,
        'data-key': item.key,
        'data-name': item.name,
      },
      type: 'mentions',
    })
    .insertContent(' ')
    .run()
  isOpen.value = false
}

const gridWrapper = useTemplateRef<HTMLDivElement>('gridWrapper')
const target = useTemplateRef<HTMLDivElement>('target')

const { groups, invert, query, results, tab } = useMentionTabMenu(mentionData)

const { selectedIndex, selectedItem } = useGridFocusTrap(target, {
  columnWidth: 6,
  items: computed(() => groups[tab.value].items),
  onSelect: (item) => {
    // handle insert logic here
  },
})
</script>

<template>
  <Popover v-model:open="isOpen">
    <!-- trigger -->
    <PopoverTrigger
      ref="triggerEl"
      size="sq-7"
      variant="ghost"
      on="inset"
      hover="inset"
      @click.stop>
      <icon
        name="hash"
        class="
          size-4! opacity-60 transition-all duration-100
          group-focus-within/text:opacity-90 group-hover/text:opacity-90
        " />
    </PopoverTrigger>

    <LazyPopoverContent
      ref="target"
      data-theme="base"
      align="start"
      class="
        tippy-box relative h-90 max-h-90 w-78 -translate-x-2 overflow-hidden
        rounded-xl px-0 py-px inset-shadow-xs
      ">
      <!-- search input -->
      <div
        class="
          absolute top-0 z-1 w-full overflow-hidden bg-linear-to-b from-b1
          from-4% to-transparent to-80% px-2 pt-2 pb-1.5
        ">
        <InputGroup
          class="
            bg-brightness-104 h-11 w-full rounded-xl border-b3/80 bg-b1/74!
            bg-blend-screen shadow-xs shadow-black/4 backdrop-blur-sm
          ">
          <InputGroupSearch />
          <InputGroupInput v-model:model-value="query" />
          <InputGroupClear
            @clear:input="
              () => {
                query = '';
                tab = 1;
              }
            " />
        </InputGroup>
      </div>
      <TransitionSlideLeft
        ref="gridWrapper"
        :invert
        class="size-full overflow-auto">
        <div
          :key="tab"
          ref="target"
          class="
            grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(28px,1fr))]
            justify-between gap-1.5 overflow-auto px-2 pt-15 pb-18
          ">
          <template v-if="query.length && results.length && tab === 0">
            <template
              v-for="item in results"
              :key="item.id">
              <IndexIcon
                :item
                :class="
                  cn('icon-grid-style', {
                    'rounded-full': item?.key === 'rune',
                  })
                "
                @click="insertMention(item)" />
            </template>
          </template>
          <template v-else>
            <IndexIcon
              v-for="item in groups[tab].items"
              :key="item.id"
              v-tippy="{ content: item.name, theme: 'base', placement: 'top' }"
              :item
              tabindex="-1"
              as="button"
              :class="
                cn('icon-grid-style', { 'rounded-full': item?.key === 'rune' })
              "
              @click="insertMention(item)" />
          </template>
        </div>
      </TransitionSlideLeft>

      <!-- tabs -->
      <div
        class="
          absolute bottom-0 w-full bg-linear-to-t from-b1 from-4% to-transparent
          to-80% px-2 pb-2
        ">
        <Tabs
          v-model:model-value="tab"
          as="div"
          class="
            bg-brightness-104 flex h-9! w-full items-center rounded-xl border
            border-b3/80 bg-b1/70 px-1 bg-blend-screen shadow-md shadow-black/4
            backdrop-blur-sm
          ">
          <TabsList
            variant="none"
            size="sm"
            class="w-full auto-cols-fr justify-stretch">
            <TabsTrigger
              v-for="(group, i) in groups"
              :key="i"
              :disabled="i === 0 && !query.length"
              class="
                group/btn h-7 w-full *:opacity-60 hover:*:opacity-100
                disabled:**:text-bc/40 on:*:opacity-100 on:**:text-nc!
              "
              :value="i">
              <Icon
                :name="group.icon"
                :class="
                  cn('', {
                    '!size-4.5': i !== 0,
                    '!size-6.25  dst': i === 3,
                    'translate-y-px': [1, 3].includes(i),
                    '!size-5': i === 4,
                  })
                " />
            </TabsTrigger>
            <TabIndicator
              variant="neutral"
              class="bg-b2!" />
          </TabsList>
        </Tabs>
      </div>
    </LazyPopoverContent>
  </Popover>
</template>
