<script setup lang="ts">


const us = useUiStore()

</script>

<template>
  <menu class="flex">
    <nav
      class="flex flex-col h-full gap-1 relative z-4 border-r border-b3/70 items-center py-3 bg-b2/40  w-[50px]"
      :style="{ '--bg-noise': 1 }">
      <NavBtn class="mb-2" @click="navigateTo('/')">
        <h3 class="dst select-none !tracking-normal ">
          LP
        </h3>
      </NavBtn>

      <NavBtn v-tippy="'Search'" @click.stop="us.commandOpen = true ">
        <icon name="iconamoon:search-bold" class="size-6" />
      </NavBtn>

      <NavBtn v-tippy="'Nexus'" @click="navigateTo('/nexus')">
        <icon name="ph:polygon-fill" class="size-6" />
      </NavBtn>

      <NavBtn v-tippy="'Backpack'" @click="navigateTo('/backpack')">
        <icon name="radix-icons:backpack" class="size-5.5 " />
      </NavBtn>

      <NavBtn v-tippy="'Calculator'" @click="navigateTo('/calculator')">
        <icon name="streamline:calculator-1-solid" class="size-5.5 opacity-70" />
      </NavBtn>

      <NavBtn v-tippy="'Settings'" @click="navigateTo('/settings')">
        <icon name="heroicons:cog-6-tooth-20-solid" class="size-5.5  opacity-70" />
      </NavBtn>

      <NavBtn v-tippy="'Help & Info'" @click="navigateTo('/docs')">
        <icon name="ion:information-sharp" class="size-9" />
      </NavBtn>

      <Grow />
      <div>
        <SidebarAddPocket />
        <SidebarDropdown />
      </div>
    </nav>




  </menu>
</template>

<style scoped></style>
