<script lang="ts" setup>
const ts = useTempStore()
const ds = useDataStore()
const route = useRoute()
const pocket = getPocket(route.params.pocketKey)

const champions = computedAsync (() => {
  return [...ds.champions]
})

const champs = computedAsync(() => {
  return pocket.champions.children
})
</script>

<template>
  <div class="inset-0 relative h-full grid grid-rows-[1fr_4fr] ">
    <div class="">
      <h1 class="tracking-tight drop-shadow-text">
        Champion Select
      </h1>
      <p class="mt-2">
        Choose a <b>champion</b>, or multiple, for this build to apply to. Specific champions are <i>optional</i>. Instead, you can choose a general <b>role</b> within the next section.
      </p>

      <transition-slide group class="min-h-14 mt-6 mb-3 px-1 flex py-1 flex-wrap gap-3 bg-b2/20  items-center ring-1 ring-offset-2 ring-offset-b1/90 ring-b3 rounded-lg transition-all duration-300">
        <Champion
          v-for="champion in champs"
          :key="champion.apiname"

          :champion="champion"
          class="size-12  aspect-square" @click="removeChamp(champion, pocket)"
        />
      </transition-slide>
    </div>
    <div class="size-full relative">
      <div class="grid absolute  grid-cols-5 pt-2 pb-3 px-0.5 gap-1 inset-0 overflow-auto max-h-full object-contain">
        <Champion
          v-for="champion in champions"
          :key="champion.apiname"
          :champion="champion" class="has-checked:grayscale has-checked:opacity-70 brightness-110 has-checked:scale-85  contrast-90 has-checked:rounded-xl  transition-all duration-300"
        >
          <input
            v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden"
          />
        </Champion>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
