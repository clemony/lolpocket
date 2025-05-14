<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const rs = useRuneStore()
</script>

<template>
  <Field class="px-3  py-3 w-full">
    <div v-if="pocket?.runes && pocket?.runes?.length" class="w-full flex  gap-3.5">
      <RuneSetButton v-for="(set, i) in pocket.runes" :key="i" :set-key="i" :pocket="pocket" :set="set" />
    </div>

  <!--   <NavBtn class="mt-4 w-full justify-start !font-medium px-3.5 !text-2" @click="newRuneSet(pocket.key)">
      <icon name="add-sm" />
      Add Rune Set
    </NavBtn> -->
  </Field>
</template>