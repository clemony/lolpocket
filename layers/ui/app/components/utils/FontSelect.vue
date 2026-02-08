<script lang="ts" setup>
import { fonts } from "~~/layers/ui/app/components/utils/fonts"

const props = defineProps<{
  model: number
  tip?: string
}>()
</script>

<template>
  <Select class="group">
    <SelectTrigger
      class="ml-2 max-w-54 border-p3 bg-p0 shadow-none ring inset-shadow-xs ring-p3/80">
      <SelectValue class="p-0" placeholder="Aa" as-child>
        <!--
          :style="{ fontFamily: props.card.font[props.model] }" -->
        <div class="items-center align-text-bottom text-lg font-medium dst">
          {{ props.model === 0 ? "Title Font" : "Accent Font" }}
        </div>
      </SelectValue>
    </SelectTrigger>

    <SelectContent class="rounded-xl" align="end">
      <SelectGroup>
        <SelectItem
          v-for="font in fonts.sort()"
          :key="font.id"
          class="text-lg dst"
          :value="font.id"
          :style="{ fontFamily: font.id }">
          {{ font.display }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
