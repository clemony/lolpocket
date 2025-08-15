<script lang="ts" setup>
import { regionIndex } from 'data/index/region-index'
import { SelectArrow } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()

const as = useAccountStore()
const select = shallowRef(null)

onMounted (() => {
  !select.value ? as.userAccount?.riot?.region ? select.value = as.userAccount.riot.region : select.value = 'na' : select.value = 'na'
  console.log('💠 - select.value :', select.value)
})
</script>

<template>
  <Select
    v-model:model-value="select">
    <SidebarInputWrapper

      :class="cn(className, 'pr-2 shadow-none')">
      <!--
      <Button
        variant="neutral"
        size="xs">
        <icon
          name="lucide:user-round"
          class="size-4.5 -mx-2" />

        <icon
          name="down-sm"
          class="-ml-2.25 size-4.5 -mr-1.5" />
      </Button> -->
      <input
        class="size-full"
        type="text"
        placeholder="Name  #tag" />
      <span class="flex items-center pointer-events-none right-12 opacity-50 absolute text-2">
        <icon
          name="at"
          class="size-2.75 mt-px" />
        {{ select }}
      </span>

      <SelectTrigger
        no-arrow
        class="btn btn-ghost btn-square size-8 border-transparent p-0  top-4 grid place-items-center data-[state=open]:bg-b2/80 ">
        <icon
          name="material-symbols:edit-location-alt-outline"
          class="size-4.25 text-bc/50 absolute" />
      </SelectTrigger>
      <SelectContent class="w-(--reka-popover-trigger-width) min-w-(--reka-popover-trigger-width) rounded-lg -translate-y-0.5 p-0  h-100">
        <SelectArrow />

        <SelectLabel class="px-4 opacity-50">
          Select Region
        </SelectLabel>
        <SelectSeparator class="mb-3 mt-1" />

        <SelectGroup class="">
          <SelectItem
            v-for="region in Object.keys(regionIndex)"
            :key="region"
            :value="region"
            class="flex items-center gap-3 py-1.5 text-nowrap ">
            <!--             <input
                  type="radio"
                  class="peer radio radio-xs radio-neutral" /> -->
            <SelectItemText class="truncate text-3 ">
              <span class="italic">
                {{ regionIndex[region] }}
              </span>
              <span class="uppercase  opacity-50">
                ({{ region }})
              </span>
            </SelectItemText>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </sidebarinputwrapper>
  </Select>
</template>