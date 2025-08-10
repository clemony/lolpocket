<script lang="ts" setup>
const emit = defineEmits(['open:settings', 'open:admin', 'reset-count'])

const as = useAccountStore()
</script>

<template>
  <!--   <LazyAdminSheet
    v-if="as && as.userAccount?.role === 'admin'"
    v-model:open="adminOpen"
    :account="as.userAccount" /> -->     <Login v-if="!as.userAccount?.id" />
  <SidebarContentWrapper title="Settings">
    <SidebarGroupContent class="gap-6 py-4 w-full !flex flex-col items-start">
      <Login v-if="!as.userAccount?.id" />
      <div v-else>
        <button
          v-if="as && as.userAccount?.role == 'admin'"
          v-tippy="'Admin'"
          class="size-10 btn btn-ghost grid place-items-center -mr-2 opacity-60 hover:opacity-100 cursor-pointer"
          @click="emit('open:admin')">
          <icon
            name="ri:key-2-line"
            class="size-6 shrink-0 dst pointer-events-none" />
        </button>

        <button
          v-tippy="'Account Settings'"
          class="size-10 grid btn btn-ghost place-items-center -mr-2 opacity-60 hover:opacity-100 cursor-pointer"
          @click="emit('open:settings')">
          <icon
            name="gear-solid"
            class="size-4.5 shrink-0 dst pointer-events-none" />
        </button>
      </div>
      <menu>
        <li>Summonr Profile</li>
      </menu>
    </SidebarGroupContent>
  </SidebarContentWrapper>
</template>