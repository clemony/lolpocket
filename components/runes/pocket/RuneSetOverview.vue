<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  set: RuneSet
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <label class="group/star relative grid h-full w-4 cursor-pointer place-content-center *:h-full *:transition-all *:duration-300">
    <input
      v-model="pocket.runes.default"
      type="radio"
      name="defaultDisplayRunes"
      :value="props.set"
      class="peer hidden"
    />
    <icon
      name="iconoir:star-dashed"
      class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20"
    />
    <icon
      id="solid"
      name="iconoir:star-solid"
      class="absolute z-0 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80"
    />
  </label>

  <button
    class="rounded-btn hover:bg-b2 flex items-center justify-center justify-self-end py-1 opacity-50 hover:opacity-100"
    alt="menu"
  >
    <icon
      name="teenyicons:more-vertical-outline"
      class="size-5"
    />
  </button>

  <div class="*:rounded-btn *:text-bc/80 grid grid-cols-3 gap-1.5 *:flex *:aspect-square *:size-5 *:items-center *:justify-center *:transition-all *:duration-300">
    <button
      class="hover:bg-b2"
      alt="Clear Items"
      title="Clear Items"
      @click="resetRunes(pocket, set)"
    >
      <icon
        name="teenyicons:clockwise-outline"
        class="size-[0.8rem] pb-[2px]"
      />
    </button>

    <button
      class="hover:bg-b2 disabled:bg-transparent disabled:opacity-40 disabled:hover:bg-transparent"
      alt="Delete Set"
      title="Delete Set"
      :disabled="pocket.runes.sets.length == 1"
      @click="deleteRuneSet(pocket, props.set)"
    >
      <icon
        name="ph:trash-light"
        class="size-3.5"
      />
    </button>
  </div>
</template>

<style scoped>

</style>