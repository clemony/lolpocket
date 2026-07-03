<script lang="ts" setup>
import {
  LazyChampionInfoCard,
  LazyItemInfoCard,
  LazyRuneInfoCard,
  LazySpellInfoCard,
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
const emit = defineEmits(["grab", "update:open"])

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
    champion: LazyChampionInfoCard,
    spell: LazySpellInfoCard,
    item: LazyItemInfoCard,
    rune: LazyRuneInfoCard,
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
    <div
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
          y: 10,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: 10,
        },
      }"
      :style="modalCardStyle"
      :class="
        cn(
          'pointer-events-auto! absolute top-1/2 left-1/2 h-max w-full touch-none rounded-5xl border border-n3 bg-n1/94 backdrop-blur-md transition-[max-width] duration-400 ease-out',
          data.size.value === 'lg' ? 'w-100 max-w-100' : 'max-w-84'
        )
      "
      @pointerdown.capture="handlePointerDown">
      <UButton
        variant="ghost"
        icon="i-x"
        :ui="{
          base: 'anchor absolute! top-2.5 right-2.5 z-5! hover:bg-n4/60! hover:inset-ring-n4!',
          leadingIcon: 'text-nc/40 group-hover/btn:text-nc',
        }"
        size="xs"
        aria-label="Close"
        :aria-describedby="`Close ${data?.data.value?.name} info dialog.`"
        @click.stop.prevent="void (open = false)" />
      <component
        :is="cardComponent"
        v-if="data.status.value === 'success' && data"
        :object-data="data"
        @update:open="emit('update:open', $event)" />

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
    </div>
  </AnimatePresence>
</template>
