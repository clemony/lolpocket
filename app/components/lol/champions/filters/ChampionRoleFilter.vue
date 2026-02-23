<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"
import { championRoles } from "#shared/constants/misc/roles"

const {
  variant = "ghost",
  class: className,
  clear = false,

  size = ["sq-8", "8"],
} = defineProps<{
  class?: HTMLAttributes["class"]
  clear?: boolean
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
}>()
</script>

<template>
  <Listbox v-model:model-value="champFilter().filters.role" :multiple="false">
    <ListboxContent as-child>
      <TransitionSlide
        group
        :class="
          cn(
            'relative z-1 flex max-h-64 w-9/10 flex-col flex-wrap items-center gap-2 gap-y-3 py-0',
            className
          )
        ">
        <UButton
          v-if="champFilter().filters.role && clear"
          class="order-first hover:*:opacity-100"
          :variant
          size="sm"
          @click="champFilter().filters.role = null">
          <icon class="size-4" name="x" />
        </UButton>

        <BaseListboxItem
          v-for="role in championRoles"
          :key="role.name"
          class="fx-0 bg-transparent"
          :value="role.name"
          as-child>
          <RoleBadge as="label" :variant size="sm" :role />
        </BaseListboxItem>
      </TransitionSlide>
    </ListboxContent>
  </Listbox>
</template>
