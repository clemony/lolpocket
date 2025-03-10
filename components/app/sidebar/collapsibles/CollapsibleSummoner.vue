<script lang="ts" setup>
const as = useAccountStore()

const role = computedAsync(() => {
  if (as.userAccount.session && as.userAccount.role == 'admin') {
    return 'admin'
  }
  else {
    return 'summoner'
  }
})

const isOpen = ref(true)
const us = useUiStore()

watchEffect(() => {
  if (!us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <Collapsible v-model="isOpen" :default-open="true">
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" class="expand-hide">
      <SidebarIcon name="teenyicons:home-alt-outline" class="size-4.25" />
      <SidebarText> <SummonerName class="capitalize" /></SidebarText>
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent>
      <NuxtLink
        v-for="link in summonerLinks" :key="link.name"
        :to="link.link" class="group">
        <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null" class="capitalize">
          <SidebarIcon :name="link.icon" class="in-group-last:size-4.25 dst" />
          <SidebarText> {{ link.name }}</SidebarText>
        </SidebarButton>
      </NuxtLink>

      <NuxtLink
        v-if="role == 'admin' && as.userAccount.session"
        to="/admin/Admin"
        class="">
        <SidebarButton>
          <SidebarIcon name="octicon:key-24" class="size-4.25" />
          <SidebarText>Admin Board</SidebarText>
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>