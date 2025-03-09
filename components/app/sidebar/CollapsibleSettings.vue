<script lang="ts" setup>

</script>

<template>
  <Collapsible>
    <SidebarCollapsibleTrigger>
      <SidebarIcon name="gear" class="size-4.5 -left-0.25" />
      Settings
    </SidebarCollapsibleTrigger>
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
