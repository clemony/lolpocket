<script setup lang="ts">
import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  group: ArrayOrNested<NavigationMenuItem>
}>()
const listClass =
  "flex flex-col gap-3 w-80 h-full  [&_li]:px-1 [&_li]:drop-shadow-sm"

const itemClass =
  "flex items-center font-medium gap-2 hover:underline-offset-2 hover:underline"
</script>

<template>
  <div class="grid auto-rows-max gap-6">
    <!--   <menu v-for="(nav, i) in group" :key="i">
      <h2 class="mb-1 capitalize ds-sm">
        {{ nav.label }}
      </h2>
      <UButton
        v-for="item in nav.children"
        :key="item?.label"
        size="sm"
        :to="item?.to"
        variant="link"
        :class="cn('capitalize', itemClass)">
        {{ item?.label }}
      </UButton>
    </menu> -->
  </div>
</template>
