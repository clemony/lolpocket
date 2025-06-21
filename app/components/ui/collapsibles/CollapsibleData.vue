<script setup lang="ts">
const itemIsOpen = ref(true)
const champsIsOpen = ref(true)
const isOpen = ref(true)
const us = useUiStore()
const route = useRoute()
watchEffect(() => {
  if (!us.sidebarExpanded) {
    itemIsOpen.value = false
    isOpen.value = true
  }
  else if (us.sidebarExpanded) {
    itemIsOpen.value = true
  }
})
</script>

<template>
  <Collapsible v-model:is-open="isOpen" :default-open="true">
    <SidebarCollapsibleTrigger class="select-none ">
      <IconWrapper name="book" class="size-4.5 dst  -top-px" />
      Library
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent>
      <Collapsible v-model:open="itemIsOpen" class="data-disabled:**:text-bc/90 ">
        <SidebarCollapsibleTrigger>
          <span class="relative size-4">
            <i-ui-hitter class="absolute pointer-events-none size-5.5 -ml-1 -mt-1 opacity-70 dst" />
          </span>

          Item Data
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent class="-mt-1.5">
          <ItemDataLinks />
        </SidebarCollapsibleContent>
      </Collapsible>

      <Collapsible v-model:open="champsIsOpen" class="data-disabled:**:text-bc/90 ">
        <SidebarCollapsibleTrigger>
          <span class="relative size-4">
            <i-lol-no-champ class="absolute pointer-events-none size-5 -ml-1 -mt-1  dst" />
          </span>

          Champion Data
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent class="-mt-1.5">
          <ChampionDataLinks />
        </SidebarCollapsibleContent>
      </Collapsible>

      <Btn :class="{ 'btn-active': route.path == '/runes' }" @click="navigateTo('/runes')">
        <IconWrapper>
          <i-ui-rune class="-ml-1 absolute size-5.5 pointer-events-none" />
        </IconWrapper>
        Runes
      </Btn>

      <Btn :class="{ 'btn-active': route.path == '/spells' }" @click="navigateTo('/spells')">
        <IconWrapper>
          <icon name="radix-icons:magic-wand" class="-ml-1 absolute  pointer-events-none" />
        </IconWrapper>
        Spells
      </Btn>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
