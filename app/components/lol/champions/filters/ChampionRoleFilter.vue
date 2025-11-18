<script setup lang="ts">
import { championRoles } from '#shared/references'

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
  <Listbox
    v-model:model-value="cs().filters.role"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="
          cn('relative z-1 flex max-h-64 w-9/10 w-full flex-col flex-wrap items-center items-start gap-2 gap-y-3 py-0',
            className,
          )
        ">
        <Button
          v-if="cs().filters.role && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.role = null">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="role in championRoles"
          :key="role.name"
          class="bg-transparent fx-0"
          :value="role.name"
          as-child>
          <RoleBadge
            as="label"
            :variant
            :size="size[1]"
            :role>
          </RoleBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
