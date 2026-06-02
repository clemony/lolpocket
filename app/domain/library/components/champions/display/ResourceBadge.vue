<script lang="ts" setup>
import type { AbilityResource } from "#shared/constants/champions/abilityResources"
import { abilityResources } from "#shared/constants/champions/abilityResources"
import type { ButtonProps } from "@nuxt/ui"

const { class: className, resource: p } = defineProps<{
  class?: HTMLAttributes["class"]
  resource: AbilityResource | string | null
  noLabel?: boolean
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  active?: boolean
  clear?: boolean
}>()

const resource = computed(() => {
  if (typeof p !== "string") return p
  return abilityResources.find((r) => r.name === (p ?? "All"))
}) /*
    :active="
      resource.name === 'None' && (active || filters.resource === 'None') ?
        'outline'
      : 'none'
    " */

const { filters } = storeToRefs(champFilter())
</script>

<template>
  <UButton
    v-if="resource"
    variant="ghost"
    hover="btn"
    :size
    :class="
      cn(
        'w-fit gap-2! px-5 text-sm! font-medium! text-pc/90',
        {
          //
          'order-first hover:text-pc hover:**:text-pc':
            active || (filters.resource && filters.resource === resource.name),
          //
          'text-white **:text-white':
            (active ||
              (filters.resource && filters.resource === resource.name)) &&
            resource.name !== 'None',
          //
          'pr-3': active && clear
        },
        className
      )
    "
    :style="{
      backgroundColor: `${(filters.resource && filters.resource === resource.name) || active ? resource.color : 'transparent'}`
    }">
    <!--    <Icon
      v-if="resource?.icon"
      :name="resource?.icon"
      :class="cn('!size-4  ds-2xs shrink-0', resource?.class)" /> -->

    {{ resource?.title || resource.name }}
    <icon v-if="clear" class="size-4 text-white **:stroke-[2.6]" name="x" />
  </UButton>
</template>
