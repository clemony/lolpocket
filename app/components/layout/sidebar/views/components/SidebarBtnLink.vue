<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const { to } = defineProps<{
  to?: RouteRecordRaw
}>()

const route = useRoute()
</script>

<template>
  <BtnLink
    v-if="to && to"
    :disabled="route?.path.match(to.path)"
    :to="{ name: to?.name }">
    <slot>
      <Icon
        :name="String(to.meta?.icon)"
        :class="cn('size-5', to?.meta?.listClass)" />
      {{ to.meta?.title || to.name }}
    </slot>
  </BtnLink>
</template>
