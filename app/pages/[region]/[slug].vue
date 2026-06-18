<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import type { RouteRecordNormalized } from "vue-router"
import { resolveSummoner } from "~/domain/summoner/composables/resolveSummoner"
import {
  extractIdentifierFromRoute,
  extractIdentifierFromSlug,
} from "~/domain/summoner/utils/extractIdentifierFromRoute"

definePageMeta({
  search: false,
  layout: false,
  name: "summoner-profile",
  command: defineAsyncComponent(
    () =>
      import("~/domain/app/components/navigation/sidebar/ui/SummonerCommand.vue")
  ),
})

const route = useRoute("summoner-profile")
const championKey = computed(() => route.params?.championKey)

const session = sSession()
const lastResolvedKey = ref<string>("")

function extractIdentifierFromPath(path: string): Identifier | null {
  const matched = path.match(/^\/([^/]+)\/([^/]+)(?:\/|$)/)
  if (!matched) return null

  const region = matched[1]
  const slug = matched[2]
  if (!region || !slug) return null

  return extractIdentifierFromSlug(region, slug)
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

const router = useRouter()

const routes = computed<TabsItem[]>(() => [
  ...(router
    .getRoutes()
    .filter((r) => r.name === "summoner-profile")[0]
    ?.children.filter((r) => r.path.split("/").length <= 1)
    .sort((a, b) => Number(a.meta?.order) - Number(b.meta?.order))
    .map((r) => ({
      label: String(r.meta?.title) || String(r.name),
      value: String(r.name),
      ...r,
    }))
    .filter(Boolean) as TabsItem[]),
  {
    label: "Pockets",
    value: "username-tag-pockets",
    ...router.getRoutes().filter((r) => r.name === "username-tag-pockets")[0],
  },
])
</script>

<template>
  <div class="w-full">
    <NuxtLayout :routes name="tab">
      <NuxtPage :champion-key />
    </NuxtLayout>
  </div>
</template>
