<script setup lang="ts">
const props = defineProps<{
triggerSidebar: boolean
}>()

const as = useAccountStore()
const us = useUiStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

function handleAddClick() {
  const ps = usePocketStore()
  const emit = defineEmits(['update:modelValue'])
  ps.newPocketOpen = true
  emit('update:modelValue')
}

const sidebarExpanded = ref(true)
const toggleSidebar = useToggle(sidebarExpanded)

const triggerSidebar = computed (() => {
return props.triggerSidebar
})

function updateSidebar() {
  toggleSidebar()
  us.sidebarExpanded = sidebarExpanded.value
}

watch(
() => triggerSidebar.value,
(newVal) => {
 if (newVal){
  updateSidebar()
 }
}
)
</script>

<template>
 
  <div
    class="bg-b2/40 py-3 pl-3 h-screen gap-2.5 flex  flex-col   border-r shadow-none border-r-b2  tldr-30 overflow-hidden flex-nowrap  relative" :class="{ 'w-90 min-w-90 max-w-90': sidebarExpanded, 'w-20 min-w-20 max-w-20': !sidebarExpanded }">
    <SidebarHeader />
    <CommandSearchButton  />
    <div class="h-full relative overflow-y-scroll  ">
      <div class="inset-0 top-0 left-0  overflow-y-scroll gap-2.5 flex  flex-col pr-3">
        <SidebarLabel>
          Summoner
        </SidebarLabel>
        <LazyCollapsibleSummoner />

        <SidebarLabel>
          Craft
        </SidebarLabel>
        <LazyCollapsiblePocket :summoner="summoner" />

        <NuxtLink to="/calculator">
          <SidebarButton>
            <SidebarIcon name="teenyicons:calculator-outline" class="size-4.25 -top-px" />
            <SidebarText>Calculator</SidebarText>
          </SidebarButton>
        </NuxtLink>

        <SidebarLabel>
          Learn
        </SidebarLabel>

        <LazyCollapsibleData />

        <SidebarLabel>
          Tools
        </SidebarLabel>
        <LazyCollapsibleSettings />
        <LazyCollapsibleTools />
      </div>
    </div>
    <button class="flex mt-2 mb-1 gap-3 w-[96%] justify-self-center btn btn-neutral flex-nowrap tldr-30  rounded-md" @click="handleAddClick()" :class="{'!btn-square !gap-0 justify-center': !sidebarExpanded }">
      <icon
        name="add-sm"
        class="size-5.5 shrink-0 stroke-[1.2] text-nc drop-shadow-sm -ml-4" :class="{'ml-0 tldr-30': !sidebarExpanded }"/>
      <SidebarText>
        New Pocket
      </SidebarText>
    </button>

    <SidebarBorderCollapse @update:sidebar="updateSidebar()" />
  </div>

</template>

<style scoped></style>
