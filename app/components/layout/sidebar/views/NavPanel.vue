<script lang="ts" setup>
import { generateSummonerLinks } from '~/utils/get/generateSummonerLinks'

defineOptions({
  meta: {
    name: 'lolpocket',
    class: 'size-5.5',
    icon: 'compass',
  },
})

const emit = defineEmits(['close-sidebar'])
const routes = useRouter().getRoutes()
const summonerLinks = computed(() => {
  if (!as().account?.name)
    return null
  else return generateSummonerLinks(as().account) as any
})

const navLinks = computed(() => {
  return [
    routes.find(r => r.path === '/backpack'),
    routes.find(r => r.path === '/library'),
    routes.find(r => r.path === '/tools'),
    routes.find(r => r.path === '/support')
  ]
})
</script>

<template>
  <aside>
    <SidebarHeaderWrapper title="Navigation" />
    <div class="py-4 flex flex-col gap-2">
      <div class=" px-3 w-full">
        <SidebarBtnLink item="nexus" />
      </div>
      <div class="px-6 mt-1 space-y-3 w-full">
        <Collapsible
          v-model:open="ui().collapseStates.panel.nav[0]"
          class="pr-2">
          <CollapsibleTrigger
            class="my-1 py-1 gap-2 w-full text-start group/summoner focus-visible:outline-0 items-center">
            <SummonerIcon class="size-6 rounded-full grayscale" />
            <SummonerName class="font-semibold group-hover/summoner:underline" />
            <SummonerTag class="grow text-2  font-medium  opacity-50" />

            <CaretRotate />
          </CollapsibleTrigger>

          <CollapsibleContent
            class="after:top-3 gap-1 relative flex flex-col justify-items-center"
            menu>
            <SidebarBtnLink
              v-for="child in summonerLinks?.children"
              :key="child?.name"
              :item="child" />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          v-for="parentRoute, i in navLinks"
          :key="parentRoute.name"
          v-model:open="ui().collapseStates.panel.nav[i + 1]"
          :i="i + 1"
          class="pr-2">
          <CollapsibleTrigger
            class="mt-1 gap-4 w-full text-start hover:underline py-1 hover:*:text-bc/80 focus-visible:outline-0 items-center">
            <span class="grow text-2 capitalize font-bold text-bc/50">
              {{ parentRoute?.meta?.title || parentRoute?.name }}
            </span>

            <CaretRotate />
          </CollapsibleTrigger>

          <CollapsibleContent
            class="after:top-3 gap-1 relative flex flex-col justify-items-center"
            menu>
            <SidebarBtnLink
              v-for="child in parentRoute?.children.sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
              :key="child?.name"
              :item="child" />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </aside>
</template>
