<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    id="app"
    class="relative grid h-screen w-screen grid-rows-1 overflow-hidden">
    <div
      class="z-auto flex size-full max-w-screen flex-col overflow-y-auto">
      <!-- header -->
      <header
        :class="
          cn(
            `
              sticky top-0 z-10 flex h-15 w-full max-w-screen shrink-0
              items-center gap-2 border-b bg-linear-to-r from-b1/90 to-b1/40
              pr-5 pl-2.5 backdrop-blur
            `,
            {
              'border-0 !bg-linear-to-r  h-15 !from-transparent !to-b1/40 !absolute':
                ['pocket', 'summoner', 'champions'].includes(String(route.matched?.[0]?.name)),

            },
          )
        ">
        <Button
          v-tippy="{ content: 'Menu', theme: 'base', placement: 'bottom' }"
          class="group/logo relative grid !size-11 place-items-center p-0"
          variant="neutral"
          tabindex="0"
          shape="square"
          @click="ui().sidebarOpen = true">
          <h5
            class="
              absolute justify-self-center font-bold opacity-100 transition-all
              duration-300
              group-hover/logo:scale-0 group-hover/logo:opacity-0
            ">
            LP
          </h5>
          <icon
            name="menu"
            class="
              absolute scale-0 justify-self-center opacity-0 transition-all
              duration-300
              group-hover/logo:scale-100 group-hover/logo:opacity-100
            " />
        </Button>
        <BreadcrumbNav />
        <span class="grow" />
        <div id="navbar-right" />

        <!-- search buttton -->
        <SearchBox class="!bg-b1/60" />
      </header>

      <AppSidebarTrigger />

      <div
        class="relative size-full justify-self-end">
        <slot />
        <LazyAppCommand />
      </div>

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
