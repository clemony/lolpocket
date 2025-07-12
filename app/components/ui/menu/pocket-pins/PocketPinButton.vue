<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey: string | null
}>()
const ps = usePocketStore()
const ix = useIndexStore()

const pocket = computed (() => ps.pockets.find(p => p.key == pocketKey) ?? null)
</script>

<template>
  <LazyPocketIcon v-if="pocket?.icon" :url="pocket?.icon" img-class="  mt-0 scale-100 -mt-5" hydrate-on-visible />

  <div v-else class="bg-linear-to-br from-n1/80 to-n1 py-1.5 px-2 size-full ">
    <p class="justify-end flex gap-2 text-nc font-semibold items-center font-mono text-2 w-full">
      <span> LP</span>
    </p>
  </div>

  <div class="flex bg-black/60 backdrop-blur-sm **:text-white/98 px-2 group-hover/link:translate-y-0 transition-all duration-250 py-1 flex-col absolute items-start justify-between w-full gap-1 overflow-hidden translate-y-1/2 ease-in-out">
    <p class=" text-1 text-start transition-all duration-350 leading-4 text-balanced group-hover/link:line-clamp-2 group-hover/link:line-clamp-2 text-nowrap flex-nowrap  ease-in-out truncate  group-hover/link:text-wrap  w-full max-w-full">
      {{ pocket.name }}
    </p>

    <div class="w-full flex gap-2 items-center  px-1">
      <div v-if="pocket.champions[0]" :class="cn('rounded-lg size-4 !grid !place-items-center   overflow-hidden')">
        <ChampionIcon :id="ix.champIdByKey(pocket.champions[0])" class="size-full rounded-lg" />
      </div>

      <span v-if="pocket.champions[0]" class="text-0 italic grow">
        {{ ix.champNameByKey(pocket.champions[0]) }}
      </span>
      <!-- role -->

      <component :is="`i-roles-${pocket.roles[0].toLowerCase() ?? 'all'}`" :class="cn('!size-2.5 text-nc shrink-0')" />

      <span v-if="!pocket.champions[0]" class="text-0 italic capitalize">
        {{ pocket.roles[0] == 'all' ? 'All Positions' : pocket.roles[0] }}
      </span>
    </div>
  </div>
</template>