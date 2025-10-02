<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import { getLocalTimeZone, isToday, today } from '@internationalized/date'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })
const matches = shallowRef<string>('amount')

const dateRange = ref({
  end,
  start,
}) as Ref<DateRange>

const state = useSummonerInject()

const blocks = computed (() => Math.round(state.allMatches.value.length / 20))
</script>

<template>
  <div
    class="w-full flex items-center gap-2 px-3 ">
    <Popover>
      <PopoverTrigger
        as-child>
        <Button
          as="label"
          for="match-select"
          variant="outline"
          shape="square"
          :class="cn('size-9', { 'btn-active': matches === 'range' })"
          active="base">
          <icon
            name="calendar"
            class="size-4" />

          <input
            v-model="matches"
            type="radio"
            name="match-select"
            value="range"
            class="peer hidden" />
        </Button>
      </PopoverTrigger>
      <LazyPopoverContent
        align="start"
        class="grid place-items-center p-0">
        <RangeCalendar
          v-model="dateRange"
          :max-value=" today(getLocalTimeZone())"
          class="rounded-lg" />
      </LazyPopoverContent>
    </Popover>
    <Select :multiple="false">
      <Label
        for="match-select"
        as-child
        variant="outline"
        :class="cn('h-9 max-w-40', { 'btn-active': matches === 'amount' })"
        active="base">
        <BaseSelectTrigger>

          <SelectValue />
        </BaseSelectTrigger>
        <input
          v-model="matches"
          type="radio"
          name="match-select"
          value="amount"
          class="peer hidden" />
      </Label>
      <LazySelectContent class="w-[var(--reka-select-trigger-width)]">
        <SelectGroup>
          <SelectLabel class="opacity-50">
            # matches:
          </SelectLabel>
          <SelectItem
            v-for="i in blocks"
            :key="i"
            class="flex-row-reverse font-medium"
            :value="i * 20">
            {{ i === blocks ? 'All' : i * 20 }}
          </SelectItem>
        </SelectGroup>
      </LazySelectContent>
    </Select>
  </div>
</template>