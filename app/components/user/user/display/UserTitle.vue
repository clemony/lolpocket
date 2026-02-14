<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes["class"]
  summoner?: Summoner | Partial<Summoner>
}>()

// todo hookup to supbase with public data &  summoner
const text = computed(() => {
  console.log("💠 -user().account:", user().account)
  const account = user().account
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
