<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type: string
    color?: string
    isDisabled?: boolean
  }>(),
  {
    color: '#000000',
  },
)
const emit = defineEmits(['update:color'])
const color = ref()
/* watch(
() => color.value,
(newVal) => {
 console.log("💠 - newVal:", newVal)
 if (newVal){
  emit('update:color', color.value)
 }
}
) */

function handleChange(e) {
  color.value = e
  emit('update:color', color.value)
}
onMounted (() => {
  if (props.color) {
    color.value = props.color
  }
})
</script>

<template>
  <DropdownMenu>
    <LittleTip
      :disabled="!props.isDisabled"
      dark
      align="center"
      side="top"
      content="Color not available for image type"
    >
      <DropdownMenuTrigger
        class="rounded-md"
        :disabled="props.isDisabled"
      >
        <Button
          :disabled="props.isDisabled"
          variant="outline"
          size="icon"
          class="hover:border-neutral/60 group size-15 inset-shadow-sm transition-colors duration-300"
          :style="{
            backgroundColor: color,
          }"
        >
          <icon
            name="mingcute:color-picker-fill"
            class="size-7 drop-shadow-xs shadow-white group-disabled:opacity-60 "
          />
        </Button>
      </DropdownMenuTrigger>
    </LittleTip>
    <DropdownMenuContent class="isolate z-100">
      <ColorPick :color="color" default-format="hex" :visible-formats="['hex']" @update:color="handleChange($event)" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>

</style>
