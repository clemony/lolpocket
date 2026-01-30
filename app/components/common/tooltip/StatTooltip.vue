<script lang="ts" setup>
const { name, text, value } = defineProps<{
  value?: string | string[]
  text?: string | string[]
  name?: string | string[]
}>()
</script>

<template>
  <div class="flex min-w-30 items-center p-1.5">
    <div v-for="i in value.length" :key="i" class="flex w-fit flex-col pr-3">
      <h6 class="text-sm!">
        {{ name[i] }}
      </h6>
      <h3 class="text-xl!">
        {{ value[i] }}
      </h3>
      <div class="text-sm">
        {{ text[i] }}
      </div>
    </div>
  </div>
</template>
