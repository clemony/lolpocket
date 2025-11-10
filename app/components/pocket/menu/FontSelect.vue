<script lang="ts" setup>
import { fonts } from './fonts'

const props = defineProps<{
  model: number
  tip?: string
}>()
</script>

<template>
  <Select class="group">
    <SelectTrigger
      class="
        ml-2 max-w-54 border-b3 bg-b1 shadow-none ring inset-shadow-xs
        ring-b3/80
      ">
      <SelectValue
        placeholder="Aa"
        as-child
        class="p-0">
        <!--
          :style="{ fontFamily: props.card.font[props.model] }" -->
        <div
          class="items-center align-text-bottom text-4 font-medium dst">
          {{ props.model === 0 ? "Title Font" : "Accent Font" }}
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
          class="text-4 dst">
          {{ font.display }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>
