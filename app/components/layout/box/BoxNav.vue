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
    class="group flex flex-col gap-4 pt-1 data-[collapsed=true]:py-2">
    <nav
      class="grid gap-1 px-3 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <BtnLink
        v-for="link of links"
        :key="link.name"
        :to="`/${link.path}`"
        :size="isCollapsed ? 'icon' : 'md'"
        variant="ghost"
        :class="
          cn(
            'justify-start capitalize text-sm rounded-md px-4 !font-medium max-h-9',
            { 'btn-active': route.path === link.path },
          )
        ">
        <icon
          :name="String(link.meta.icon)"
          class="mr-2 size-4.5 **:stroke-1.2" />
        {{ link.meta?.title || link.name }}

        <BoxCountBadge
          v-if="link.meta?.parent === '/backpack'"
          :name="String(link.name)" />
      </BtnLink>
    </nav>
  </div>
</template>
