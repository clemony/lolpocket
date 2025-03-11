<script lang="ts" setup>

const ds = useDataStore()
const patch = computed (() => {
const a = ds.currentPatch.split('.')
const b = a[1].match(/\d\d/) ? a[1] : `0${a[1]}`
const date = new Date().getFullYear().toString().replace(/.*(\d\d)/, '$1')

return `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${date}-${b}-notes/`

})

</script>

<template>
    <NuxtLink v-tippy="'Go > Official Patch Notes'"  :to="patch" target="_blank" class="group/p"  external>
    <SidebarButton class="font-mono  justify-start rounded-lg  !text-1 font-medium  dst ">
   <SidebarIcon name="ph:note" />
        <SidebarText v-if="us.sidebarExpanded" class="pt-0.5">{{ ds.currentPatch }}</SidebarText>

        <SidebarBadge class="right-2">
        <icon name="link"  v-if="us.sidebarExpanded" class="size-4.5  shrink-0 opacity-0 group-hover/p:opacity-100 tldr-20"/>
    </SidebarBadge>
</SidebarButton>
</NuxtLink>
</template>