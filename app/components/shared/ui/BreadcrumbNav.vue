<script lang="ts" setup>
import type { HoverCardRootProps } from 'reka-ui'
import { HoverCardArrow } from 'reka-ui'

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
console.log('🌱 - parentRoutes:', parentRoutes)

function navigatePocket(target: 'champions' | 'items' | 'runes') {
  const route = useRoute('pocket-pocketKey-champions')
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
  return computed(() => ps().getPocket(pocketRoute.params.pocketKey)).value.name
})
</script>

<template>
  <Breadcrumb>
    <HoverCard
      v-model:open="open"
      :open-delay="0">
      <HoverCardTrigger as-child>
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
      </HoverCardTrigger>

      <LazyHoverPopContent
        align="start"
        :align-offset="-6"
        class="w-fit px-1 space-y-1"
        :side-offset="-1">
        <HoverCardArrow
          class="fill-black/10 dst translate-y-[1px]"
          :height="10"
          :width="16"
          rounded />
        <HoverCardArrow
          :height="10"
          :width="16"
          class="fill-b1 "
          rounded />

        <!-- tier 1 -->
        <ul class="menu xl:menu-horizontal *:min-w-54 rounded-box lg:min-w-max">
          <li>
            <Label class="capitalize">Home</Label>
            <ul>
              <Blink
                v-for="link in mainRoutes"
                :key="link.name"
                as="li"
                :to="link.path"
                variant="link"
                size="xs"
                class="capitalize text-2 font-normal px-3"
                @click="open = false">
                {{ link.meta?.title || link.name }}
              </Blink>
            </ul>
          </li>

          <!-- tier 2 -->
          <li v-if="parentRoutes?.length && route.meta?.parent != '/pocket'">
            <Label class="capitalize">{{ String(route.meta?.parent).replace('/', '') }}</Label>
            <ul>
              <Blink
                v-for="link in parentRoutes"
                :key="link.name"
                as="li"
                :to="link.path"
                variant="link"
                size="xs"
                class="capitalize text-2 font-normal px-3"
                @click="open = false">
                {{ link.meta?.title || link.name }}
              </Blink>
            </ul>
          </li>

          <li
            v-if="route.meta?.parent == '/pocket'"
            class="justify-start">
            <Label class="capitalize">Pocket</Label>
            <ul class="justify-start">
              <li
                v-for="link in parentRoutes.sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order)))"
                :key="link.name">
                <Button
                  :to="link.path"
                  variant="link"
                  size="xs"
                  class="capitalize text-left flex w-full !justify-start text-2 font-normal px-3"
                  @click="navigatePocket(link.meta?.title)">
                  {{ link.meta?.title || link.name }}
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </LazyHoverPopContent>
    </HoverCard>
  </Breadcrumb>
</template>