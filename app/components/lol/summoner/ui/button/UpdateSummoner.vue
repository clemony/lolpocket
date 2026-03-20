<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      placement?: Side
      class?: HTMLAttributes["class"]
      as?: string
    }
  >(),
  {
    hover: "neutral",
    placement: "bottom",
    as: "button",
    icon: "i-refresh"
  }
)
const delegated = reactiveOmit(props, "class", "placement")
const { summoner } = storeToRefs(sSession())
const cooldownMs = 120_000
const action = "match-refresh"
const puuid = computed(() => summoner.value?.puuid ?? "")
const { loading } = storeToRefs(sMatches())
const { cooldown, timeRemaining } = useCooldown(puuid, action, cooldownMs)
const isDisabled = computed(
  () => props.disabled || loading.value || timeRemaining.value > 0
)

async function loadNew() {
  if (!puuid.value || isDisabled.value) return

  try {
    await sMatches().loadNewer()
    cds().set(puuid.value, action, cooldownMs)
  } finally {
    console.log("🥸 - loadNewer - done")
  }
}

const tip = computed(() => {
  return !cooldown.value?.seconds
    ? summoner?.value?.lastMatchUpdate
      ? `Last updated ${formatTimeAgo(summoner?.value?.lastMatchUpdate)}`
      : "Not updated yet"
    : loading.value
      ? "Loading..."
      : `${cooldown.value?.seconds} cd`
})
</script>

<template>
  <Tooltip
    :as="props.as"
    :label="tip ?? null"
    :class="cn('', props.class)"
    @click="loadNew()">
    <slot
      :is-loading="loading"
      :cooldown="cooldown"
      :cooldown-ms="cooldownMs"
      :disabled="isDisabled"
      :time-remaining="timeRemaining">
    </slot>
  </Tooltip>
</template>
