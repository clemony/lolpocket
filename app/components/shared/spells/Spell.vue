<script lang="ts" setup>
const { class: className, name, variant = 'btn' } = defineProps<{
  class?: HTMLAttributes['class']
  name: string | undefined
  variant?: string
}>()
</script>

<template>
  <Label
    :variant="variant"
    :class="cn('btn-square size-14 overflow-hidden relative', { ' shadow-sm drop-shadow-sm': name }, className)">

    <Img
      v-if="name"
      :title="name"
      :alt="name"
      :img="`/img/spells/${name}.webp`"
      class="size-full absolute" />

    <icon
      name="tabler:flame"
      alt="no summoner spell chosen"
      class="size-6 opacity-6 absolute" />
  </Label>
</template>