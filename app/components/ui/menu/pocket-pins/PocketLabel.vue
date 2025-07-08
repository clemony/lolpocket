<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey: string
}>()
const ps = usePocketStore()
const ix = useIndexStore()

const pocket = computed (() => ps.pockets.find(p => p.key == pocketKey) || null)
</script>

<template>
  <NavigationMenuLink class="group/link w-full grid items-end h-13 overflow-hidden" @click="navigateTo(`/pocket/${pocket.key}`)">
    <div class="btn btn-ghost h-12 !justify-start !px-2 w-full overflow-hidden">
      <LazyPocketIcon size="sm" :image="pocket.icon" class="size-8 p-0 btn btn-neutral rounded-full shrink-0" hydrate-on-visible />

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
    </div>
  </NavigationMenuLink>
</template>