<script lang="ts" setup>
const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)
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
      <div
        v-if="collapsed || smallerThanLg"
        v-auto-animate
        class="mt-full sticky bottom-6 mx-auto mb-15 flex w-full max-w-[calc(var(--ui-container)-10rem)] items-center gap-4 rounded-xl border border-p3/60 bg-p0/94 px-5 py-2 drop-shadow-sm drop-shadow-black/4 backdrop-blur-md">
        <slot name="toolbar" />
      </div>
    </UPageBody>
  </UPage>
</template>
