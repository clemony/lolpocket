<script lang="ts" setup>
import type { SidebarProps, TabsItem } from "@nuxt/ui"
import { tabContent } from "./data/settingsProps"
const {
  variant = "sidebar",
  collapsible = "offcanvas",
  side = "right"
} = defineProps<SidebarProps>()
const emit = defineEmits(["search", "open"])

const tab = defineModel<string>("tab", { default: "App" })
const session = useSupabaseSession()
const { settings } = useRoutes()
console.log("🥸 - settings:", settings)
const settingsTabs = computed<TabsItem[]>(() => {
  if (!settings) return [] as TabsItem[]
  return settings.map((i) => ({
    ...i,
    disabled: i.auth && !!session.value?.access_token,
    ui: { leadingIcon: cn(String(i.class)) }
  }))
})
</script>

<template>
  <USidebar
    :variant="variant"
    :collapsible="collapsible"
    :side="side"
    :ui="{
      root: 'top-(--ui-header-height) h-[calc(100vh-var(--ui-header-height)]! max-h-[calc(100vh-var(--ui-header-height)]! overflow-hidden p-0! [--sidebar-width:26rem]',
      body: 'flex-1 flex-row! gap-0 p-0'
    }">
    <UCard
      variant="ghost"
      :ui="{
        header:
          'inline-flex h-(--ui-header-height) w-full shrink-0 items-center px-6! align-baseline',
        root: 'h-screen max-h-screen grow divide-y overflow-hidden',
        body: 'w-full max-w-full overflow-x-hidden'
      }">
      <template #header>
        <!-- header -->
        <ULink class="grow cursor-pointer" to="/">
          <h2>Settings</h2>
        </ULink>
        <h6>{{ tab }}</h6>
      </template>
      <div
        class="flex h-13 w-full shrink-0 items-center justify-start border-b border-b-p3/80">
        <UTabs
          v-model:model-value="tab"
          :items="settingsTabs"
          variant="pill"
          size="md"
          color="neutral"
          :ui="{
            root: 'px-3',
            label: 'hidden',
            list: 'gap-2 rounded-4xl border-0 bg-transparent px-2 ring-0 inset-shadow-none inset-ring-0',
            trigger:
              'h-full rounded-xl duration-0 not-active:hover:bg-p2 not-active:hover:inset-ring-p3 not-active:hover:fx-1',
            indicator: 'rounded-xl'
          }">
          <template #leading="{ item }">
            <UTooltip
              :delay-duration="1800"
              :text="item.label"
              as="div"
              :ui="{
                content:
                  'data-[state=delayed-open]:animate-in data-[state=delayed-open]:slide-in-from-bottom'
              }"
              :content="{ side: 'bottom' }">
              <div class="absolute inset-0 grid size-full place-items-center">
                <Icon
                  :name="item.icon"
                  :class="
                    cn(
                      'size-4.5 text-pc/70 **:stroke-[2.2] group-active:text-nc',
                      item.ui?.leadingIcon
                    )
                  " />
              </div>
            </UTooltip>
          </template>
        </UTabs>
      </div>

      <div class="w-full max-w-full grow overflow-x-hidden p-6! pr-0.5">
        <UTheme
          :ui="{
            form: {
              base: 'flex w-full max-w-full flex-col gap-8'
            },
            formField: {
              root: 'w-full max-w-full min-w-87 grow',
              label: 'capitalize',
              container: 'flex flex-col gap-4',
              labelWrapper: '',
              wrapper: ''
            },
            input: { root: 'w-full' }
          }">
          <FormWrapper>
            <component
              :is="tabContent[tab]?.component"
              v-if="tabContent[tab]?.component"
              orientation="vertical" />
          </FormWrapper>
        </UTheme>
      </div>
    </UCard>
  </USidebar>
</template>
