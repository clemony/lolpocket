<script lang="ts" setup>
import type { PageLinkRouteItem } from "~/types/route.types"

const { useRouteGroups } = routeStore()

const { tools, nexus } = safeObject(useRouteGroups().value)

const links = computed(() => [
  {
    title: "Base",
    links: nexus?.items as PageLinkRouteItem[],
  },
  {
    title: "Tools",
    links: tools?.items as PageLinkRouteItem[],
  },
])
</script>

<template>
  <UFooter
    :ui="{
      root: 'relative z-0 flex grow flex-col bg-secondary pb-0 before:size-full',
      top: 'mx-auto h-130 grow overflow-hidden',
      bottom: 'h-30 justify-self-end p-0',
    }">
    <template #top>
      <UFooterColumns
        :ui="{
          root: 'mx-auto flex w-(--ui-container)',
          left: 'basis-2/3 space-y-6',
        }">
        <template #left>
          <div class="grid w-full grid-cols-2">
            <div>
              <UPageLinks
                v-for="(v, i) in links"
                :key="i"
                v-bind="v"
                :ui="{
                  list: 'flex flex-col items-start gap-4',
                  linkLabel:
                    'justify-start font-medium text-pc capitalize group-hover/link:underline',
                }" />
            </div>
            <div>
              <UPageLinks
                v-for="(v, i) in links"
                :key="i"
                v-bind="v"
                :ui="{
                  list: 'flex flex-col items-start gap-4',
                  linkLabel:
                    'justify-start font-medium text-pc capitalize group-hover/link:underline',
                }" />
            </div>
          </div>
        </template>
        <template #right>
          <UInput />
        </template>
      </UFooterColumns>
    </template>
    <template #bottom>
      <SiteFooterEnd class="h-30 pb-4" />
    </template>
  </UFooter>
</template>
