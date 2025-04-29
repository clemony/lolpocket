<script lang="ts" setup>
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'

const props = defineProps<{
  pocket: pocket
}>()

const ds = useDataStore()
const pocket = ref(props.pocket)
</script>

<template>
  <LayoutGroup>
    <motion.div>
      <AnimatePresence as="div" mode="popLayout" :layout="true" :unwrap-element="true" multiple class="  grid grid-flow-row auto-cols-auto select-none h-fit grid-cols-[repeat(auto-fill,minmax(70px,1fr))]  px-18 w-full  pt-2 pb-3 inset-0  justify-start gap-3 ">
        <template
          v-for="champion in ds.champions"
          :key="champion.id">
          <Champion
            v-if="!pocket.champions.children.includes(champion)"
            :champion="champion" class="aspect-square hover:ring hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1   w-full h-auto object-cover ">
            <slot />

            <input
              v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden" />
          </Champion>
        </template>
      </AnimatePresence>
    </motion.div>
  </LayoutGroup>
</template>

<style scoped>

</style>