<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { items: i, links } = defineProps<{
  links?: RouteRecordRaw[]
  items?: DataObject[]
  isCollapsed: boolean
}>()

const route = useRoute()
</script>

<template>
  <div
    :data-collapsed="isCollapsed"
    class="group flex flex-col w-full gap-4 py-3 data-[collapsed=true]:py-2">
    <nav
      class="grid gap-1 px-2 data-[collapsed=true]:justify-center w-full">
      <BtnLink
        v-for="link of links"
        :key="link.name"
        :to="`/${link.path}`"
        :size="isCollapsed ? 'icon' : 'lg'"
        variant="ghost"
        :class="
          cn(
            'capitalize text-3 rounded-md !font-medium ',
            { 'btn-active border-b3/60 shadow-xs': route.path === link.path, 'w-full px-4 justify-start  !gap-3 ': !isCollapsed },
          )
        ">
        <icon
          :name="String(link.meta.icon)"
          class="size-4.5 **:stroke-1.2" />
        <span v-show="!isCollapsed">
          {{ link.meta?.title || link.name }}
        </span>
        <!--
        <BoxCountBadge
          v-if="link.meta?.parent === '/backpack'"
          :name="String(link.name)" /> -->
      </BtnLink>
    </nav>
  </div>
</template>
