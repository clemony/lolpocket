<script lang="ts" setup>
const isSaving = shallowRef<boolean>(false)

function save() {
  isSaving.value = true
  isSaving.value = false
}
</script>

<template>
  <UForm @submit.prevent="">
    <slot />
    <Separator />
    <div class="flex justify-start">
      <UButton
        block
        color="neutral"
        type="submit"
        :ui="{
          label: 'grow-0'
        }"
        :loading="isSaving"
        label="Save" />
    </div>
  </UForm>
</template>
