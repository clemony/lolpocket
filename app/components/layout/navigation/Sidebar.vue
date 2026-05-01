<script lang="ts" setup>
import {
  LazyAccountSettings,
  LazyAppSettings,
  LazyCommunicationSettings,
  LazyFeedSettings,
  LazyProfileSettings,
  LazyThemeSettings
} from "#components"
import type { SidebarProps, TabsItem } from "@nuxt/ui"
import type { CommandItem } from "./command/build/useCommandGroups"
import { useCommandGroups } from "./command/build/useCommandGroups"
const {
  variant = "sidebar",
  collapsible = "offcanvas",
  side = "right"
} = defineProps<SidebarProps>()

const emit = defineEmits(["search", "open"])

const { account } = storeToRefs(user())

const routes = useApp().routes
const groups = useCommandGroups(routes)

const tab = defineModel<string>("tab", { default: "App" })
const tabs = {
  App: LazyAppSettings
}
</script>

<template>
  <USidebar
    :variant="variant"
    :collapsible="collapsible"
    :side="side"
    :ui="{
      root: 'p-0! [--sidebar-width:28rem]',
      body: 'flex-1 flex-row! p-0'
    }">
    <UCard
      variant="ghost"
      :ui="{
        root: 'h-screen max-h-screen grow overflow-hidden',
        body: 'flex grow flex-col'
      }">
      <template #header>
        <!-- header -->
        <div class="flex items-center justify-between gap-4">
          <ULink class="grow cursor-pointer" to="/">
            <h3>lolpocket</h3>
          </ULink>
        </div>
      </template>

      <!-- nexus -->
      <!--       <ul class="w-full space-y-2 px-2">
        <li v-for="item in nexusNav.concat(userNav)" :key="item.label">
          <UButton
            variant="link"
            size="xl"
            :to="item.to"
            :ui="{ base: 'w-full px-2.5 hover:underline' }">
            <h1>{{ item.label }}</h1>
          </UButton>
        </li>
      </ul> -->

      <!-- pockets -->
      <!--     <NewPocketButton
        :kbd="{
          ui: { wrapper: 'mr-1' },
          size: 'md',
          color: 'neutral'
        }"
        :ui="{ base: 'pl-4.5', label: 'text-md font-semibold' }"
        as="li"
        size="lg" /> -->

      <template #footer>
        <AccountMenu
          avatar-size="xl"
          :user="{
            size: 'xl'
          }" />
      </template>
    </UCard>
    <div
      class="flex h-full w-15.5 flex-col items-center justify-start border-l border-l-p3/80 py-3 pr-0.5">
      <UButton
        icon="x"
        size="sm"
        :ui="{
          base: '',
          leadingIcon: '**:stroke-[2.4]'
        }"
        variant="ghost"
        @click="emit('open', false)" />
      <UTabs
        v-model:model-value="tab"
        :items="groups.settings?.items"
        variant="pill"
        orientation="vertical"
        size="md"
        color="neutral"
        :ui="{
          root: '',
          label: 'hidden',
          list: 'gap-2 rounded-4xl bg-transparent py-1.5 ring-0 inset-shadow-none',
          trigger: 'size-10',
          indicator: 'rounded-xl'
        }">
        <template #leading="{ item }">
          <UTooltip :text="item.label" as="div" :content="{ side: 'left' }">
            <div class="absolute inset-0 grid size-full place-items-center">
              <Icon
                :name="item.icon"
                :class="
                  cn('size-5 text-pc/70 group-active:text-nc', {
                    'scale-116': item.label === 'Profile'
                  })
                " />
            </div>
          </UTooltip>
        </template>
      </UTabs>
    </div>
  </USidebar>
</template>
