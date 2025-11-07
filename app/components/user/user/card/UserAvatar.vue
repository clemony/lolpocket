<script lang="ts" setup>
const { class: className, comment, size = 'c-9' } = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentItem
  size?: ElementVariants['size']
}>()
const icon = computed(() => {
  if (comment.authorIcon && comment.authorPuuid === 'defnotclem')
    return comment.authorIcon
  else if (comment.authorIcon)
    return getSummonerIcon(comment.authorIcon)
  else return 'i-ui-oh-no'
})
</script>

<template>
  <Element
    :size
    :variant="comment.authorPuuid === 'defnotclem' ? 'btn' : 'neutral'"
    :class="
      cn(
        'shrink-0   shadow-sm drop-shadow-sm overflow-hidden shadow-black/15 drop-shadow-black/15',
        className,
      )
    ">
    <hicon
      :name="String(icon)"
      alt="summoner icon"
      :class="
        cn('size-full pointer-events-none [&_img]:scale-115', {
          '!size-9 place-self-center **:text-nc ':
            icon === 'i-ui-oh-no',
        })
      " />

    <slot />
  </Element>
</template>
