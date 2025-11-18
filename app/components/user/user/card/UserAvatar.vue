<script lang="ts" setup>
const {
  class: className,
  comment,
  hydratedSummoner,
  size = 'c-9',
} = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentData
  hydratedSummoner?: Summoner | null
  size?: ElementVariants['size']
}>()

const icon = computed(() => {
  if (comment.author_id === 'defnotclem')
    return comment.author_id
  else if (hydratedSummoner?.icon)
    return getSummonerIcon(hydratedSummoner?.icon)
  else return 'lp-ui:oh-no'
})
</script>

<template>
  <Element
    :size
    base="btn"
    :variant="comment.author_id === 'defnotclem' ? 'btn' : 'neutral'"
    :class="
      cn('shrink-0 overflow-hidden shadow-sm shadow-black/15 drop-shadow-sm drop-shadow-black/15',
        className,
      )
    ">
    <hicon
      :name="String(icon)"
      alt="summoner icon"
      :class="
        cn('pointer-events-none size-full [&_img]:scale-115',
          {
            '!size-9 place-self-center **:text-nc ': icon === 'i-ui-oh-no',
          },
        )
      " />

    <slot />
  </Element>
</template>
