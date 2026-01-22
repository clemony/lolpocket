<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    placement?: Side
    api?: SummonerApi
    size?: ButtonVariants['size']
    on?: ButtonVariants['on']
    hover?: ButtonVariants['hover']
    variant?: ButtonVariants['variant']
  }>(),
  {
    hover: 'neutral',
    placement: 'bottom',
  },
)

const { loadNewer, summoner } = props.api ?? useSummonerInject()
const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => loadNewer(),
  120_000,
  summoner.value?.puuid,
  'match-refresh',
)

async function loadNew() {
  const message = await loadNewer()
  console.log('🥸 - message - message:', message)
}
const tippy = computed(() => {
  return !cooldown.value?.seconds
    ? summoner?.value?.lastMatchUpdate
      ? `Last updated ${formatTimeAgo(summoner?.value?.lastMatchUpdate)}`
      : 'Not updated yet'
    : `${cooldown.value?.seconds} cd`
},
)

console.log('🥸 - summoner?.value:', summoner?.value)
</script>

<template>
  <Tooltip
    :text="tippy ?? null">
    <Button
      :variant
      :size
      :hover
      :on
      :class="cn({
                   'pointer-events-none duration-0!  btn-active cursor-not-allowed': cooldown },
                 'shrink-0 [&_svg]:size-4.25')"
      @click="loadNew()">
      <TransitionScalePop
        class="relative grid size-full place-items-center overflow-hidden">
        <Icon
          v-if="!cooldown"
          name="reset"
          :class="
            cn('size-5 opacity-100 dst transition-all duration-200 **:stroke-[1.8] group-hover/load:opacity-100', { 'animate-rotate': isLoading })" />

        <div
          v-if="cooldown"
          :aria-valuemax="120"
          class="radial-progress absolute place-self-center"
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
      </TransitionScalePop>
    </Button>
  </Tooltip>
</template>
