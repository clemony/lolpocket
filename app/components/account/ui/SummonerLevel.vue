<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  noTag?: boolean
}>()

const as = useAccountStore()
const summonerLevel = computed(() => {
  const user = inject<User>('user')
  if (!user?.account?.riot?.puuid)
    return null

  return user.summoner.level
})
</script>

<template>
  <span :class="cn('', props.class)">

    {{ !props.noTag ? 'lv. ' : null }}{{ summonerLevel || '0' || '' }}
  </span>
</template>

<style scoped>

</style>