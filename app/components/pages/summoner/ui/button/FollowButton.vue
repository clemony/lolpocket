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
    :followed="isFollowed"
    as-child>
    <Button
      :variant="variant"
      :size="size"
      :class="cn('group/follow z-10  grid place-items-center ', className)">
      <slot>
        <icon
          name="heart-sm"
          :class="
            cn(
              ' group-hover/follow:text-tint-domination/40    group-hover/follow:opacity-90  absolute transition-all duration-300  dst !size-8 text-b4 opacity-90 shrink-0',

              { 'text-domination group-hover/follow:**:text-domination opacity-70 group-hover/follow:opacity-100': isFollowed,
              },
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
