<script lang="ts" setup>
/* const { isOpen } = defineProps<{
isOpen: boolean
}>() */

const isOpen = ref(false)
</script>

<template>
  <label
    class="btn btn-outline **:text-bc/60 absolute right-6 top-0 btn-square">
    <input
      v-model="isOpen"
      type="checkbox"
      class="peer hidden absolute pointer-events-none" />
    <icon
      name="lets-icons:expand-down-stop"
      :class="
        cn('transition-all  absolute duration-200', {
          ' !top-2  -scale-y-100': isOpen,
        })
      " />
    <slot />
  </label>
</template>
