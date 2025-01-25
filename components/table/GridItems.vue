<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      name: string
      key: string
      items: {
        items: Item[]
      }
      icon: string
      pinned: any
    }
    api: any
    node: any
  }
}>()

const as = useAccountStore()
const pocket = computed(() => {
  return getPocket(props.params.data.key)
})

const starredItems = computed(() => {
  return pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
})

console.log('this', starredItems.value[0])

const box = computed(() => {
  return 6 - starredItems.value.length
})
</script>

<template>
  <div class="flex items-center">
    <PocketMenu
      :pocket="pocket"
      type="context"
      content-class="flex size-full items-center gap-2 overflow-y-clip overflow-x-scroll px-1"
    >
      <template
        v-for="(item, index) in starredItems"
        :key="index"
      >
        <button
          v-if="index < 5"
          class="border-b3 size-14 overflow-hidden rounded-lg border shadow-xs"
        >
          <img
            :src="`/img/items/${item.id}.webp`"
            :index="index"
          />
        </button>
      </template>
      <template v-if="starredItems.length < 6">
        <Placeholder
          v-for="index in box"
          :key="index"
          class="size-14 rounded-lg"
        />
      </template>
      <template #first>
        <CmOptionItems :pocket="pocket" />
      </template>
    </PocketMenu>
  </div>
</template>

<style scoped></style>
