<script lang="ts" setup>
import { LazyAuthModal } from "#components"
import type { DropdownMenuItem, PopoverProps } from "@nuxt/ui"
import {
  asDropdownItem,
  mergeBtnUi
} from "../../layout/navigation/command/build/helpers"
import { testingMenu } from "./testingMenu"

const props = defineProps<{
  button: ButtonPropsExt
  popover: PopoverProps
}>()

const user = useSupabaseUser()
const isAdmin = computed(() => user.value?.app_metadata?.user_role === "admin")

const { command } = useApp()
const overlay = useOverlay()
const login = overlay.create(LazyAuthModal, {
  destroyOnClose: true,
  props: { type: "logIn" }
})
const menu = computed(() => testingMenu(command.close, login.open))
const open = shallowRef<boolean>(false)
</script>

<template>
  <div class="h-max w-full p-1">
    <UPopover v-model:open="open" v-bind="props.popover">
      <UButton
        v-bind="props.button"
        :label="menu.label"
        :active="open"
        trailing-icon="i-right"
        :icon="menu.icon" />

      <template #content>
        <div class="w-full space-y-px p-1">
          <UButton
            v-for="(item, i) in menu.children"
            :key="i"
            v-bind="props.button"
            :ui="mergeBtnUi(asDropdownItem(item).ui, props.button?.ui)"
            :icon="asDropdownItem(item).icon"
            :label="item.label"
            @click="item.onClick" />
        </div>
      </template>
    </UPopover>
  </div>
</template>
