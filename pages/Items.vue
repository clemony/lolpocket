<script setup lang="ts">
  import { categories } from 'shared/data/item/itemCategories'

  import { types } from 'shared/data/item/itemTypes'

  const ts = useTempStore()
  const ds = useDataStore()

  const items = computed(() => [...(ds.SRitems || [])])

  const captions = computed(() => {
    let a = items.value.map((a) => a.caption ?? '')
    a = a.filter((caption) => caption != '')
    let i = Math.floor(Math.random() * a.length)
    return a[i]
  })
  console.log('💠 - captions - captions:', captions.value)
  watch(
    () => captions.value,
    (newVal) => {
      console.log('💠 - newVal:', newVal)
    }
  )

  const sortItemsAZ = ref(0)
  const sortPrice = ref(0)
  onMounted(() => {})
</script>

<template>
  <NuxtLayout
    name="list-layout"
    title="Items">
    <template #1>
      <div class="text-4 drop-shadow-text flex h-28 items-center px-2 font-serif tracking-wide">
        {{ captions }}
      </div>

      <ItemSearch />

      <div class="join w-fit shadow-xs">
        <ToggleStateButton
          class="join-item rounded-r-none"
          @click.stop
          v-model:model="sortItemsAZ"
          icon1="qlementine-icons:sort-alpha-asc-16"
          icon2="qlementine-icons:sort-alpha-desc-16"
          @update:model="(v) => (ts.sortItemsAZ = v)" />
        <ToggleStateButton
          class="join-item rounded-l-none"
          @click.stop
          :model="sortPrice"
          icon1="bi:sort-numeric-down"
          icon2="bi:sort-numeric-up"
          :iconSize="7"
          @update:model="(v) => (ts.sortPrice = v)" />
      </div>

      <h2 class="drop-shadow-text mt-7 px-2 tracking-tight">Item Stats</h2>
      <ItemStatsList />
      <span class="h-1 w-full" />
      <CheckboxFilterList
        :source="categories"
        @update:model="(e) => (ts.browseItemCats = e)" />
    </template>

    <template #2>
      <RadioFilterList
        :types="types"
        @update:model="(e) => (ts.browseItemTypes = e)"
        class="pl-2" />
      <div
        class=".item-results max-h-inherit h-[calc(100vh-12.8rem)] overflow-auto"
        as-child
        id="item-results"
        ref="item-results">
        <ItemList class="pt-5" />
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
