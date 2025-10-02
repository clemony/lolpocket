<script lang="ts" setup>
const {
  class: className,
  placement,
  size = 'md',
  summoner,
  text,
  theme,
  variant = 'shadow',
} = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
  text?: boolean
  bold?: boolean
  variant?: any
  size?: any
  theme?: string
  placement?: Side
}>()

const isYou = computed(() => as().account?.puuid === summoner?.puuid)
const isFollowed = ref(false)

watch(() => isFollowed.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Toggle
    v-if="isYou"
    v-model="isFollowed"
    as-child>
    <Button
      v-tippy="{ content: isFollowed ? 'Unfollow' : 'Follow', placement, arrow: false }"
      :followed="isFollowed"
      :variant="variant"
      :size="size"
      :class="cn('group/follow  grid place-items-center ', className)">
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
