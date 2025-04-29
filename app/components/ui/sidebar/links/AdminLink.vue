<script lang="ts" setup>
const as = useAccountStore()
const us = useUiStore()
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
    
 <NuxtLink
        v-if="role == 'admin' && as.userAccount.session"
        to="/admin/Admin"
        class="">
        <SidebarButton>
          <SidebarIcon name="ph:key" class="size-4.5" />
          <SidebarText>Admin Board</SidebarText>
        </SidebarButton>
      </NuxtLink>
</template>