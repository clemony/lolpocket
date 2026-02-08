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
    class="overflow-hidden"
    multiple
    :highlight-on-hover="false"
    @entry-focus="null"
    @highlight="null"
    @entry-focus.stop.prevent>
    <ListboxContent class="w-full space-y-3">
      <!-- custom tags -->

      <Collapsible
        v-model:open="ui().toggles.backpack.tags"
        :disabled="false"
        :class="cn('space-y-1 px-3 pb-3', paddingClass)">
        <CollapsibleTrigger as-child>
          <Button
            class="w-full"
            as="button"
            variant="ghost"
            size="md">
            <span
              class="grow text-lg font-semibold tracking-normal capitalize opacity-40 duration-0">
              Tags
            </span>
            <CaretRotate />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent
          class="CollapsibleContent space-y-1"
          menu>
          <ListboxGroup class="relative flex flex-col justify-start gap-y-1">
            <div
              v-for="item in ps().tags"
              :key="item"
              class="group/tag grid h-9! w-full grid-cols-[1fr_min-content] items-center justify-self-start p-0 pr-2">
              <!-- list item -->
              <ListboxItem
                class="group/bt size-full grow cursor-pointer p-0"
                as-child
                :value="item">
                <Button
                  size="md"
                  variant="ghost"
                  :class="
                    cn(
                      'size-full items-center justify-start gap-px! rounded-lg px-3 text-pc/80 duration-0 hover:bg-p2/60 hover:text-pc hover:inset-shadow-none',
                      { 'btn-active bg-p2/20!': tags.includes(item) },
                    )
                  ">
                  <icon
                    class="size-3.5!"
                    name="hash" />
                  <span class="w-full truncate font-medium">
                    {{ item }}
                  </span>
                </Button>
              </ListboxItem>

              <!-- delete tag -->
              <Button
                v-tippy="'Delete Tag'"
                class="btn-square h-9 opacity-0 duration-0 not-hover:**:text-pc/60 group-hover/tag:opacity-100"
                variant="ghost"
                @click="deleteTag(item)">
                <icon name="x-sm" />
              </Button>
            </div>
          </ListboxGroup>
          <!-- tag input -->

          <Button
            class="group flex w-full flex-nowrap items-center gap-3! justify-self-center px-3 py-0 text-sm duration-0 focus-within:border-neutral/60 focus-within:[&_input]:placeholder:opacity-0"
            as="div"
            color="default"
            hover="outline">
            <span class="z-1 grid h-full w-4.5 place-items-center bg-p0">
              <icon
                class="size-4.5 opacity-50"
                name="tag" />
            </span>
            <input
              v-model="newTag"
              class="size-full grow rounded-none transition-all duration-300 placeholder:italic"
              placeholder="create new tag..."
              @keydown.enter="
                () => {
                  ;(ps().tags.push(newTag), (newTag = ''))
                }
              ">

            <Button
              class="btn-square size-6 duration-0 group-has-placeholder-shown:opacity-0"
              variant="ghost"
              size="sm"
              @click="newTag = ''">
              <icon name="x-sm" />
            </Button>
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </ListboxContent>
  </ListboxRoot>
</template>
