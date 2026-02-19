<script lang="ts" setup></script>

<template>
  <UDashboardGroup unit="px" class="mt-15">
    <UDashboardSidebar
      :default-expanded="true"
      side="left"
      collapsible
      :max-size="280">
      <slot name="dashboard-left" />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar>
          <UDashboardSidebarCollapse variant="subtle" />
        </UDashboardNavbar>
      </template>
      <template #body>
        <NuxtPage />
      </template>
    </UDashboardPanel>
    <UDashboardSidebar side="right" collapsible :max-size="280" />
  </UDashboardGroup>
</template>
