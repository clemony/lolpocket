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
      <UButton color="neutral" type="submit" :loading="isSaving" label="Save" />
    </div>
  </UForm>
</template>
