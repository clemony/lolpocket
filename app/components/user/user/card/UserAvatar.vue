<script lang="ts" setup>
const {
  author,
  class: className,
} = defineProps<{
  class?: HTMLAttributes['class']
  author?: Summoner | null
  size?: ElementVariants['size']
}>()

const icon = computed(() => {
  if (author?.icon) return getSummonerIcon(author?.icon)
  else return 'lp-ui:oh-no'
})
</script>

<template>
  <Element
    base="btn"
    color="neutral"
    :class="
      cn(
        'size-9 shrink-0 overflow-hidden rounded-full shadow-sm shadow-black/15 drop-shadow-sm drop-shadow-black/15',
        className,
      )
    ">
    <Icon
      :name="String(icon)"
      alt="summoner icon"
      :class="
        cn('pointer-events-none size-full [&_img]:scale-115', {
          '**:text-nc size-9! place-self-center': icon === 'i-ui-oh-no',
        })
      " />

    <slot />
  </Element>
</template>
