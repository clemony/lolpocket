<script lang="ts" setup>
import { fonts } from './fonts'

const props = defineProps<{
  model: number
  pocket: pocket
  tip?: string
}>()
</script>

<template>
  <Select class="group">
    <SelectTrigger v-tippy="props.tip" :no-arrow="true" class=" aspect-square size-14 shadow-none btn btn-ghost btn-lg btn-square hover:bg-b3/80 rounded-xl gap-0 data-[state=open]:bg-b3/80">
      <SelectValue placeholder="Aa" as-child>
        <div :style="{ fontFamily: props.pocket.card.font[props.model] }" class="text-6  dst font-medium">
          Aa
        </div>
      </SelectValue>
    </SelectTrigger>
    <SelectContent align="end" class="rounded-xl">
      <SelectGroup>
        <SelectItem
          v-for="font in fonts.sort()" :key="font.id" :value="font.id"
          :style="{ fontFamily: font.id }" class="text-4 dst">
          {{ font.display }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped>

</style>