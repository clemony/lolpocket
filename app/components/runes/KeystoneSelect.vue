<script lang="ts" setup>
const { runes, selected } = defineProps<{
  runes: Rune[]
  selected: number | null
}>()

const emit = defineEmits(['update:rune'])
const selectedRune = ref(null)

watch(() => selectedRune.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})

watch(() => selected, (newVal) => {
  if (newVal && newVal != selectedRune.value)
    selectedRune.value = selected
})
</script>

<template>
  <Field title="Keystone" class="  pb-4 pt-6 shadow-warm   h-29 px-3 flex items-center  w-114 max-w-114 relative">
    <div class="absolute size-full top-0 left-0 rounded-box overflow-hidden opacity-26">
      <div class="absolute size-full top-0 left-0 gradient mask-bottom-right" :data-path="runes[0].path" />
    </div>

    <RadioGroup
      v-model:model-value="selectedRune"
      :class="cn(
        ' items-center justify-around  flex  relative rounded-xl size-full rounded-xl  **:select-none', `grid-cols-${runes.length ?? 3}`,
      )"
      @update:model-value="emit('update:rune', selectedRune)">
      <Label
        v-for="rune in runes" :key="rune.id"
        v-tippy="rune.name" :for="rune.key"
        class=" rounded-full opacity-75 hover:opacity-100 hover:grayscale-0  group/r border-transparent relative cursor-pointer tldr-30  grid place-items-center shrink-0 size-22 aspect-square"
        :class="cn(
          { 'to-b1/40 rounded-full  opacity-100 scale-115  grayscale-0': selectedRune == rune.id }, ``,
        )">
        <RadioGroupItem
          :id="rune.key"
          :value="rune.id"
          class="hidden peer" />

        <Img
          :img="`/img/runes/${rune.path}/${rune.key}.webp`"
          :alt="rune.name"
          class="absolute drop-shadow-sm pointer-events-none drop-shadow-black/40   opacity-0 group-hover/r:opacity-90 duration-400  transition-all shrink-0   h-19 w-auto " :class="{ 'opacity-100': selectedRune == rune.id }" />

        <Img
          :img="`/img/runes/${rune.path}/${rune.key}_grayscale.webp`"
          :alt="rune.name"
          class="h-19 w-auto  drop-shadow-sm  pointer-events-none  shrink-0 absolute contrast-150 brightness-90 opacity-100  group-hover/r:opacity-0 duration-400 transition-all " :class="{ 'opacity-0': selectedRune == rune.id }" />
      </Label>
    </RadioGroup>
    <!--
      <div  class="size-full grid grid-cols-3 py-4">
        <Placeholder v-for="i in 3" :key="i" class="size-18 rounded-full place-self-center" />
      </div> -->
  </Field>
</template>

<style scoped>

</style>