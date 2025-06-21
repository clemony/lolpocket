<script lang="ts" setup>
const { routes, class: className } = defineProps<{
  routes: any
  class?: HTMLAttributes['class']
}>()

const route = useRoute()
</script>

<template>
  <MenubarContent align="end" class="min-w-72 **:!text-3 px-1 py-2  w-full t **:font-medium">
    <MenubarGroup v-for="section in routes" :key="section.name" class="mb-1">
      <MenubarLabel class="flex gap-3 items-center !tracking-normal text-bc pointer-events-none">
        <icon v-if="section.icon" :name="section.icon" :class="section.iconClass" />
        {{ section.name }}
      </MenubarLabel>

      <MenubarGroup :class="cn(className)" class="space-y-1">
        <MenubarItem v-for="item in section.items" :key="item.name" :class="{ 'bg-b2/40': route.path == item.route }" @click="navigateTo(item.route)">
          <component :is="`i-${item.icon}`" v-if="item.icon" :class="item.iconClass" />
          {{ item.name }}
        </MenubarItem>
      </MenubarGroup>
    </MenubarGroup>

    <slot />
  </MenubarContent>
</template>