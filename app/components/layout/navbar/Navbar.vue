<script setup lang="ts">
const route = useRoute()
const sum = computed (() => route.path.match(/summoner.*/))
</script>

<template>
  <header
    class=""
    :class="
      cn('fixed top-0 z-10 flex h-15 w-full max-w-screen shrink-0 items-center gap-2 border-b bg-linear-to-r from-b1/40 to-b1/40 pr-5 pl-2.5 backdrop-blur',
         {
           'border-0   !from-transparent  ':
             ['pocket', 'summoner', 'champions'].includes(
               String(route.matched?.[0]?.name),
             ) || sum,
         },
      )
    ">
    <Button
      v-tippy="{ content: 'Menu', theme: 'base', placement: 'bottom' }"
      class="group/logo size-11! shrink-0"
      variant="neutral"
      tabindex="0"
      size="c-11"
      @click="ui().sidebarOpen = true">
      <h5
        class="
              absolute justify-self-center font-bold opacity-100 transition-all
              duration-300 group-hover/logo:scale-0 group-hover/logo:opacity-0
            ">
        LP
      </h5>
      <icon
        name="menu"
        class="
              absolute scale-0 justify-self-center opacity-0 transition-all
              duration-300 group-hover/logo:scale-100
              group-hover/logo:opacity-100
            " />
    </Button>
    <BreadcrumbNav />
    <span class="grow" />
    <div id="navbar-right" />

    <!-- search buttton -->
    <SearchBox class="bg-b1/60!" />
    <AccountNavbarMenu />
  </header>
</template>