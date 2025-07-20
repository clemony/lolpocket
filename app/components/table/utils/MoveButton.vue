<script setup lang="ts">
const props = defineProps<{
  to?: Array<any>
  text?: string
  icon?: string
}>()

const ps = usePocketStore()

function move() {
  const selectedKeys = ps.selectedRows.map(({ key }) => key)

  /*     function description() {
        if (selectedKeys.length > 1) {
            return `${selectedKeys.length} pockets moved to ${props.text}`
        } else {
            return `One pocket moved to ${props.text}`
        }
    }
 */
  selectedKeys.forEach((key) => {
    deletePocket(key)
  })

  /*     toast(props.text, {
        description: description,
        action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
        },
    }) */
}

const selectedCount = ref(ps.selectedRows.length)

watch(
  () => ps.selectedRows,
  (newVal) => {
    selectedCount.value = newVal.length
  },
)
</script>

<template>
  <Button
    variant="outline"
    shape="square"
    :alt="`move to${props.text}`"
    :disabled="!ps.selectedRows.length"
    class="join-item relative -mt-px w-14"
    @click="move">
    <slot />

    <div
      v-if="ps.selectedRows.length"
      class="bg-n1 text-bc pointer-events-none absolute top-[1px] right-1 grid aspect-square size-3.5 place-content-center place-items-center rounded-full">
      {{ selectedCount }}
    </div>
  </Button>
</template>

<style scoped></style>
