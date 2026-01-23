<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:patch'])

const modelValue = ref(ms().filter.patch ?? ds().currentPatch)
</script>

<template>
  <Select
    v-model:model-value="modelValue"
    class="p-0">
    <SelectTrigger
      class="
        border-none bg-transparent px-2 shadow-none focus:ring-0 focus:outline-0
      "
      :class="cn('', props.class)"
      no-arrow>
      <icon
        name="more"
        class="size-5 shrink-0" />
    </SelectTrigger>

    <SelectContent
      position="popper"
      class="w-(--reka-select-trigger-width)!">
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>

        <SelectItem
          v-for="patch in ds().patchList"
          :key="patch"
          :value="patch"
          no-tick>
          <slot :value="patch.toString()" />

          <span class="flex items-center gap-2">
            <span class="size-4.5">
              <icon
                v-if="ms().filter.patch === patch"
                name="tick-sm"
                class="dst size-4.5" />
            </span>
            {{ patch }}
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
