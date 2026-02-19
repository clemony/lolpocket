<script lang="ts" setup>
import { resolveSummoner } from "~/domain/summoner/resolveSummoner"
import { extractIdentifierFromRoute } from "~/domain/summoner/utils/extractIdentifierFromRoute"

definePageMeta({
  search: "hidden",
  layout: "tab",
})

const route = useRoute()
const championKey = computed(() => route.params?.championKey)

const session = sSession()
const lastResolvedKey = ref<string>("")

function extractIdentifierFromPath(path: string): Identifier | null {
  const matched = path.match(/^\/([^/]+)\/([^/]+)(?:\/|$)/)
  if (!matched) return null

  const region = matched[1]
  const slug = matched[2]
  if (!region || !slug) return null

  const sep = slug.lastIndexOf("_")
  if (sep <= 0 || sep >= slug.length - 1) return null

  const name = slug.slice(0, sep)
  const tag = slug.slice(sep + 1)
  if (!name || !tag) return null

  return {
    region: region.toLowerCase(),
    name: name.toLowerCase(),
    tag: tag.toLowerCase(),
  }
}

async function resolveFromRoute() {
  const identifier =
    extractIdentifierFromRoute(route) ?? extractIdentifierFromPath(route.path)
  if (!identifier) return

  try {
    const key = identifier.puuid
      ? `puuid:${identifier.puuid}`
      : `slug:${identifier.region}:${identifier.name}:${identifier.tag}`
    if (key === lastResolvedKey.value) return

    const summoner = await resolveSummoner(identifier)
    lastResolvedKey.value = key
    session.setSummoner(summoner)

    if (session.summoner) {
      sMatches().loadFromDB()
      sData().getMastery()
      sData().getTimelines()
    }
  } catch (err) {
    console.warn("Summoner resolution failed; keeping current route", err)
  }
}

watch(
  () => [route.params.region, route.params.slug, route.path] as const,
  async () => {
    await resolveFromRoute()
  },
  { immediate: true }
)

onBeforeMount(async () => {
  await resolveFromRoute()
})
</script>

<template>
  <NuxtPage :champion-key />
</template>
