<script lang="ts" setup>
import type { Mail } from './mails'

interface MailListProps {
  items: Mail[]
}

defineProps<MailListProps>()
const selected = defineModel<string>('selected', { required: false })

function getBadgeVariantFromLabel(label: string) {
  if (['work'].includes(label.toLowerCase()))
    return 'default'

  if (['personal'].includes(label.toLowerCase()))
    return 'outline'

  return 'secondary'
}
</script>

<template>
  <button
    v-for="item of items"
    :key="item.id"
    :class="
      cn(
        'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-2 transition-all hover:bg-b2/50',
        selected === item.id && 'bg-b2/30',
      )
    "
    @click="selected = item.id">
    <div class="flex w-full flex-col gap-1">
      <div class="flex items-center">
        <div class="flex items-center gap-2">
          <div class="font-semibold">
            {{ item.name }}
          </div>
          <span
            v-if="!item.read"
            class="flex h-2 w-2 rounded-full bg-blue-600" />
        </div>
        <div
          :class="
            cn(
              'ml-auto text-2',
              selected === item.id ? 'text-bc' : 'text-bc/60',
            )
          ">
          12 minutes ago
        </div>
      </div>

      <div class="text-2 font-medium">
        {{ item.subject }}
      </div>
    </div>
    <div class="line-clamp-2 text-2 text-bc/60">
      {{ item.text.substring(0, 300) }}
    </div>
    <div class="flex items-center gap-2">
      <Badge
        v-for="label of item.labels"
        :key="label"
        :variant="getBadgeVariantFromLabel(label)">
        {{ label }}
      </Badge>
    </div>
  </button>
</template>
