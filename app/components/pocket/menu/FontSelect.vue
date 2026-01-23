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
        border-b3 bg-b1 ring-b3/80 ml-2 max-w-54 shadow-none ring
        inset-shadow-xs
      ">
      <SelectValue
        placeholder="Aa"
        as-child
        class="p-0">
        <!--
          :style="{ fontFamily: props.card.font[props.model] }" -->
        <div class="dst items-center align-text-bottom text-lg font-medium">
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
          class="dst text-lg">
          {{ font.display }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>
