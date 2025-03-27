<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const ds = useDataStore()
const cs = useChampStore()
const pocket = ref(props.pocket)
</script>

<template>
  <div class="h-full w-full relative overflow-y-auto ">
    <LayoutGroup>
      <Motion
        as-child
        :layout="true"
        :transition="{
        }">
        <AnimatePresence as="div" mode="popLayout" :layout="true" :unwrap-element="true" multiple class="  grid grid-flow-row auto-cols-auto select-none h-fit  grid-cols-[repeat(auto-fill,minmax(68px,1fr))]  px-18 absolute top-0 left-0   pt-2 pb-6 inset-0  justify-start gap-4  overflow-y-auto">
          <template
            v-for="champion in ds.champions"
            :key="champion.apiname">
            <Champion
              v-if="!pocket.champions.children.includes(champion)"
              :champion="champion" class="   size-22   ">
              <slot />

              <input
                v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden" />
            </Champion>
          </template>
        </AnimatePresence>
      </Motion>
    </LayoutGroup>
  </div>
</template>

<style scoped>

</style>