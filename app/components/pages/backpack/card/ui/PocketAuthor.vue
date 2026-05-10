<script lang="ts" setup>
import { getSplashFromSkinKey } from "~/domain/utils/img"
import { skinIndex } from "~~/shared/constants/champions/skin-index"

const {
  class: className,
  authorId,
  pocket
} = defineProps<{
  class?: HTMLAttributes["class"]
  authorId?: string
  pocket: Pocket
}>()

const isAuthor = computed(
  () => user().account?.uuid && authorId === user().account?.uuid
).value
const author = computed(() => {
  if (!authorId) return
  if (isAuthor) return user().account
  return {
    username: "nell",
    tag: "nell",
    skin: computed(() => {
      const skinSets = Object.values(skinIndex)
      const a = skinSets[getRandomInt(skinSets.length)]
      if (!a?.length) return null
      const b = a[getRandomInt(a.length)]
      const key = getKeyByValue(skinIndex, a)
      return key && b ? getSkinKey(key, b) : null
    }).value
  } //publicUsers().cache.get(authorId)
})
const authorSplash = computed(() =>
  getSplashFromSkinKey(author.value?.skin, "tile")
)

const name = computed(() => {
  if (
    (authorId === pocket.ouuid && pocket.ouuid === pocket.uuid) ||
    (authorId === pocket.ouuid && pocket.ouuid !== pocket.uuid)
  )
    return `${author.value?.username}'s`
  return author.value?.username || "Anon"
})
</script>

<template>
  <ULink
    v-if="author"
    :to="`/${author.username}_${author.tag}/pockets/${pocket.key}`"
    :class="
      cn(
        'pointer-events-auto! inline-flex cursor-pointer items-center gap-1 align-middle font-semibold group-hover/user:underline hover:underline',
        className
      )
    ">
    <UAvatar
      v-if="authorSplash"
      :src="authorSplash"
      width="16"
      height="16"
      sizes="16px"
      format="webp"
      loading="eager"
      fetchpriority="high"
      preload
      :ui="{
        root: 'card-shine z-0 size-4 shrink-0 overflow-hidden rounded-full'
      }" />

    {{ name || "Anon" }}
  </ULink>
</template>
