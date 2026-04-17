<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { postAuthorUi, postBadge } from "./post_props"

const props = withDefaults(
  defineProps<
    BlogPostProps & {
      patch: string | undefined
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: "naked"
  }
)

const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

const { data, status, execute } = useFetch<PatchNotesMeta>(
  () => `/cdn/meta/patch_latest.json`,
  {
    baseURL: postalBaseUrl || undefined,
    server: false,
    lazy: true,
    immediate: false,
    key: () => `patch-notes-${props.patch}`
  }
)

const delegated = reactiveOmit(props, ["patch", "class"])

onMounted(async () => {
  execute()
})
</script>

<template>
  <UBlogPost
    v-if="data"
    v-bind="delegated"
    :badge="postBadge('Official')"
    :ui="{
      body: 'h-full',
      root: cn('h-full min-h-full', props?.class),
      image: '',
      title: 'cursor-pointer group-hover:underline'
    }"
    :title="data.metadata.title ?? 'Patch notes not found.'"
    :date="data.metadata.date ?? ''"
    :to="data.url"
    external
    :preload="{ fetchPriority: 'high' }"
    loading="eager"
    target="_blank"
    :authors="[
      {
        name: data.metadata.author ?? '',
        description: 'Riot Games',
        size: 'xs',
        avatar: {
          icon: 'i-riot',
          loading: 'lazy',
          ui: {
            root: 'bg-neutral **:text-nc!',
            icon: 'size-3.5 -translate-x-[0.5px]'
          }
        },
        ui: postAuthorUi
      }
    ]"
    :image="data?.metadata.image || undefined"
    :description="
      data.metadata.description ??
      'It seems we lost the patch data. We\'ll attempt to turn the router off and on.'
    " />
</template>
