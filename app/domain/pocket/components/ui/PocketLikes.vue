<script setup lang="ts">
const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes["class"]
  pocket: Pocket
}>()

// todo numbers go up ^^^^
// store in supabase maybe use realtime? not sure if worth look into that ok
// todo be not dumb

const pocket = computed(() => p).value
const favorites = computed({
  get: () => user().settings?.favorite_pockets ?? [],
  set: (value: string[]) => {
    const settings = user().settings
    if (settings) settings.favorite_pockets = value
  }
})

function handleLike() {
  return favorites.value.includes(pocket.key)
    ? pocket.likes + 1
    : pocket.likes - 1
}
</script>

<template>
  <HeartButton
    :checked="favorites.includes(pocket.key)"
    :label="pocket.likes"
    :disabled="pocket.uuid === user().account?.puuid"
    :class="
      cn(
        'has-checked: group/x h-6 gap-1.5! rounded-full pr-2.5 pl-2 inset-shadow-xs ring-pc/50 ring-offset-p2 duration-0 hover:ring hover:ring-offset-1 has-not-checked:*:opacity-40 has-checked:*:opacity-100',
        className
      )
    "
    variant="outline"
    @update:model-value="handleLike()" />
</template>
