<script lang="ts" setup>
const collapsed = useState("collapsed-state", () => shallowRef<boolean>(false))

watch(
  () => collapsed.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const toggleLeft = useToggle(collapsed)
</script>

<template>
  <UDashboardGroup
    id="library-dashboard"
    v-auto-animate
    class="z-auto flex w-screen flex-col overflow-y-auto"
    unit="px">
    <Navbar />
    <UContainer>
      <UPageHeader
        :title="String($route.meta?.title || $route.name)"
        headline="Library"
        :ui="{
          headline: 'text-xs font-semibold text-n5',
          root: 'mt-(--ui-header-height) h-[calc(--ui-header-height*2])! flex flex-col gap-2 border-b-0',
        }">
        <template #description>
          <p class="mt-2 text-sm text-n4 italic">
            <slot name="quote" />
          </p>
        </template>
      </UPageHeader>
    </UContainer>

    <Separator class="my-4" />
    <div class="flex flex-1">
      <UDashboardSidebar
        id="library-left"
        v-model:collapsed="collapsed"
        clean
        class="h-max"
        :ui="{
          root: 'mt-(--ui-header-height) pt-4 sticky top-0 h-fit!',
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
          <UButton
            :size="collapsed ? 'md' : 'sm'"
            :active="collapsed"
            square
            active-color="neutral"
            active-variant="solid"
            variant="ghost"
            color="neutral"
            :ui="{
              base: ' grid place-items-center p-0 gap-0',
              leadingIcon: 'group-on/btn:**:text-nc! size-4 stroke-[2.4]  ',
            }"
            :leading-icon="collapsed ? 'i-right-line' : 'i-left-line'"
            @click="toggleLeft()" />
        </template>
        <slot name="sidebar-left-body" :collapsed />
      </UDashboardSidebar>

      <UDashboardPanel
        id="library-main-panel"
        :default-size="100"
        class="flex w-full flex-1 grow px-3 py-5"
        clean>
        <UMain
          v-auto-animate
          :class="
            cn('flex w-(--ui-container) flex-col', {
              'mx-auto justify-self-center': collapsed,
            })
          ">
          <slot :collapsed />
        </UMain>
      </UDashboardPanel>
    </div>
    <UDashboardPanel class="h-120 max-h-120 min-h-120 w-screen overflow-hidden">
      <SiteFooter />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
