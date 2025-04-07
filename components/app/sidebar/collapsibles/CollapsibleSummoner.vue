<script lang="ts" setup>
const isOpen = ref(true)
const us = useUiStore()

watchEffect(() => {
  if (!us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <Collapsible v-model="isOpen" :default-open="true" class="group">
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded">
      <icon name="teenyicons:compass-outline" class="size-4 dst " />
      <SidebarText> <SummonerName class="capitalize" /></SidebarText>
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent class="tldr-30" :class="{ 'gap-1': !us.sidebarExpanded }">
      <LazyNuxtLink
        v-for="link in summonerLinks" :key="link.name"
        :to="link.link" class="group">
        <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null" class="capitalize">
          <SidebarIcon :name="link.icon" class="size-4.5 dst shrink-0" :class="link.iconClass" />
          <SidebarText> {{ link.name }}</SidebarText>
        </SidebarButton>
      </LazyNuxtLink>

    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>