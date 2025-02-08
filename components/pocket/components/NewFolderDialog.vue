<script lang="ts" setup>
import { hexoid } from 'hexoid'

const ts = useTempStore()

const name = ref()
const folderIcon = ref('formkit:folder')

const toID = hexoid()

const openIcons = ref(false)
const toggleIcons = useToggle(openIcons)

function handleSubmit() {
  const a = computed (() => {
    return name.value == '' ? generateRandomString() : name.value
  })
  const folder = {
    name: name.value,
    key: toID(),
    icon: folderIcon.value,
    type: 'pocket',
    permanent: false,
    locked: false,
  }

  const as = useAccountStore()
  as.userFolders.push(folder)

  name.value = ''
  folderIcon.value = 'formkit:folder'
  openIcons.value = false
  ts.newFolderOpen = false
}
</script>

<template>
  <Dialog :open="ts.newFolderOpen">
    <DialogContent
      class="max-h-74 pb-16 transition-all duration-400" :class="{ 'max-h-140': openIcons }"
      @pointer-down-outside="ts.newFolderOpen = false"
    >
      <DialogHeader>
        <DialogTitle>
          New Pocket Folder
        </DialogTitle>
        <DialogDescription>
          A pocket for your pockets. Stay organized as your list grows.  Can be edited later and is auto-generated if you're lazy.
        </DialogDescription>
      </DialogHeader>

      <Label>Folder Name
      </Label>
      <div class="border border-b3 rounded-md join  h-13 relative">
        <button class="btn btn-ghost items-center join-item flex pl-3 pr-9 relative h-13 w-auto  py-0 !rounded-r-none" @click="toggleIcons()">
          <icon :name="folderIcon" class="size-6 shrink-0" />
          <icon name="up-sm" class="size-5  transition-all duration-300  absolute right-1" :class="{ 'opacity-0 scale-y-0': openIcons }" />
          <icon name="down-sm" class="size-5 transition-all duration-300 scale-y-0  absolute opacity-0 right-1" :class="{ 'scale-y-100 opacity-100': openIcons }" />
        </button>

        <input
          v-model="name"
          type="text"
          name="pocket-name"
          placeholder="optional"
          class="size-full !text-3 pl-3 pr-10 join-item"
        />

        <div class="absolute right-3 border-0 flex items-center gap-2 h-13">
          <CloseButton class="btn-ghost " @click="name = ''" />
          <RandomButton class="btn-ghost " @click="name = generateRandomString()" />
        </div>
      </div>

      <div class="overflow-hidden max-h-62 transition-all w-[105%] duration-400 -ml-3" :class="{ '!max-h-0 opacity-0': !openIcons }">
        <div class="grid grid-cols-6 grid-flow-row max-h-62 w-full overflow-y-auto justify-around place-items-center">
          <label v-for="icon in icons" :key="icon" class="btn btn-ghost btn-lg px-2 size-16 grid place-items-center">
            <input
              v-model="folderIcon" type="radio" class="hidden peer" :value="icon"
            />
            <icon :name="icon" class="size-6 shrink-0" />
          </label>
        </div>
      </div>
      <DialogClose
        class=" focus:ring-neutral/80  cursor-pointer data-[state=open]:text-bc/60  shadow-xs absolute top-4.25  right-5 rounded-sm  transition-opacity hover:opacity-100 focus:ring-1 focus:outline-hidden grid place-items-center disabled:pointer-events-none hover:stroke-[1.5]"
        @click="ts.newFolderOpen = false"
      >
        <icon
          name="x-sm"
          class="size-5"
        />
        <span class="sr-only">Close</span>
      </DialogClose>

      <DialogClose as-child>
        <NeutralButton class="absolute bottom-5 px-5 right-6" @click="handleSubmit">
          Create
        </NeutralButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>