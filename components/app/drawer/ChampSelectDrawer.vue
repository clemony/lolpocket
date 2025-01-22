<script lang="ts" setup>
  const ts = useTempStore()
  const ps = usePocketStore()
  const ds = useDataStore()
  const route = useRoute()
  const pocket = getPocket(route.params.pocketKey)

  const champions = computedAsync (() => {
  [...ds.champions]
  })

  const champs = computedAsync(() => {
    return pocket.champions[0].champions
  })


</script>

<template>
  <div class="drawer drawer-end shadow-pretty">
    <input
      id="champ-select-drawer"
      v-model="ts.champSelectDrawerTrigger"
      type="checkbox"
      class="drawer-toggle" />

    <div class="drawer-side z-60">
      <label
        for="champ-select-drawer"
        aria-label="close sidebar"
        class="drawer-overlay !bg-black/70"></label>

      <div class="backdrop-blur-md min-h-full max-h-screen bg-b1 h-screen w-150 overflow-hidden rounded-l-xl inset-shadow-sm relative px-9 py-7 [&_h2]:tracking-tight [&_p]:mt-2">
        <h1 class="tracking-tight drop-shadow-text">Champion Select</h1>
        <p >Choose a <b>champion</b>, or multiple, for this build to apply to. Specific champions are <i>optional</i>. Instead, you can choose a general <b>role</b> within the next section.</p>

        <transition-slide group class="min-h-14 mt-6 mb-3 px-1 flex py-1 flex-wrap gap-3 bg-b2/20  items-center ring-1 ring-offset-2 ring-offset-b1/90 ring-b3 rounded-lg transition-all duration-300">
          <Champion @click="removeChamp(champion, pocket)"
            v-for="champion in champs"
            :champion="champion" class="size-12  aspect-square"/>
            </transition-slide>


        <div class="grid relative grid-cols-5 pt-2 px-1 gap-4  h-[calc(100%-9rem)] overflow-auto ">
          <Champion
            v-for="champion in champions"
            :champion="champion" class="has-checked:grayscale has-checked:opacity-70 brightness-110 has-checked:scale-85  contrast-90 has-checked:rounded-xl  transition-all duration-300 ">
          <input type="checkbox" :value="champion" class="hidden" v-model="pocket.champions[0].champions"
          </Champion>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
