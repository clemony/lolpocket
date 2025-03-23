<script lang="ts" setup>

const route = useRoute()


const as = useAccountStore()
const us = useUiStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const rightbarExpanded = ref(true)
const toggleRightbar = useToggle(rightbarExpanded)

function updateRightbar() {
  toggleRightbar()
  us.rightbarExpanded = rightbarExpanded.value
}

watch(
  () => us.triggerRightbar,
  (newVal) => {
    if (newVal) {
      updateRightbar()
    }
  },
)
</script>

<template>
  <div class="h-screen @max-4xl/container/app:!grid-cols-[1fr_0] w-full grid overflow-hidden transition-width dr-30 " :class="{ 'grid-cols-[1fr_270px]': rightbarExpanded, 'grid-cols-[1fr_54px]': !rightbarExpanded && route.path != '/', 'grid-cols-[1fr_0px]': !rightbarExpanded && route.path == '/' }">
    <slot name="page"/>


  <div
    :data-state="rightbarExpanded == true ? 'expanded' : 'collapsed'"
    class="@container/app:4xl:fixed @container/app:4xl:w-[270px] bg-b2/40 w-full h-full py-4  gap-2.5 border-l shadow-warm shadow-black/5 z-3   flex-nowrap  flex  flex-col  border-l-b3/40  overflow-x-hidden  group relative" :style="{ '--bg-noise': 1 }">

    <div class="h-full relative overflow-y-scroll   overflow-x-hidden" :class="{ 'pt-18': !rightbarExpanded }">
        <slot  />
    </div>


 <SidebarBorderCollapse @update:sidebar="updateRightbar()" side="left" :open="us.rightbarExpanded"/>
  </div>
  </div>
</template>