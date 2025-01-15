<script setup lang="ts">
  import { DrawerPortal } from 'components/base/drawer/drawerindex'
  const as = useAccountStore()

  const ts = useTempStore()

  const childRef = ref()

  watch(
    () => ts.drawerState,
    (newVal) => {
      if (!newVal) {
        ts.drawerType = null
        ts.drawerPocket = null
        //childRef.value.clearForm()
        childRef.value.name = ''
        console.log('💠 - onOpenChange - ts.drawerPocket:', ts.drawerPocket)
      }
    }
  )

  //drawer.isAllowedToDrag.value = isDragEnabled.value
</script>
<template>
  <DrawerRoot
    v-model:open="ts.drawerState"
    :key="ts.drawerType"
    :fixed="true"
    handle-only
    shouldScaleBackground
    direction="right">
    <DrawerPortal>
      <DrawerOverlay
        class="fixed inset-0 bg-black/70"
        @click.stop.prevent="!ts.drawerState" />
      <DrawerContent
        @openAutoFocus.prevent
        class="bg-b1 text-bc fixed inset-y-0 right-0 flex w-auto flex-col items-center rounded-lg px-12 py-5 max-w-120">
        <PocketDrawer v-if="ts.drawerType == 'PocketDrawer'" />
        <ChampionDrawer v-if="ts.drawerType == 'ChampionDrawer'" />
        <ItemDrawer v-if="ts.drawerType == 'ItemDrawer'" />
        <LazyRuneDrawer v-if="ts.drawerType == 'RuneDrawer'" />
        <LazyCardDrawer v-if="ts.drawerType == 'CardDrawer'" />
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
<style scoped></style>

class="absolute top-0 right-0 pt-3 focus:outline-hidden" :class="{ 'justify-center px-[8%]': side == 'bottom', 'h-screen max-h-screen max-w-fit items-start overflow-hidden pr-0 pl-16': side ==
'right', }" class="mt-6" :class="{ 'w-1/2 pr-32': side == 'bottom', 'items-start': side == 'right', }"
