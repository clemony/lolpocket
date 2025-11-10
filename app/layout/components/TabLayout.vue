<script lang="ts" setup>
const { size = 'default', } = defineProps<{
  size?: string
}>()

const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)
</script>

<template>
  <div
    class="relative size-full max-w-screen">
    <!-- BG slice, behind everything but above context -->
    <div class="absolute top-0 left-0 z-5 h-15 w-full overflow-hidden">
      <slot
        name="background-slice" />
    </div>

    <slot
      key="main"
      name="background" />

    <!-- Header block -->
    <div
      :class="cn(`
        pointer-events-none z-0 grid size-full grid-cols-2 overflow-hidden
      `, {
        'h-70 min-h-70 max-h-70': size === 'lg',
        'max-h-58 h-58 min-h-58': size === 'default',
      })">
      <div
        class="
          w-40% z-1 flex size-full grow flex-col items-start justify-center
          pt-16 pl-68
          *:z-1
        ">
        <slot name="header" />
      </div>
    </div>

    <div class="fixed top-0 left-[45px] z-12 flex h-15 w-56 items-center">
      <icon
        name=""
        class="-mx-1 size-6.5 stroke-2" />
      <slot name="crumb" />
    </div>

    <div
      class="
        fixed top-15 left-2.5 z-13 grid w-16 auto-rows-fr items-center gap-2
      ">
      <slot name="menu" />
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      :class="cn(`
        absolute inset-0 top-0 max-w-screen overflow-x-hidden overflow-y-auto
      `, {
        'pt-70': size === 'lg',
        'pt-32': size === 'default',
      })">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="
          pointer-events-none sticky -top-70 z-13 flex h-15 min-h-15 w-full
          items-end gap-4 overflow-hidden pl-66
        ">
        <Separator class="absolute bottom-0 left-0 z-0 w-full bg-b3/60" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div class="relative z-1 -mt-px min-h-screen w-screen max-w-screen bg-b1">
        <slot />
        <SiteFooter />
      </div>
      <slot name="fab" />
    </div>
  </div>
</template>