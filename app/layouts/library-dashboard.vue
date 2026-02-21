<script lang="ts" setup>
const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)

watch(
  () => collapsed.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <UDashboardGroup
    id="library-dashboard"
    v-auto-animate
    class="z-auto flex w-screen flex-col overflow-y-auto"
    unit="px">
    <Navbar />
    <div class="flex flex-1">
      <UDashboardSidebar
        id="library-left"
        v-model:collapsed="collapsed"
        clean
        class="h-max"
        :ui="{
          root: '  pt-4 sticky top-0 h-fit!',
          header: cn(
            'flex h-fit shrink-0 items-center justify-between gap-2 pl-4.5',
            {
              'flex-col *:last:order-first   ': collapsed,
            }
          ),
          body: 'pl-5 pt-5',
        }"
        collapsible
        :collapsed-size="54"
        :max-size="280">
        <template #header>
          <slot name="sidebar-left-header" :collapsed />
        </template>
        <slot name="sidebar-left-body" :collapsed />
      </UDashboardSidebar>

      <UDashboardPanel
        id="library-main-panel"
        :default-size="100"
        class="flex w-full flex-1 grow px-10 py-3"
        clean>
        <UMain
          v-auto-animate
          :class="
            cn('flex w-(--ui-container) flex-col', {
              'mx-auto justify-self-center': collapsed,
            })
          ">
          <UPageHeader
            :title="String($route.meta?.title || $route.name)"
            headline="Library"
            :ui="{
              headline: ' mb-0 ',
            }">
            <template #headline>
              <UButton
                size="md"
                :active="collapsed"
                label="Library"
                variant="link"
                :ui="{
                  base: '**:text-n5 w-54',
                  label: 'font-semibold text-xs ',
                  leadingIcon: 'size-4.5',
                }"
                :leading-icon="collapsed ? 'i-right-line' : 'i-left-line'"
                @click="toggleLeft()" />
            </template>
            <template #description>
              <p class="text-sm text-n4 italic">
                <slot name="quote" />
              </p>
            </template>
          </UPageHeader>
          <slot :collapsed />
        </UMain>
      </UDashboardPanel>
    </div>
    <UDashboardPanel class="h-120 max-h-120 min-h-120 w-screen overflow-hidden">
      <SiteFooter />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
