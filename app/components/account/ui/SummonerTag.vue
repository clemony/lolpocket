<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

const tag = computed (() => {
  if (props.summoner?.tag) {
    return props.summoner.tag
  }

  else {
    const as = useAccountStore()
    return as.userAccount?.riot.tag ?? null
  }
})
</script>

<template>
  <span
    v-if="tag"
    :class="cn('flex items-center leading-0 antialiased', props.class)">
    <icon
      name="lucide:hash"
      class="size-3.75" />
    {{ tag }}
  </span>

  <span
    v-else
    :class="cn('', props.class)">
    Disconnected
  </span>
</template>
