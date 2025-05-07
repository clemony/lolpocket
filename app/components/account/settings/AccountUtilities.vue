<script lang="ts" setup>
const { summoner, account } = defineProps<{
  summoner: Summoner
  account: userAccount
}>()

const classObject = 'btn justify-start !font-medium tracking-tight !gap-5 btn-ghost px-2 btn-lg w-full '
</script>

<template>
  <Field class="grid px-5 h-fit py-3 *:w-full w-full **:text-2 relative">
    <SheetClose :class="classObject" @click="navigateTo('/about')">
      <SidebarIcon>
        <icon name="solar:cat-outline" class="size-5.75 -left-0.5 top-0 absolute" />
      </SidebarIcon>
      About & Cats
    </SheetClose>

    <LazySettingsSheet>
      <SheetClose :class="classObject">
        <SidebarIcon>
          <icon name="gear-solid" class="size-4.75 opacity-60 dst" />
        </SidebarIcon>
        Settings
      </SheetClose>
    </LazySettingsSheet>

    <SheetClose v-if="summoner" :class="classObject" @click="signOut()">
      <SidebarIcon>
        <icon name="mdi:sign-out" class="size-4.75 dst absolute left-0.25" />
      </SidebarIcon>
      Sign Out
    </SheetClose>
    <SheetClose as-child>
      <PatchNotesDaysAgoLink />
    </SheetClose>

    <LazyAdminSheet v-if="account && account.role == 'admin'" :account="account" :summoner="summoner" class="absolute -right-46 bottom-4" />
  </Field>
</template>