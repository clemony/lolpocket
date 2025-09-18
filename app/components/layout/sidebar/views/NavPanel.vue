<script lang="ts" setup>
import { generateSummonerLinks } from '~/utils/get/generateSummonerLinks'

const emit = defineEmits(['close-sidebar'])
const route = useRoute()
const routes = useRouter().getRoutes()
const summonerLinks = computed(() => {
  if (!as().account?.name)
    return null
  else return generateSummonerLinks(as().account) as any
})
console.log('🌱 - summonerLinks:', summonerLinks)

const navLinks = computed(() => {
  return [
    {
      name: 'backpack',
      links: routes.find(r => r.path == '/backpack').children,
    },
    {
      name: 'library',
      links: routes.find(r => r.path == '/library').children,
    },
    {
      name: 'tools',
      links: routes.find(r => r.path == '/tools').children,
    },
    {
      name: 'faq',
      links: routes.find(r => r.path == '/faq').children,
    },
  ]
})
const links = computed(() => {
  if (!summonerLinks.value)
    return navLinks.value
  else
    return [...navLinks.value].reverse().concat(summonerLinks.value).reverse()
})
console.log('🌱 - links:', links)
</script>

<template>
  <aside>
    <SidebarHeaderWrapper title="Navigation" />
    <div class="px-6 py-4 flex flex-col gap-4">
      <Blink
        size="lg"
        variant="ghost"
        class="order-first -ml-3 justify-start w-full"
        to="/nexus"
        @click="emit('close-sidebar')">
        <span class="font-bold dst text-xl">nexus</span>
      </Blink>
      <Collapsible
        v-for="(group, i) in links"
        :key="group.name"
        v-model:open="ui().collapseStates.panel.nav[i]"
        class="pr-2">
        <CollapsibleTrigger as-child>
          <Label class="my-1 gap-4 items-center">
            <span
              v-if="links && i == 0"
              class="size-6 grid place-items-center relative">
              <SummonerIcon class="size-7 rounded-full absolute" />
            </span>
            <span class="grow text-6 capitalize font-bold dst">
              {{ group.name }}
            </span>

            <CaretRotate />
          </Label>
        </CollapsibleTrigger>

        <CollapsibleContent
          class="after:top-3 mt-2 pt-1 gap-1 relative flex flex-col justify-items-center"
          menu>
          <Blink
            v-for="link in group.links"
            :key="link?.name"
            :to="link.path"
            variant="ghost"
            size="lg"
            :class="
              cn(
                ' flex-nowrap overflow-hidden hover:!text-bc gap-2.75 pl-4 w-full !duration-0 !text-bc/60 h-10 text-sm capitalize text-nowrap justify-start',
                { 'btn-active': route.name == link.name },
              )
            "
            @click="emit('close-sidebar')">
            {{ link.meta?.title || link.name }}
          </Blink>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </aside>
</template>
