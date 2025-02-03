<script lang="ts" setup>
const props = defineProps<{
  pocket?: pocket
}>()

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}
</script>

<template>
  <div class=" h-full min-h-full max-h-full w-110 min-w-110  pl-5 border-b2 border-x pt-[5.5vh] ">
    <div class="pl-4 pr-10">
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
        class="mt-4"
      />

      <Separator class="my-6" />

      <div class=" gap-3 grid grid-cols-4 h-auto items-center pt-3 px-2">
        <SpellPicker
          :model="0"
          :pocket="pocket"
          @update:model="update($event, 0)"
        />

        <SpellPicker
          :model="1"
          :pocket="pocket"
          @update:model="update($event, 1)"
        />
      </div>

      <Separator class="my-6" />
    </div>
  </div>
</template>

<style></style>
