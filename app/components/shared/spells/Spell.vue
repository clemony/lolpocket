<script lang="ts" setup>
const { class: className, name, variant = 'btn' } = defineProps<{
  class?: HTMLAttributes['class']
  name: string | undefined
  variant?: string
}>()

const loaded = ref(false)

watch(() => name, (newVal) => {
  if (newVal)
    loaded.value = false
})
</script>

<template>
  <Label
    :variant="variant"
    :class="cn('btn-square size-14 overflow-hidden relative group-hover/select:bg-b3/50', { ' shadow-sm drop-shadow-sm border border-b4 ': name }, className)">

    <img
      v-if="name"
      :title="name"
      :alt="name"
      :src="`/img/spells/${name}.webp`"
      class="size-full absolute"
      @load="loaded = true" />

    <icon
      name="tabler:flame"
      alt="no summoner spell chosen"
      class="size-6 opacity-6 absolute" />
  </Label>
</template>