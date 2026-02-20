<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<{
    placement?: Side
    variant?: ButtonProps["variant"]
    size?: ButtonProps["size"]
  }>(),
  {
    hover: "neutral",
    placement: "bottom",
  }
)
const { summoner } = storeToRefs(sSession())
const throttle = throttleFunction(
  () => sMatches().loadNewer(),
  120_000,
  summoner?.value?.puuid ?? "",
  "match-refresh"
)
const cooldown = computed(() => throttle?.cooldown?.value ?? null)
const isLoading = computed(() => throttle?.isLoading?.value ?? false)
const update = throttle?.throttled ?? (() => {})

async function loadNew() {
  const message = await sMatches().loadNewer()
  console.log("🥸 - message - message:", message)
}
const tippy = computed(() => {
  return !cooldown.value?.seconds
    ? summoner?.value?.lastMatchUpdate
      ? `Last updated ${formatTimeAgo(summoner?.value?.lastMatchUpdate)}`
      : "Not updated yet"
    : `${cooldown.value?.seconds} cd`
})
</script>

<template>
  <Tooltip :text="tippy ?? null">
    <UButton
      :variant
      :size
      icon="refresh"
      square
      :ui="{
        base: 'rounded-full',
        leadingIcon: ' size-4.5 text-n4 group-hover/btn:text-pc',
      }"
      @click="loadNew()">
      <div class="relative grid size-full place-items-center overflow-hidden">
        <div
          v-if="cooldown"
          class="radial-progress absolute place-self-center"
          :aria-valuemax="120"
          :style="{
            '--value': cooldown?.seconds,
            '--size': '3rem',
            '--thickness': '4px',
          }"
          :aria-valuenow="cooldown?.percent"
          role="progressbar">
          <span class="absolute place-self-center text-xs font-semibold">
            {{ cooldown?.seconds }}
          </span>
        </div>
      </div>
    </UButton>
  </Tooltip>
</template>
