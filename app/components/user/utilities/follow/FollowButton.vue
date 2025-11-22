<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    summoner?: Summoner
    placement?: Side
    theme?: string
    size?: ToggleVariants['size']
    variant?: ToggleVariants['variant']
    base?: ToggleVariants['base']
    on?: ToggleVariants['on']
    hover?: ToggleVariants['hover']
  }>(),
  {
    base: 'btn',
    on: 'floating',
    placement: 'top',
    theme: 'base',
    variant: 'floating'
  },
)

const forwarded = useForwardProps(props)
const puuid = computed (() => props.summoner?.puuid)
</script>

<template>
  <ToggleGroup v-model:model-value="as().settings.favorite_summoners">
    <ToggleGroupItem
      v-if="puuid"
      :value="puuid"
      placement="left"
      on="base"
      v-bind="forwarded"
      variant="outline"
      :class="cn('', toggleVariants({ variant, on, size, base }), props.class)">
      <Icon
        :name="as().settings.favorite_summoners.includes(puuid) ? 'heart-sm' : 'heart-sm-outline'"
        :class="cn('size-8.5 **:stroke-[0.7] group-not-on/toggle:text-bc/90 group-on/toggle:animate-heartbeat group-on/toggle:text-domination',
        )" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
