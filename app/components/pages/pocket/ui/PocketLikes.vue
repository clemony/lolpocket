<script setup lang="ts">
const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

// TODO numbers go up ^^^^
// store in supabase maybe use realtime? not sure if worth look into that ok
// TODO be not dumb

const pocket = computed (() => p).value
function handleLike() {
  as().account.favorites.pockets.includes(pocket.key) ? pocket.likes + 1 : pocket.likes - 1
  console.log('🌱 - handleLike - pocket.likes:', pocket.likes)
  console.log('🌱 - handleLike - as().account.favorites.pockets.includes(pocket.key):', as().account.favorites.pockets.includes(pocket.key))
}
</script>

<template>
  <Label
    :class="cn(' pl-2 pr-2.5 has-checked: inset-shadow-xs !gap-1.5 group/x rounded-full has-checked:*:opacity-100 duration-0 has-not-checked:*:opacity-40 hover:ring hover:ring-offset-1 h-6 ring-bc/50 ring-offset-b2', className)"
    variant="emboss">
    <input
      v-model="as().account.favorites.pockets"
      :disabled="pocket.author.includes(as().account.puuid)"
      type="checkbox"
      :value="pocket.key"
      class="peer hidden"
      @change="handleLike()" />
    <span class="size-4 relative overflow-hidden grid place-items-center">
      <icon
        name="heart-sm"
        class="group-has-checked/x:text-tint-domination/20 group-hover/x:!text-tint-domination/20 transition-colors duration-200 group-has-not-checked/x:text-bc/30 dst !size-6.5 absolute -translate-y-[0.5px]" />
    </span>
    <span class="!text-1 font-semibold">
      {{ pocket.likes }}
    </span>
  </Label>
</template>