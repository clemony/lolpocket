<script lang="ts" setup>
import { Primitive } from 'reka-ui'
import type { PrimitiveProps } from 'reka-ui'

import {gameMaps} from 'api/data/maps'
const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
mapId: number
}>()

const map = computed(() => {
const m = gameMaps.find(m => m.mapId == props.mapId)
 return m.mapName
})
</script>

<template>
  <Primitive v-bind="props">
    {{ map }}
  </Primitive>
</template>