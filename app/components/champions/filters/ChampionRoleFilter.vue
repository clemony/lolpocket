<script setup lang="ts">
import { championRoles } from '#shared/appdata'

const { class: className, clear = false, hover = 'btn', size = ['sq-xs', 'xs'], variant = 'ghost' } = defineProps<{
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
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-2  relative flex-col flex-wrap gap-y-3 w-9/10 max-h-64 items-start', className)">
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
