<script setup lang="ts">
const us = useUiStore()
const route = useRoute()
</script>

<template>
  <menu div class="flex">
    <nav
      class="flex flex-col h-full gap-3.5 relative z-4 border-r border-b3/70 items-center py-3.25 bg-b2/40  w-[50px]"
      :style="{ '--bg-noise': 1 }">
      <NavBtn @click="navigateTo('/')">
        <h3 class="dst select-none !tracking-normal ">
          LP
        </h3>
      </NavBtn>

      <NavBtn v-tippy="'Search'" @click.stop="us.commandOpen = true "  class="mb-4 -mt-2" >
        <icon name="eva:search-outline" class="size-6.5 dst" />
      </NavBtn>

      <NavBtn v-tippy="'Nexus'" :class="{ 'btn-active': route.meta.section == 'nexus' }" @click="navigateTo('/nexus')">
        <icon name="ph:polygon-fill" class="size-6" />
      </NavBtn>

      <NavBtn v-tippy="'Backpack'" :class="{ 'btn-active': route.path == '/backpack' }" @click="navigateTo('/backpack')">
        <icon name="radix-icons:backpack" class="size-5.5 " />
      </NavBtn>

      <NavBtn
        v-tippy="'Calculator'" :class="{ 'btn-active': route.path == 'calculator' }"
        @click="navigateTo('/calculator')">
        <icon name="streamline:calculator-1-solid" class="size-5.5 opacity-70" />
      </NavBtn>

      <NavBtn
        v-tippy="'Items'" :class="{ 'btn-active': route.meta.section == 'items' }"
        @click="navigateTo('/items')">
        <i-ui-hitter class="size-6.5 opacity-70" />
      </NavBtn>

      <NavBtn
        v-tippy="'Champions'" :class="{ 'btn-active': route.path == '/champions' }"
        @click="navigateTo('/champions')">
        <i-ui-champion class="size-6.5 opacity-70" />
      </NavBtn>

      <NavBtn
        v-tippy="'Docs'" :class="{ 'btn-active': route.meta.section == 'about' }"
        @click="navigateTo('/docs')">
        <icon name="ion:information-sharp" class="size-9" />
      </NavBtn>

      <NavBtn v-tippy="'Settings'" :class="{ 'btn-neutral **:!text-nc **:opacity-100': us.settingsOpen }">
        <input v-model="us.settingsOpen" type="checkbox" class="peer hidden" />
        <icon name="heroicons:cog-6-tooth-20-solid" class="size-5.5  opacity-70" />
      </NavBtn>


      <Grow />
      <div>
        <SidebarAddPocket />
        <SidebarDropdown />
      </div>
    </nav>

      <div class="shadow-warm shadow-black/5">
<SidebarInterface  />
</div>
  </menu>
</template>

<style scoped></style>
