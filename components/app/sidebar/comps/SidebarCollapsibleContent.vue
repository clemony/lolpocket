<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <CollapsibleContent class="CollapsibleContent pl-3  ml-4 before:absolute before:h-[90%] relative before:w-px before:border-r before:border-r-neutral/20 before:left-0 before:top-2 before:self-center flex flex-col justify-center justify-items-center " :class="{ 'before:opacity-0 transition-opacity !duretion-300 !ml-0 !pl-0 ': !us.sidebarExpanded, ' transition-opacity !duration-300 ': !us.sidebarExpanded, }">
    <slot />
  </CollapsibleContent>
</template>