<script lang="ts" setup>
const {
  id,
  class: className,
  variant = 'btn',
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | undefined
  variant?: LabelVariants['variant']
}>()

const loaded = ref(false)

watch(
  () => id,
  (newVal) => {
    if (newVal)
      loaded.value = false
  }
)
</script>

<template>
  <Label
    base="btn"
    :variant="variant"
    size="sq-14"
    :class="
      cn(
        `
          size-14 overflow-hidden
          group-hover/select:bg-b3/50
        `,
        { ' shadow-sm drop-shadow-sm border border-b4 ': id },
        className,
      )
    ">
    <img
      v-if="id"
      :title="spellbook[id].name"
      :alt="spellbook[id].name"
      :src="`/img/spells/${id}.webp`"
      class="absolute size-full"
      @load="loaded = true" />
    <!--
    <icon
      id="tabler:flame"
      alt="no summoner spell chosen"
      class="size-6 opacity-6 absolute **:stroke-[1.5]" /> -->
  </Label>
</template>
