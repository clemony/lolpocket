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
    path: r.path,
    meta: r.meta,
  }))
}

// Example:
const chain = computed (() => getRouteChain(route.fullPath))
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList
      :key="route.fullPath"
      class="px-3">
      <template
        v-for="link, i in chain"
        :key="link.name">
        <BreadcrumbItem class="hidden md:block not-last:opacity-60 hover:*:first:opacity-90">
          <BreadcrumbLink as-child>
            <ULink
              v-if="link.name == 'pocket'"
              to="/backpack"
              class="capitalize  font-medium transition-all   text-4 ">
              Backpack
            </ULink>
            <ULink
              v-else-if="link.meta.level != 0 && link.path != route.path"
              :to="String(link.path)"
              class="capitalize  font-medium transition-all   text-4 ">
              {{ link.meta?.title || link.name }}
            </ULink>
            <span
              v-else
              class=" font-medium capitalize text-4">
              {{ link.name == 'champion_key' ? ix().champNameByKey(String(route.params.champion_key)) : link.name == 'pocket_key' ? ps().getPocket(String(route.params.pocket_key)).name : link.meta?.title || link.name }}
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator
          v-if="i != chain.length - 1"
          class="hidden md:block" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>