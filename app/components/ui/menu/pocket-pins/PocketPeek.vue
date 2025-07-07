<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey?: string
}>()

const ps = usePocketStore()

const pocket = computed<Pocket | null>(() => {
  if (!pocketKey)
    return null

  return ps.pockets.find(p => p.key == pocketKey)
})
const ix = useIndexStore()
</script>

<template>
  <NavigationMenuItem class="w-full !justify-self-start self-start   min-w-full  max-w-full flex z-1">
    <NavSimpleTrigger class="flex justify-start h-12 w-full gap-4 z-1">
      <LazyPocketIcon :image="pocket.icon" class="size-9 rounded-full shrink-0" hydrate-on-visible />

      <span class="truncate text-nowrap">
        {{ pocket.name }}
      </span>
    </NavSimpleTrigger>

    <LazyNavigationMenuContent class="bg-b1 z-2 p-3 w-18 grid gap-3 grid grid-cols-1 gap-2 *:size-12.5 h-136 place-items-center *:rounded-full !origin-right">
      <div v-if="pocket.champions[0]" class="grid place-items-center overflow-hidden shadow-sm drop-shadow-sm ">
        <ChampionIcon :id="ix.champIdByKey(pocket.champions[0])" class="size-12" />
      </div>

      <Placeholder v-else />

      <div class="place-items-center grid">
        <component :is="`i-roles-${pocket.roles[0].toLowerCase() ?? 'all'}`" class="size-6" />
      </div>

      <Img v-if="pocket.runes[0].keystone" :img="`/img/runes/${ix.runeKeyById(pocket.runes[0].keystone)}.webp`" :alt="ix.runeNameById(pocket.runes[0].keystone).toString()" class="size-12 rounded-full" />

      <Placeholder v-else class="grid place-items-center ">
        <i-lol-rune-icon class="text-bc" />
      </Placeholder>

      <template v-for="i in 6">
        <Item v-if="pocket.items[0].items[i - 1]" :id="pocket.items[0].items[i - 1]" :key="i" :class="{ 'row-start-2': i <= 3, 'row-start-3': i < 3 }" />

        <Placeholder v-else-if="i < 7" :key="`p${i}`" />
      </template>
    </LazyNavigationMenuContent>
  </NavigationMenuItem>
</template>