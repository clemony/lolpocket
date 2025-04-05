<script lang="ts" setup>
import SidebarCollapsibleTrigger from '../comps/SidebarCollapsibleTrigger.vue'
import SidebarButton from '../comps/SidebarButton.vue'

const us = useUiStore()

const isOpen = ref(true)

function navigate(){
  if (us.sidebarExpanded )
  return

navigateTo('/settings')
}

const component = computed (() => us.sidebarExpanded ? SidebarCollapsibleTrigger : SidebarButton)

</script>

<template>
  <Collapsible v-model:is-open="isOpen" :disabled="!us.sidebarExpanded">

      <component :is="component"  v-tippy="!us.sidebarExpanded ? 'Settings' : null" @click="navigateTo('/settings')"  class="disabled:text-bc">
        <SidebarIcon name="gear"  />
        <SidebarText>Settings</SidebarText>
      </component>

    <SidebarCollapsibleContent  v-if="us.sidebarExpanded">
      <NuxtLink
        v-for="link in settingLinks" :key="link.name"
        :to="link.link" class="group/l">
        <SidebarButton>
          <SidebarIcon name="right-sm" class="size-4 opacity-60"/>
          {{ link.name }}
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>
