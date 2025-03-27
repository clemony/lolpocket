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
      <SidebarIcon name="system-uicons:home-door" class="size-5.25 stroke-[1.4] " />
      <SidebarText> <SummonerName class="capitalize" /></SidebarText>
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent class="">
      <LazyNuxtLink
        v-for="link in summonerLinks" :key="link.name"
        :to="link.link" class="group">
        <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null" class="capitalize">
          <SidebarIcon :name="link.icon" class="size-5 dst " />
          <SidebarText> {{ link.name }}</SidebarText>
        </SidebarButton>
      </LazyNuxtLink>

      <LazyAdminLink />
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>