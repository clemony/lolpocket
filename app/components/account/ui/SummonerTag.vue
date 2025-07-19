<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()
const as = useAccountStore()

const tag = computed (() => {
  if (props.summoner?.tag)
    return props.summoner.tag

  const user = inject<User>('user')
  return user.account.riot.tag
})
</script>

<template>
  <span v-if="tag" :class="cn('flex items-center', props.class)">
    <icon name="lucide:hash" class="size-3.75" />
    {{ tag }}
  </span>

  <span v-else :class="cn('', props.class)">
    Disconnected
  </span>
</template>
