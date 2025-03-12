<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const ds = useDataStore()
const pocket = ref(props.pocket)
</script>

<template>
  <div class="h-full w-full relative overflow-y-auto ">
    <div class="  grid grid-flow-row auto-cols-auto select-none h-fit  grid-cols-[repeat(auto-fill,minmax(68px,1fr))]  pr-10 absolute top-0 left-0   pt-2 pb-6 inset-0  justify-start gap-4  overflow-y-auto">
      <LazyChampion
        v-for="champion in ds.champions"
        :key="champion.apiname"
        :champion="champion" class="has-checked:hidden size-22 brightness-110 has-checked:scale-85  contrast-90 has-checked:rounded-xl  transition-all duration-300"
      >
        <input
          v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden"
        />
      </LazyChampion>
    </div>
  </div>
</template>

<style scoped>

</style>