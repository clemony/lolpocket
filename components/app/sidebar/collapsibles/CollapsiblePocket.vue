<script lang="ts" setup>
const props = defineProps<{
  summoner: userAccount
}>()

const us = useUiStore()
const as = useAccountStore()
const ps = usePocketStore()
ps.pinnedFolder = []

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})

const summoner = computed (() => {
  return props.summoner
})

const isOpen = ref(true)

watchEffect(() => {
  if (us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <!-- v-if="us.sidebarExpanded" -->
  <Collapsible v-model:open="isOpen" :disabled="!us.sidebarExpanded">
    <AnimatePresence>
      <Motion
        v-if="us.sidebarExpanded" as="span"
        :exit="{ width: 0, height: 0, opacity: 0 }"
        :transition="{ duration: 0.1, ease: 'easeInOut' }">
        <SidebarCollapsibleTrigger v-if="us.sidebarExpanded">
          Pockets
        </SidebarCollapsibleTrigger>
      </Motion>
    </AnimatePresence>

    <SidebarCollapsibleContent>
      <Collapsible>
        <AnimatePresence>
          <Motion
            v-if="us.sidebarExpanded" as="div"
            :exit="{ width: 0, height: 0, opacity: 0 }"
            :transition="{ duration: 0.1, ease: 'easeInOut' }">
            <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" :disabled="!pinned || pinned.length == null || pinned.length == 0" class="group">
              <SidebarIcon name="pin" class="size-5.25 -mt-px -left-0.5 group-not-disabled:text-bc group-disabled:text-bc/15" />
              <SidebarText>
                Pinned
              </SidebarText>
              <SidebarBadge class="font-mono !text-1 pr-3">
                <span v-if="!pinned || pinned.length == null || pinned.length == 0">0</span>
                <span v-else>
                  {{ pinned.length }}
                </span>
              </SidebarBadge>
            </SidebarCollapsibleTrigger>

            <SidebarCollapsibleContent>
              <PinnedPocketLinks />
            </SidebarCollapsibleContent>
          </Motion>
        </AnimatePresence>
      </Collapsible>

      <PocketFolderLinks />
    </SidebarCollapsibleContent>
  </Collapsible>

<!-- <PinnedPocketLinks v-if="!us.sidebarExpanded"  />

    <PocketFolderLinks v-if="!us.sidebarExpanded"   />
 -->
</template>

<style scoped>

</style>