<script lang="ts" setup>
const open = ref(false)

const route = useRoute()
const router = useRouter()

function navigatePocket(target: 'champions' | 'items' | 'runes') {
  const route = useRoute()
  open.value = false

  navigateTo({
    name: `pocket-pocketKey-${target}`,
    params: { pocketKey: route.params.pocket_key },
  })
}

function getRouteChain(path: string) {
  const resolved = router.resolve(path)
  return resolved.matched.map(r => ({
    name: r.name,
    meta: r.meta,
    path: r.path,
  }))
}

// Example:
const chain = computed(() => getRouteChain(route.fullPath))
</script>

<template>
  <Breadcrumb
    v-if="!route.path.match(/summoner.*/)"
    class="z-11">
    <BreadcrumbList
      :key="route.fullPath"
      class="px-3">
      <div
        v-if="
          ['summoner', 'pocket', 'champions'].includes(String(chain[0].name))
        "
        id="breadcrumb-1"
        class="breadcrumb-1"></div>
      <template v-else>
        <template
          v-for="(link, i) in chain"
          :key="link.name">
          <template v-if="link.meta?.title !== 'Overview'">
            <BreadcrumbSeparator
              v-if="i !== 0"
              class="hidden md:block" />
            <BreadcrumbItem
              class="group hidden md:block">
              <BreadcrumbLink as-child>
                <ULink
                  v-if="!link.meta?.search && link.path !== route.path"
                  :to="String(link.path)"
                  class="
                    text-lg font-medium capitalize transition-all
                    not-group-last-of-type:opacity-60
                    not-group-last-of-type:hover:opacity-90
                  ">
                  {{ link.meta?.title || link.name }}
                </ULink>
                <span
                  v-else
                  class="
                    text-lg font-medium capitalize
                    not-group-last-of-type:opacity-60
                    not-group-last-of-type:hover:opacity-90
                  ">
                  {{
                    link.name === "champion_key"
                      ? ix().champNameByKey(String(route.params.champion_key))
                      : link.name === "pocket_key"
                        ? ps().getPocket(String(route.params.pocket_key)).name
                        : link.meta?.title || link.name
                  }}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </template>
        </template>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
