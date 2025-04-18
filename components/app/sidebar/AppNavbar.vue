<script setup lang="ts">
import { motion } from 'motion-v'

const us = useUiStore()
const route = useRoute()

watch(
  () => us.commandOpen,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const hovered = ref(false)

const collapsed = computed (() => {
  if (route.path != '/')
  return 'default'
return !hovered.value ? 'closed' : 'open'
})

const variants = {
  closed: {
  top: 0,
  left: '50px',
  transform: 'translateX(-110%)',},
  open: {
   transform: 'translateX(0)'
  },
  default: {},
}

const initial = computed (() => {
return route.path == '/' ? 'closed' : 'open'
})

const style = computed (() => {
if (route.path == '/')
return {
  position: 'absolute',
}
})

const barVariants= {
  default:{ opacity: 1},
  closed:{opacity: 0},
  open:{ opacity: 1}
}

const arrowVariants= {
  default:{opacity: 0},
  closed:{opacity: 1},
  open:{ opacity: 0}
}
</script>

<template>
  <motion.menu
     @hover-start="hovered = true"
     @hover-end="hovered = false"
     div class="flex" >
     <motion.div class="bg-b1 z-5 border-r  tldr-30 relative"
     :class="{'border-b3/30': collapsed, 'border-b3/70': !collapsed || collapsed == null }">

      <NavBtn @click="navigateTo('/')" class="absolute z-6 top-3 left-3">
        <h3 class="dst select-none !tracking-normal bg-transparent">
          LP
        </h3>
      </NavBtn>

      <motion.div v-if="!hovered && route.path == '/'"
      :variants="arrowVariants"
      :animate="collapsed" class="size-full grid place-items-center pointer-events-none">
      
        <icon name="radix-icons:double-arrow-right" class="size-6 opacity-70"/>
      </motion.div>
    <motion.nav
    :initial="route.path != '/' ? 'open' : 'closed'"
    :variants="barVariants"
    :animate="collapsed"
      class="flex flex-col h-full gap-3.5 relative z-5 items-center pt-16 pb-3.25 bg-b2/40  w-[50px] "
      :class="{'border-r border-b3/60': route.path != '/' }"
      :style="{ '--bg-noise': 1 }">

      <NavBtn v-tippy="`Command ${getDeviceKey()}K`" class="" @click="us.commandOpen = true ">
        <icon name="eva:search-outline" class="size-6.5 dst" />
      </NavBtn>

      <NavBtn v-tippy="'Nexus'" :class="{ 'btn-active': route.meta.section == 'nexus' }" @click="navigateTo('/nexus')">
        <icon name="ph:polygon-fill" class="size-6" />
      </NavBtn>

      <NavBtn v-tippy="'Backpack'" :class="{ 'btn-active': route.path == '/backpack' }" @click="navigateTo('/backpack')">
        <icon name="radix-icons:backpack" class="size-5.5 " />
      </NavBtn>

      <NavBtn
        v-tippy="'Calculator'" :class="{ 'btn-active': route.path == '/calculator' }"
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

      <NavBtn v-tippy="'Settings'" class="disabled:btn-neutral, disabled:**:!text-nc disabled:hover:opacity-80" :class="{ 'btn-neutral **:!text-nc **:opacity-100 pointer-events-none': us.settingsOpen }" @click=" handleSettingsOpen()">
        <icon name="heroicons:cog-6-tooth-20-solid" class="size-5.5  opacity-70" />
      </NavBtn>

      <Grow />
      <PinnedButton />
      <div>
        <SidebarAddPocket />
        <SidebarDropdown />
      </div>
    </motion.nav>
    </motion.div>
    <!-- -translate-x-full  fixed top-0 left-[50px] -->
    <!-- <motion.div class="h-screen w-[291px]">
</motion.div> -->
    <motion.div
    :variants="variants"
    :animate="collapsed"
    :initial="initial"
    :style="style"
    class="shadow-warm shadow-black/5 h-screen !bg-b1 z-3">
      <SidebarInterface />
    </motion.div>
  </motion.menu>
</template>

<style scoped></style>
