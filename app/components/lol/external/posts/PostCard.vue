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
      <div
        class="flex h-16 w-full shrink items-center justify-center rounded-xl border border-p3/80">
        <UTooltip
          arrow
          :interactive="true"
          :ui="{ content: 'h-max! max-w-56 flex-col space-y-2 pb-0.75' }">
          <template #default="{ open }">
            <UBadge
              :active="open"
              color="base"
              size="sm"
              variant="outline"
              label="Spoiler"
              :ui="{
                base: cn(
                  'bg-p0 px-4 fx-1 hover:bg-neutral hover:text-nc hover:inset-ring-n2',
                  {
                    'bg-neutral text-nc inset-ring-n2': open
                  }
                )
              }" />
          </template>

          <template #content>
            <p class="px-1.5 pt-2 text-pretty break-all hyphens-auto">
              This post contains spoilers and preview is currently <br />hidden.
              Manage visibility in News Feed settings.
            </p>
            <div class="flex w-full justify-center">
              <UButton
                label="Settings"
                icon="i-ic-sharp-settings"
                block
                size="xs"
                :ui="{
                  base: 'justify-center! gap-1 text-center!',
                  label: 'grow-0 text-xs font-bold',
                  leadingIcon: '-ml-2 size-3.5'
                }" />
            </div>
          </template>
        </UTooltip>
      </div>
    </template>
  </UBlogPost>
</template>
