<script setup lang="ts">

const props = defineProps<{
  pocket: pocket
}>()

const ds = useDataStore()

const pocket = ref(props.pocket)

const champions = computedAsync (() => {
  return [...ds.champions]
})

const champs = computedAsync(() => {
  return pocket.value.champions.children
})

const quote = getQuote().replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<i>/g, ' ').replace(/<\/i>/g, ' ')
</script>

<template>
  <div class="size-full px-12 overflow-y-auto ">

          <PocketHeader title="Champions" :pocket="pocket" class="">

      <p class="text-4 ml-10.5 dst font-serif **:!text-nowrap">
        {{ quote }}
      </p>
          </PocketHeader>

    <div class="grid    inset-0 grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(70px,1fr))] justify-center gap-4   pt-10 pb-7">
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
</template>

<style scoped></style>
