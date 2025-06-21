<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['update:active'])
</script>

<template>
  <div class="flex items-center mb-2  -ml-1">
    <label :class="{ 'pointer-events-none': !props.active }" class="btn btn-sm gap-2 font-semibold text-bc/65 rounded-lg px-2.5 place-self-center text-3  btn-ghost" @click="emit('update:active')">
      <input
        v-bind="$attrs"
        class="peer hidden"
        aria-label="All"
        name="match-champion-filter"
        value="All" />

      <slot />

      <icon v-if="active" name="x-sm" class=" shrink-0 -mt-px" />

    </label>
  </div>
</template>