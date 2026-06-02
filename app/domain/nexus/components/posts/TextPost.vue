<script lang="ts" setup>
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"

const { post, class: className } = defineProps<{
  post: Post
  class?: HTMLAttributes["class"]
}>()
const emit = defineEmits(["close"])
</script>

<template>
  <UPage
    v-auto-animate
    :class="
      cn(
        'pointer-events-auto relative mx-auto max-h-[inherit] w-full grow overflow-x-hidden **:[&_img]:overflow-hidden!',
        className
      )
    ">
    <div class="border-b border-b-pc px-0">
      <UPageHeader
        :title="post.title"
        :ui="{
          headline:
            'inline-flex h-4 w-full! grow items-center justify-between align-baseline',
          description: 'font-medium',
          container: '',
          root: 'mx-auto max-w-4xl border-0 px-12 pt-10'
        }">
        <template #headline>
          <ULink
            size="xs"
            :to="getSubRedditUrl(post.subreddit)"
            class="inline-flex h-5 w-full! grow! items-center justify-between align-baseline text-xs **:text-xs **:leading-5"
            @click.stop.prevent>
            <UAvatar
              src="/img/logos/lol-icon.webp"
              size="xs"
              :ui="{
                root: 'mr-2 bg-neutral',
                image: 'size-5! overflow-visible object-center'
              }" />
            <span class="inline-flex gap-1 align-baseline font-bold">
              {{ post.source }}
              {{ `/r/${post.subreddit}` }}
            </span>
            <span
              v-if="post.source_created_at"
              class="inline align-baseline font-medium text-n5">
              ・
              {{ useTimeAgo(post.source_created_at) }}
            </span>
            <Grow />
          </ULink>
        </template>
        <template #title>
          <ULink
            :to="post.permalink"
            class="group/link cursor-pointer font-serif text-[3rem]! font-bold tracking-tight underline decoration-pc/0 drop-shadow-sm transition-colors duration-200 hover:decoration-pc/80">
            {{ post.title }}
            <Icon
              name="i-external"
              class="ml-1 inline size-3.5 align-[0.7em] opacity-0 transition-opacity duration-200 group-hover/link:opacity-90" />
          </ULink>
        </template>

        <template #description>
          <UBadge
            size="xs"
            color="neutral"
            class="mr-3 -translate-y-px gap-0.75 justify-self-end pr-2.5 pl-1.5 font-semibold [&>svg]:size-3.5 [&>svg]:**:text-nc"
            icon="i-typcn-arrow-up-thick"
            :label="post.score" />
          <span
            v-if="post?.author"
            class="inline justify-self-end align-baseline leading-5 font-semibold"
            >{{ `u/${post.author}` }}</span
          >
        </template>
      </UPageHeader>
    </div>
    <div class="[container-type:scroll-state] sticky top-0 z-1 h-0">
      <div
        class="pointer-events-none flex h-14 max-h-0 w-full items-center justify-between bg-p2/80 pr-12 pl-4 opacity-0 backdrop-blur-md transition-all duration-200 stuck-top:pointer-events-auto stuck-top:max-h-14 stuck-top:opacity-100">
        <UUser
          size="xs"
          :ui="{ root: 'gap-3', name: 'truncate text-sm' }"
          :name="post.title"
          :avatar="uiRedditAvatar" />
        <UButton
          size="sm"
          color="neutral"
          :ui="{ label: 'text-xs font-semibold' }"
          :to="post.permalink"
          external
          label="View on Reddit"
          @click="$emit('close')" />
      </div>
    </div>

    <UPageBody class="mx-auto max-w-4xl px-12 pt-4 pb-12">
      <!--       <NuxtImg
          v-if="post.preview_image_url || post.thumbnail_url"
          :src="(post.preview_image_url || post.thumbnail_url) ?? undefined"
          :alt="post.title"
          fetchpriority="high"
          class="w-full rounded-3xl object-cover shadow-md drop-shadow-md"
          crossorigin="anonymous"
          loading="eager" /> -->
      <div
        v-if="post?.text"
        class="prose w-full! max-w-full space-y-0 text-lg text-pc select-text"
        v-html="post.text" />

      <p v-else-if="post?.excerpt">
        {{ post.excerpt }}
      </p>
    </UPageBody>

    <div>
      <UButton
        block
        external
        target="_blank"
        :to="post.permalink"
        size="xl"
        icon="i-chat"
        trailing-icon="i-link"
        color="neutral"
        :ui="{
          label: 'group-hover/btn:underline',
          leadingIcon: 'size-4',
          base: 'rounded-none pr-8 pl-12 ring-2 inset-ring-0 ring-neutral hover:bg-neutral/98!',
          trailingIcon: 'size-4 opacity-100'
        }"
        :label="`View ${post.num_comments} comments on Reddit`" />
    </div>
  </UPage>
</template>
