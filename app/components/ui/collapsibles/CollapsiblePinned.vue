<script setup lang="ts">
const ps = usePocketStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.pinned == true)
})
</script>

<template>
  <Collapsible :disabled="!pinned || pinned.length == null || pinned.length == 0" class="group/pin">
    <SidebarCollapsibleTrigger as-child>
      <SidebarIcon name="pin" class="size-5 -mt-px -left-0.25 group-not-disabled/pin:text-bc group-disabled/pin:text-bc/35" />

      
        Pinned
      
      <SidebarBadge class="font-mono !text-1 pr-4 ">
        <span v-if="!pinned || pinned.length == null || pinned.length == 0">0</span>
        <span v-else>
          {{ pinned.length }}
        </span>
      </SidebarBadge>
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent>
      <PinnedPocketLinks />
    </SidebarCollapsibleContent>
  </Collapsible>
</template>