<script lang="ts" setup>
import {
  MessagePanel,
  NavPanel,
  NotificationPanel,
  PocketPanel,
  SearchPanel,
} from '#components'

const userMenu = [
  NavPanel,
  //*
  SearchPanel,
  //*
  PocketPanel,
  //*
  MessagePanel,
  //*
  NotificationPanel,
]
const currentHover = ref<number | null>(null) // hover intent index (mouseenter)
const activeIndex = ref<number | null>(null) // the index currently shown in panel
const prevActiveIndex = ref<number | null>(null) // previous active index (for invert)
const activeItem = shallowRef<Component | null>(null)

const sidebarWrapper = useTemplateRef<HTMLElement>('sidebarWrapper')
const wrapperHovered = useElementHover(sidebarWrapper, {
  delayEnter: 200,
  delayLeave: 100,
})

const dropdownOpen = computed(() => ui().sidebarStates.inboxDropdown)

const pendingItem = shallowRef<Component | null>(null)
const pendingHoverIndex = ref<number | null>(null)

const { start, stop } = useTimeoutFn(() => {
  if (currentHover.value === pendingHoverIndex.value) {
    activeItem.value = pendingItem.value
    prevActiveIndex.value = activeIndex.value
    activeIndex.value = pendingHoverIndex.value
  }
}, 400, { immediate: false })

function handleButtonHover(item: Component, i: number) {
  pendingItem.value = item
  pendingHoverIndex.value = i
  currentHover.value = i
  stop()
  start()
}

function handleButtonLeave() {
  currentHover.value = null
  stop()
}

// computed "invert" based on previous vs current active indices
const invert = computed(() => {
  const prev = prevActiveIndex.value
  const cur = activeIndex.value
  if (prev === null || cur === null)
    return false
  return cur < prev
})

// single source of truth for open — only activeItem or dropdown keep it open
const open = computed({
  get: () => !!activeItem.value || dropdownOpen.value,
  set: (value: boolean) => {
    if (!value) {
      currentHover.value = null
      activeItem.value = null
      activeIndex.value = null
      prevActiveIndex.value = null
      pendingItem.value = null
      pendingHoverIndex.value = null
      stop()
    }
  },
})

watch(wrapperHovered, (hovering) => {
  if (!hovering && !dropdownOpen.value)
    open.value = false
})
</script>

<template>
  <div
    ref="sidebarWrapper"
    class="'h-screen min-w-16 w-15 z-15">
    <!-- This is the first sidebar -->
    <menu
      class="items-center py-3 justify-between z-15 flex flex-col w-15 h-full fixed top-0 left-0 border-r border-r-b3 !bg-b1 ">
      <div class="flex grow flex-col gap-2.5">
        <BtnLink
          class="btn-square mb-1 size-11 p-0 grid place-items-center"
          variant="neutral"
          to="/">
          <h5 class="font-bold jusify-self-center absolute">
            LP
          </h5>
        </BtnLink>

        <Button
          v-for="(item, i) in userMenu"
          :key="item.name"
          as="li"
          size="icon"
          :variant="!item?.meta?.data ? 'ghost' : 'outline'"
          :auto-focus="false"
          :class="
            cn('!p-0 grid [&.btn-active]:!bg-b2 [&.btn-active]:drop-shadow-xs [&.btn-active]:shadow-sm relative !place-items-center size-11 btn-square', {
              'btn-active ': activeItem === item && open,
            })
          "
          :is-active="activeItem === item"
          @focusin="handleButtonHover(item, i)"
          @mouseenter="handleButtonHover(item, i)"
          @focusout="handleButtonLeave"
          @mouseleave="handleButtonLeave">
          <Button
            v-if="item?.meta.data"
            as="label"
            :name="`${item.meta.name}-count`"
            class="rounded-full pointer-events-none ring ring-b2 h-4 text-[0.8] !border-0 absolute -right-0.75 -top-0.75 !px-1.25 py-1 grid place-items-center leading-0"
            variant="neutral">
            {{ item.data }}
          </Button>
          <hicon
            :name="item.meta.icon"
            :class="cn('text-bc size-5 ', item.meta.class)" />
        </Button>
      </div>
      <div class="justify-self-end">
        <SidebarUser />
      </div>
    </menu>

    <!-- component sheet content -->
    <Sheet
      v-model:open="open"
      :modal="false">
      <Paper
        side="left"
        class="z-9 left-[45px] border-l-0 border-b3 flex flex-col">
        <HiddenDialogHeader
          :title="userMenu.find(m => m.component === activeItem)?.name || 'sidebar'"
          desc="keep it up!" />
        <SlideInTopOutBottom
          :invert="invert"
          class="w-full">
          <component
            :is="activeItem"
            loading="lazy"
            :open="open"
            @close-sidebar="open = false" />
        </SlideInTopOutBottom>
      </Paper>
    </Sheet>
  </div>
</template>
