<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import { useDraggableInfoModalPool } from "~/domain/app/composables/useDraggableInfoModalPool"
import { useSidebar } from "~/domain/app/composables/useSidebar"
import { sidebarTabItems } from "~/domain/app/constants/sidebar-tabs"
import type { SidebarEvent, UseSidebar } from "~/domain/app/types/layout.types"

const { tab, setTab } = defineProps<{
  tab: string
  setTab: (tab: string) => void
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()

const query = shallowRef<string>("")
const open = shallowRef<boolean>(false)
watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    close()
    if (oldVal !== newVal) query.value = ""
  }
)

const { summoner } = storeToRefs(user())
const { bringPopoverToFront, openPopover, popoverSlots, setPopoverOpen } =
  useDraggableInfoModalPool()

function close(e?: SidebarEvent) {
  if (e?.onClick) e.onClick()
  if (e?.to) navigateTo(e?.to)

  emit("close")
}

const { component } = useSidebar()

provide<UseSidebar>("sidebar", {
  close,
  openPopover,
})

const currentTab = shallowRef<string>("menu")

onMounted(() => {
  if (tab) currentTab.value = tab
})
</script>

<template>
  <USlideover
    ref="overlay"
    v-model:open="open"
    :close="false"
    side="right"
    :ui="{
      header:
        'absolute inset-y-0 top-0 bottom-0 left-0 z-0! flex h-screen w-14! max-w-14! origin-top -translate-x-13.75 items-start justify-end px-0!',
      body: 'group/sidebar relative top-0 z-2! flex max-h-full w-full max-w-full flex-col rounded-l-5xl bg-p1 px-0! pt-0! pb-1! text-pc before:absolute before:inset-0 before:z-0 before:h-screen before:w-full before:rounded-l-5xl before:bg-p1',
      wrapper: 'relative h-14! w-14 max-w-14',
      content:
        'max-w-110 divide-y-0! bg-transparent text-pc shadow-none ring-0!',
      //close: 'fixed top-3 right-3'
      footer:
        'pointer-events-none fixed inset-0 top-0 left-0 z-4! h-screen! w-screen!',
    }"
    @update:open="close()">
    <template #header>
      <SidebarTheme>
        <div class="absolute inset-0 left-0 grid size-full place-items-center">
          <UTabs
            v-model:model-value="currentTab"
            :content="false"
            :items="Object.values(sidebarTabItems)"
            variant="lift"
            size="xl"
            color="primary"
            :ui="{
              root: 'absolute flex h-14 w-[100vh] shrink-0 grow -rotate-90 flex-nowrap items-center justify-center border-0! pr-20! pl-16!',
              list: 'flex shrink-0 grow flex-nowrap',
              label: 'hidden',
              indicator: 'h-14 max-h-14 border-x-1! border-t-1! border-p4!',
              trigger: cn(
                'tab-active tab relative grid! h-14 w-24 place-items-center gap-0 rounded-t-4xl rounded-b-none duration-0!',

                //
                'not-[&.separator-tab]:max-w-24',

                //border
                'border-x-1! border-t-1! border-b-transparent!',

                //active
                'active:z-4! active:border-transparent! active:[--tab-inset-color:color-mix(in_oklab,var(--color-p3)_50%,transparent_50%)]!',

                //not active
                'not-active:z-0! not-active:border-n4! not-active:[--tab-bg:var(--color-n2)]! not-active:[--tab-inset-color:color-mix(in_oklab,var(--color-n5)_20%,var(--color-n4)_80%)]! hover:not-active:[--tab-bg:color-mix(in_oklab,var(--color-n3)_50%,var(--color-n2)_50%)]!'
              ),
            }">
            <template #leading="{ item }">
              <StatusAvatar
                v-if="item.label === 'Social'"
                :summoner="summoner"
                size="sm"
                class="anchor absolute h-14 w-24 rotate-90"
                :chip="{
                  ui: {
                    base: 'group-active/trigger:ring-p1! ring-2! group-not-active/trigger:ring-n2!',
                  },
                  size: 'xs',
                  position: 'bottom-right',
                }"
                :tooltip="{
                  text: 'Social',
                  content: {
                    side: 'left',
                    sideOffset: 0,
                  },
                }" />
              <UTooltip v-else :text="item.label" as-child>
                <div class="anchor absolute h-14 w-24">
                  <Icon
                    :name="String(item.icon)"
                    :class="
                      cn(
                        'absolute size-5 rotate-90 group-not-active/trigger:text-nc/80!',
                        item.ui?.leadingIcon
                      )
                    " />
                </div>
              </UTooltip>
            </template>
          </UTabs>
        </div>
      </SidebarTheme>
    </template>
    <template #body>
      <SidebarTheme>
        <component
          :is="component"
          v-if="component"
          @open-popover="openPopover($event)" />
      </SidebarTheme>
    </template>

    <template #footer>
      <DraggableInfoModal
        v-for="slot in popoverSlots"
        :key="slot.id"
        :open="slot.open"
        :item="slot.item"
        :placement-index="slot.placementIndex"
        :z-index="slot.zIndex"
        @grab="bringPopoverToFront(slot.id)"
        @update:open="setPopoverOpen(slot.id, $event)" />
    </template>
  </USlideover>

  <!--  <div class="absolute h-220 w-200 place-self-center rounded-4xl bg-p0">
        <MailIndicatorButton
          :active-component
          @update:component="emits('update:component', $event)" />
      </div> -->
  <!--
</template> <LazyCommandFooter @update:open="(e: string) => handleUpdate(e)" /> -->
</template>
