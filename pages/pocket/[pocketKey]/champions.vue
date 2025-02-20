<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'champions',
  alias: '/pocket/:pocketKey',
})

const ds = useDataStore()

const pocket = ref(props.pocket)


const Champion = defineAsyncComponent(() => import('components/champions/Champion.vue'))

const quote = getQuote().replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<i>/g, ' ').replace(/<\/i>/g, ' ')
</script>

<template>
  <div class="size-full px-12 overflow-y-auto ">
    <PocketHeader title="Champions" :pocket="pocket" class="flex">
      <p class="text-4 ml-10.grow flex dst pl-10 w-full font-serif **:!text-nowrap">
        {{ quote }}
      </p>

      <transition-slide group class="flex justify-self-end justify-end gap-3 -mt-0 w-fit">
        <Champion v-for="champion in pocket.champions.children" :key="champion.apiname" :champion="champion" class="!rounded-full size-16 **:rounded-full z-0 group cursor-pointer" @click="removeChamp(champion, pocket)">
          <icon name="x-solid" class="absolute -top-0.5 -right-0.5 bg-b1 opacity-0 group-hover:opacity-100 transition-all duration-300 size-5 ring ring-b1 z-10" />
        </Champion>
      </transition-slide>
    </PocketHeader>

    <div class="grid    inset-0 grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(70px,1fr))] justify-center gap-4   pt-10 pb-7">
     
     <Suspense>
      <Champion
        v-for="champion in ds.champions"
        :key="champion.apiname"
        :champion="champion" class="has-checked:grayscale has-checked:opacity-70 brightness-110 has-checked:scale-85  contrast-90 has-checked:rounded-xl  transition-all duration-300"
      >
        <input
          v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden"
        />
      </Champion>


      <template #fallback>
        <Skeleton class="size-full rounded-lg"  />
      </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped></style>
