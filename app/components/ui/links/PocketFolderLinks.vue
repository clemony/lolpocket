<script lang="ts" setup>
const us = useUiStore()
// TODO DELETE
const as = useAccountStore()
</script>

<template>
  <!-- <NuxtLink
    v-for="(link, i) in backpackLinks"
    :key="link.key"
    :to="link.link">
    <Btn v-tippy="!us.sidebarExpanded ? link.name : null" class="indicator">
      <LazyPopupBadge v-if="!us.sidebarExpanded && link.pockets && link.pockets.length" :delay="0.95 + i * 2.5 / 10">
        {{ link.pockets.length }}
      </LazyPopupBadge>

      <IconWrapper v-if="link.name == 'Pockets'">
        <i-ui-pocket class="size-4.5" />
      </IconWrapper>
      <IconWrapper v-else :name="link.icon" class=" size-4.5" />

        {{ link.name }}

      <SidebarBadge class="font-mono !text-1 pr-3">
        <span v-if="!link.pockets || link.pockets.length == null || link.pockets.length == 0">0</span>
        <span v-else>
          {{ link.pockets.length }}
        </span>
      </SidebarBadge>
    </Btn>
  </NuxtLink> -->h
</template>