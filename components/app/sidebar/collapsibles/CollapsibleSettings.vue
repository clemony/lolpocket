<script lang="ts" setup>
const us = useUiStore()

const isOpen = ref(true)

watchEffect(() => {
  if (!us.sidebarExpanded) {
    isOpen.value = false
  }
})
</script>

<template>
  <Collapsible v-model:is-open="isOpen" :disabled="!us.sidebarExpanded">
    <NuxtLink v-tippy="!us.sidebarExpanded ? 'Settings' : null" :to="!us.sidebarExpanded ? '/settings' : ''" :class="{ 'btn btn-ghost size-12 hover:bg-b2/60 pl-5 [&_svg]:size-5': !us.sidebarExpanded }">
      <SidebarCollapsibleTrigger>
        <SidebarIcon :name="us.sidebarExpanded ? 'gear' : 'ph:gear-six-fill'" class="size-4.75 text-bc/60 -left-0.25" />
        <SidebarText>Settings</SidebarText>
      </SidebarCollapsibleTrigger>
    </NuxtLink>
    <SidebarCollapsibleContent>
      <NuxtLink
        v-for="link in settingLinks" :key="link.name"
        :to="link.link" class="group/l">
        <SidebarButton>
          {{ link.name }}
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>
