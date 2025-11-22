<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    state?: SummonerInject
    placement?: Side
    theme?: string
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }>(),
  {
    placement: 'top',
    theme: 'base',
  },
)

const { loadNewer, summoner } = props.state ? props.state : useSummonerInject()

const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => loadNewer(),
  120_000,
  summoner?.value?.puuid,
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
    v-tippy="{ content: tippy ?? null, theme, placement }"
    size="c-14"
    placement="left"
    variant="floating"
    class="[&_svg]:size-4.25"

    :class="
      cn(
        'shrink-0 p-0',
        {
          'pointer-events-none bg-b2/80 btn-active cursor-not-allowed':
            cooldown,
        },

      )
    "
    @click="update()">
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
