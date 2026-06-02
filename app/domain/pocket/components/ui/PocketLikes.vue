<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      pocket: Pocket
    }
  >(),
  {
    variant: "outline",
    size: "sm"
  }
)

const store = storeToRefs(user())
// todo numbers go up ^^^^
// store in supabase maybe use realtime? not sure if worth look into that ok
// todo be not dumb

const favorites = computed({
  get: () => user().settings?.favorite_pockets ?? [],
  set: (value: string[]) => {
    const settings = user().settings
    if (settings) settings.favorite_pockets = value
  }
})

const delegated = reactiveOmit(props, "class", "pocket")
function handleLike() {
  return favorites.value.includes(props.pocket.key)
    ? props.pocket.likes + 1
    : props.pocket.likes - 1
}
const disabled = computed(() => props.pocket.uuid === store.account.value?.uuid)
const label = computed(() => (props.pocket.likes + 1).toString())
</script>

<template>
  <HeartButton
    v-bind="delegated"
    :ui="{
      base: cn('gap-1.5 rounded-xl', props.ui?.base),
      leadingIcon: 'size-3.5!'
    }"
    :checked="
      store.settings.value?.favorite_pockets.includes(props.pocket.key) ||
      props.pocket.uuid === store.account.value?.uuid
    "
    :label
    :disabled
    variant="outline"
    @update:model-value="handleLike()" />
</template>
