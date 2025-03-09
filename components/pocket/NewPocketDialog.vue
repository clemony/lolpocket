<script lang="ts" setup>
import { hexoid } from 'hexoid'

const emit = defineEmits(['update:name'])

const ps = usePocketStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('/img/champion/centered/1.webp')

watch(
  () => tags.value,
  (newVal) => {
    console.log(newVal)
  },
)

function clearForm() {
  name.value = ''
  console.log('💠 - clearForm - name.value:', name.value)
  selectedIcon.value = ''
  tags.value = ['']
}

function submitForm() {
  console.log('hi')
  const key = toID()
  addPocket(name.value, tags.value, selectedIcon.value, key)
  clearForm()
  console.log('pocket added!', ps.pockets)
}

defineExpose({
  clearForm,
  name,
})
</script>

<template>
  <Dialog :open="ps.newPocketOpen">
    <DialogContent @interact-outside="ps.newPocketOpen = false">
      <DialogHeader>
        <DialogTitle class="text-7 dst">
          New Pocket
        </DialogTitle>
        <DialogDescription class="text-3 mt-2 dst">
          Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <b>All items can be left blank</b> and edited later.
        </DialogDescription>
      </DialogHeader>

      <div class="[&_label]:text-3   flex flex-col justify-start gap-6  pt-4 px-0.5 h-full">
        <div class="flex flex-col  gap-1">
          <div class="flex  h-12 px-3 border-neutral/30 border w-full rounded-lg items-center shrink-0 focus-within:ring-neutral/70 focus-within:ring-1 inset-shadow-xs">
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
              <RandomButton v-tippy="'No brain? Meet Button.'" @click.stop="emit('update:name', generateShortString())" />
            </span>
          </div>

          <TagsInput
            v-model="tags"
            class="flex-col p-2 mt-6  ">
            <div class="*:text-3 flex w-full flex-row flex-wrap justify-start gap-2">
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

        <div class="z-50 flex w-full justify-end ">
          <slot name="button" />
        </div>
      </div>
      <DialogSelectIcon v-model:selected-icon="selectedIcon" @update:selected-icon="(e) => selectedIcon = e" />

      <DialogFooter>
        <button
          type="submit"
          class="btn btn-neutral btn-lg"
          @click="submitForm">
          Create
        </button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>