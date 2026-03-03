<script lang="ts" setup>
const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)
const toolbarOpen = shallowRef<boolean>(false)
</script>

<template>
  <UPage
    v-auto-animate
    :ui="{
      root: 'flex h-[calc(100vh-var(--ui-header-height))] min-h-max w-screen flex-row pb-20 pl-18 lg:flex lg:gap-0',
      left: 'min-h-max w-106 min-w-90 pt-10',
      center: cn(
        'mx-auto min-h-max max-w-(--ui-container) justify-self-center lg:w-full',
        collapsed ? 'px-10' : 'pl-8 pr-16',
      ),
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
        root: 'max-w-(--ui-container) overflow-hidden',
        headline: 'mb-0',
      }">
      <template #headline>
        <UButton
          size="md"
          :active="collapsed"
          label="Library"
          variant="link"
          :ui="{
            base: 'w-54 **:text-n5',
            label: 'text-xs font-semibold',
            leadingIcon: 'size-4.5',
          }"
          :leading-icon="collapsed ? 'i-right-to-line' : 'i-left-to-line'"
          @click="toggleLeft()" />
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
    <UPageBody v-auto-animate class="relative flex min-h-full flex-1 flex-col">
      <slot :collapsed />
    </UPageBody>
    <div
      v-if="collapsed || smallerThanLg"
      class="y-0 pointer-events-none absolute inset-y-0 right-[4%] bottom-0 flex h-full items-end overflow-visible py-[4%]">
      <!--  -->
      <UPopover
        v-model:open="toolbarOpen"
        :ui="{
          content:
            'bg-unset flex flex-col items-center gap-4 pb-0 shadow-none ring-0 drop-shadow-none backdrop-blur-none',
        }"
        :content="{ side: 'top' }">
        <UButton
          size="xl"
          :active="toolbarOpen"
          square
          color="p0"
          active-color="neutral"
          :ui="{
            base: 'pointer-events-auto sticky bottom-[4%] shrink-0 rounded-full drop-shadow-md backdrop-blur-md fx-0 not-open:drop-shadow-black/4 open:drop-shadow-black/18',
            leadingIcon: cn('group-open/btn:**:text-nc'),
          }"
          :icon="toolbarOpen ? 'i-up' : 'i-filter'" />

        <template #content>
          <slot name="toolbar" />
          <div class="absolute -translate-x-20 translate-y-22">
            <slot name="toolbar-left" />
          </div>
          <div class="absolute -translate-x-16 translate-y-6">
            <slot name="toolbar-center" />
          </div>
        </template>
      </UPopover>
    </div>
  </UPage>
</template>
