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
    <ListboxContent class="w-full space-y-3">
      <!-- custom tags -->

      <Collapsible
        v-model:open="as().toggles.backpack.tags"
        :disabled="false"
        :class="cn('space-y-1 px-3 pb-3', paddingClass)">
        <CollapsibleTrigger as-child>
          <Button
            as="button"
            variant="ghost"
            class="w-full"
            size="md">
            <span
              class="
                grow text-4 font-semibold tracking-normal capitalize opacity-40
                duration-0
              ">
              Tags
            </span>
            <CaretRotate />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent
          menu
          class="CollapsibleContent space-y-1">
          <ListboxGroup class="relative flex flex-col justify-start gap-y-1">
            <div
              v-for="item in ps().tags"
              :key="item"
              class="
                group/tag grid !h-9 w-full grid-cols-[1fr_min-content]
                items-center justify-self-start p-0 pr-2
              ">
              <!-- list item -->
              <ListboxItem
                as-child
                class="group/bt size-full grow cursor-pointer p-0"
                :value="item">
                <Button
                  size="md"
                  variant="ghost"
                  :class="
                    cn(
                      `
                        size-full items-center justify-start !gap-px rounded-lg
                        px-3 text-bc/80 duration-0
                        hover:bg-b2/60 hover:text-bc hover:inset-shadow-none
                      `,
                      { 'btn-active !bg-b2/20': tags.includes(item) },
                    )
                  ">
                  <icon
                    name="hash"
                    class="!size-3.5" />
                  <span class="w-full truncate font-medium">
                    {{ item }}
                  </span>
                </Button>
              </ListboxItem>

              <!-- delete tag -->
              <Button
                v-tippy="'Delete Tag'"
                variant="ghost"
                class="
                  btn-square h-9 opacity-0 duration-0
                  not-hover:**:text-bc/60
                  group-hover/tag:opacity-100
                "
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
            class="
              group flex w-full flex-nowrap items-center !gap-3
              justify-self-center px-3 py-0 text-2 duration-0
              focus-within:border-neutral/60
              focus-within:[&_input]:placeholder:opacity-0
            ">
            <span class="z-1 grid h-full w-4.5 place-items-center bg-b1">
              <icon
                name="tag"
                class="size-4.5 opacity-50" />
            </span>
            <input
              v-model="newTag"
              placeholder="create new tag..."
              class="
                h-full w-full grow rounded-none transition-all duration-300
                placeholder:italic
              "
              @keydown.enter="
                () => {
                  ;(ps().tags.push(newTag), (newTag = ''))
                }
              " />

            <Button
              variant="ghost"
              size="8"
              class="
                btn-square size-6 duration-0
                group-has-[:placeholder-shown]:opacity-0
              "
              @click="newTag = ''">
              <icon name="x-sm" />
            </Button>
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </ListboxContent>
  </ListboxRoot>
</template>
