<script lang="ts" setup>
import { generateSummonerLinks } from '~/utils/get/generateSummonerLinks'

defineOptions({
  meta: {
    name: 'Navigation',
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
    routes.find(r => r.path === '/faq'),
  ]
})
</script>

<template>
  <aside>
    <SidebarHeaderWrapper title="Navigation" />
    <div class="py-4 flex flex-col gap-2">
      <div class=" px-3 w-full">
        <BtnLink
          size="lg"
          variant="ghost"
          class="justify-between w-full"
          to="/nexus"
          @click="emit('close-sidebar')">
          <span class="font-bold dst text-6">Nexus</span>

          <SummonerIcon class="size-8 rounded-lg " />
        </BtnLink>
      </div>
      <div class=" px-6 w-full">
        <LinkGroupCollapse
          v-model:open="ui().collapseStates.panel.nav[0]"
          :i="0"
          :parent-route="summonerLinks" />
      </div>
      <div class="px-6 w-full">
        <LinkGroupCollapse
          v-for="parentRoute, i in navLinks"
          :key="parentRoute.name"
          v-model:open="ui().collapseStates.panel.nav[i + 1]"
          :i="i + 1"
          :parent-route />
      </div>
    </div>
  </aside>
</template>
