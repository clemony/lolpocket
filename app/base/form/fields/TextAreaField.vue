<script setup lang="ts">
import { FormField } from '~/base/form/index.form'

const {
  name = 'message',
  title = 'Message',
  class: className,
  optional,
  placeholder
} = defineProps<{
  class?: HTMLAttributes['class']
  optional?: boolean
  placeholder: string
  title?: string
  name?: string
}>()
</script>

<template>
  <FormField
    v-slot="{ componentField }"
    :name>
    <FormItem :class="cn('relative mt-1 mb-3  pl-3', className)">
      <FormLabel
        v-tippy="{ content: optional ? 'optional' : null, theme: 'neutral', placement: 'right' }"
        class="group/label text-5 mb-3 flex w-min items-center pr-1 font-bold">
        <slot>{{ title }}</slot>
        <Element
          v-if="optional"
          size="icon-sm">
          <icon
            name="lucide:asterisk"
            class=" size-3.5 -translate-x-4 -translate-y-1 opacity-50 transition-opacity duration-300 **:stroke-[1.5] group-hover/label:opacity-100" />
        </Element>
      </FormLabel>

      <Textarea
        :placeholder
        v-bind="componentField"
        class="min-h-24 w-full" />
    </FormItem>
  </FormField>
</template>