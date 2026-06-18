<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import { sidebarTabContent } from "~/domain/user/utils/settings/settingsProps"

const emit = defineEmits(["search", "open"])

const tab = shallowRef<string>("App")

const session = useSupabaseSession()
const { useRouteGroups } = routeStore()

const settings = computed(() => useRouteGroups().value?.settings?.items)
const settingsTabs = computed<TabsItem[]>(() => {
  if (!settings.value) return [] as TabsItem[]
  return settings.value.map((i) => {
    return {
      ...i,
      disabled: i.auth && !session.value?.access_token,
      ui: { leadingIcon: cn(String(i.class)) },
    }
  })
})
</script>

<template>
  <SidebarWrapper title="Settings">
    <template #subtitle>
      <UBadge :label="tab" class="-translate-x-2" />
    </template>

    <template #description>
      <div class="flex h-13 w-full shrink-0 items-center justify-start">
        <UTabs
          v-model:model-value="tab"
          :items="settingsTabs"
          :ui="{ label: 'hidden' }">
          <template #leading="{ item }">
            <UTooltip :text="item.label" :content="{ side: 'top' }">
              <div class="absolute inset-0 grid size-full place-items-center">
                <Icon
                  :name="item.icon"
                  :class="
                    cn(
                      'size-4.5 text-nc/80 group-hover/trigger:group-not-active/trigger:text-nc group-active/trigger:text-pc group-hover/trigger:group-active/trigger:text-pc',
                      item.ui?.leadingIcon
                    )
                  " />
              </div>
            </UTooltip>
          </template>
        </UTabs>
      </div>
    </template>

    <UTheme
      :props="{
        formField: {
          size: 'lg',
        },
      }"
      :ui="{
        separator: {
          border: 'border-p4/70',
        },
        form: {
          base: 'flex w-full max-w-full flex-col gap-8 text-pc',
        },
        formField: {
          root: 'w-full max-w-full min-w-87 overflow-visible text-pc',
          container: 'flex flex-col gap-2 text-pc',
          help: 'hidden',
          description: 'hidden',
          label:
            'inline-flex items-center align-baseline text-sm! font-medium! tracking-normal text-pc/70 capitalize **:text-sm',
          labelWrapper:
            'inline-flex w-full grow items-center align-baseline text-pc',
          wrapper: 'mb-1.5',
        },
        /*         card: {
          root: 'h-max! w-full rounded-xl bg-transparent shadow-none ring-p4/60 group-hover:ring-pc/70!',
          body: 'grid w-full grid-cols-[36px_auto_24px] items-center gap-3 overflow-hidden p-4! px-3!'
        }, */
        switch: {
          root: 'py-4! shadow-none hover:inset-shadow-sm hover:inset-ring! hover:inset-ring-p3 hover:ring-offset-1 hover:ring-offset-pc/60',
          container: 'mt-0 self-center',
          label: 'pr-2 font-semibold',
        },
      }">
      <component
        :is="sidebarTabContent[tab]?.component"
        v-if="sidebarTabContent[tab]?.component"
        orientation="vertical" />
    </UTheme>
  </SidebarWrapper>
</template>
