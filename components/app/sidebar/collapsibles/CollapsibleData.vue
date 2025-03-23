<script setup lang="ts">
const itemIsOpen = ref(true)
const isOpen = ref(true)
const us = useUiStore()

watchEffect(() => {
  if (!us.sidebarExpanded) {
    itemIsOpen.value = false
    isOpen.value = true
  }
  else if (us.sidebarExpanded) {
    itemIsOpen.value = true
  }
})
</script>

<template>
  <Collapsible v-model:is-open="isOpen" :default-open="true">
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" class="select-none expand-hide" :disabled="!us.sidebarExpanded">
      <SidebarIcon name="teenyicons:book-outline" class="size-4.5 -top-px" />
      <SidebarText>Encyclopedia</SidebarText>
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent>
      <Collapsible v-model:open="itemIsOpen" :disabled="!us.sidebarExpanded" class="data-disabled:**:text-bc/90 ">
        <NuxtLink v-tippy="!us.sidebarExpanded ? 'Items' : null" :to="!us.sidebarExpanded ? '/items' : ''" :class="{ 'btn btn-ghost size-12  hover:bg-b2/60': !us.sidebarExpanded }">
          <SidebarCollapsibleTrigger>
            <span class="relative size-4">
              <i-tft-weaponmaster class="absolute transition-scale dr-30 pointer-events-none size-5.5 -ml-1 -mt-1 opacity-70 dst" :class="{ '!scale-110 ml-0': !us.sidebarExpanded }" />
            </span>

            <SidebarText>  Item Data</SidebarText>
          </SidebarCollapsibleTrigger>
        </NuxtLink>
        <SidebarCollapsibleContent>
          <NuxtLink
            v-for="link in itemDataLinks"
            :key="link.name"
            :to="link.link"
            class="">
            <SidebarButton>
              <SidebarText class="pl-1">
                {{ link.name }}
              </SidebarText>
              <SidebarBadge v-if="link.badge && us.sidebarExpanded" class="tracking-normal   uppercase ">
                {{ link.badge }}
              </SidebarBadge>
            </SidebarButton>
          </NuxtLink>
        </SidebarCollapsibleContent>
      </Collapsible>

      <NuxtLink
        v-for="link in gameDataLinks"
        :key="link.name"
        :to="link.link">
        <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null">
          <span class="relative size-4">
            <component :is="link.icon" class=" transition-scale dr-30 absolute dst pointer-events-none" :class="cn(link.class, { '!scale-110': !us.sidebarExpanded })" />
          </span>
          <SidebarText>{{ link.name }}</SidebarText>
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
