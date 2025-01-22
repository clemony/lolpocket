<script setup lang="ts">
  import { VueDraggable } from 'vue-draggable-plus'
  import type { HTMLAttributes } from 'vue'

  const as = useAccountStore()
  const ts = useTempStore()

  const ds = useDataStore()
  const props = defineProps<{
    pocket?: pocket
    dragDisabled?: boolean
    class?: HTMLAttributes['class']
  }>()

  const list = computed(() => {
    return useItemFilter()
  })

  const disabled = ref(false)
</script>

<template>
  <div class="max-h-[89.4vh] h-[89.4vh] min-h-[89.4vh] w-full">
    <VueDraggable
      :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }"
      ref="target"
      :sort="false"
      :bubbleScroll="false"
      :scroll="false"
      v-model="list"
      ghostClass="ghosty"
      @click.meta="disabled = true"
      :delay="0"
      :disabled="disabled || props.dragDisabled"
      :animation="300"
      :force-fallback="true"
      :fallbackTolerance="0"
      fallbackClass="drag-clone"
      :fallbackOnBody="true"
      @click.stop.prevent
      @remove=""
      :class="cn(' overflow-y-auto max-h-[89.4vh] grid grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(64px,1fr))] justify-center gap-3 p-6  ', props.class)">
      <Item
        v-for="item in list"
        :key="item.id"
        :item="item"
        :pocket="pocket"
        class="size-20 shadow-sm"
        @click.right.stop.prevent="useDrawer('ItemDrawer', null, null, item)" />
    </VueDraggable>
  </div>
</template>

<style></style>
