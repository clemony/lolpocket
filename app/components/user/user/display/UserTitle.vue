<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes["class"]
  summoner?: Summoner | Partial<Summoner>
}>()

// todo hookup to supbase with public data &  useSummoner
const text = computed(() => {
  console.log("💠 -as().account:", as().account)
  const account = as().account
  if (account && !account.title) {
    account.title = "Pocket Pet"
  }
  return account?.title ?? "Pocket Player"
})
console.log("💠 - text:", text)
</script>

<template>
  <span
    v-if="text"
    :class="cn('flex items-center leading-0 lowercase antialiased', className)">
    <slot />
    {{ text ?? null }}
  </span>
</template>
