<script lang="ts" setup>
const route = useRoute()

const { routes, class: className } = defineProps<{
routes: any
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <MenubarContent align="end" class="min-w-64 **:!text-3 p-2">
    <ul class="menu p-0 w-full [&_a]:tracking-tight [&_a]:font-medium">
      <li v-for="section in routes">
        <label class="flex gap-3 items-center !tracking-normal text-bc pointer-events-none">
        <icon v-if="section.icon" :name="section.icon" :class="section.iconClass"/>
          {{section.name}}
        </label>
        <ul  :class="cn( className)">
          <li v-for="item in section.items">
            <a class="hover:!bg-b2/60 " :class="{ 'bg-b2/40': route.path == item.route }" @click="navigateTo(item.route)">
              <component v-if="item.icon" :is="`i-${item.icon}`" :class="item.iconClass"/>
              {{item.name}}
            </a>
          </li>
        </ul>
      </li>
      
     <slot  />
    </ul>
  </MenubarContent>
</template>