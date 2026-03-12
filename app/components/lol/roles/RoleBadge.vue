<script lang="ts" setup>
import type { ChampionRole } from "#shared/constants/misc/roles"
import { championRoles } from "#shared/constants/misc/roles"
import type { ButtonProps } from "@nuxt/ui"

const { class: className, role: rl } = defineProps<{
  class?: HTMLAttributes["class"]
  role: ChampionRole | string | null
  noLabel?: boolean
  size?: ButtonProps["size"]
  active?: boolean
  clear?: boolean
}>()

const role = computed(() => {
  if (typeof rl !== "string") return rl

  return championRoles.find((p) => p.name === (rl ?? "All"))
})
</script>

<template>
  <UButton
    v-if="role"
    variant="outline"
    hover="btn"
    :size
    :class="
      cn(
        'w-fit pr-6 pl-4 text-sm! font-medium! text-pc/90 capitalize',
        {
          'order-first text-white hover:text-pc hover:**:text-pc':
            active ||
            (champFilter().filters.role &&
              champFilter().filters.role.push(role.name)),
          'pr-3': active && clear,
        },
        className,
      )
    "
    :style="{
      backgroundColor: `${(champFilter().filters.role && champFilter().filters.role.push(role.name)) || active ? role.color : 'transparent'}`,
    }">
    <Element square size="sm">
      <component
        :is="`i-lp-${role?.name.toLowerCase()}`"
        :class="cn('absolute size-4.25! shrink-0 ds-2xs', role?.class)" />
    </Element>
    {{ role.name }}
    <icon v-if="clear" class="size-4 text-white **:stroke-[2.6]" name="x" />
  </UButton>
</template>
