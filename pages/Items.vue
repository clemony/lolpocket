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
  <main class="h-inherit w-inherit">
    <LayoutSpacer class="!h-30" />
    <div class="flex h-full gap-12 px-12">
      <div class="max-h-inherit flex h-[86%] w-1/4 flex-col gap-8">
        <h1 class="!text-9 drop-shadow-text px-2 text-right tracking-tight">Items</h1>
        <div class="text-4 drop-shadow-text flex h-28 items-center px-2 text-right font-serif tracking-wide">
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

        <h2 class="drop-shadow-text mt-7 px-2 text-right tracking-tight">Item Stats</h2>
        <ItemStatsList />
        <span class="h-1 w-full" />
        <CheckboxFilterList
          :source="categories"
          @update:model="(e) => (ts.browseItemCats = e)" />
      </div>

      <div class="flex w-3/4 flex-col justify-start gap-4">
        <RadioFilterList
          :types="types"
          @update:model="(e) => (ts.browseItemTypes = e)" />
        <Card
          class=".item-results mt-2 h-[80%] overflow-y-scroll px-8"
          as-child
          id="item-results"
          ref="item-results">
          <ItemList class="pt-9" />
        </Card>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
