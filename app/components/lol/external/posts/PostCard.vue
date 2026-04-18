<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import type { ImgHTMLAttributes } from "vue"
import type { BuiltPost, PostType } from "./post.types"

const { post, index } = defineProps<
  BlogPostProps & {
    post: Ref<BuiltPost>
    index?: number
  }
>()

const emit = defineEmits<{
  openPbePost: [post: PbeMeta]
  openRedditPost: [post: Post, index: number]
  openPatchPost: [post: PatchNotesMeta]
}>()

function openPost(e: PostType, index?: number) {
  if (!post.value) return
  const source = post.value?.source
  if (!source) return

  if (source === "reddit")
    emit("openRedditPost", post.value.post as Post, index as number)
  else if (source === "pbe") emit("openPbePost", post.value.post as PbeMeta)
  else if (source === "patch")
    emit("openPatchPost", post.value.post as PatchNotesMeta)
  else return null
}
</script>

<template>
  <UBlogPost
    variant="naked"
    as="button"
    orientation="horizontal"
    :title="toValue(post)?.title ?? ''"
    :description="toValue(post)?.description"
    :date="toValue(post)?.date"
    :authors="toValue(post)?.authors"
    :badge="{
      ...toValue(post).badge,
      size: 'xs',
      icon: 'i-hash',
      variant: 'solid',
      color: 'neutral',
      ui: {
        base: cn('inline-flex -translate-x-0.5 gap-px py-0.5!'),
        label: 'text-xs font-semibold',
        leadingIcon: cn('align-icon')
      }
    }"
    :ui="{
      root: cn(
        'pointer-events-auto! flex! h-full min-h-full max-w-320 cursor-pointer flex-row! flex-nowrap items-center gap-x-10 px-1! py-4! **:text-start'
      ),
      title: 'mb-2! tracking-tight group-hover/post:underline',
      image:
        'transition-scale duration-200 ease-out group-hover/post:scale-110',
      header: cn(
        'w-120 max-w-120 overflow-hidden rounded-3xl bg-neutral',
        toValue(post).variantHeader?.isVariant
          ? toValue(post).variantHeader?.class
          : ''
      ),
      body: cn('max-h-70 -translate-y-1 justify-start')
    }"
    :image="{
      fetchpriority: 'high',
      crossorigin: 'anonymous',
      loading: 'eager',
      src: (toValue(post).image as Partial<ImgHTMLAttributes>)?.src,
      preset: 'card'
    }"
    @click.stop.prevent="openPost(post.value.post, index)">
    <template v-if="toValue(post).variantHeader?.isVariant" #header>
      <component
        :is="toValue(post).variantHeader?.component"
        :title="toValue(post).title" />
    </template>

    <template
      v-if="(toValue(post).post as Post)?.metadata?.spoiler"
      #description>
      <PostSpoiler />
    </template>
  </UBlogPost>
</template>
