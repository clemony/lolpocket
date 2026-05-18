<script lang="ts" setup>
const { sidebarCollapsed } = defineProps<{
  sidebarCollapsed: ComputedRef<boolean>
}>()

const sidebar = shallowRef<HTMLElement>()
</script>

<template>
  <div
    ref="sidebar"
    :class="
      cn(
        'flex w-full items-center gap-2',
        sidebarCollapsed ? 'flex-col gap-1' : ''
      )
    ">
    <NewOptionsMenu
      icon="i-menu"
      :menu="{
        color: 'base',
        content: {
          align: 'start',
          reference: sidebar ?? undefined,
          side: sidebarCollapsed ? 'right' : 'bottom'
        },
        ui: {
          content: cn('w-(--reka-popper-anchor-width)', {
            'min-w-64': sidebarCollapsed
          }),
          item: 'gap-2.5'
        }
      }"
      :label="undefined"
      :variant="sidebarCollapsed ? 'ghost' : 'outline'"
      color="primary"
      :size="sidebarCollapsed ? 'md' : 'lg'"
      :ui="{
        base: cn('aria-[expanded=true]:brightness-110!', {
          anchor: sidebarCollapsed
        })
      }" />
    <LazyBackpackPocketSearch
      :size="sidebarCollapsed ? 'md' : 'lg'"
      :sidebar-collapsed="sidebarCollapsed.value" />
  </div>
</template>
