<script setup lang="ts">
const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

// todo numbers go up ^^^^
// store in supabase maybe use realtime? not sure if worth look into that ok
// todo be not dumb

const pocket = computed(() => p).value
function handleLike() {
  return as().settings.favorite_pockets.includes(pocket.key)
    ? pocket.likes + 1
    : pocket.likes - 1
}
</script>

<template>
  <Label
    :class="
      cn(
        'has-checked: group/x h-6 gap-1.5! rounded-full pr-2.5 pl-2 inset-shadow-xs ring-pc/50 ring-offset-p2 duration-0 hover:ring hover:ring-offset-1 has-not-checked:*:opacity-40 has-checked:*:opacity-100',
        className,
      )
    "
    variant="outline">
    <input
      v-model="as().settings.favorite_pockets"
      class="peer hidden"
      :disabled="pocket.uuid === as().account.puuid"
      type="checkbox"
      :value="pocket.key"
      @change="handleLike()">
    <span class="relative grid size-4 place-items-center overflow-hidden">
      <icon
        class="absolute size-6.5! -translate-y-[0.5px] dst transition-colors duration-200 group-hover/x:text-tint-domination/20! group-has-not-checked/x:text-pc/30 group-has-checked/x:text-tint-domination/20"
        name="heart-sm" />
    </span>
    <span class="text-xs! font-semibold">
      {{ pocket.likes }}
    </span>
  </Label>
</template>
