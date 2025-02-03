<script lang="ts" setup>
import CardDrawer from './CardDrawer.vue'
import EditPocketSheet from 'components/pocket/sheet/EditPocketSheet.vue'
import ItemDrawer from './ItemDrawer.vue'
import PocketSheet from '../../../pocket/sheet/PocketSheet.vue'
import RuneDrawer from './RuneDrawer.vue'

const ts = useTempStore()

const t = ref(ts.drawerComponent)
const component = computed (() => {
  return t.value == 'sidebar'
  t.value == 'pocket'
    ? PocketSheet
    : t.value == 'editPocket'
      ? EditPocketSheet
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
