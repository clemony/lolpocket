<script lang="ts" setup>
import { LazyAuthModal } from "#components"
import type { DropdownMenuItem, PopoverProps } from "@nuxt/ui"
import { mergeBtnUi } from "~/domain/app/components/navigation/command/build/helpers"
import { testingMenu } from "~/domain/user/utils/user/testingMenu"

const user = useSupabaseUser()
const isAdmin = computed(() => user.value?.app_metadata?.user_role === "admin")

/* const { command } = useApp() */
const overlay = useOverlay()
const login = overlay.create(LazyAuthModal, {
  destroyOnClose: true,
  props: { type: "logIn" },
})
/* const menu = computed(() => testingMenu(command.close, login.open)) */
</script>

<template>
  <UPopover>
    <!-- <UButton label="hi" color="neutral" :icon="menu.icon" />

    <template #content>
      <div class="w-full space-y-px p-1">
        <UButton
          v-for="(item, i) in menu.children"
          :key="i"
          :icon="asDropdownItem(item).icon"
          :label="item.label"
          @click="item.onClick" />
      </div>
    </template> -->
  </UPopover>
</template>
