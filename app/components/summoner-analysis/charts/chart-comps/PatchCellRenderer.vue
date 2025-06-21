<script lang="ts" setup>
const { params } = defineProps<{
  params: any
}>()
const patch = computed (() => {
  return useArrayUnique(params.valueFormatted.split(', '))
})
console.log('💠 - patch - patch:', patch)
</script>

<template>
  <div class="size-full p-2 items-center flex gap-2">
    <template v-for="(p, i) in patch.value" :key="i">
      <div v-if="i <= 2" class="badge badge-sm border badge-ghost !border-b3/60 ">
        {{ p }}
      </div>
    </template>

    <Popover v-if="patch.value.length > 3">
      <PopoverTrigger class="btn btn-ghost btn-xs">
        ...
      </PopoverTrigger>

      <ScrollPopperContent class="w-41">
        <div class="font-semibold tracking-tight opacity-50 mb-2">
          Played Patch
        </div>

        <ul class="space-y-2">
          <li v-for="p in patch.value" :key="p as string" class=" pl-3">
            {{ p }}
          </li>
        </ul>
      </ScrollPopperContent>
    </Popover>
  </div>
</template>