<script lang="ts" setup>
const { summoner, class: className, text, variant = 'shadow', size = 'md' } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
  badge?: boolean
  bubble?: boolean
  text?: boolean
  bold?: boolean
  variant?: any
  size?: any
}>()
const as = useAccountStore()

const isYou = computed (() => as.userAccount?.riot?.puuid == summoner?.puuid)
const isFollowed = ref(false)
</script>

<template>
  <Label
    v-if="isYou"
    v-tippy="{ content: isFollowed && !text ? `Unfollow ${capitalize(summoner?.name)}?` : text ? null : `Follow ${capitalize(summoner?.name)}?`, placement: 'top' }"
    :variant="variant"
    :size="size"
    :followed="isFollowed"
    :class="cn('group/follow  grid place-items-center ', className)">
    <input
      v-model="isFollowed"
      type="checkbox"
      class="peer hidden" />
    <span
      :class="cn('size-3 relative', { ' grid place-items-center': !text, 'size-4.5': text })">
      <icon
        v-if="text"
        :name="bold ? 'ph:heart-straight-bold' : 'ph:heart-straight'"
        class="size-5 dst -ml-0.5 absolute  transition-all duration-300 group-hover/follow:opacity-0" />
      <icon
        name="ph:heart-straight-fill"
        :class="cn(

          ' group-hover/follow:text-tint-domination/40 dst   group-hover/follow:opacity-90 group-hover/follow:scale-120 absolute transition-all duration-300',
          {
            ' drop-shadow-b2 drop-shadow-sm size-3.5 text-b4 opacity-90 ': !text,

            'text-domination group-hover/follow:**:text-domination opacity-60 group-hover/follow:opacity-100': isFollowed,

            ' opacity-90 **:fill-white  !text-white': isFollowed && badge,

            'size-5 opacity-0 text-domination  -left-0.5': text })" />
    </span>
    <slot>
      <span
        v-if="text"
        class="flex items-center">
        {{ isFollowed ? 'Unfollow' : 'Follow' }}
      </span>
    </slot>
  </Label>

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