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
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" class="select-none " :disabled="!us.sidebarExpanded">
      <SidebarIcon name="teenyicons:book-outline" class="size-4.5 -top-px" />
      <SidebarText>Encyclopedia</SidebarText>
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent :class="{ ' gap-1': !us.sidebarExpanded }">
      <Collapsible v-if="us.sidebarExpanded" v-model:open="itemIsOpen" :disabled="!us.sidebarExpanded" class="data-disabled:**:text-bc/90 ">
        <NuxtLink v-tippy="!us.sidebarExpanded ? 'Items' : null" :to="!us.sidebarExpanded ? '/items' : ''" :class="{ 'btn btn-ghost size-12  hover:bg-b2/60': !us.sidebarExpanded }">
          <SidebarCollapsibleTrigger>
            <span class="relative size-4">
              <icon name="hugeicons:potion" class="absolute transition-scale dr-30 pointer-events-none size-6 -ml-1 -mt-1 opacity-70 dst" :class="{ 'ml-0': !us.sidebarExpanded }" />
            </span>

            <SidebarText>  Item Data</SidebarText>
          </SidebarCollapsibleTrigger>
        </NuxtLink>
        <SidebarCollapsibleContent>
          <ItemDataLinks />
        </SidebarCollapsibleContent>
      </Collapsible>

      <ItemDataLinks v-else />
      <NuxtLink
        v-for="link in gameDataLinks"
        :key="link.name"
        :to="link.link">
        <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null">
          <SidebarIcon>
            <component :is="link.icon" class=" transition-scale dr-30 absolute  pointer-events-none" :class="cn(link.class)" />
          </SidebarIcon>
          <SidebarText>{{ link.name }}</SidebarText>
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
