<script lang="ts" setup>
const { account } = defineProps<{
  account: Account
}>()

const classObject
  = 'btn justify-start !font-medium tracking-tight !gap-5 btn-ghost px-4 btn-lg w-full '
</script>

<template>
  <div class="relative grid h-fit w-full px-2 py-3 *:w-full **:text-sm">
    <SheetClose
      :class="classObject"
      @click="navigateTo('/about')">
      <IconWrapper>
        <icon
          class="absolute top-0 -left-0.5 size-5.75"
          name="solar:cat-outline" />
      </IconWrapper>
      About & Cats
    </SheetClose>

    <LazySettingsSheet>
      <SheetClose :class="classObject">
        <IconWrapper>
          <icon
            class="size-4.75 opacity-60 dst"
            name="gear-solid" />
        </IconWrapper>
        Settings
      </SheetClose>
    </LazySettingsSheet>

    <SheetClose
      :class="classObject"
      @click="useSignOut()">
      <IconWrapper>
        <icon
          class="absolute left-0.25 size-4.75 dst"
          name="mdi:sign-out" />
      </IconWrapper>
      Sign Out
    </SheetClose>

    <SheetClose as-child>
      <PatchNotesDaysAgoLink />
    </SheetClose>

    <LazyAdminSheet
      v-if="useSupabaseUser().value.role === 'admin'"
      class="pointer-events-none absolute -right-46 bottom-4"
      :account="account" />
  </div>
</template>
