<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <SidebarProvider
    :default-open="as().settings.lockSidebar"
    class="w-full  h-screen flex"
    :style="{
      '--sidebar-width': '320px',
    }">
    <!-- sidebar -->

    <AppSidebar />

    <SidebarInset
      :class="cn('overflow-y-auto ', { 'pl-14': !as().settings.lockSidebar })">
      <!-- header -->
      <header class="sticky top-0 flex shrink-0 items-center gap-2 border-b z-2  border-b3 bg-b1/80 backdrop-blur-lg p-4">
        <SidebarTrigger
          class="-ml-1"
          :class="cn('', { 'btn-active': as().settings.lockSidebar })"
          @dblclick="as().toggleSidebarLock" />
        <Separator
          orientation="vertical"
          class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <template v-if="route?.meta?.parent">
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink
                  class="capitalize hover:underline underline-offset-2"
                  @click="navigateTo(route?.meta?.parent)">
                  {{ route?.meta?.parent?.toString().replace('/', '') }}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator
                class="hidden md:block" />
            </template>

            <BreadcrumbItem>
              <BreadcrumbPage class="capitalize">
                {{ route?.meta?.title ?? route?.name ?? '' }}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div
          id="layout-header"
          class="justify-self-end">
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 relative ">
        <slot />
      </div>
    </SidebarInset>

    <!-- command -->
    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->

    <!-- toaster -->
    <Toast
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