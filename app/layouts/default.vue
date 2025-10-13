<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    class="w-screen grid  grid-rows-1 h-screen relative  overflow-hidden ">
    <div class="flex size-full max-w-screen overflow-y-auto flex-col z-auto">
      <!-- header -->
      <header
        :class="
          cn(
            'w-full top-0 h-16 max-w-screen sticky flex shrink-0 items-center gap-2 border-b z-10  bg-linear-to-r from-b1/90 to-b1/40 backdrop-blur pr-5 pl-2.5',
            {
              'border-0 !bg-linear-to-r  h-16 !from-transparent !to-b1/40 !absolute':
                ['pocket', 'summoner', 'champions'].includes(String(route.matched?.[0]?.name)),

            },
          )
        ">
        <Button
          class="!size-11 relative p-0 grid place-items-center group/logo"
          variant="neutral"
          shape="square"
          @click="ui().sidebarOpen = true">
          <h5 class="font-bold justify-self-center transition-all duration-300 absolute opacity-100  group-hover/logo:opacity-0  group-hover/logo:scale-0">
            LP
          </h5>
          <icon
            name="nexus"
            class="absolute scale-0  justify-self-center  transition-all duration-300 opacity-0 group-hover/logo:opacity-100  group-hover/logo:scale-100" />
        </Button>
        <BreadcrumbNav />
        <span class="grow" />
        <div id="navbar-right" />

        <!-- search buttton -->
        <SearchBox class="!bg-b1/60" />
      </header>
      <div
        class="size-full relative justify-self-end">
        <slot />
        <LazyAppCommand />
      </div>

      <AppSidebar />
      <!-- toaster -->
      <Toaster />

      <!-- loading -->
      <NuxtLoadingIndicator
        style="
      top: auto;
      bottom: 0;
      height: 5px;
    background: repeating-linear-gradient(to right, var(--color-n3) 0%, var(--color-n2), var(--color-neutral) 100%);
    " />
    </div>
  </div>
</template>
