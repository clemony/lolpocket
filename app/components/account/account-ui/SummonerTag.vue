<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const as = useAccountStore()

</script>

<template>
  <span v-if="as.userAccount.riot.puuid && as.userAccount.riot.tag" :class="props.class">
    <icon name="lucide:hash" class="size-3.75" />
    {{ as.userAccount.riot.tag }}
    </span>


  <span v-else :class="cn('', props.class)">
  Disconnected
    </span>
</template>
