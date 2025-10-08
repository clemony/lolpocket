<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'
import type { ButtonVariantProps } from '~/assets/variants'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  placement?: Side
  theme?: string
  size?: ButtonVariantProps['size']
  variant: ButtonVariantProps['variant']
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
    !cooldown.value?.seconds ? (state.summoner.value.updatedMatch ? `last updated ${state.summoner.value.updatedMatch}` : 'not updated yet') : `${cooldown.value?.seconds} cd`
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
      class="relative grid overflow-hidden size-full place-items-center">
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
        class="text-0 shadow-sm border-neutral border-2 absolute bg-neutral text-nc **:text-nc radial-progress place-self-center font-semibold opacity-90"
        :style="{
          '--value': cooldown?.seconds,
          '--size': '2rem',
          '--thickness': '2px',
        }"
        :aria-valuenow="cooldown?.percent"
        role="progressbar">
        <span class="grid rounded-full bg-neutral size-full place-items-center">
          {{ cooldown?.seconds }}
        </span>
      </div>
    </TransitionScalePop>
  </Button>
</template>
