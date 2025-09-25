<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    class="w-screen grid grid-cols-[45px_1fr] grid-rows-1 h-screen relative  overflow-hidden ">
    <AppSidebar />
    <div class="flex size-full max-w-mw overflow-y-auto flex-col z-auto">
      <!-- header -->
      <header
        :class="
          cn(
            'w-full top-0 h-15 max-w-mw sticky flex shrink-0 items-center gap-3 border-b z-10  bg-linear-to-r from-b1/90 to-b1/20 backdrop-blur pr-3 pl-2 ',
            {
              'border-0 !bg-linear-to-r   h-16 !from-transparent !to-b1/40 !absolute':
                ['pocket', 'summoner'].includes(String(route.matched?.[0]?.name)),

            },
          )
        ">
        <BreadcrumbNav />
        <span class="grow" />
        <div id="navbar-right" />
        <Search
          class=" h-10 bg-b1/94 backdrop-blur w-80"
          kbd />
      </header>
      <div
        class="size-full relative justify-self-end">
        <slot />
      </div>

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
    </div>

    <!--     <LazyAppCommand />  -->
  </div>
</template>
