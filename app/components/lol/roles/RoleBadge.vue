<script lang="ts" setup>
const { class: className, role: rl } = defineProps<{
  class?: HTMLAttributes['class']
  role: ChampionRole | string | null
  noLabel?: boolean
  size?: ButtonVariants['size']
  active?: boolean
  clear?: boolean
}>()

const role = computed(() => {
  if (typeof rl !== 'string')
    return rl

  return championRoles.find(p => p.name === (rl ?? 'All'))
})
</script>

<template>
  <Button
    v-if="role"
    variant="outline"
    hover="btn"
    :size
    :class="
      cn(
        'text-bc/90 w-fit pr-6 pl-4 text-sm! font-medium! capitalize',
        {
          'hover:**:text-bc hover:text-bc order-first text-white':
            active || (cs().filters.role && cs().filters.role === role.name),
          'pr-3': active && clear,
        },
        className,
      )
    "
    :style="{
      backgroundColor: `${(cs().filters.role && cs().filters.role === role.name) || active ? role.color : 'transparent'}`,
    }">
    <Element size="icon-sm">
      <component
        :is="`i-lol-${role?.name.toLowerCase()}`"
        :class="cn('dst absolute size-4.25! shrink-0', role?.class)" />
    </Element>
    {{ role.name }}
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6]" />
  </Button>
</template>
