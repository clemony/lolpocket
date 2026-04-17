import { LazyPostIconHeader, LazyQuoteHeader } from "#components"
import type { BadgeProps } from "@nuxt/ui"
import { decode } from "html-entities"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"
import { patchIndex } from "~~/shared/constants/patch-index"
import type { BuiltPost } from "./post.types"
import { patchAuthor, pbeAuthor, postAuthorUi } from "./post_props"

const devIcon = /Development_nav_icon/

const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

const {
  data,
  status,
  execute,
  refresh: pbeRefresh
} = useFetch<PbeMeta>(() => `/cdn/meta/pbe_latest.json`, {
  baseURL: postalBaseUrl || undefined,
  server: false,
  lazy: true,
  immediate: false,
  key: () => `pbe-latest`
})

export const buildPbePost = (opt?: {
  forceRefresh: boolean
}): Ref<BuiltPost> => {
  if (!data.value) execute()
  if (opt?.forceRefresh) pbeRefresh()
  const post = computed<PbeMeta>(() => safeObject(data.value))

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
  return computed(() =>
    safeObject({
      title: "PBE Changes",
      badge: {
        label: "PBE"
      },
      date: post.value.wikiLastModified
        ? `Updated ${useTimeAgo(post.value.wikiLastModified).value}`
        : undefined,
      authors: pbeAuthor,
      description: post.value?.metadata?.description
        ? decode(post.value.metadata.description)
        : undefined,
      image: {
        src: src.value ?? undefined
      },
      variantHeader: {
        component: LazyPostIconHeader,
        isVariant: !isDevIcon.value,
        class: "size-full  grid place-items-center"
      },
      source: "pbe",
      post: post.value
    })
  )
}

export const buildRedditPost = (post: Post): Ref<BuiltPost> => {
  const image = computed(() => post.preview_image_url || post.thumbnail_url)
  const useAlt = computed(() => !post?.metadata?.isVideo && !image.value)
  return computed(() =>
    safeObject({
      title: post.title,
      date: useTimeAgo(post.source_created_at).value,
      badge: {
        label: post?.flair ? post.flair : undefined
      },
      authors: [
        {
          name: post?.subreddit ? `/r/${post.subreddit}` : undefined,
          description: post?.author ? `/u/${post.author}` : undefined,
          avatar: uiRedditAvatar,
          ui: postAuthorUi,
          size: "xs"
        }
      ],
      image: {
        src: image.value ?? undefined
      },
      description: decode(
        post.excerpt?.toString().length ? post.excerpt : undefined
      )
        .replace(/#+/g, "")
        .replace(/([a-z]+\s\|)+/gi, ""),
      variantHeader: {
        component: defineAsyncComponent(
          () => import("~/components/lol/external/posts/QuoteHeader.vue")
        ),
        class:
          "relative flex flex-col h-70 w-120 p-4 origin-bottom items-end justify-end  text-start ",
        isVariant: useAlt.value
      },
      source: "reddit",
      post
    })
  )
}

const {
  data: patch,
  status: patchStatus,
  execute: patchExecute,
  refresh: patchRefresh
} = useFetch<PatchNotesMeta>(() => `/cdn/meta/patch_latest.json`, {
  baseURL: postalBaseUrl || undefined,
  server: false,
  lazy: true,
  immediate: false,
  key: () => `patch-notes-${patchIndex[0]}`
})

export const buildPatchPost = (opt?: {
  forceRefresh: boolean
}): Ref<BuiltPost> => {
  if (!patch.value) patchExecute()
  if (opt?.forceRefresh) patchRefresh()
  console.log("🥸 - buildPatchPost - patch:", patch)
  return computed(() =>
    safeObject({
      title: patch.value?.metadata?.title ?? "Patch notes not found.",
      date: useTimeAgo(String(patch.value?.metadata?.date)).value,
      badge: {
        label: "Official"
      },
      authors: patch.value?.metadata?.author
        ? [patchAuthor(patch?.value.metadata?.author)]
        : [],
      image: {
        src: patch.value?.metadata?.image ?? undefined
      },
      description: decode(patch.value?.metadata?.description ?? undefined),
      source: "patch",
      post: patch.value as PatchNotesMeta
    })
  )
}
