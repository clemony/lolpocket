<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const { childRoutes } = useHandleSummoner()
</script>

<template>
  <NavigationMenu
    class="fixed top-1/3 left-64 h-90 ">
    <NavigationMenuList
      class="w-17 border border-b3 py-3.5 rounded-full bg-b1/86 backdrop-blur-lg gap-2 justify-center flex-col shadow-warm">
      <NavigationMenuItem as-child>
        <HoverCard>
          <HoverCardTrigger
            as-child>
            <SummonerIcon
              :summoner
              class="rounded-full size-full size-12 cursor-pointer hover:ring-2 ring-b4 data-[state=open]:ring-2" />
          </HoverCardTrigger>
          <HoverPopContent
            side="right"
            :side-offset="10"
            :align-offset="-8"
            align="start"
            class="w-50 shadow-warm-soft  rounded-xl max-w-60 ">
            <HoverCardArrow
              :height="11"
              :width="19"
              class="fill-b3 ml-1"
              rounded />
            <HoverCardArrow
              :height="10"
              :width="18"
              class="fill-b1 ml-1"
              rounded />
            <SummonerName
              as="h2"
              class="font-serif font-black px-1 leading-snug truncate" />

            <div class="flex w-full px-1 gap-3 justify-self-center justify-between items-center">
              <span class="gap-3 flex items-center">
                <SummonerTag />

                <SummonerRegion />
              </span>
              <SummonerLevel />
            </div>
            <Separator class="my-2 bg-b3" />
            <SummonerToolbar
              :summoner
              class="p-1 grid grid-cols-3  gap-1 " />
          </HoverPopContent>
        </HoverCard>
      </NavigationMenuItem>

      <LazyNavigationMenuViewport />

      <NavigationMenuItem
        v-for="item in childRoutes"
        :key="item.name"
        v-tippy="{ content: item.name, placement: 'right', offset: [0, 14], arrow: false, theme: 'basic', contentClass: 'font-medium capitalize' }">
        <NavMenuLink
          size="lg"
          shape="circle">
          <hicon
            :name="String(item.meta?.icon)"
            class="size-6 absolute object-center place-self-center"
            :class="cn('', item.meta?.iconStyle ?? null)" />
        </NavMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>