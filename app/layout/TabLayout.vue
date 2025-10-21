<script lang="ts" setup>
const { size = 'default', } = defineProps<{
  size?: 'default' | 'lg'
}>()

const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)
</script>

<template>
  <div
    class="relative  max-w-screen size-full">
    <!-- BG slice, behind everything but above context -->
    <div class="absolute top-0 left-0 w-full h-15 z-5 overflow-hidden">
      <slot
        name="background-slice" />
    </div>

    <slot
      key="main"
      name="background" />

    <!-- Header block -->
    <div
      :class="cn('grid grid-cols-2 z-0 size-full overflow-hidden pointer-events-none', {
        'h-70 min-h-70 max-h-70': size === 'lg',
        'max-h-58 h-58 min-h-58': size === 'default',
      })">
      <div class="flex w-40% justify-center items-start pl-68 flex-col pt-16 z-1 grow *:z-1 size-full">
        <slot name="header" />
      </div>
    </div>

    <div class="fixed top-0  left-[45px]  z-12 h-15  flex items-center w-56">
      <icon
        name=""
        class="stroke-2 size-6.5 -mx-1" />
      <slot name="crumb" />
    </div>

    <div class="fixed top-15  left-2.5 z-13 gap-2  grid auto-rows-fr items-center w-16">
      <slot name="menu" />
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      :class="cn('absolute max-w-screen overflow-x-hidden inset-0 top-0 overflow-y-auto', {
        'pt-70': size === 'lg',
        'pt-32': size === 'default',
      })">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="flex w-full gap-4 pointer-events-none overflow-hidden h-15 min-h-15 sticky -top-70 z-13 items-end pl-66">
        <Separator class="absolute left-0 w-full z-0 bottom-0 bg-b3/60" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div class="relative -mt-px w-screen max-w-screen min-h-screen z-1 bg-b1">
        <slot />
        <SiteFooter />
      </div>
      <slot name="fab" />
    </div>
  </div>
</template>