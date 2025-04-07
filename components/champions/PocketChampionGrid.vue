<script lang="ts" setup>
import { LayoutGroup } from 'motion-v'

const props = defineProps<{
  pocket: pocket
}>()

const ds = useDataStore()
const cs = useChampStore()
const pocket = ref(props.pocket)

const champions = ref([...ds.champions])
</script>

<template>
  <LayoutGroup>
    <Motion
      as-child
      :layout="true"
      :transition="{
      }">
      <AnimatePresence as="div" mode="popLayout" :layout="true" :unwrap-element="true" multiple class="  grid grid-flow-row auto-cols-auto select-none h-fit grid-cols-[repeat(auto-fill,minmax(68px,1fr))]  px-18 w-full  pt-2 pb-6 inset-0  justify-start gap-2 ">
        <template
          v-for="champion in ds.champions"
          :key="champion.id">
          <Champion
            v-if="!pocket.champions.children.includes(champion)"
            :champion="champion" class="aspect-square   w-full h-auto object-cover ">
            <slot />

            <input
              v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden" />
          </Champion>
        </template>
      </AnimatePresence>
    </Motion>
  </LayoutGroup>
</template>

<style scoped>

</style>