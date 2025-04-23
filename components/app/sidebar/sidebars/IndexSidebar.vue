<script lang="ts" setup>
const as = useAccountStore()
const us = useUiStore()
</script>

<template>
<div class="">
      <SidebarTitle  class="**:lowercase"/>
  <div class="grid px-6 before:h-[98%] place-items-center  *:text-bc/70  *:hover:text-bc  *:font-medium *:tracking-tight gap-7.5 -mt-2 *:dst">


    <div class="group/ul w-full !cursor-pointer flex items-center pr-8" @click="us.commandOpen = true ">
      <Underline>
      command
      </Underline>
      <Grow  />
      <span class="text-3 opacity-60 tracking-wide">{{getDeviceKey()}}K</span>
</div>
     
    
       <div class="group/ul w-full !cursor-pointer" @click="navigateTo('/nexus')">
         <Underline>nexus</Underline>
       </div>

           <div class="group/ul w-full !cursor-pointer"  @click="navigateTo('/backpack')">
    <Underline>backpack</Underline>
       </div>

        <div class="group/ul w-full !cursor-pointer"  @click="navigateTo('/calculator')">
    <Underline>calculator</Underline>
       </div>

        <div class="group/ul w-full !cursor-pointer"   @click="navigateTo('/items')">
    <Underline>items</Underline>
       </div>

        <div class="group/ul w-full !cursor-pointer"   @click="navigateTo('/champions')">
    <Underline>champions</Underline>
       </div>

        <div class="group/ul w-full !cursor-pointer"    @click="navigateTo('/docs')">
    <Underline>docs</Underline>
       </div>

        <div class="group/ul w-full !cursor-pointer" @click=" handleSidebarOpen(us.settingsOpen)">
    <Underline>settings</Underline>
       </div>
  </div>
  
  </div>
</template>