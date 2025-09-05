<script lang="ts" setup>
const inset = shallowRef()
const { focused } = useFocus(inset, { initialValue: true })
const route = useRoute()
</script>

<template>
  <SidebarProvider
    :default-open="false"
    :auto-focus="false"
    class="w-full  h-screen flex"
    :style="{
      '--sidebar-width': '320px',
    }">
    <!-- sidebar  { 'pl-14': !as().settings.lockSidebar } -->

    <AppSidebar />

    <SidebarInset
      ref="inset"
      :class="cn('overflow-y-auto')">
      <!-- header -->
      <header
        :class="cn('w-full top-0 h-[45px] flex shrink-0 items-center gap-3 border-b z-2  bg-linear-to-r from-b1 to-b1/20 backdrop-blur  px-2', { 'sticky ': route.meta?.parent != '/pocket', '[border-image:linear-gradient(to_right,var(--color-b3),transparent)_50] !absolute': route.matched?.[0]?.name == 'pocket' })">
        <!--         <SidebarTrigger
          variant="ghost"
          size="lg"
          class="rounded-md  size-11"
          @dblclick="as().toggleSidebarLock" /> -->
        <!--         <Separator
          orientation="vertical"
          class="mr-2 h-4 bg-b4" /> -->
        <BreadcrumbNav />

        <div
          id="layout-header"
          class="justify-self-end">
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 relative h-[calc(100vh-45px)] ">
        <slot />
      </div>
    </SidebarInset>

    <!-- command -->
    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->

    <!-- toaster -->
    <LazyToast
      position="top-right"
      :expand="true"
      :duration="10000" />

    <!-- loading -->
    <NuxtLoadingIndicator
      style="
      top: auto;
      bottom: 0;
      height: 5px;
    background: repeating-linear-gradient(to right, var(--color-n3) 0%, var(--color-n2), var(--color-neutral) 100%);
    " />
  </SidebarProvider>
</template>