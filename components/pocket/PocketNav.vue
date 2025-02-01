<script lang="ts" setup>
const props = defineProps<{
  pocket?: pocket
}>()

const as = useAccountStore()

const pocket = ref(props.pocket)

function handleResize(e) {
  console.log('💠 - handleResize - e:', e)
}
</script>

<template>
  <div class=" h-full min-h-full max-h-full w-140  pl-5 border-b2 border-x">
    <MenubarSpacer class=" w-[115%]" />
    <div class="pl-3 pr-8">
      <PocketHeader :pocket="pocket" />

      <div class="w-full h-54  shadow-sm border border-b3 rounded-lg shadow-b3  relative size-fit">
        <div
          class="rounded-lg shrink-0 size-full overflow-hidden "
          :style="{
            backgroundImage: `url(${pocket.icon})`,
            backgroundSize: pocket.icon == '/img/champion/centered/-1.webp' ? '100%' : '350%',
            backgroundPosition: 'center 20%' }"
        />

        <LazyRoleSelect
          :pocket="pocket"
        />
      </div>

      <SelectedChampions
        :pocket="pocket"
        class="mt-2"
      />

      <Separator class="my-6" />

      <!--           <h4 class="tracking-tighter mb-3 dst">Summoner Spells</h4>
 -->
      <LazySummonerSpellDisplay
        :pocket="pocket"
        class=""
      />

      <Separator class="my-6" />
    </div>
  </div>
</template>

<style></style>
