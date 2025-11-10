<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import type { TippyOptions } from 'vue-tippy'

const props = defineProps<TippyOptions & {}>()

const forwarded = useForwardProps(props)
</script>


<template>
<tippy v-bind="forwarded">
<slot />
</tippy>
</template>