<script lang="ts" setup>
  const ts = useTempStore()
</script>

<template>
  <div class="drawer">
    <input
      id="my-drawer"
      v-model="ts.sidebarTrigger"
      type="checkbox"
      class="drawer-toggle" />

    <div class="drawer-side z-60">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay !bg-black/70"></label>

      <div class="backdrop-blur-md min-h-full w-110 bg-b1 shadow-pretty overflow-hidden rounded-r-md inset-shadow-sm relative">
        <ul
          class="z-0 menu px-5 pb-6 text-3 text-bc font-medium [&_li_ul_.collapse]:-mt-2 [&_li>*]:py-3 [&_.collapse-title]:px-2 [&_.collapse-content]:py-0 [&_ul.collapse-content:before]:opacity-10 **:[&_svg]:drop-shadow-text w-full overflow-y-auto overflow-x-hidden max-h-screen flex-nowrap pt-22 [&_li_a]:hover:!bg-b2/70 [&_li:not(.collapse)]:-mx-1 **:font-medium"
          ref="sidebarMenu">
          <SidebarUser />
          <SidebarUserLinks />
          <SidebarPockets />
          <SidebarUtilities />
          <li class="mt-2 mb-1.5">
            <NuxtLink
              to="/Calculator"
              class="flex gap-4 px-2.5 items-center">
              <LittleIcon
                icon="teenyicons:calculator-outline"
                class="size-5" />
              Calculator
            </NuxtLink>
          </li>

          <SidebarDatabase />
          <SidebarResources />
          <SidebarInfo />

          <li class="mt-2 mb-1.5">
            <NuxtLink
              to="/Settings"
              class="flex gap-4 px-2.5 items-center">
              <LittleIcon
                icon="ph:gear-six"
                class="size-5.5" />
              Settings
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
