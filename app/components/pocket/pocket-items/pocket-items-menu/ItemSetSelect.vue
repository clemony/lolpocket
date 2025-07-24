<script lang="ts" setup>
const props = defineProps<{
  index: number
  pocket: Pocket
  title?: string
}>()
const emit = defineEmits(['update:model-value'])

const pocket = computed (() => {
  return props.pocket
})
</script>

<template>
  <Field :title="props.title">
    <Select v-model:model-value="pocket.complete.items[props.index]">
      <SelectTrigger
        class="h-auto shadow-none py-4 hover:border-b2 !bg-b2/40 hover:inset-shadow-xs hover:shadow-warm-2 cursor-pointer !rounded-box"
        :disabled="pocket.items.length == 0">
        <SelectValue
          as-child
          class="!bg-transparent rounded-box">
          <ItemSelectSet :model-value="pocket.complete.items[props.index]" />
        </SelectValue>
      </SelectTrigger>

      <SelectContent
        position="popper"
        class="w-[var(--reka-select-trigger-width)] !rounded-box">
        <SelectGroup>
          <SelectItem
            v-for="set in pocket.items"
            :key="set.name"
            :value="set"
            class="rounded-xl">
            <LazyItemSelectSet :set="set" />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Field>
</template>

<style scoped>

</style>