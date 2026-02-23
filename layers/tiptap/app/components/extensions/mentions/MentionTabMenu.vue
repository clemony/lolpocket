<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3"

const { editor, mentionData } = defineProps<{
  editor: Editor | null
  mentionData: MentionData
}>()

const isOpen = shallowRef<boolean>(false)
function insertMention(item: Index) {
  if (!editor) return
  editor
    .chain()
    .insertContent({
      type: "mentions",
      attrs: {
        "data-id": item.id,
        "data-key": item.key,
        "data-name": item.name,
      },
    })
    .insertContent(" ")
    .run()
  isOpen.value = false
}

const gridWrapper = useTemplateRef<HTMLDivElement>("gridWrapper")
const target = useTemplateRef<HTMLDivElement>("target")

const { groups, invert, query, results, tab } = useMentionTabMenu(mentionData)

/* const { selectedIndex, selectedItem } = useGridFocusTrap(target, {
  columnWidth: 6,
  items: computed(() => groups[tab.value].items),
  onSelect: (item) => {
  },
}) */
</script>

<template>
  <UPopover v-model:open="isOpen">
    <!-- trigger -->
    <UButton
      square
      size="xs"
      variant="ghost"
      on="inset"
      hover="inset"
      @click.stop>
      <icon
        class="size-4! opacity-60 transition-all duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90"
        name="hash" />
    </UButton>

    <LazyPopoverContent
      ref="target"
      class="box relative h-90 max-h-90 w-78 -translate-x-2 overflow-hidden rounded-xl px-0 py-px inset-shadow-xs"
      data-theme="base"
      align="start">
      <!-- search input -->
      <div
        class="absolute top-0 z-1 w-full overflow-hidden bg-linear-to-b from-p0 from-4% to-transparent to-80% px-2 pt-2 pb-1.5">
        <UInputGroup
          class="bg-brightness-104 h-11 w-full rounded-xl border-p3/80 bg-p0/74! bg-blend-screen shadow-xs shadow-black/4 backdrop-blur-sm">
          <UInputGroupSearch />
          <UInputGroupInput v-model:model-value="query" />
          <InputClear
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
            <InputClear @clear-input="is().filters.query = ''" />
          </template>
        </UInput>
      </div>
      <TransitionSlide
        ref="gridWrapper"
        class="size-full overflow-auto"
        :invert>
        <div
          ref="target"
          class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(28px,1fr))] justify-between gap-1.5 overflow-auto px-2 pt-15 pb-18">
          <template v-if="query.length && results.length && tab === 0">
            <template v-for="item in results" :key="item.id">
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
              v-for="item in groups[tab]?.items ?? []"
              :key="item.id"
              label="{ content: item.name, theme: 'base', placement: 'top' }"
              :item
              tabindex="-1"
              as="button"
              :class="
                cn('icon-grid-style', { 'rounded-full': item?.key === 'rune' })
              "
              @click="insertMention(item)" />
          </template>
        </div>
      </TransitionSlide>

      <!-- tabs -->
      <div
        class="absolute bottom-0 w-full bg-linear-to-t from-p0 from-4% to-transparent to-80% px-2 pb-2">
        <Tabs
          v-model:model-value="tab"
          class="bg-brightness-104 flex h-9! w-full items-center rounded-xl border border-p3/80 bg-p0/70 px-1 bg-blend-screen shadow-md shadow-black/4 backdrop-blur-sm"
          as="div">
          <TabsList
            class="w-full auto-cols-fr justify-stretch"
            variant="none"
            size="sm">
            <TabsTrigger
              v-for="(group, i) in groups"
              :key="i"
              class="group/btn h-7 w-full *:opacity-60 hover:*:opacity-100 disabled:**:text-pc/40 on:*:opacity-100 on:**:text-nc!"
              :disabled="i === 0 && !query.length"
              :value="i">
              <Icon
                :name="group.icon"
                :class="
                  cn('', {
                    'size-4.5!': i !== 0,
                    'size-6.25! ds-2xs': i === 3,
                    'translate-y-px': [1, 3].includes(i),
                    'size-5!': i === 4,
                  })
                " />
            </TabsTrigger>
            <TabIndicator class="bg-p2!" color="neutral" />
          </TabsList>
        </Tabs>
      </div>
    </LazyPopoverContent>
  </UPopover>
</template>
