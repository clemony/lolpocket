<script lang="ts" setup>
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const routes = useRouter().getRoutes()

const { close } = useAppSidebar()

const nav = computed<RouteRecordRaw[]>(() => routes.find(r => r.path === '/support').children)
</script>

<template>
  <Collapsible :default-open="false">
    <CollapsibleTrigger
      class="
              text-bc/50 hover:text-bc! flex h-10 w-full flex-nowrap items-center
              justify-start gap-3.25! overflow-hidden pr-1 pl-1.5 font-medium
              text-nowrap capitalize duration-0! hover:underline
            ">
      <span class="relative grid size-4.5 shrink-0 place-items-center">
        <CaretRotate
          direction="right"
          class="size-5!" />
      </span>
      Policies & Terms
      <Grow />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="
              relative mt-1 flex flex-col justify-items-center gap-1 pl-px
              after:top-3
            "
      menu>
      <SidebarBtnLink
        v-for="route in nav"
        :key="route.name"
        :to="route"
        @click="close()" />
    </CollapsibleContent>
  </Collapsible>
</template>