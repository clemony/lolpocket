<script lang="ts" setup>
import type { ButtonProps, TooltipProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    TooltipProps & {
      side?: Side
      class?: HTMLAttributes["class"]
      as?: string
      align?: Align
      alignOffset?: number
      sideOffset?: number
    }
  >(),
  {
    align: "end",
    alignOffset: -14,
    side: "bottom"
  }
)

const emit = defineEmits(["update:open"])

const delegated = reactiveOmit(props, "class", "side")

const { summoner } = storeToRefs(sSession())
const cooldownMs = 120_000
const action = "match-refresh"

const puuid = computed(() => summoner.value?.puuid ?? "")

const { loading, loadMessage } = storeToRefs(sMatches())

const { cooldown, timeRemaining } = useCooldown(puuid, action, cooldownMs)

const isDisabled = computed(
  () => props.disabled || loading.value || timeRemaining.value > 0
)

const toast = useToast()
function toasty() {
  toast.add({
    color: "neutral",
    orientation: "horizontal",
    title: loadMessage.value ?? "Error loading matches!",
    icon: "x"
  })
}
async function loadNew() {
  if (!puuid.value || isDisabled.value) return

  try {
    await sMatches().loadNewer()
    cds().set(puuid.value, action, cooldownMs)
  } finally {
    toasty()
    emit("update:open", false)
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
  <button @click="loadNew()">
    <slot
      v-bind="props"
      :text="tip ?? null"
      :content="{
        side: props.side,
        align: props.align,
        alignOffset: props.alignOffset,
        sideOffset: props.sideOffset
      }"
      :is-loading="loading"
      :cooldown="cooldown"
      :cooldown-ms="cooldownMs"
      :disabled="isDisabled"
      :time-remaining="timeRemaining">
    </slot>
  </button>
</template>
