<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()
const emit = defineEmits(['update:model-value'])
// console.log('💠 - index:', props.index)

const pocket = computed (() => {
  return props.pocket
})
</script>

<template>
  <Field
    title="Runes"
    class="p-0 h-26">
    <!-- <Select v-model:model-value="pocket.complete.runes">
      <SelectTrigger class="h-auto shadow-none py-4 hover:border-b2 !bg-b2/40 hover:inset-shadow-xs hover:shadow-warm-2 cursor-pointer !rounded-box" :disabled="pocket.runes.sets.length == 0">
        <SelectValue as-child class="!bg-transparent rounded-box px-2">
          <CompleteRuneSet :set="pocket.complete.runes" :pocket="pocket" />
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper" class="w-[var(--reka-select-trigger-width)] !rounded-box">
        <SelectGroup class="w-full">
          <SelectItem v-for="set in pocket.runes.sets" :key="set.name" :value="set" class="rounded-xl py-3 w-full flex capitalize">
            <div class="flex gap-3 items-center">
              <LazyRuneSetButton no-check :pocket="pocket" :set="set" class="size-12  -ml-0.5 -mt-1 **:pointer-events-none pointer-events-none  [&_svg]:size-7.5" path-class="size-7 [&_svg]:!size-5 [&_img]:!size-4 -right-2 -bottom-1 pointer-events-none object-center" />
              <div class="flex flex-col justify-center h-full">
                <p class="text-2 leading-none tracking-tight">
                  {{ set.primary.runes[0].name == 'empty' ? 'Keystone Empty' : set.primary.runes[0].name }}
                </p>
                <p class="text-1 opacity-40 font-medium">
                  {{ set.secondary.path == 'empty' ? 'No Path' : set.secondary.path }}
                </p>
              </div>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> -->
  </Field>
</template>

<style scoped>

</style>