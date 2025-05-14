<script lang="ts" setup>
import { hexoid } from 'hexoid'

const emit = defineEmits(['update:name'])

const ps = usePocketStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('/img/lp/192.webp')

watch(
  () => tags.value,
  (newVal) => {
    console.log(newVal)
  },
)

function clearForm() {
  name.value = ''
  selectedIcon.value = ''
  tags.value = ['']
}

function submitForm() {
  console.log('hi')
  const key = toID()
  addPocket(name.value, tags.value, selectedIcon.value, key)
  clearForm()
  ps.newPocketOpen = false
  console.log('pocket added!', ps.pockets)
}

defineExpose({
  clearForm,
  name,
})

async function randomizeName(){
  const n = await generateShortString()
  name.value = n
  emit('update:name', name.value)
}
</script>

<template>
  <Dialog :open="ps.newPocketOpen">
    <MotionDialogContent class="!rounded-xl" @interact-outside="ps.newPocketOpen = false">
      <DialogHeader>
        <DialogTitle class="text-6 dst">
          New Pocket
        </DialogTitle>
        <DialogDescription class="text-2 leading-6 mt-1 dst mb-4">
          Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <span class="font-semibold">All items can be left blank</span> and edited later.
        </DialogDescription>
      </DialogHeader>

      <div class=" grid grid-cols-[0.7fr_2fr] gap-6 size-full">

        <div class="flex gap-7 flex-col items-center size-full pt-5 pb-4">
          <p class="w-full text-left flex items-center gap-2 text-4 px-5 font-semibold tracking-tight">
            Icon <icon name="select" />
          </p>
          <Popover>
            <PopoverTrigger class="justify-self-center group">
              <LazyPocketIcon
                :image="selectedIcon"
                class="**:!rounded-xl size-4 tldr-20 group-data-[state=open]:ring-1 cursor-pointer !rounded-xl overflow-hidden inset-shadow-rounded ring-offset-3 ring-offset-b1 shadow-rounded size-28 inset-shadow-black shadow-black/30  hover:ring-1" />
            </PopoverTrigger>
            <IconPopover v-model:selected-icon="selectedIcon" side="right" :side-offset="70" align="start" :align-offset="-136" @update:selected-icon="(e) => selectedIcon = e" />
          </Popover>
        </div>

        <div class="[&_label]:text-3  w-full flex flex-col justify-start gap-6  pt-4 px-0.5 h-full">
          <div class="flex flex-col  gap-1">
            <div class="flex  h-12 px-3 border border-b4/80 w-full rounded-lg items-center shrink-0 focus-within:ring-neutral/60 focus-within:ring-1 ">
              <div class="grow">
                <input
                  v-model="name"
                  type="text"
                  name="pocket-name"
                  placeholder="Pocket Name"
                  class="size-full text-3" />
              </div>

              <span class="flex gap-2">
                <CloseButton />
                <RandomButton v-tippy="'No brain? Meet Button.'" @click.stop="randomizeName()" />
              </span>
            </div>

            <TagsInput
              v-model="tags"
              class="flex-col p-2 mt-6  ">
              <div class="*:text-3 flex w-full    flex-row flex-wrap justify-start gap-2">
                <template v-if="tags.length">
                  <TransitionGroup name="pop">
                    <TagsInputItem
                      v-for="tag in tags"
                      :key="tag"
                      :value="tag">
                      <TagsInputItemDelete>
                        <TagsInputItemText />
                      </TagsInputItemDelete>
                    </TagsInputItem>
                  </TransitionGroup>
                </template>

                <template v-else>
                  <TagsInputItem value="# optional">
                    <TagsInputItemText />
                  </TagsInputItem>
                  <TagsInputItem value="# tags">
                    <TagsInputItemText />
                  </TagsInputItem>
                  <TagsInputItem value="# here">
                    <TagsInputItemText />
                  </TagsInputItem>
                </template>
              </div>
              <TagsInputInput
                placeholder="optional"
                class="text-3 min-h-10 w-full rounded-md border-0 focus:border-0"
                name="pocket-tags " />
            </TagsInput>
          </div>
          <div class="relative inset-0 h-full">
            <slot />
          </div>
        </div>
      </div>
      <DialogFooter class="mt-3 justify-start">
        <button
          type="submit"
          class="btn btn-neutral px-6 btn-md !text-3 !font-medium"
          @click="submitForm">
          Create
        </button>
      </DialogFooter>
    </MotionDialogContent>
  </Dialog>
</template>

<style scoped>

</style>