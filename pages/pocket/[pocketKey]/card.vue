<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
definePageMeta({
  name: 'card',
  header: 'none',
  background: 'b2Light',
})
const ts = useTempStore()

const pocket = ref(props.pocket)
const isMenuOpen = ref(true)
const isSettingsOpen = ref(true)

const downloadClicked = refAutoReset(false, 1000)
</script>

<template>
  <div class="h-full w-full grid items-center relative justify-center overflow-hidden">
    <!--

      <div class="px-1 dst">
        A simple, customizable build card for your pocket. Easily download, share, and reference a basic overview of your loadout.
      </div>
      <Field :title="props.pocket.champions.children.length != 1 ? 'Champions' : 'Champion'">
        <p class=" dst">
          Select a main champion and splash art to display for this pocket.
        </p>
        <div group class="grid grid-flow-row auto-cols-auto select-none h-fit pt-1  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center place-items-center  gap-4 mx-auto w-full">
          <template v-if="pocket.champions.children.length">
            <template v-for="champion in pocket.champions.children" :key="champion.id">
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
    </div> -->

    <CompleteCard v-model:download="downloadClicked" :pocket="pocket" />
  </div>
</template>

<style scoped>
</style>