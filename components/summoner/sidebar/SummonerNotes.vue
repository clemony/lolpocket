<script lang="ts" setup>
import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const props = defineProps<{
  tabs: string
}>()

const as = useAccountStore()
console.log('💠 -  as.userNotes:', as.userNotes)

const noteHeart = ref(false)
const toggleHeart = useToggle(noteHeart)

function clearNotes() {
  as.userNotes = []
}
</script>

<template>
  <div class=" w-full max-w-full pb-6 overflow-hidden h-[88.5vh]  px-3">
    <div class="flex w-full gap-2 p-3 items-center">
      <p class="capitalize grow font-medium">
        <SummonerName />'s Notes
      </p>
      <button v-tippy="'New Note +'" class="btn btn-sm btn-square" @click="createNote()">
        <icon name="add-sm" class="shrink-0 size-5 dst" />
      </button>

      <button v-tippy="'Delete ALL Notes'" class="btn btn-sm btn-square" @click="clearNotes()">
        <icon name="trash" class="shrink-0 size-4 dst" />
      </button>
    </div>
    <Separator class="!my-0 shadow-xxs" />
    <transition-slide :offset="[-16, 0]" class="size-full overflow-hidden">
      <div v-if="props.tabs == 'notes'" class="inset-0 top-16 left-0 absolute flex flex-col overflow-y-auto px-3">
        <ul class="list !p-0 w-full px-3">
          <transition-slide group class="w-full">
            <li v-for="(note, i) in as.userNotes" :key="i" class="w-full flex flex-col  border-b border-b-b3  pt-3 pb-5 relative shadow-xs ">
              <div class="w-full list-row pt-3 pb-4 px-3 inset-shadow-xxs">
                <div>
                  <img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                </div>
                <div>
                  <div>
                    {{ note.date }}
                  </div>
                  <EditableRoot :default-value="note.title" class="*:flex *:items-center *:max-h-9 flex-nowrap max-w-60 overflow-hidden">
                    <EditableArea class="*:leading-none text-3 font-semibold opacity-60">
                      <EditablePreview class="mr-2" />
                      <EditableInput class="mr-2" />
                      <EditableEditTrigger class="pt-0.5">
                        <icon name="mingcute:edit-line" class="opacity-85 size-3.5 shrink-0" />
                      </EditableEditTrigger>
                    </EditableArea>
                  </EditableRoot>
                </div>

                <button class="btn btn-square btn-ghost -mr-2  btn-sm">
                  <icon name="x-sm" class="size-7  dst text-bc/40 shrink-0" />
                </button>

                <label class="swap swap-flip btn btn-square btn-ghost btn-sm">
                  <!-- this hidden checkbox controls the state -->
                  <input v-model="note.heart" type="checkbox" @change="toggleHeart()" />

                  <icon name="mdi:heart" class="size-6 swap-on dst -mb-px text-bc/40 shrink-0" />

                  <icon name="mdi:heart-outline" class="size-6 swap-off dst -mb-px text-bc/40 shrink-0" />
                </label>
              </div>

              <textarea v-model="note.content" class="textarea text-2 py-1 px-2 bg-gradient-to-br from-bg-b2/20 text-bc/80 to-b2/30 p-0 self-center w-[93%]"></textarea>
            </li>
          </transition-slide>
        </ul>
      </div>
    </transition-slide>
  </div>
</template>

<style scoped>

</style>