<script lang="ts" setup>
import { fonts } from './fonts'

const props = defineProps<{
  model: number
  card: Card
  tip?: string
}>()
</script>

<template>
  <Select class="group">
    <SelectTrigger
      class="shadow-none border-b3 bg-b1 ring ring-b3/80 inset-shadow-xs max-w-54 ml-2">
      <SelectValue
        placeholder="Aa"
        as-child
        class="p-0">
        <div
          :style="{ fontFamily: props.card.font[props.model] }"
          class="text-md items-center align-text-bottom dst font-medium">
          {{ props.model == 0 ? "Title Font" : "Accent Font" }}
        </div>
      </SelectValue>
    </SelectTrigger>

    <SelectContent
      align="end"
      class="rounded-xl">
      <SelectGroup>
        <SelectItem
          v-for="font in fonts.sort()"
          :key="font.id"
          :value="font.id"
          :style="{ fontFamily: font.id }"
          class="text-md dst">
          {{ font.display }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>
