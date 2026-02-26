<script lang="ts" setup>
const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)
const toolbarOpen = shallowRef<boolean>(false)
</script>

<template>
  <UPage
    v-auto-animate
    :ui="{
      root: 'pl-18 pb-20 flex w-screen min-h-max h-[calc(100vh-var(--ui-header-height))] flex-row lg:flex lg:gap-0 ',
      left: 'w-106 min-h-max  min-w-90 pt-10',
      center: cn(
        'mx-auto min-h-max max-w-(--ui-container) justify-self-center lg:w-full',
        collapsed ? 'px-10' : 'pl-8 pr-16'
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
        root: ' grow',
        headline: 'mb-0',
      }">
      <template #headline>
        <UButton
          size="md"
          :active="collapsed"
          label="Library"
          variant="link"
          :ui="{
            base: '**:text-n5 w-54',
            label: 'font-semibold text-xs ',
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
    </UPageHeader>
    <!-- PAGE SLOT -->
    <UPageBody v-auto-animate class="relative flex min-h-full flex-1 flex-col">
      <slot :collapsed />
    </UPageBody>
    <div
      class="y-0 pointer-events-none absolute inset-y-0 right-[4%] bottom-0 flex h-full items-end overflow-visible py-[4%]">
      <!--    v-if="collapsed || smallerThanLg" -->
      <UPopover
        v-model:open="toolbarOpen"
        :ui="{
          content:
            ' flex flex-col-reverse  items-center gap-4 bg-unset ring-0 backdrop-blur-none shadow-none drop-shadow-none pb-5 ',
        }"
        :content="{ side: 'top' }">
        <UButton
          size="xl"
          :active="toolbarOpen"
          square
          color="p0"
          active-color="neutral"
          :ui="{
            base: 'pointer-events-auto drop-shadow-md not-open:drop-shadow-black/4 open:drop-shadow-black/18 shrink-0 fx-0 backdrop-blur-md  rounded-full sticky bottom-[4%] ',
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
