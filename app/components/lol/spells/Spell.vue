<script lang="ts" setup>
const {
  name,
  class: className,
  variant = 'btn',
} = defineProps<{
  class?: HTMLAttributes['class']
  name: string | undefined
  variant?: LabelVariants['variant']
}>()

const loaded = ref(false)

watch(
  () => name,
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
    size="sq-xl"
    :class="
      cn(
        'size-14 overflow-hidden group-hover/select:bg-b3/50',
        { ' shadow-sm drop-shadow-sm border border-b4 ': name },
        className,
      )
    ">
    <img
      v-if="name"
      :title="name"
      :alt="name"
      :src="`/img/spells/${name}.webp`"
      class="size-full absolute"
      @load="loaded = true" />
    <!--
    <icon
      name="tabler:flame"
      alt="no summoner spell chosen"
      class="size-6 opacity-6 absolute **:stroke-[1.5]" /> -->
  </Label>
</template>
