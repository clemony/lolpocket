<script lang="ts" setup>
const {
  author,
  class: className,
  size = 'c-9',
} = defineProps<{
  class?: HTMLAttributes['class']
  author?: Summoner | null
  size?: ElementVariants['size']
}>()

const icon = computed(() => {
  if (author?.icon)
    return getSummonerIcon(author?.icon)
  else return 'lp-ui:oh-no'
})
</script>

<template>
  <Element
    :size
    base="btn"
    variant="neutral"
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
