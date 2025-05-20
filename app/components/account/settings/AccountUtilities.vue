<script lang="ts" setup>
const {  account } = defineProps<{
  account: userAccount
}>()

const classObject = 'btn justify-start !font-medium tracking-tight !gap-5 btn-ghost px-4 btn-lg w-full '
</script>

<template>
  <Field class="grid px-2 h-fit py-3 *:w-full w-full **:text-2 relative">
    <SheetClose :class="classObject" @click="navigateTo('/about')">
      <IconWrapper>
        <icon name="solar:cat-outline" class="size-5.75 -left-0.5 top-0 absolute" />
      </IconWrapper>
      About & Cats
    </SheetClose>

    <LazySettingsSheet>
      <SheetClose :class="classObject">
        <IconWrapper>
          <icon name="gear-solid" class="size-4.75 opacity-60 dst" />
        </IconWrapper>
        Settings
      </SheetClose>
    </LazySettingsSheet>

    <SheetClose v-if="account.session" :class="classObject" @click="useSignOut()">
      <IconWrapper>
        <icon name="mdi:sign-out" class="size-4.75 dst absolute left-0.25" />
      </IconWrapper>
      Sign Out
    </SheetClose>
    <SheetClose as-child>
      <PatchNotesDaysAgoLink />
    </SheetClose>

    <LazyAdminSheet v-if="account && account.role == 'admin'" :account="account" class="absolute -right-46 bottom-4  pointer-events-none" />
  </Field>
</template>