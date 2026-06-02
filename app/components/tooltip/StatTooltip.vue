<script lang="ts" setup>
const { name, text, value } = defineProps<{
  value?: string | string[]
  text?: string | string[]
  name?: string | string[]
}>()
const names = computed(() =>
  Array.isArray(name) ? name : name ? [name] : []
)
const values = computed(() =>
  Array.isArray(value) ? value : value ? [value] : []
)
const texts = computed(() =>
  Array.isArray(text) ? text : text ? [text] : []
)
</script>

<template>
  <div class="flex min-w-30 items-center p-1.5">
    <div
      v-for="(val, i) in values"
      :key="i"
      class="flex w-fit flex-col pr-3">
      <h6 class="text-sm!">
        {{ names[i] }}
      </h6>
      <h3 class="text-xl!">
        {{ val }}
      </h3>
      <div class="text-sm">
        {{ texts[i] }}
      </div>
    </div>
  </div>
</template>
