<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { formatDate } from "@vueuse/core"
import { decode } from "html-entities"

const props = withDefaults(
  defineProps<
    BlogPostProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: "naked"
  }
)

const { data, status, execute } = useFetch<PbeMeta>(
  () => `/cdn/meta/pbe_latest.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `pbe-latest`
  }
)

const delegated = reactiveOmit(props, ["class"])

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
    :badge="{
      label: data.wikiLastModified
        ? `Update ${formatDate(new Date(data.wikiLastModified), 'MMM d, YYYY')}`
        : undefined,
      size: 'xs',
      variant: 'solid',
      color: 'neutral',
      ui: {
        base: '-translate-x-0.5',
        label: '  text-xs'
      }
    }"
    :ui="{
      root: cn('group group/post h-full min-h-full', props?.class),
      image: ''
    }"
    title="PBE Changes"
    :to="data.url"
    external
    :authors="[
      {
        name: 'Official Lol Wiki',
        description: 'contributors',
        size: 'xs',
        avatar: {
          src: '/img/logos/wiki.webp',
          ui: {
            image: 'scale-80',
            root: 'bg-[#0a323d]'
          }
        }
      }
    ]"
    target="_blank"
    :image="src"
    :description="
      decode(data.metadata.description) ??
        'It seems we lost the wiki link. We\'ll attempt to turn the router off and on.'
    " />
</template>
