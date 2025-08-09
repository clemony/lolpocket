<script lang="ts" setup>
const { floating } = defineProps<{
  floating: boolean
}>()

const component = computed (() => us().activeSidebarContent ? userMenu[us().activeSidebarContent?.toLowerCase()]?.component : null)

watch(() => us().activeSidebarContent, (oldVal, newVal) => {
  if (newVal != oldVal) {
    us().sidebarExpanded = !!us().activeSidebarContent
  }
/*   if (newVal == null && us().sidebarExpanded) {
    us().toggleSidebar()
  } */
})

/* onMounted (() => {
  if (component.value == null && us().sidebarExpanded == true)
    us().toggleSidebar()
})
 */
const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, (event) => {
  if (us().sidebarExpanded == true)
    us().toggleSidebar()
  console.log('💠 - us:', us().sidebarExpanded)
})
</script>

<template>
  <Sidebar
    ref="target"
    :class="cn('w-[var(--sidebar-width)] z-5 border-transparent  pt-16  overflow-hidden', { 'absolute ': floating, '': !floating })">
    <SidebarRail
      v-show="!floating"
      class="hover:after:bg-linear-to-b hover:after:from-transparent hover:after:via-b3 hover:after:to-b4/80"
      @click="us().toggleSidebar()">
    </SidebarRail>

    <TransitionSlideLeft
      group
      :class="cn('before:absolute  before before:w-full before:z-0 z-1 before:bg-gradient-to-t before:from-sidebar/94 before:to-transparent before:h-16 flex rounded-lg border before:-top-16 border-b3 shadow-warm-soft  **:!bg-transparent  size-full')">
      <component
        :is="component"
        v-if="us().sidebarExpanded && component"
        :open="us().sidebarExpanded" />
    </TransitionSlideLeft>
  </Sidebar>
</template>