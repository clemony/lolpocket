<script setup lang="ts">
const {
  class: className,
  clear = false,
  hover = 'btn',
  size = ['sq-8', '8'],
  variant = 'ghost',
} = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox v-model:model-value="cs().filters.role" :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="
          cn(
            'relative z-1 flex max-h-64 w-9/10 w-full flex-col flex-wrap items-center items-start gap-2 gap-y-3 py-0',
            className,
          )
        "
      >
        <Button
          v-if="cs().filters.role && clear"
          class="order-first hover:*:opacity-100"
          :variant
          :hover
          :size="size[0]"
          @click="cs().filters.role = null"
        >
          <icon class="size-4" name="x" />
        </Button>

        <BaseListboxItem
          v-for="role in championRoles"
          :key="role.name"
          class="fx-0 bg-transparent"
          :value="role.name"
          as-child
        >
          <RoleBadge as="label" :variant :size="size[1]" :role />
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
