<script lang="ts" setup>
import { motion } from 'motion-v'
import { useSidebar } from '~/base/sidebar/sidebar-index'

const { summoner } = defineProps<{
  summoner: Summoner
}>()
const { childRoutes } = useHandleSummoner()
console.log('childRoutes: ', childRoutes)

const {
  state,
  open,
  setOpen,
  openMobile,
  setOpenMobile,
  isMobile,
  toggleSidebar,
} = useSidebar()

const dropdownOpen = ref(false)
</script>

<template>
  <Sidebar
    v-if="summoner"
    as-child
    class="border-b3/80 !bg-tint-b2/60  shadow-warm-soft overflow-hidden pb-3 z-9">
    <motion.div
      class="size-full relative"
      @hover-start="event => { open = true }"
      @hover-end="event => { open = false }">
      <SidebarHeader
        class="flex pt-16 "
        as-child>
        <!--
        <MiniSummonerMenu
          v-if="!open"
          :summoner
          disable-link
          side="left"
          align="start">
          <SidebarMenuButton
            class="mx-auto"
            size="icon">
            <icon
              name="more"
              class="opacity-60 group-hover/dd:opacity-100 group-data-[state=open]/dd:opacity-100" />
          </SidebarMenuButton>
        </MiniSummonerMenu> -->
        <SidebarGroupLabel class=" pt-4 pb-3 px-3 tracking-tight">
          Summoner Profile
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator
          v-show="open"
          class="mx-0 mb-0" />
        <SidebarGroup>
          <SidebarMenuItem
            id="id-menu">
            <SidebarMenuButton
              v-if="!open"
              size="icon"
              :class="cn('border-0 !p-0 ml-0')">
              <SummonerIcon :summoner />
            </SidebarMenuButton>
            <SummonerCard
              v-show="open"
              :summoner />
          </SidebarMenuItem>
        </SidebarGroup>

        <SidebarSeparator
          v-show="open"
          class="mx-0 mt-0" />
        <SummonerToolbar
          v-show="open"
          :summoner
          sidebar />

        <SidebarGroup
          v-show="!open"
          class="space-y-2">
          <SidebarMenuButton
            size="icon">
            <icon
              name="ph:heart-straight-fill"
              class="  opacity-60" />
          </SidebarMenuButton>
          <SidebarMenuButton
            size="icon">
            <icon
              name="mingcute:refresh-2-line"
              class="size-5" />
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarSeparator
          v-show="open"
          class="mx-0" />

        <!-- riot api group -->

        <SidebarGroup v-if="childRoutes">
          <SidebarGroupLabel class="text-3 gap-3">
            <!--        <icon name="tdesign:api" /> -->
            API
          </SidebarGroupLabel>

          <!-- open menu -->

          <SidebarMenu
            class="">
            <SidebarMenuItem
              v-for="item in childRoutes"
              :key="item.name">
              <ItemSidebarMenuButton
                :class="cn('', { '[&_svg]:!size-6': item.name == 'history' && !open })"
                :item="item"
                full
                size="lg" />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>LP</SidebarGroupLabel>
          <SidebarMenu></SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SearchWrapper class="h-12 [&_button]:opacity-0 ">
          <input class="size-full " />
        </SearchWrapper>
      </SidebarFooter>
      <SidebarRail />
    </motion.div>
  </Sidebar>
</template>