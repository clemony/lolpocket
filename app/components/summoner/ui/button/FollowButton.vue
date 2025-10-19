<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'
import type { ToggleVariants } from '~/assets/variants'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  placement?: Side
  theme?: string
  size?: ToggleVariants['size']
  variant?: ToggleVariants['variant']
}>(), {
  placement: 'top',
  theme: 'base'
})

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)

const isYou = computed(() => as().account?.puuid === props.summoner?.puuid)
const isFollowed = ref(false)

watch(() => isFollowed.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Toggle
    v-if="isYou"
    v-bind="forwarded"
    v-model="isFollowed"
    as-child>
    <Button
      v-tippy="{ content: isFollowed ? 'unfollow' : `follow ${summoner.name}?`, placement, arrow: false, theme: 'base' }"
      :class="cn('group/follow  grid place-items-center ', props.class)">
      <slot>
        <icon
          name="heart-fill"
          :class="
            cn(
              ' !size-4.5 group-hover/follow:opacity-100  text-domination/70   in-data-[state=on]:grayscale-0 in-data-[state=on]:opacity-100 opacity-40 grayscale absolute transition-all duration-100  dst ',
              isFollowed ? 'animate-heartbeat' : '',
            )
          " />
      </slot>
    </Button>
  </Toggle>

  <!--  <label
    v-else-if="isYou"
    v-tippy="{ content: 'You!', placement: 'top' }"
    :class="cn('grid place-items-center aspect-square  hover:*:animate-pulse relative *:absolute  ', className)">

    <icon
      v-show="isYou"
      name="star-fill"
      class="**:fill-bc/40 size-3.5  **:stroke-bc **:stroke-4" />
  </label> -->
</template>
