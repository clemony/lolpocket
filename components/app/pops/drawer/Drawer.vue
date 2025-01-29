<script lang="ts" setup>
import SidebarDrawer from 'components/app/sidebar/SidebarDrawer.vue'
import CardDrawer from './CardDrawer.vue'
import EditPocketDrawer from '../../../pocket/sheet/EditPocketDrawer.vue'
import ItemDrawer from './ItemDrawer.vue'
import PocketDrawer from '../../../pocket/sheet/PocketDrawer.vue'
import RuneDrawer from './RuneDrawer.vue'

const ts = useTempStore()

const t = ref(ts.drawerComponent)
const component = computed (() => {
  return t.value == 'sidebar'
    ? SidebarDrawer
    : t.value == 'pocket'
      ? PocketDrawer
      : t.value == 'editPocket'
        ? EditPocketDrawer
        : t.value == 'card'
          ? CardDrawer
          : t.value == 'rune'
            ? RuneDrawer
            : t.value == 'item'
              ? ItemDrawer
              : ''
})

onMounted (async () => {
  await ts.drawerComponent
  t.value = ts.drawerComponent
})
</script>

<template>
  <Sheet :open="ts.drawerTrigger">
    <SheetTrigger>
      <button>
      </button>
    </SheetTrigger>
    <SheetContent>
      <component :is="component" />
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>
