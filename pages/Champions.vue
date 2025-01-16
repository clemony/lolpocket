<script setup lang="ts">
  import { getQuote } from 'shared/data/champion/quotes'
  import { categories } from 'shared/data/champion/championCategories'

  import { types } from 'shared/data/champion/championRoles'
  const ts = useTempStore()

  const a = Object.values(types)[3]
  console.log('💠 - a:', a)

  const b = computed(() => {
    const c = []
    a.forEach((type) => {
      c.push(type.id)
    })
    return c
  })
  console.log('💠 - b - b:', b.value)

  watch(
    () => ts.browseChampionTypes,
    (newVal) => {
      console.log('💠 - newVal:', newVal)
    }
  )
</script>

<template>
  <NuxtLayout
    name="list-layout"
    title="Champions">
    <template #1>
      <div
        class="text-4 drop-shadow-text h-28 items-center px-2 font-serif tracking-wide last-of-type:text-right"
        v-html="getQuote()"></div>
      <ChampionSearch />

      <h2 class="drop-shadow-text mt-7 px-2 tracking-tight">Champion Classes</h2>

      <!-- ItemStatsList /> -->
      <CheckboxFilterList
        :source="categories"
        @update:model="(e) => (ts.browseChampionClass = e)" />
    </template>

    <template #2>
      <RadioFilterList
        bg
        :types="b"
        @update:model="(e) => (ts.browseChampionTypes = e)"
        class="ml-0.75" />
      <div class="max-h-inherit mt-2 h-[calc(100vh-13.3rem)] overflow-auto">
        <ChampionList class="gap-4 px-1 pt-3" />
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
