<script lang="ts" setup>
const is = useItemStore()
const ds = useDataStore()

const item = ref(is.selectedItem || getRandom(ds.SRitems))
onMounted(() => {
  item.value = is.selectedItem != null ? is.selectedItem : is.selectedItem = getRandom(ds.SRitems)
})

watch(
  () => is.selectedItem,
  (newVal) => {
    item.value = newVal
  },
)
</script>

<template>
  <label v-tippy="`${item.name} Data`" class="btn bg-b1 btn-lg px-2 hover:bg-b2/50">

    <div class="h-full w-auto -mr-4 -ml-5 items-center flex relative !aspect-square justify-self-end justify-center">
      <icon name="right-sm" class="transition-all  shrink-0 duration-300 size-6" :class="{ 'rotate-180': is.itemPaneOpen }" />
    </div>
    <input v-model="is.itemPaneOpen" type="checkbox" class="peer hidden" />
    <img
      :key="item.name"
      :src="`/img/item/${item.id}.webp`"
      :alt="`${item.name} Image`"
      class="border-b3/90 shadow-warm pointer-events-none size-10 rounded-lg border" />

  </label>
</template>