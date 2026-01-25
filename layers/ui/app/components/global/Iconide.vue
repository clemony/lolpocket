<script lang="ts" setup>
const { name, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  name: string
}>()

const alias = computed (() => !name.match(':') ? `lucide:${name}` : name)
</script>

<template>
  <Icon
    name="tabler:star"
    :class="cn('', { '!scale-96 **:stroke-[1.3]': name.match(/teenyicons/) }, className)" />
</template>