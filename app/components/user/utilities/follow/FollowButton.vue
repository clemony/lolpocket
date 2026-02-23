<script lang="ts" setup>
import { useForwardProps } from "reka-ui"

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes["class"]
  summoner?: MaybeRef<Summoner>
}>()

const forwarded = useForwardProps(props)
const puuid = computed(() => toValue(props.summoner)?.puuid)
const favorites = computed({
  get: () => user().settings?.favorite_summoners ?? [],
  set: (value) => {
    const settings = user().settings
    if (settings) settings.favorite_summoners = value
  },
})
const isFavorited = computed(() =>
  puuid.value ? favorites.value.includes(puuid.value) : false
)
</script>

<template>
  <ToggleGroup v-model:model-value="favorites">
    <Tooltip :label="isFavorited ? 'Unfollow' : 'Follow'">
      <ToggleGroupItem v-if="puuid" v-bind="forwarded" :value="puuid">
        <Icon
          :name="isFavorited ? 'heart-sm' : 'heart-sm-outline'"
          :class="
            cn(
              'size-8.5 **:stroke-[0.7] group-not-on/toggle:text-pc/90 group-on/toggle:animate-heartbeat group-on/toggle:text-dom'
            )
          " />
      </ToggleGroupItem>
    </Tooltip>
  </ToggleGroup>
</template>
