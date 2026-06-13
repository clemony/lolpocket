<script lang="ts" setup>
import {
  LazyChampionCommand,
  LazyItemInfoCard,
  LazyRuneCommand,
  LazySpellCommand,
} from "#components"
import { AnimatePresence } from "motion-v"
import { useDraggableInfoModal } from "~/domain/app/composables/useDraggableInfoModal"
import type { ObjectDataType } from "~/domain/app/composables/useObjectData"
import { useObjectData } from "~/domain/app/composables/useObjectData"
import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"

const props = defineProps<{
  item: SidebarSearchEntry
  placementIndex?: number
  zIndex?: number
}>()
const emit = defineEmits<{
  grab: []
}>()
const open = defineModel<boolean>("open", { default: false })
const modalKey = computed(() => `${props.item.group}:${props.item.id}`)

const { dragConstraints, modalRef, modalStyle, updateDragConstraints } =
  useDraggableInfoModal({
    modalKey,
    open,
    placementIndex: () => props.placementIndex,
  })

const data = useObjectData({
  id: () => props.item.id,
  type: props.item.group as ObjectDataType,
})

const cardComponent = computed<Component | undefined>(() => {
  const groups: Record<string, Component> = {
    champion: LazyChampionCommand,
    spell: LazySpellCommand,
    item: LazyItemInfoCard,
    rune: LazyRuneCommand,
  }
  return groups[props.item.group]
})

const modalCardStyle = computed(() => ({
  ...modalStyle.value,
  zIndex: props.zIndex,
}))

function handlePointerDown() {
  emit("grab")
  updateDragConstraints()
}
</script>

<template>
  <AnimatePresence>
    <UCard
      v-if="open"
      :key="modalKey"
      ref="modalRef"
      v-motion="{
        drag: true,
        whileDrag: {
          scale: 1.03,
          transition: {
            duration: 0.2,
            type: 'spring',
            bounce: 0.4,
          },
        },
        dragConstraints,
        initial: {
          opacity: 0,
          y: 30,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: 30,
        },
      }"
      :style="modalCardStyle"
      :ui="{
        root: 'pointer-events-auto! absolute top-1/2 left-1/2 h-max min-h-64 max-w-240 min-w-70 rounded-5xl border-n3 bg-n1/90 backdrop-blur-md',
        body: 'p-0',
        header: '',
      }"
      @pointerdown.capture="handlePointerDown">
      <UButton
        variant="ghost"
        icon="i-x"
        :ui="{
          base: 'anchor absolute! top-1.5 right-2 h-6! max-h-6! w-6 max-w-6! min-w-6! overflow-visible rounded-full after:absolute after:size-10 after:place-self-center after:rounded-full hover:bg-n4/60! hover:inset-ring-n4!',
          leadingIcon: 'text-nc/40 group-hover/btn:text-nc',
        }"
        size="xs"
        aria-label="Close"
        :aria-describedby="`Close ${data?.data.value?.name} info dialog.`"
        @click.stop.prevent="open = false" />
      <component
        :is="cardComponent"
        v-if="data.status.value === 'success' && data"
        :object-data="data"
        @open-objedct="" />

      <div v-else-if="data.status.value === 'pending'"></div>

      <LazyUEmpty
        v-if="data.status.value === 'error'"
        variant="naked"
        icon="i-paw"
        size="xs"
        title="Item not found.">
        <template #description>
          It seems
          <ULink class="inline" underline> a lolpocat </ULink>
          may have moved this from it's previous location. Try refreshing to see
          if we've found it.
        </template>
      </LazyUEmpty>
    </UCard>
  </AnimatePresence>
</template>
