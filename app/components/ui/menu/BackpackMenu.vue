<script lang="ts" setup>
console.log('💠 - backpackLinks:', backpackLinks)
</script>

<template>
  <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
    <li class="row-span-3">
      <NavigationMenuLink v-for="(link, i) in backpackLinks" :key="i">
        <a
          class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/">
          <img src="https://www.reka-ui.com/logo.svg" class="h-6 w-6">

          <div class="mb-2 mt-4 text-lg font-medium">
            shadcn/ui
          </div>

          <p class="text-sm leading-tight text-muted-foreground">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  </ul>
</template>