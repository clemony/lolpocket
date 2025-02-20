<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()
const folderMain = ref()

watch(
  () => folderMain.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const emit = defineEmits(['update:component'])

const activePocket = ref(props.pocket)

onMounted (async () => {
  await props.pocket
  activePocket.value = props.pocket
})
</script>

<template>
  <div class="grid grid-rows-[auto_200px] w-full h-full   pr-4">
    <div>
      <div class="pb-5  flex gap-2 items-center">
        <button @click="emit('update:component', null)" v-tippy="'Back to Menu'" class="btn btn-ghost size-10 -ml-0.5">
          <icon name="formkit:arrowleft" class="size-6 shrink-0" />
        </button>
        <h1>Browse Pockets</h1>
      </div>

      <div class=" mt-1 rounded-xl  inset-shadow-xxs   py-1">
        <ul
          v-for="folder in defaultFolders"
          v-bind="$attrs" :key="folder.key"
          class="menu h-inherit !w-full mx-0 z-0 px-0 **:text-3 **:[&_svg]:shrink-0"
        >
          <li class="flex gap-3 !w-full">
            <details
              @toggle="folderMain = $event.newState"
            >
              <summary class="capitalize flex gap-3 overflow-auto w-full after:hidden items-center hover:bg-b2/60 pr-2 flex-nowrap">
                <icon
                  :name="folder.icon"
                  class="size-5 shrink-0"
                />
                <span class="w-full truncate text-3 fontmedium"> {{ folder.name }}</span>
                <span v-if="folder.items.length" class="badge badge-neutral text-2 badge-sm">{{ folder.items.length }}</span>
                <PlusMinusExpand :check="folderMain == 'open' ? true : false" />
              </summary>
              <ul>
                <li
                  v-for="item in folder.items"
                  :key="item.key"
                  class="!mr-5"
                >
                  <label class="capitalize flex w-full after:hidden items-center hover:bg-b2/60 flex-nowrap  text-3 font-medium has-checked:bg-b2/40 rounded-lg">
                    <input v-model="activePocket" type="radio" class="peer hidden" name="active-pocket" :value="item" />
                    <PocketIcon
                      :image="item.icon"
                      class="shrink-0 size-7"
                    />
                    <span class="w-full truncate"> {{ item.name }}</span>

                  </label>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <Separator />
      <MiniPocket :pocket="activePocket" class="my-6" />
    </div>
  </div>
</template>

<style scoped></style>
