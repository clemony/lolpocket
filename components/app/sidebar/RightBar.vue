
<script setup lang="ts">
const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const rightBarExpanded = ref(true)
const toggleRightBar = useToggle(rightBarExpanded)

function updateRightBar() {
  toggleRightBar()
  us.rightBarExpanded = rightBarExpanded.value
}

watch(
  () => us.triggerRightBar,
  (newVal) => {
    if (newVal) {
      updateRightBar()
    }
  },
)
</script>

<template>
  <div
    :data-state="rightBarExpanded == true ? 'expanded' : 'collapsed'"
    class="@container/app:4xl:fixed @container/app:4xl:w-[270px] bg-b2/40 w-full h-full py-4  gap-2.5 border-r shadow-warm shadow-black/5 z-3   pl-3 flex-nowrap  flex  flex-col  border-r-b3/40  overflow-x-hidden  group relative" :style="{ '--bg-noise': 1 }">
    <RightBarHeader />
    <CommandSearchButton />

    <div class="h-full relative overflow-y-scroll   overflow-x-hidden" :class="{ 'pt-18': !us.rightBarExpanded }">
      <div class="inset-0 top-0 left-0  overflow-y-scroll gap-2.5 flex  flex-col pr-3">
    </div>
  </div>
  </div>
</template>