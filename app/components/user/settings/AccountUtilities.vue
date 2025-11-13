<script lang="ts" setup>
import type { Account } from "#shared/schema";

const { account } = defineProps<{
  account: Account;
}>();

const classObject =
  "btn justify-start !font-medium tracking-tight !gap-5 btn-ghost px-4 btn-lg w-full ";
</script>

<template>
  <Field class="relative grid h-fit w-full px-2 py-3 *:w-full **:text-2">
    <SheetClose :class="classObject" @click="navigateTo('/about')">
      <IconWrapper>
        <icon
          name="solar:cat-outline"
          class="absolute top-0 -left-0.5 size-5.75"
        />
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

    <SheetClose :class="classObject" @click="useSignOut()">
      <IconWrapper>
        <icon name="mdi:sign-out" class="absolute left-0.25 size-4.75 dst" />
      </IconWrapper>
      Sign Out
    </SheetClose>

    <SheetClose as-child>
      <PatchNotesDaysAgoLink />
    </SheetClose>

    <LazyAdminSheet
      v-if="useSupabaseUser().value.role === 'admin'"
      :account="account"
      class="pointer-events-none absolute -right-46 bottom-4"
    />
  </Field>
</template>
