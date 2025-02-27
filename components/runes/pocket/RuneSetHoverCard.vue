<script lang="ts" setup>
const props = defineProps<{
  set: RuneSet
  pocket: pocket
}>()

const set = ref(props.set)

const primaryRunes = computed (() => {
  return Object.values(set.value.primary.runes)
})

const secondaryRunes = computed (() => {
  const a = Object.values(set.value.secondary.runes)
  return a.filter(r => r.name != 'empty')
})
</script>

<template>
  <HoverCardContent side="right" :side-offset="11" align="start" :align-offset="0" class="!bg-b1/85 justify-center select-none **:select-none">
    <div class="grid grid-cols-4 gap-3 p-i-c">
      <button v class="btn col-span-2 bg-b1 btn-sm rounded-lg  font-medium !text-1" @click.stop="set.key == pocket.runes.default">
        <icon v-if="set.key == pocket.runes.default" name="star-fill" class="opacity-70 shrink-0 size-4" />
        <icon v-else name="star" class="opacity-70 shrink-0 size-4" />
        Default
      </button>
      <button class="btn col-span-2 font-medium !text-1 bg-b1 btn-sm rounded-lg" @click="deleteRuneSet(pocket, set)">
        <icon name="trash" class="opacity-70 shrink-0 size-5" />
        Delete
      </button>

      <template v-for="rune in primaryRunes" :key="rune.id">
        <img
          v-if="rune.name != 'empty'" v-tippy="rune.name" :src="`/img/runes/${set.primary.path}/${rune.name.replace(/\s/g, '')}.webp`" class=" "
          :class="{ 'drop-shadow-sm h-13 w-auto object-contain hover:scale-110  transition-all duration-300': rune == set.primary.runes[0], 'border border-black shadow-sm not-first:inset-shadow-sm rounded-full size-10 inset-shadow-black hover:ring-1 hover:ring hover:ring-neutral transition-all duration-300': rune != set.primary.runes[0] }"
        />

        <Placeholder v-else class="size-10 rounded-full" />
      </template>
      <template v-for="rune in secondaryRunes" :key="rune.id">
        <img v-if="rune.name != 'empty'" v-tippy="rune.name" :src="`/img/runes/${set.secondary.path}/${rune.name.replace(/\s/g, '')}.webp`" class="'border border-black shadow-sm not-first:inset-shadow-sm rounded-full size-10 inset-shadow-black hover:ring-1 hover:ring hover:ring-neutral transition-all duration-300" />
      </template>
      <template v-if="secondaryRunes.length == 0">
        <Placeholder class="size-10 rounded-full" />
        <Placeholder class="size-10 rounded-full" />
      </template>
      <Placeholder v-if="secondaryRunes.length == 1 " class="size-10 rounded-full" />
    </div>
  </HoverCardContent>
</template>

<style scoped>

</style>