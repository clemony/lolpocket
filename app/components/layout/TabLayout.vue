<script lang="ts" setup>
const { size = 'default', } = defineProps<{
  size?: 'default' | 'lg'
}>()

const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)
</script>

<template>
  <div
    class="relative  max-w-mw size-full">
    <!-- BG slice, behind everything but above context -->
    <div class="absolute top-0 left-0 w-full h-16 z-5 overflow-hidden">
      <slot name="background" />
    </div>

    <!-- Background (fills whole area) -->
    <slot name="background" />

    <!-- Header block -->
    <div
      :class="cn('grid grid-cols-2 z-0 size-full overflow-hidden pointer-events-none', {
        'h-70 min-h-70': size === 'lg',
        'max-h-58 h-58 min-h-58': size === 'default',
      })">
      <div class="flex flex-col pt-14 z-1 grow *:z-1 size-full">
        <div class="flex items-center gap-8 h-full pl-72">
          <slot name="icon" />
          <slot name="header" />
        </div>
      </div>
    </div>

    <div class="fixed top-1  left-[45px] pl-2 z-12 h-[45px]  flex items-center w-82">
      <slot name="crumb" />
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      :class="cn('absolute max-w-mw overflow-x-hidden inset-0 top-0 overflow-y-auto', {
        'pt-70': size === 'lg',
        'pt-32': size === 'default',
      })">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="flex w-full gap-4 pointer-events-none overflow-hidden h-16 min-h-16 sticky -top-70 z-11 items-end pl-72">
        <Separator class="absolute left-0 w-full z-0 bottom-0 bg-b3/60" />
        <NavFileTabs />
      </div>

      <div class="w-full  after:bg-blend-screen h-px after:w-full after:left-0 after:top-0 translate-y-15 after:bg-linear-to-b after:from-2% after:to-50% after:pointer-events-none after:from-b1 after:to-transparent z-5 sticky -top-70 after:absolute after:h-22" />
      <!-- Context wrapper -->
      <div class="relative -mt-px w-mw max-w-mw min-h-screen z-1 bg-b1">
        <slot />
        <SiteFooter />
      </div>
      <slot name="fab" />
    </div>
  </div>
</template>