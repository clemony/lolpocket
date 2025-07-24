<script lang="ts" setup>
const isOpen = ref(true)
const us = useUiStore()

watchEffect(() => {
  if (!us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <Collapsible
    v-model="isOpen"
    :default-open="true"
    class="group">
    <SidebarCollapsibleTrigger>
      <icon
        name="teenyicons:compass-outline"
        class="size-4 dst " />

      <SummonerName class="capitalize" />
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent
      class="tldr-30"
      :class="{ 'gap-1': !us.sidebarExpanded }">
      <LazyNuxtLink
        v-for="link in summonerLinks"
        :key="link.name"
        :to="link.link"
        class="group">
        <Btn class="capitalize">
          <IconWrapper
            :name="link.icon.name"
            class="size-4.5 dst shrink-0"
            :class="link.icon.class" />
          {{ link.name }}
        </Btn>
      </LazyNuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>