<script setup lang="ts">
const {
  name = 'message',
  title = 'Message',
  class: className,
  optional,
  placeholder,
} = defineProps<{
  class?: HTMLAttributes['class']
  optional?: boolean
  placeholder: string
  title?: string
  name?: string
}>()
</script>

<template>
  <Field
    :name>
    <FormItem :class="cn('relative mt-1 mb-3 pl-3', className)">
      <FormLabel
        v-tippy="{
          content: optional ? 'optional' : null,
          theme: 'neutral',
          placement: 'right',
          offset: [0, 0],
        }"
        class="
          group/label mb-3 flex w-min cursor-help items-center text-5 font-bold
        ">
        <slot>{{ title }}</slot>
        <Element
          v-if="optional"
          size="icon-sm">
          <icon
            name="lucide:asterisk"
            class="
              size-3.5 -translate-x-4 -translate-y-1 opacity-50
              transition-opacity duration-300
              **:stroke-[1.5]
              group-hover/label:opacity-100
            " />
        </Element>
      </FormLabel>

      <Textarea
        :placeholder
        class="min-h-24 w-full" />
    </FormItem>
  </Field>
</template>
