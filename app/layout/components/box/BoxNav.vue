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
    class="group flex w-full flex-col gap-4 py-3 data-[collapsed=true]:py-2">
    <nav
      class="grid w-full gap-1 px-2 data-[collapsed=true]:justify-center">
      <BtnLink
        v-for="link of links"
        :key="link.name"
        :to="{ name: link.name }"
        :size="isCollapsed ? 'icon' : '11'"
        variant="ghost"
        :class="
          cn('rounded-md text-3 font-medium! capitalize', {
            'btn-active border-b3/60 shadow-xs': route.path === link.path,
            'w-full px-4 justify-start  !gap-3 ': !isCollapsed,
          })
        ">
        <icon
          :name="String(link.meta.icon)"
          class="**:stroke-1.2 size-4.5" />
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
