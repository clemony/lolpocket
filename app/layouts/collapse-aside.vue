<script lang="ts" setup>
const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)
const toolbarOpen = shallowRef<boolean>(false)
const searchOpen = shallowRef<boolean>(false)
</script>

<template>
  <UPage
    v-auto-animate
    :ui="{
      root: 'flex h-max w-screen flex-row pb-20 lg:flex lg:gap-0 lg:pl-18',
      left: 'min-h-max w-106 min-w-90 pt-8',
      center: cn(
        'z-auto mx-auto flex min-h-max w-full max-w-(--ui-container) flex-col justify-self-center',
        collapsed || smallerThanLg ? 'px-20' : 'pl-6 pr-16'
      )
    }">
    <template v-if="!collapsed" #left>
      <UPageAside v-auto-animate>
        <slot name="aside" :collapsed />
      </UPageAside>
    </template>

    <!-- HEADER -->
    <UPageHeader
      v-auto-animate
      :title="String($route.meta?.title || $route.name)"
      headline="Library"
      :ui="{
        root: 'max-w-(--ui-container)',
        headline: 'z-2 flex -translate-x-2',
        title: 'z-0!'
      }">
      <template #headline>
        <span class="tooltip relative z-10! h-2! w-8">
          <UTooltip
            :content="{ side: 'bottom', align: 'start', sideOffset: 6 }"
            :text="collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'">
            <UButton
              tabindex="0"
              size="sm"
              variant="ghost"
              :ui="{
                leadingIcon:
                  'opacity-60 **:stroke-[2.2] group-hover/btn:opacity-100',
                base: 'absolute -translate-y-3'
              }"
              :icon="
                collapsed || smallerThanLg
                  ? 'i-right-from-line'
                  : 'i-left-to-line'
              "
              square
              @click="toggleLeft()" />
          </UTooltip>
        </span>
        <Icon name="i-slash" class="-mr-1 -ml-3 size-5 opacity-50" />
        <!--   <span name="i-slash" class="mr-1 -ml-1.25 text-xs font-bold opacity-50"
          >|</span> -->
        Library
      </template>
      <template #description>
        <p class="text-sm text-n4 italic">
          <slot name="quote" />
        </p>
      </template>
      <template #links>
        <slot name="links" />
      </template>
    </UPageHeader>
    <!-- PAGE SLOT -->
    <UPageBody class="min-h-screen w-full flex-1">
      <slot :collapsed @toggle-sidebar="toggleLeft()" />
    </UPageBody>
    <div
      v-if="collapsed || smallerThanLg"
      class="y-0 pointer-events-none absolute inset-y-0 right-[4%] bottom-0 flex h-full items-end overflow-visible py-[4%]">
      <div class="sticky bottom-[4%] flex flex-col items-center gap-3">
        <slot v-if="!toolbarOpen" name="toolbar" />
        <div
          :class="
            cn(
              searchOpen
                ? '**:text-nc!'
                : 'tooltip pointer-events-auto tooltip-left'
            )
          "
          data-tip="Search">
          <UPopover
            v-model:open="searchOpen"
            :ui="{
              content: 'flex h-14 items-center rounded-2xl px-1'
            }"
            :content="{ side: 'left' }">
            <UButton
              size="xl"
              :active="searchOpen"
              square
              color="base"
              active-color="neutral"
              :ui="{
                base: 'pointer-events-auto shrink-0 rounded-full drop-shadow-md backdrop-blur-md fx-0 not-open:drop-shadow-black/4 group-open/btn:**:text-nc! open:drop-shadow-black/18',
                leadingIcon: cn(
                  'group-open/btn:size-4 group-open/btn:**:text-nc!'
                )
              }"
              :icon="searchOpen ? 'i-x' : 'i-search'" />
            <template #content>
              <slot name="search-content" />
            </template>
          </UPopover>
        </div>
        <div
          :class="
            cn(
              toolbarOpen
                ? '**:text-nc!'
                : 'tooltip pointer-events-auto tooltip-left'
            )
          "
          data-tip="Filters">
          <UPopover
            v-model:open="toolbarOpen"
            :ui="{
              content:
                'bg-unset flex flex-col items-center gap-4 border-0 pb-0 shadow-none ring-0 drop-shadow-none backdrop-blur-none'
            }"
            :content="{ side: 'top' }">
            <UButton
              size="xl"
              :active="toolbarOpen"
              square
              color="base"
              active-color="neutral"
              :ui="{
                base: 'pointer-events-auto shrink-0 rounded-full drop-shadow-md backdrop-blur-md fx-0 not-open:drop-shadow-black/4 group-open/btn:**:text-nc! open:drop-shadow-black/18',
                leadingIcon: cn('group-open/btn:**:text-nc!')
              }"
              :icon="toolbarOpen ? 'i-up' : 'i-filter'" />
            <template #content>
              <slot name="toolbar-content" />
            </template>
          </UPopover>
        </div>
      </div>
    </div>
  </UPage>
</template>
