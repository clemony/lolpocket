<script lang="ts" setup>
const ds = useDataStore()
const us = useUiStore()
const patch = computed (() => {
  const a = ds.currentPatch.split('.')
  const b = a[1].match(/\d\d/) ? a[1] : `0${a[1]}`
  const date = new Date().getFullYear().toString().replace(/.*(\d\d)/, '$1')

  return `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${date}-${b}-notes/`
})
</script>

<template>
  <!--  <NuxtLink v-tippy="{ content: 'Official Patch Notes <icon name=`link` />', placement: 'top' }" :to="patch" target="_blank" class="group/p" external>
    <SidebarButton class="font-mono  justify-start rounded-lg  !text-1 font-medium  dst ">
      <SidebarIcon name="ph:note-light" />
      <SidebarText v-if="us.sidebarExpanded" class="pt-0.5">
        {{ ds.currentPatch }}
      </SidebarText>

      <SidebarBadge class="right-2">
        <icon v-if="us.sidebarExpanded" name="link" class="size-4.5  shrink-0 opacity-0 group-hover/p:opacity-100 transition-opacity dr-20" />
      </SidebarBadge>
    </SidebarButton>
  </NuxtLink> -->

  <NuxtLink :to="patch" target="_blank" external>
    <ContrastDropdownItem class="flex items-center">
      <SidebarIcon name="fluent:notepad-24-regular" class="size-5.25"/>
      {{ ds.currentPatch }} Patch Notes

      <DropdownMenuShortcut>
        <icon name="ph:arrow-square-out" class="size-3.5  shrink-0 " />
      </DropdownMenuShortcut>
    </ContrastDropdownItem>
  </NuxtLink>
</template>