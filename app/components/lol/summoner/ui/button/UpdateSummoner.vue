<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    placement?: Side
    size?: ButtonVariants['size']
    on?: ButtonVariants['on']
    hover?: ButtonVariants['hover']
    variant?: ButtonVariants['variant']
  }>(),
  {
    hover: 'neutral',
    on: 'floating',
    placement: 'bottom',
    size: 'c-11',
    variant: 'floating'
  },
)

const { loadNewer, summoner } = useSummonerInject()
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

const tippy = computed(() =>
  !cooldown.value?.seconds
    ? summoner?.value?.updatedMatch
      ? `Last updated ${formatTimeAgo(summoner?.value?.updatedMatch)}`
      : 'Not updated yet'
    : `${cooldown.value?.seconds} cd`,
)
</script>

<template>
  <Button
    :data-tip="tippy ?? null"
    data-theme="mini-tip neutral line"
    :data-placement="placement"

    :class="
      cn(
        {
          'pointer-events-none duration-0!  btn-active cursor-not-allowed':
            cooldown,
        },
        buttonVariants({ on, variant, hover, size }),

        'shrink-0 [&_svg]:size-4.25',
      )
    "
    @click="loadNewer()">
    <TransitionScalePop
      class="relative grid size-full place-items-center overflow-hidden">
      <icon
        v-if="!cooldown"
        name="reset"
        :class="
          cn('size-5 dst transition-all duration-200 **:stroke-[1.8] group-hover/load:opacity-100',
             {
               'animate-rotate': isLoading,
             },
          )
        " />

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
        <span class="absolute place-self-center text-1 font-semibold">
          {{ cooldown?.seconds }}
        </span>
      </div>
    </TransitionScalePop>
  </Button>
</template>
