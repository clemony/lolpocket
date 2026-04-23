<script lang="ts" setup></script>

<template>
  <UDashboardGroup
    id="library-dashboard"
    v-auto-animate
    class="z-auto flex w-full flex-col overflow-y-auto"
    unit="px">
    <Navbar />
    <div class="flex flex-1">
      <!-- PANEL -->
      <UDashboardPanel
        id="library-main-panel"
        :ui="{ root: 'flex flex-1' }"
        :default-size="100"
        clean>
        <template #body>
        </template>
      </UDashboardPanel>
    </div>

    <!-- FOOTER -->
    <UDashboardPanel class="h-120 max-h-120 min-h-120 w-full overflow-hidden">
      <SiteFooter />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
