<script lang="ts" setup>
import { toast } from 'vue-sonner'

defineOptions({
  inheritAttrs: false,
})
const ps = usePocketStore()
const isDeletable = ref(false)
function handleDelete() {
  isDeletable.value ? ps.trashFolder.length = 0 : toast('Toggle the safety switch if you\re really sure, and try again.')
}
</script>

<template>
  <div class="size-full">
    <h1 class="-mt-7 px-8 pb-6">
      Trash
    </h1>
    <Separator class="ml-3 bg-b3/0" />

    <div class="flex overflow-y-auto flex-col gap-3 pl-5 pt-6 size-full">
      <div v-for="pocket in ps.trashFolder" :key="pocket.key" v-tippy="'Put Back'" class="w-full group">
        <div class="w-full flex gap-5 btn-ghost btn rounded-lg btn-lg justify-start  h-17">
          <div class="flex gap-6">
            <PocketIcon :url="pocket.icon" class="size-13 **:rounded-lg rounded-lg" />
          </div>
          <div class="grid items-between text-start">
            <h5 class="tracking-tight pt-1">
              {{ pocket.name }}
            </h5>
            <!--  <div class="grid grid-cols-3 gap-2">
              <div class="flex gap-1">
                <template v-for="(champion, i) in pocket.champions.children" :key="champion.name">
                  <Champion v-if="i < 2" :champion="champion" class="size-8" />
                </template>
              </div>
            </div> -->
          </div>
          <Grow />
          <div class=" justify-self-end ">
            <icon name="bi:arrow-return-left" class="size-6 shrink-0 opacity-20 group-hover:opacity-100" />
          </div>
        </div>
        <Separator class="group-last-of-type:hidden w-full col-span-full bg-b3/30 mt-1 group-hover:opacity-0 transition-all duration-200" />
      </div>
    </div>
  </div>

  <div class="join absolute !w-[96%] disabled:bg-domination/90 disabled:shadow-inset-xs ml-4.5 bottom-2 gap-3 !text-3 btn btn-lg bg-domination text-white items-center rounded-lg hover:bg-domination/80 grid grid-cols-[1fr_5fr] py-0">
    <div class="flex items-center gap-4 pl-14">
      <label
        class="toggle rounded-full  toggle-lg  peer items-center    absolute left-4 bg-b3 has-checked:!bg-b1  before:rounded-full  border-b3

    before:!bg-b1  has-checked:before:!bg-domination "
      >
        <input v-model="isDeletable" type="checkbox">

      </label>

      <icon v-if="isDeletable" name="clarity:unlock-line" class="size-6.5 shrink-0  text-b1 " />
      <icon v-else name="clarity:lock-line" class=" size-6.5 !text-b1 shrink-0 " />
    </div>

    <button :disabled="ps.trashFolder.length == 0" class="flex gap-4 ml-16 items-center" @click="handleDelete()">
      Delete All
    </button>
  </div>
</template>

<style scoped>

</style>