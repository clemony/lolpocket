<script lang="ts" setup>
import { sidebarTabItems } from "~/domain/app/constants/sidebar-tabs"

const { settings, hotkeys, account, summoner } = storeToRefs(user())

const collapsed = shallowRef<boolean>(false)
const query = shallowRef<string | undefined>(undefined)

const tabModel = shallowRef<string | undefined>("menu")

const el = useTemplateRef<HTMLElement>("el")
const { style } = useScrollShadow(el, {
  size: 30,
})
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="collapsed"
    variant="floating"
    side="right"
    collapsible
    resizable
    :max-size="34"
    :default-size="28"
    :collapsed-size="8"
    rail
    :ui="{
      root: '@container gap-8 divide-none overflow-visible bg-p1 p-0 py-12 pr-12 shadow-none ring-0',
      body: 'overflow-hidden p-0!',
      header: 'flex h-fit items-center gap-5 py-0 pr-1 pl-0',
      //rail: 'mask-y-from-80% mask-y-to-100%',
    }">
    <template #header>
      <UInput
        v-model:model-value="query"
        icon="i-search"
        label="Search"
        size="xl"
        placeholder="Search"
        variant="outline"
        :ui="{
          root: 'grow',
          base: 'w-full rounded-5xl bg-p0 px-0 align-baseline text-md ring-0! inset-ring-p2 transition-colors duration-300 placeholder:opacity-0 @min-[190px]:placeholder:opacity-100',
          leadingIcon:
            'left-0 ml-0 size-5 translate-x-0 align-icon opacity-60 group-hover/btn:opacity-50!',
        }">
        <template #trailing>
          <KbdClear :kbds="hotkeys?.search" size="md" :model-value="query" />
        </template>
      </UInput>
      <HoverIcon
        type="summoner"
        :avatar="{
          ui: {
            root: '  size-13   justify-self-center  rounded-full ',
          },
        }"
        :summoner="summoner ?? undefined" />
    </template>
    <UTabs
      v-model:model-value="tabModel"
      :items="
        Object.entries(sidebarTabItems)
          .filter(([k, _]) => k !== 'separator')
          .map(([_, v]) => v)
          .toReversed()
      "
      variant="lift"
      size="xl"
      :ui="{
        root: 'flex size-full grow flex-col items-start gap-0 -space-y-1.25! self-start',
        label: 'hidden',
        leadingIcon: 'size-4.5',
        indicator: '-scale-y-100',
        content: cn(
          'size-full max-h-[calc(100%-40px)] overflow-y-auto rounded-6xl rounded-tl-6xl! p-0 ring-p2',
          {
            'rounded-bl-none': tabModel === 'menu',
            'rounded-br-none': tabModel === 'settings',
          }
        ),
        list: 'z-2 order-last',
      }">
      <template #content>
        <div ref="el" :style class="flex size-full grow overflow-y-auto px-4!">
          <component :is="sidebarTabItems[String(tabModel)]?.component" />
        </div>
      </template>
    </UTabs>
  </UDashboardSidebar>
</template>
