<script setup lang="ts">
interface ToggleItem {
  icon: string
  text: string
}

const { items, modelValue: m } = defineProps<{
  modelValue: boolean
  items: ToggleItem[]
}>()
const emit = defineEmits(['update:model-value'])
const modelValue = ref<boolean>(false)

watch(() => m, (newVal) => {
  modelValue.value = newVal
}, { immediate: true })
</script>

<template>
  <Switch
    v-model:model-value="modelValue"
    class="w-25 h-6 overflow-hidden border data-[state=unchecked]:bg-b3/30 data-[state=unchecked]:border-b3 data-[state=checked]:border-neutral/60 relative [&_#switch-thumb]:size-4.5 [&_#switch-thumb]:z-2  [&_#switch-thumb]:translate-x-0.25 hover:ring shadow-xs drop-shadow-xs ring-bc/50 hover:ring-offset-3 ring-offset-b2 [&_#switch-thumb]:shrink-0 data-[state=checked]:[&_#switch-thumb]:translate-x-19.75"
    as="div"
    @change="emit('update:model-value', modelValue)">
    <template
      v-if="!modelValue"
      #off>
      <div
        class="inline absolute right-0 !text-2 pr-1.5 z-0 slide-in-from-right animate-in text-bc/50">
        <icon
          :name="items[0].icon"
          class="!size-3.5 inline align-[-1.5px] text-bc/40" />
        {{ items[0].text }}
      </div>
    </template>

    <template
      v-else
      #on>
      <span
        class="inline absolute text-nc animate-in slide-in-from-left pl-2">
        <icon
          :name="items[1].icon"
          class="!size-3.5 inline align-[-1.5px] text-nc" />
        {{ items[1].text }}
      </span>
    </template>
  </Switch>
</template>