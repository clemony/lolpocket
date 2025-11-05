<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'
import type { ButtonVariants } from '~/assets/variants'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  placement?: Side
  theme?: string
  size?: ButtonVariants['size']
  variant: ButtonVariants['variant']
}>(), {
  placement: 'top',
  theme: 'base'
})

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const state = useSummonerInject()

const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => state.fetchNewMatches(),
  120_000,
  state.summoner.value.puuid,
  'match-refresh'
)

const tippy = computed(
  () =>
    !cooldown.value?.seconds ? (state.summoner.value.updatedMatch ? `Last updated ${state.summoner.value.updatedMatch}` : 'Not updated yet') : `${cooldown.value?.seconds} cd`
)
</script>

<template>
  <Button
    v-tippy="{ content: tippy ?? null, theme, placement }"
    v-bind="forwarded"
    :class="
      cn(
        'p-0 shrink-0',
        {
          'pointer-events-none bg-b2/80 btn-active cursor-not-allowed':
            cooldown,
        },
        props.class,
      )
    "
    @click="update()">
    <TransitionScalePop
      class="relative grid size-full place-items-center overflow-hidden">
      <icon
        v-if="!cooldown"
        name="reset"
        :class="
          cn(
            ' size-5 **:stroke-[1.8]   group-hover/load:opacity-100 dst transition-all duration-200',
            {
              'animate-rotate': isLoading,
            },
          )
        " />

      <div
        v-if="cooldown"
        class="text-0 border-neutral bg-neutral text-nc **:text-nc radial-progress absolute place-self-center border-2 font-semibold opacity-90 shadow-sm"
        :style="{
          '--value': cooldown?.seconds,
          '--size': '2rem',
          '--thickness': '2px',
        }"
        :aria-valuenow="cooldown?.percent"
        role="progressbar">
        <span class="bg-neutral grid size-full place-items-center rounded-full">
          {{ cooldown?.seconds }}
        </span>
      </div>
    </TransitionScalePop>
  </Button>
</template>
