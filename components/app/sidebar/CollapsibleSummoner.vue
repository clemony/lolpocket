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
</script>

<template>
  <Collapsible :default-open="true">
    <SidebarCollapsibleTrigger>
      <SidebarIcon name="teenyicons:home-alt-outline" class="size-4.25"/>
      <SummonerName class="capitalize" />
    </SidebarCollapsibleTrigger>
    <SidebarCollapsibleContent>
      <NuxtLink
        v-for="link in summonerLinks" :key="link.name"
        :to="link.link" class="group">
        <SidebarButton class="capitalize" >
    <SidebarIcon :name="link.icon" class="in-group-last:size-4.25 dst" />
          {{ link.name }}
        </SidebarButton>
      </NuxtLink>

      <NuxtLink
        v-if="role == 'admin' && as.userAccount.session"
        to="/admin/Admin"
        class="">
        <SidebarButton >
        <SidebarIcon name="octicon:key-24" class="size-4.25"/>
          Admin Board
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>