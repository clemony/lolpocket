<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const { class: className, role: rl } = defineProps<{
  class?: HTMLAttributes['class']
  role: ChampionRole | string | null
  noLabel?: boolean
  size?: ButtonProps['size']
  active?: boolean
  clear?: boolean
}>()

const role = computed(() => {
  if (typeof rl !== 'string') return rl

  return championRoles.find(p => p.name === (rl ?? 'All'))
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
          'hover:**:text-pc hover:text-pc order-first text-white':
            active || (cs().filters.role && cs().filters.role === role.name),
          'pr-3': active && clear,
        },
        className,
      )
    "
    :style="{
      backgroundColor: `${(cs().filters.role && cs().filters.role === role.name) || active ? role.color : 'transparent'}`,
    }">
    <Element
      square
      size="sm">
      <component
        :is="`i-lol-${role?.name.toLowerCase()}`"
        :class="cn('absolute size-4.25! shrink-0 dst', role?.class)" />
    </Element>
    {{ role.name }}
    <icon
      v-if="clear"
      class="size-4 text-white **:stroke-[2.6]"
      name="x" />
  </UButton>
</template>
