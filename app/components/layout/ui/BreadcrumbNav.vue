<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'

const route = useRoute()
const router = useRouter()
const mainRoutes = computed (() => router.getRoutes().filter(r => r.meta.level == 1).sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order))))

const parentRoutes = computed (() => {
  if (!route.meta?.parent)
    return
  return router.getRoutes().filter(r => r.meta.parent == route.meta.parent).sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order)))
})
console.log('🌱 - parentRoutes:', parentRoutes)
</script>

<template>
  <Breadcrumb>
    <HoverCard>
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
                {{ ps().getPocket(String(route.params.pocketKey)).name || 'Pocket' }}
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
        :align-offset="0"
        class="w-fit px-1 space-y-1"
        :side-offset="-2">
        <HoverCardArrow
          class="fill-black/10 dst translate-y-px"
          :height="10"
          :width="16"
          rounded />
        <HoverCardArrow
          :height="10"
          :width="16"
          class="fill-b1"
          rounded />

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
                class="capitalize text-2 font-normal px-3">
                {{ link.meta?.title || link.name }}
              </Blink>
            </ul>
          </li>
          <li v-if="parentRoutes?.length">
            <Label class="capitalize">{{ String(route.meta?.parent).replace('/', '') }}</Label>
            <ul>
              <Blink
                v-for="link in parentRoutes"
                :key="link.name"
                as="li"
                :to="link.path"
                variant="link"
                size="xs"
                class="capitalize text-2 font-normal px-3">
                {{ link.meta?.title || link.name }}
              </Blink>
            </ul>
          </li>
        </ul>
      </LazyHoverPopContent>
    </HoverCard>
  </Breadcrumb>
</template>