<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props
  = defineProps<{
    class?: HTMLAttributes['class']
    summoner?: MaybeRef<Summoner>
  }>()

const forwarded = useForwardProps(props)
const puuid = computed(() => toValue(props.summoner)?.puuid)
</script>

<template>
  <ToggleGroup v-model:model-value="as().settings.favorite_summoners">
    <Tooltip
      :text="
        as().settings.favorite_summoners.includes(puuid) ? 'Unfollow' : 'Follow'
      "
    >
      <ToggleGroupItem
        v-if="puuid"
        v-bind="forwarded"
        :value="puuid"
      >
        <Icon
          :name="
            as().settings.favorite_summoners.includes(puuid)
              ? 'heart-sm'
              : 'heart-sm-outline'
          "
          :class="
            cn(
              'group-not-on/toggle:text-bc/90 group-on/toggle:animate-heartbeat group-on/toggle:text-domination size-8.5 **:stroke-[0.7]',
            )
          "
        />
      </ToggleGroupItem>
    </Tooltip>
  </ToggleGroup>
</template>
