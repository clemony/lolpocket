<script setup lang="ts">
const { summoner, class: className, noIcon } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
  noIcon?: boolean
}>()

const region = computed(() => {
  if (summoner?.region) {
    return summoner.region
  }

  else {
    const as = useAccountStore()
    return as.userAccount?.riot.region ?? null
  }
})
</script>

<template>
  <span
    v-if="region"
    :class="cn('flex items-center lowercase leading-0 antialiased gap-[2px]', className)">

    <icon
      v-show="!noIcon"
      name="at"
      class="size-3.25 dst" />
    {{ region }}
  </span>

  <span
    v-else
    :class="cn('', className)">
    Runeterra
  </span>
</template>
