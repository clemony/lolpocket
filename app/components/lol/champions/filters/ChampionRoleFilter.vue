<script setup lang="ts">
const {
  variant = 'ghost',
  class: className,
  clear = false,

  size = ['sq-8', '8'],
} = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']

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

          size="sm"
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
          <RoleBadge as="label" :variant size="sm" :role />
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
