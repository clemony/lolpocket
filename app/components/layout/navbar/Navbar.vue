<script setup lang="ts">
const route = useRoute()
const sum = computed(() => route.path.match(/summoner.*/))
</script>

<template>
  <header
    class=""
    :class="
      cn(
        'from-b1/40 to-b1/40 fixed top-0 z-10 flex h-15 w-full max-w-screen shrink-0 items-center gap-2 border-b bg-linear-to-r pr-5 pl-16 backdrop-blur-sm',
        {
          'border-0 from-transparent!':
            ['pocket', 'summoner', 'champions'].includes(
              String(route.matched?.[0]?.name),
            ) || sum,
        },
      )
    "
  >
    <!--
    <LpLogo /> -->
    <BreadcrumbNav />
    <span class="grow" />
    <div id="navbar-right" />

    <!-- search buttton -->
    <!--    <SearchBox class="bg-b1/60!" />
    <AccountNavbarMenu /> -->
  </header>
</template>
