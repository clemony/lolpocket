<script setup lang="ts">
const {
  class: className,
  summoner,
  type: t
} = defineProps<{
  class?: HTMLAttributes["class"]
  summoner?: Summoner | Partial<Summoner>
  type: SummonerId
}>()
type SummonerId = "tag" | "region" | "level"
const tag = computed(() => {
  if (!summoner?.tag) return null
  return summoner?.tag
})
interface Label {
  icon?: string
  placeholder?: string
  label?: string
}
const types: Record<string, Label> = {
  tag: {
    icon: "i-hash",
    placeholder: "unknown"
  },
  region: {
    icon: "i-at",
    placeholder: "runeterra"
  },
  level: {
    label: "lv.",
    placeholder: "0"
  }
}

const id = computed(() => {
  if (!summoner || !summoner?.[t as SummonerId]) return null
  return summoner?.[t as SummonerId]
})
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center align-baseline leading-none antialiased',
        { 'opacity-50': !id },
        className
      )
    ">
    <Icon
      v-if="types[t]?.icon"
      :class="
        cn('whitespace-[collapse] inline size-3.25 align-bottom', {
          'mr-px': type !== 'tag',
          'text-n5': type === 'tag'
        })
      "
      :name="types[t]?.icon" />
    <template v-else-if="types[t]?.label">
      {{ types[t]?.label }}&#x202F;</template><template v-if="summoner?.tag">
      {{ id }}
    </template>
    <template v-else>{{ types[t]?.placeholder }}</template>
  </span>
</template>
