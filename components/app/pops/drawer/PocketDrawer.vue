<script lang="ts" setup>
import { hexoid } from 'hexoid'

const ts = useTempStore()
const ps = usePocketStore()
const as = useAccountStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('#000000')
const iconColor = ref('#FFFFFF')
const pocket = ref(ts.drawerPocket)
watch(
  () => bgColor.value,
  (newVal) => {
    bgColor.value = newVal
  },
  { immediate: true },
)

watch(
  () => iconColor.value,
  (newVal) => {
    iconColor.value = newVal
  },
  { immediate: true },
)

watch(
  () => tags.value,
  (newVal) => {
    console.log(newVal)
  },
)

function clearForm() {
  name.value = ''
  console.log('💠 - clearForm - name.value:', name.value)
  bgColor.value = '#000000'
  iconColor.value = '#FFFFFF'
  selectedIcon.value = 'teenyicons:folder-outline'
  tags.value = ['']
}

function submitForm() {
  console.log('hi')
  const key = toID()
  addPocket(name.value, tags.value, selectedIcon.value, bgColor.value, iconColor.value, key)
  clearForm()
  console.log('pocket added!', ps.pockets)
}

function updatePocket() {
  const pocket = ref(ts.drawerPocket)

  pocket.value.name = name.value
  pocket.value.tags = [...tags.value]
  pocket.value.bgColor = bgColor.value
  pocket.value.iconColor = iconColor.value
  pocket.value.icon = selectedIcon.value
  clearForm()
}

onMounted(() => {
  if (ts.drawerPocket) {
    name.value = pocket.value.name
    tags.value = pocket.value.tags
    bgColor.value = pocket.value.bgColor
    iconColor.value = pocket.value.iconColor
    selectedIcon.value = pocket.value.icon
  }
  else {
    name.value = ''
  }
})

defineExpose({
  clearForm,
  name,
})
</script>

<template>
  <div class="drawer drawer-end shadow-pretty">
    <input
      id="pocket-drawer"
      v-model="ts.pocketDrawerTrigger"
      type="checkbox"
      class="drawer-toggle"
    />

    <div class="drawer-side z-60">
      <label
        for="pocket-drawer"
        aria-label="close sidebar"
        class="drawer-overlay !bg-black/70"
      ></label>

      <div class="backdrop-blur-md min-h-full max-h-screen bg-b1 w-140 overflow-hidden rounded-l-xl inset-shadow-sm relative px-9 py-7 [&_h2]:tracking-tight [&_p]:mt-2">
        <div v-if="ts.drawerPocket">
          <h2>Edit Pocket</h2>
          <p>Some mistakes you <em>can</em> make twice. Through trying times of intense struggle, you can <strong>update your pocket's details here</strong>.</p>
        </div>
        <div v-else>
          <h2>New Pocket</h2>
          <p>Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <b>All items can be left blank</b> and edited later.</p>
        </div>
        <div class="[&_label]:text-3 relative flex h-screen max-h-screen w-full flex-col justify-start gap-6 overflow-clip pt-4 px-0.5">
          <Label>Pocket Name</Label>

          <div class="join relative">
            <Input
              v-model="name"
              type="text"
              name="pocket-name"
              placeholder="optional"
              class="join-item text-3 h-10 rounded-r-none border-r-0"
            />

            <Button
              variant="ghost"
              size="icon"
              type="button"
              class="group absolute top-1 right-12 aspect-square size-8! overflow-hidden border-l-0"
            >
              <icon
                name="teenyicons:x-small-outline"
                class="size-6 shrink-0 object-cover opacity-40 group-hover:opacity-100"
              />
            </Button>
            <Button
              variant="outline"
              size="sm"
              type="button"
              class="group join-item border-l-none relative h-10 rounded-l-none"
              @click.stop="name = generateRandomString()"
            >
              <icon
                name="qlementine-icons:shuffle-16"
                class="size-4 shrink-0"
              />

              <p class="text-2 absolute -top-8 -right-2 z-30 flex translate-y-1 flex-nowrap px-2 py-1 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                No brain? Meet button.
              </p>
            </Button>
          </div>

          <Label class="mt-3">Tags</Label>

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

          <IconPicker
            v-model:selected-icon="selectedIcon"
            v-model:bg-color="bgColor"
            v-model:icon-color="iconColor"
          />

          <div class="z-50 mt-2 flex w-full justify-end">
            <div>
              <Button
                v-if="!ts.drawerPocket"
                variant="neutral"
                size="lg"
                type="submit"
                class=""
                @click="submitForm"
              >
                Create
              </Button>

              <Button
                v-else
                variant="neutral"
                type="button"
                size="md"
                class=""
                @click="updatePocket"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
