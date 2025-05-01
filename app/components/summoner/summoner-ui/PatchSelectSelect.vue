<script lang="ts" setup>
const ms = useMatchStore()
</script>

<template>
  <Select v-model:model-value="ms.mf.patch">
    <SelectTrigger class="btn  btn-sm shadow-xs border-b3 drop-shadow-xs text-1 justify-center btn    w-24 pr-2 group  gap-2">
      <SelectValue />
      <icon name="up-sm" class="shrink-0 size-4.5 group-data-[state=open]:rotate-180" />
    </SelectTrigger>
    <SelectContent align="center" position="popper" class="rounded-lg  max-h-60">
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>
        <SelectItem v-for="patch in ms.previousPatch" :key="patch" :value="useToNumber(patch).value" class="font-medium text-2">
          {{ patch }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>