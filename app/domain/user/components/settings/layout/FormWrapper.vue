<script lang="ts" setup>
const props = defineProps<{
  save?: boolean
}>()

const isSaving = shallowRef<boolean>(false)

function save() {
  isSaving.value = true
  isSaving.value = false
}
</script>

<template>
  <UForm @submit.prevent="">
    <slot />
    <template v-if="props.save">
      <USeparator />
      <div class="flex justify-start">
        <UButton
          block
          size="lg"
          color="neutral"
          type="submit"
          :ui="{
            base: 'rounded-xl bg-n2! hover:bg-n2/90!',
            label: 'grow-0'
          }"
          :loading="isSaving"
          label="Save" />
      </div>
    </template>
  </UForm>
</template>
