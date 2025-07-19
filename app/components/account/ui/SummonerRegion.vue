<script setup lang="ts">
const { summoner, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

const region = computed(() => {
  if (summoner?.region)
    return summoner.region

  const user = inject<User>('user')
  return user.summoner.region
})
</script>

<template>
  <span v-if="region" :class="cn('flex items-center lowercase', className)">

    <icon name="at" class="size-3.25 dst" />
    {{ region }}
  </span>

  <span v-else :class="cn('', className)">
    Runeterra
  </span>
</template>
