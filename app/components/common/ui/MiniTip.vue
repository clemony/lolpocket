<script setup lang="ts">
const { id, name, class: className, label, tag } = defineProps<{
  id?: string
  label: string
  name?: string
  tag?: string
  class?: HTMLAttributes['class']
}>()

const color = computed (() => label === 'item' ? itemColorByTier(Number(id)) : 'var(--color-nc)')
</script>

<template>
  <button class="flex cursor-pointer items-center gap-3 px-2 pt-1.5 pb-0">
    <!-- IMG -->

    <Img
      v-if="id && label"
      :src="iconSource(label, id)"
      spinner
      size="c-5"
      :alt="`${name || itemName(label, id)} Image`"
      class="origin-left scale-110 rounded-full shadow-sm drop-shadow-sm">
    </Img>
    <!-- NAME / LINK -->
    <span
      v-if="name"
      :style="{ color }"
      class="inline-flex items-center pr-1 align-baseline leading-0 text-bc/70">
      {{ name }}

      <span class="ml-1 inline text-0!">
        {{ tag }}
      </span>
    </span>
    <div
      v-else-if="!id"
      :style="{ color }"
      :class="cn('inline w-full pr-1 pl-0.5 text-pretty whitespace-pre-line text-bc/70', className)">
      {{ label }}
    </div>
    <span
      v-else
      :style="{ color }"
      class="pr-1 leading-0">
      {{ itemName(label, id) }}
    </span>
  </button>
</template>
