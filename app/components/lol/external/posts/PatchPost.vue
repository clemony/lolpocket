<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { postAuthorUi, postBadge } from "./postProps"

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

const { data, status, execute } = useFetch<PatchNotesMeta>(
  () => `/cdn/meta/patch-notes/${props.patch}.json`,
  {
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

const img = useImage()

const src = computed(() =>
  img(data.value?.metadata.image ?? "", {
    width: 400,
    height: 300,
    quality: 50,
    format: "webp"
  })
)
</script>

<template>
  <UBlogPost
    v-if="data"
    v-bind="delegated"
    :badge="postBadge('riot official')"
    :ui="{
      root: cn('group group/post h-full min-h-full', props?.class),
      image: '',
      title: 'cursor-pointer group-hover:underline'
    }"
    :title="data.metadata.title ?? 'Patch notes not found.'"
    :date="data.metadata.date ?? ''"
    :to="data.url"
    external
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
    :image="src"
    :description="
      data.metadata.description ??
      'It seems we lost the patch data. We\'ll attempt to turn the router off and on.'
    " />
</template>
