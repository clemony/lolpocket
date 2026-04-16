<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { formatDate } from "@vueuse/core"
import { decode } from "html-entities"

const props = withDefaults(
  defineProps<
    BlogPostProps & {
      class?: HTMLAttributes["class"]
      size?: "md" | "lg"
    }
  >(),
  {
    size: "md",
    variant: "naked"
  }
)

const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

const { data, status, execute } = useFetch<PbeMeta>(
  () => `/cdn/meta/pbe_latest.json`,
  {
    baseURL: postalBaseUrl || undefined,
    server: false,
    lazy: true,
    immediate: false,
    key: () => `pbe-latest`
  }
)

const delegated = reactiveOmit(props, ["class"])

const sizes: Record<string, Record<string, HTMLAttributes["class"]>> = {
  md: {},
  lg: {
    header: "max-w-120"
  }
}

onMounted(async () => {
  execute()
})

const devIcon = /Development_nav_icon/

const isDevIcon = computed(() => {
  return data.value?.metadata.image
    ? devIcon.test(data.value.metadata.image)
    : false
})

const src = computed<string | undefined>(
  () =>
    (!isDevIcon.value ? data.value?.metadata.image : undefined) as
      | string
      | undefined
)
</script>

<template>
  <UBlogPost
    v-if="data"
    v-bind="delegated"
    :badge="{
      label: data.wikiLastModified
        ? `Updated ${formatDate(new Date(data.wikiLastModified), 'MMM d, YYYY')}`
        : undefined,
      size: 'sm',
      variant: 'solid',
      color: 'neutral',
      ui: {
        base: '-translate-x-0.5',
        label: '  text-xs'
      }
    }"
    :ui="{
      root: cn('group group/post h-full min-h-full max-w-260', props?.class),
      header: cn(
        sizes[props.size]?.header,
        isDevIcon || !src ? 'grid place-items-center bg-neutral!' : ''
      ),
      image: isDevIcon || !src ? 'scale-50 group-hover/post:scale-80' : ''
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
    :image="{
      fetchpriority: 'high',
      crossorigin: 'anonymous',
      loading: 'eager',
      src,
      preset: 'card'
    }"
    :description="
      decode(data.metadata.description) ??
      'It seems we lost the wiki link. We\'ll attempt to turn the router off and on.'
    ">
    <template v-if="isDevIcon || !src" #header>
      <Icon
        name="i-lp-dev-icon"
        class="transition-scale z-2! size-40 text-nc duration-200 ease-out group-hover/post:scale-140" />
    </template>
  </UBlogPost>
</template>
