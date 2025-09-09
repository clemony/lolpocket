<script lang="ts" setup>
const open = ref(false)

const route = useRoute()
const router = useRouter()
const mainRoutes = computed (() => router.getRoutes().filter(r => r.meta.level == 1).sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order))))

const parentRoutes = computed (() => {
  const links = ref()
  if (!route.meta?.parent) {
    return
  }

  links.value = router.getRoutes().filter(r => r.meta.parent == route.meta.parent).filter(r => r.meta?.level != 0).sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order)))

  return links.value
})

function navigatePocket(target: 'champions' | 'items' | 'runes') {
  const route = useRoute()
  open.value = false

  navigateTo({
    name: `pocket-pocketKey-${target}`,
    params: { pocketKey: route.params.pocketKey },
  })
}

const pocketName = computed (() => {
  if (route.matched[0].path != '/pocket')
    return null

  const pocketRoute = useRoute('pocket-pocketKey-champions')
  return computed(() => ps().getPocket(String(pocketRoute.params.pocketKey))).value.name
})
</script>

<template>
  <Breadcrumb>
    <Button
      variant="ghost"
      size="xs"
      class="text-3 rounded-xl"
      as-child>
      <BreadcrumbList>
        <template v-if="route?.meta?.parent">
          <BreadcrumbItem
            class="hidden md:block">
            <BreadcrumbLink>
              <Blink
                :to="route?.meta?.parent"
                class="capitalize  opacity-40 font-medium hover:opacity-80 text-4 "
                variant="link"
                size="xs">
                {{ route?.meta?.parent?.toString().replace('/', '') }}
              </Blink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator
            class="hidden md:block" />
        </template>

        <template v-if="route.matched[0].meta?.parent == '/pocket'">
          <BreadcrumbItem class="opacity-50 font-medium">
            {{ pocketName || 'Pocket' }}
          </BreadcrumbItem>
          <BreadcrumbSeparator
            class="hidden md:block" />
        </template>

        <BreadcrumbItem>
          <BreadcrumbPage class="capitalize text-4">
            {{ route?.meta?.title ?? route?.name ?? '' }}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Button>
  </Breadcrumb>
</template>