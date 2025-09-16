<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    class="w-screen grid grid-cols-[45px_1fr] grid-rows-1 h-screen relative overflow-x-hidden">
    <AppSidebar />
    <div class="flex size-full flex-col">
      <!-- header -->
      <header
        :class="
          cn(
            'w-full top-0 h-15 sticky  flex shrink-0 items-center gap-3 border-b z-3  bg-linear-to-r from-b1 to-b1/20 backdrop-blur  px-2',
            {
              '[border-image:linear-gradient(to_right,var(--color-b3),transparent)_50] !absolute':
                route.matched?.[0]?.name == 'pocket',
            },
          )
        ">
        <BreadcrumbNav />
      </header>
      <slot />
    </div>

    <!--     <LazyAppCommand />  -->

    <!-- toaster -->
    <!--     <LazyToast
      position="top-right"
      :expand="true"
      :duration="10000" /> -->

    <!-- loading -->
    <!--     <NuxtLoadingIndicator
      style="
      top: auto;
      bottom: 0;
      height: 5px;
    background: repeating-linear-gradient(to right, var(--color-n3) 0%, var(--color-n2), var(--color-neutral) 100%);
    " /> -->
  </div>
</template>
