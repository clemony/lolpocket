<script lang="ts" setup>
import { ErrorMessage } from 'vee-validate'
import { useFormField } from './useFormField'

const { name, formMessageId } = useFormField()
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    as="p"
    :name="toValue(name)"
    class="text-destructive font-medium" />
</template>
