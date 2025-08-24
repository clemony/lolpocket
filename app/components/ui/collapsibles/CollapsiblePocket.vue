<script lang="ts" setup>
import { motion } from 'motion-v'
import CollapsiblePinned from './CollapsiblePinned.vue'
import PopoverPinned from './PopoverPinned.vue'

const props = defineProps<{
  account: Account
}>()

const us = useUiStore()
const as = useAccountStore()
const ps = usePocketStore()

const isOpen = ref(true)

const pinnedComponent = computed (() => us.sidebarExpanded ? CollapsiblePinned : PopoverPinned)

watchEffect(() => {
  if (us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :disabled="!us.sidebarExpanded"
    as-child>
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded">
      Pockets
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent
      class="tldr-30 !overflow-visible"
      :class="{ 'gap-1': !us.sidebarExpanded }">
      <component
        :is="pinnedComponent"
        v-slot="{ pinned }">
        <IconWrapper
          name="pin"
          class="size-5 -mt-px -left-0.25 group-not-disabled/pin:text-bc group-disabled/pin:text-bc/35" />

        Pinned

        <SidebarBadge class="font-mono !text-1 pr-3">
          <span v-if="!pinned || pinned.length == null || pinned.length == 0">0</span>

          <span v-else>
            {{ pinned.length }}
          </span>
        </SidebarBadge>
      </component>

      <PocketFolderLinks />
    </SidebarCollapsibleContent>
  </Collapsible>

<!-- <PinnedPocketLinks v-if="!us.sidebarExpanded"  />

    <PocketFolderLinks v-if="!us.sidebarExpanded"   />
 -->
</template>

<style scoped>

</style>