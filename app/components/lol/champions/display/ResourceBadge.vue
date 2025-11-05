<script lang="ts" setup>
import type { ChampionResource } from '@appdata'
import { championResources } from '@appdata'

const { class: className, resource: p } = defineProps<{
  class?: HTMLAttributes['class']
  resource: ChampionResource | string | null
  noLabel?: boolean
  size?: ButtonVariants['size']
  active?: boolean
  clear?: boolean
}>()

const resource = computed(() => {
  if (typeof p !== 'string')
    return p

  return championResources.find(p => p.name === (p ?? 'All'))
})
</script>

<template>
  <Button
    v-if="resource"
    variant="ghost"
    :active="resource.name === 'None' && (active || cs().filters.resource === 'None') ? 'outline' : 'none'"
    hover="btn"
    :size
    :class="cn(
      'w-fit !text-2 !font-medium  !gap-2  px-5  text-bc/90  ',
      {
        //
        'hover:**:text-bc hover:text-bc order-first ':
          active || cs().filters.resource && cs().filters.resource === resource.name,
        //
        'text-white **:text-white':
          (active || cs().filters.resource && cs().filters.resource === resource.name) && resource.name !== 'None',
        //
        'pr-3': active && clear,
      },
      className,
    )"
    :style="{
      backgroundColor: `${cs().filters.resource && cs().filters.resource === resource.name || active ? resource.color : 'transparent'}`,
    }">
    <!--    <hicon
      v-if="resource?.icon"
      :name="resource?.icon"
      :class="cn('!size-4  dst shrink-0', resource?.class)" /> -->

    {{ resource?.title || resource.name }}
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6] " />
  </Button>
</template>
