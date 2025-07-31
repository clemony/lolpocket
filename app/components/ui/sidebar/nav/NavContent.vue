<script lang="ts" setup>
const option = ref(['Backpack', 'Analytics', 'Library', 'Summoner'])
</script>

<template>
  <SidebarContentWrapper title="Navigation">
    <Accordion
      v-model:model-value="option"
      type="multiple"
      collapsible
      class="w-full justify-start px-4">
      <SidebarAccordionItem
        v-for="linkObject in navLinks"
        :key="linkObject.name"
        :link-object />
    </Accordion>
  </SidebarContentWrapper>
</template>