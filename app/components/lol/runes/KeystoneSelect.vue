<script lang="ts" setup>
const { runes, selected } = defineProps<{
  runes: Rune[]
  selected: number | null
}>()

const emit = defineEmits(['update:rune'])
const selectedRune = ref<number>(null)

watch(
  () => selectedRune.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)

watch(
  () => selected,
  (newVal) => {
    if (newVal && newVal !== selectedRune.value) selectedRune.value = selected
  }
)
</script>

<template>
  <div
    class="shadow-warm relative flex h-29 w-114 max-w-114 items-center px-3 pt-6 pb-4"
    title="Keystone"
  >
    <div
      class="rounded-box absolute top-0 left-0 size-full overflow-hidden opacity-26"
    >
      <div
        class="gradient absolute top-0 left-0 size-full mask-bottom-right"
        :data-path="runes[0].path"
      />
    </div>

    <RadioGroup
      v-model:model-value="selectedRune"
      :class="
        cn(
          'relative flex size-full items-center justify-around rounded-xl **:select-none',
          `
            grid-cols-${runes.length ?? 3}
          `,
        )
      "
      @update:model-value="emit('update:rune', selectedRune)"
    >
      <!--   <Label
        v-for="rune in runes"
        :key="rune.id"
        v-tippy="rune.name"
        :for="rune.id"
        class=" rounded-full opacity-75 hover:opacity-100 hover:grayscale-0  group/r border-transparent relative cursor-pointer tldr-30  grid place-items-center shrink-0 size-22 aspect-square"
        :class="cn(
          { 'to-b1/40 rounded-full  opacity-100 scale-115  grayscale-0': selectedRune===rune.id }, ``,
        )">
        <RadioGroupItem
          :id="rune.id"
          :value="rune.id"
          class="hidden peer" />

        <Img
          :src="`/img/runes/${rune.path}/${rune.id}.webp`"
          :alt="rune.name"
          class="absolute drop-shadow-sm pointer-events-none drop-shadow-black/40   opacity-0 group-hover/r:opacity-90 duration-400  transition-all shrink-0   h-19 w-auto "
          :class="{ 'opacity-100': selectedRune===rune.id }" />

        <Img
          :src="`/img/runes/${rune.path}/${rune.id}_grayscale.webp`"
          :alt="rune.name"
          class="h-19 w-auto  drop-shadow-sm  pointer-events-none  shrink-0 absolute contrast-150 brightness-90 opacity-100  group-hover/r:opacity-0 duration-400 transition-all "
          :class="{ 'opacity-0': selectedRune===rune.id }" />
      </Label> -->
    </RadioGroup>
    <!--
      <div  class="size-full grid grid-cols-3 py-4">
        <Placeholder v-for="i in 3" :key="i" class="size-18 rounded-full place-self-center" />
      </div> -->
  </div>
</template>

<style scoped></style>
