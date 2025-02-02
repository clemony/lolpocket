<script lang="ts" setup>
import { hexoid } from 'hexoid'

const ts = useTempStore()
const ps = usePocketStore()
const as = useAccountStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('/img/champion/centered/-1.webp')

const emit = defineEmits(['update:name'])


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
  <Sheet :open="ts.pocketDrawerTrigger">
    <PocketSheetContent title="New Pocket" description="Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <b>All items can be left blank</b> and edited later." @update:clicked="ts.pocketDrawerTrigger = false">
      <template #name>
        <input
          v-model="name"
          type="text"
          name="pocket-name"
          placeholder="optional"
          class="size-full"
        />
      </template>

      <template #name-buttons >
        <CloseButton  />
        <RandomButton v-tippy="'No brain? Meet Button.'" @click.stop="emit('update:name', generateRandomString())"  />
      </template>

      <template #tags>
        <TagsInput
          v-model="tags"
          class="flex-col p-2"
        >
          <div class="*:text-3 flex w-full flex-row flex-wrap justify-start gap-2">
            <template v-if="tags.length">
              <TransitionGroup name="pop">
                <TagsInputItem
                  v-for="tag in tags"
                  :key="tag"
                  :value="tag"
                >
                  <TagsInputItemText />
                  <TagsInputItemDelete />
                </TagsInputItem>
              </TransitionGroup>
            </template>

            <template v-else>
              <TagsInputItem value="# your">
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
            name="pocket-tags "
          />
        </TagsInput>
      </template>

      <SelectIcon v-model:selected-icon="selectedIcon" @update:selected-icon="(e) => selectedIcon = e" />

      <template #button>
        <Button
          variant="neutral"
          size="lg"
          type="submit"
          class=""
          @click="submitForm"
        >
          Create
        </Button>
      </template>
    </PocketSheetContent>
  </Sheet>
</template>

<style scoped></style>
