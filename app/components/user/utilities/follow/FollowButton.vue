<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<
    ButtonProps & {
      class?: HTMLAttributes["class"]
      summoner?: MaybeRef<Summoner | null | undefined>
      side?: Side
    }
  >(),
  {
    variant: "outline",
    size: "sm",
    side: "bottom"
  }
)

const forwarded = reactiveOmit(props, "class")

const { settings } = storeToRefs(user())
const summoner = computed(() => toValue(props.summoner) ?? sSession().summoner)
const favoriteSummoners = computed({
  get: () => settings.value?.favorite_summoners ?? [],
  set: (value: string[]) => {
    if (settings.value) settings.value.favorite_summoners = value
  }
})
const isSelf = computed(
  () => !!summoner.value?.puuid && summoner.value.puuid === user().account?.puuid
)
const isFavorite = computed(() =>
  summoner.value?.puuid
    ? favoriteSummoners.value.includes(String(summoner.value.puuid))
    : false
)
const tooltipText = computed(() => {
  if (!settings.value) return "Sign in to follow"
  if (isSelf.value) return "You"
  return isFavorite.value ? "Remove from faves" : "Add to faves"
})
</script>

<template>
  <LazyUTooltip
    v-if="summoner?.puuid"
    :content="{ side }"
    as-child
    :text="tooltipText">
    <ToggleGroup v-model:model-value="favoriteSummoners" as-child>
      <ToggleGroupItem :value="summoner.puuid" as-child>
        <UButton
          v-bind="forwarded"
          :disabled="!settings || isSelf"
          :icon="
            isFavorite || isSelf
              ? 'i-streamline-heart-solid'
              : 'i-streamline-heart'
          "
          :ui="{
            base: cn(
              'w-10 justify-center gap-0 shadow-sm',
              props.ui?.base,
              isFavorite && props.color === 'neutral'
                ? 'light:**:text-dom-200/90!'
                : '',
              isFavorite ? '**:text-dom-400/90! ' : ''
            ),
            label: 'group-hover/btn:underline',
            leadingIcon: cn(
              'absolute size-4! scale-98 **:stroke-[1.5]!',
              isFavorite && props.color === 'neutral'
                ? 'light:text-dom-200/90'
                : '',
              isFavorite || isSelf
                ? 'animate-heartbeat text-dom-400/90!'
                : 'text-pc'
            )
          }" />
      </ToggleGroupItem>
    </ToggleGroup>
  </LazyUTooltip>
</template>
