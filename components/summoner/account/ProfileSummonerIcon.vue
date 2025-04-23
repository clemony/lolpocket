<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

// wtf
</script>

<template>
  <SummonerIcon

    v-if="summoner.gameName && as.userAccount.session && summoner.profileIconId"
    :icon-id="summoner.profileIconId"
    :alt="summoner.gameName" :class="props.class" />
</template>