<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <NuxtLink to="/calculator">
    <Btn v-tippy="!us.sidebarExpanded ? 'Calculator' : null">
      <IconWrapper
        name="teenyicons:calculator-outline"
        class="size-4 -top-px"
        :class="{ 'top-0 left-0.5': !us.sidebarExpanded }" />

      <span
        class="tldr-40 justify-start justify-self-start text-start"
        :class="{ 'opacity-0  -tracking-[100%] pointer-events-none': !us.sidebarExpanded }">
        Calculator</span>
    </Btn>
  </NuxtLink>
</template>