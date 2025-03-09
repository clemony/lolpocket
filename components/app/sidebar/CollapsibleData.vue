<script setup lang="ts">
const itemIsOpen = ref(true)
const us = useUiStore()

const toggleItem = useToggle(itemIsOpen)
watchEffect(() => {
if (!us.sidebarExpanded){
  itemIsOpen.value = false
} else if (us.sidebarExpanded) {
  itemIsOpen.value = true
}
})

</script>

<template>
  <Collapsible :default-open="true">
    <SidebarCollapsibleTrigger class="select-none">
      <SidebarIcon  name="teenyicons:sd-card-outline" class="size-4.5"/>
      <SidebarText>Game Data</SidebarText>
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent>
      <Collapsible v-model:open="itemIsOpen">
        <SidebarCollapsibleTrigger>
        <SidebarText>  Item Data</SidebarText>
        </SidebarCollapsibleTrigger>
        <SidebarCollapsibleContent>
          <NuxtLink
            v-for="link in itemDataLinks"
            :key="link.name"
            :to="link.link"
            class="">
            <SidebarButton>
              {{ link.name }}

              <SidebarBadge v-if="link.badge" class="tracking-normal   uppercase ">
                {{ link.badge }}
              </SidebarBadge>
            </SidebarButton>
          </NuxtLink>
        </SidebarCollapsibleContent>
      </Collapsible>

      <NuxtLink
        v-for="link in gameDataLinks"
        :key="link.name"
        :to="link.link">
        <SidebarButton>
          {{ link.name }}
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
