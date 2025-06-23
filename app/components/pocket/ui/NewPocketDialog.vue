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
</script>

<template>
  <Dialog :open="ps.newPocketOpen">
    <MotionDialogContent class="!rounded-xl w-110 pt-8 pb-6 px-7" @interact-outside="ps.newPocketOpen = false">
      <DialogHeader>
        <DialogTitle class="text-6 dst">
          New Pocket
        </DialogTitle>

        <DialogDescription class="leading-6 mt-1 dst mb-5">
          Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <span class="font-semibold">All items can be left blank</span> and edited later.
        </DialogDescription>
      </DialogHeader>

      <div class=" grid field-box  gap-4 size-full">
        <IconPopover v-model:selected-icon="selectedIcon" side="right" :side-offset="70" align="start" :align-offset="-136" class="size-30 place-self-center cursor-pointer" @update:selected-icon="(e) => selectedIcon = e" />

        <div class="[&_label]:text-3  w-full flex flex-col justify-start gap-6  pt-4 px-0.5 h-full">
          <div class="flex flex-col  gap-1">
            <div class="input w-full shrink-0">
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

                <RandomButton v-tippy="'No brain? Meet Button.'" @click.stop="name = generateName()" />
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

      <DialogFooter class="mt-1 justify-start">
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