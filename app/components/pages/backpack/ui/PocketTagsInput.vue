<script lang="ts" setup>
import { ListboxContent, ListboxGroup, ListboxRoot } from 'reka-ui'

const { paddingClass } = defineProps<{
  paddingClass?: HTMLAttributes['class']
}>()
const newTag = ref('')
const tags = ref([])
watch(
  () => tags.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
    console.log('💠 - watch - newVajljljljl:', ps().tags)
  }
)

function deleteTag(tag: string) {
  const a = ps().tags.findIndex(t => t === tag)

  if (a) {
    ps().tags.splice(a, 1)
    ps()
      .pockets
      .map(p => p.tags)
      .forEach((set) => {
        const a = set.findIndex(t => t === tag)
        set.splice(a, 1)
      })
  }
}
</script>

<template>
  <ListboxRoot
    v-model:model-value="tags"
    multiple
    :highlight-on-hover="false"
    class="overflow-hidden"
    @entry-focus="null"
    @highlight="null"
    @entry-focus.stop.prevent>
    <ListboxContent class="space-y-3 w-full">
      <!-- custom tags -->

      <Collapsible
        v-model:open="as().toggles.backpack.tags"
        :disabled="false"
        :class="cn(' px-3 pb-3 space-y-1', paddingClass)">
        <CollapsibleTrigger as-child>
          <Button
            as="button"
            variant="ghost"
            class="w-full"
            size="md">
            <span
              class="font-semibold duration-0 grow tracking-normal opacity-40 text-md capitalize">
              Tags
            </span>
            <CaretRotate />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent
          menu
          class="CollapsibleContent space-y-1">
          <ListboxGroup class="justify-start flex gap-y-1 flex-col relative">
            <div
              v-for="item in ps().tags"
              :key="item"
              class="grid group/tag p-0 w-full grid-cols-[1fr_min-content] pr-2 justify-self-start !h-9 items-center">
              <!-- list item -->
              <ListboxItem
                as-child
                class="group/bt p-0 grow size-full cursor-pointer"
                :value="item">
                <Button
                  size="md"
                  variant="ghost"
                  :class="
                    cn(
                      'size-full px-3 duration-0 hover:bg-b2/60 !gap-px items-center justify-start hover:inset-shadow-none rounded-lg text-bc/80 hover:text-bc',
                      { 'btn-active !bg-b2/20': tags.includes(item) },
                    )
                  ">
                  <icon
                    name="hash"
                    class="!size-3.5" />
                  <span class="w-full font-medium truncate">
                    {{ item }}
                  </span>
                </Button>
              </ListboxItem>

              <!-- delete tag -->
              <Button
                v-tippy="'Delete Tag'"
                variant="ghost"
                class="h-9 duration-0 btn-square not-hover:**:text-bc/60 group-hover/tag:opacity-100 opacity-0"
                @click="deleteTag(item)">
                <icon name="x-sm" />
              </Button>
            </div>
          </ListboxGroup>
          <!-- tag input -->

          <Button
            as="div"
            variant="base"
            hover="outline"
            class="px-3 justify-self-center duration-0 py-0 focus-within:border-neutral/60 focus-within:[&_input]:placeholder:opacity-0 w-full flex-nowrap group !gap-3 flex items-center text-xs">
            <span class="bg-b1 grid z-1 place-items-center h-full w-4.5">
              <icon
                name="tag"
                class="size-4.5 opacity-50" />
            </span>
            <input
              v-model="newTag"
              placeholder="create new tag..."
              class="grow w-full rounded-none placeholder:italic transition-all duration-300 h-full"
              @keydown.enter="
                () => {
                  ;(ps().tags.push(newTag), (newTag = ''))
                }
              " />

            <Button
              variant="ghost"
              size="xs"
              class="btn-square group-has-[:placeholder-shown]:opacity-0 duration-0 size-6"
              @click="newTag = ''">
              <icon name="x-sm" />
            </Button>
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </ListboxContent>
  </ListboxRoot>
</template>
