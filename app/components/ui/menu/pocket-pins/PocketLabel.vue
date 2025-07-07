<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey: string
}>()
const ps = usePocketStore()
const ix = useIndexStore()

const pocket = computed (() => ps.pockets.find(p => p.key == pocketKey) || null)
</script>

<template>
  <button class="w-full h-12  btn btn-ghost hover:bg-b3/40 !justify-start !px-2" @click="navigateTo(`/pocket/${pocket.key}`)">
    <LazyPocketIcon :image="pocket.icon" class="size-8 rounded-full shrink-0" hydrate-on-visible />

    <div class="flex flex-col items-start justify-between w-full overflow-hidden">
      <span class="truncate text-nowrap font-medium text-3 text-start  w-full">
        {{ pocket.name }}
      </span>

      <p class="flex gap-1 text-nowrap flex-nowrap text-bc/60 text-2 ">
        <span v-if="pocket?.champions[0]" class="">
          {{ ix.champNameByKey(pocket.champions[0]) }}
        </span>

        <span v-if="pocket?.roles[0] && pocket?.roles[0] != 'all'" class="truncate flex gap-1 italic text-nowrap">
          <span v-if="pocket?.champions[0]">
            -
          </span>
          {{ pocket.roles[0] }}
        </span>
      </p>
    </div>
  </button>
</template>