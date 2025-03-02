<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
definePageMeta({
  name: 'complete',
})
const ts = useTempStore()
const downloadClicked = refAutoReset(false, 1000)

const isMenuOpen = ref(true)
const isSettingsOpen = ref(true)
</script>

<template>
  <div class="h-full w-full grid overflow-hidden transition-all  duration-400  relative px-14  py-8 " :class="{ 'justify-center grid-cols-[30px_1fr_80px]': !isMenuOpen, 'grid-cols-[370px_1fr_80px]': isMenuOpen }">
    <div class="flex flex-nowrap flex-col gap-9 items-center transition-all  *:transition-all *:duration-400 duration-400" :class="{ '*:not-first:opacity-0': !isMenuOpen }">
      <div class="flex items-center transition-all duration-400 w-full gap-8" :class="{ 'justify-center': !isMenuOpen }">
        <Swap180 class="-mt-0.5 btn-ghost ">
          <input v-model="isMenuOpen" type="checkbox" class="peer hidden" />
        </Swap180>
        <div class="items-center flex grow overflow-hidden  transition-all  duration-400" :class="{ 'w-0 opacity-0 invisible': !isMenuOpen }">
          <CompleteCounters :pocket="pocket" />
        </div>
      </div>

      <div class="px-1 dst">
        A simple, customizable build card for your pocket. Easily download, share, and reference a basic overview of your loadout.
      </div>
      <Field :title="props.pocket.champions.children.length != 1 ? 'Champions' : 'Champion'">
        <p class=" dst">
          Select a main champion and splash art to display for this pocket.
        </p>
        <div group class="grid grid-flow-row auto-cols-auto select-none h-fit pt-1  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center place-items-center  gap-4 mx-auto w-full">
          <template v-if="pocket.champions.children.length">
            <template v-for="champion in pocket.champions.children" :key="champion.apiname">
              <ChampionSplashDropdown :champion="champion" :pocket="pocket" />
            </template>
          </template>

          <Placeholder v-else class="size-21 bg-b3/70 p-2.5">
            <i-no-champ class="opacity-10  dst" />
          </Placeholder>
        </div>
      </Field>

      <div class="grid grid-cols-2 w-full gap-8">
        <CompleteRuneSelect :pocket="pocket" />
        <LazySpellField :pocket="pocket" />
      </div>
      <ItemSetSelect
        v-for="(set, i) in pocket.complete.items" :key="i"
        :title="pocket.complete.items[i] && pocket.complete.items[i].name ? pocket.complete.items[i].name : 'Item Set'" class="p-0" :pocket="pocket" :index="useToNumber(i).value" />
    </div>

    <div class=" pl-20 pr-10  overflow-hidden items-start  size-full justify-center flex flex-nowrap">
      <div class="h-full grow " />
      <div class="max-h-[78vh] h-full aspect-square self-start self-center w-auto">
        <CompleteCard v-model:download="downloadClicked" :pocket="pocket" />
      </div>
      <div class="h-full grow " />
    </div>
    <div class="justify-self-end ">
      <CardSettings :pocket="pocket" @download="downloadClicked = true" />
    </div>
  </div>
</template>

<style scoped>
</style>