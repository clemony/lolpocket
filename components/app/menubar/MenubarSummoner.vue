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
  <MenubarContent class="!w-74">
    <NuxtLink
      v-for="link in summonerLinks" :key="link.name"
      :to="link.link" class="group"
    >
      <MenubarItem inset class="capitalize">
        {{ link.name }}
      </MenubarItem>
      <MenubarSeparator class="group-even:hidden" />
    </NuxtLink>

    <MenubarSeparator />

    <NuxtLink
      v-if="role == 'admin' && as.userAccount.session"
      to="/admin/Admin"
      class=" "
    >
      <MenubarItem inset>
        Admin Board
      </MenubarItem>
    </NuxtLink>
  </MenubarContent>
</template>

<style scoped>

</style>