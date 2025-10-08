<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import { getLocalTimeZone, isToday, today } from '@internationalized/date'

const matches = shallowRef<string>('amount')

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
        class="grid grid-cols-2 py-2 px-1 w-fit">
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

        <CalendarWrapper
          v-slot="{ month }"
          :fixed-weeks="true"
          :max-value="today(getLocalTimeZone())">
          <RangeCalendarGridBody>
            <RangeCalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="mt-2 w-full">
              <RangeCalendarCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                class="indicator w-11 group"
                :date="weekDate">
                <RangeCalendarCellTrigger

                  v-tippy="{ content: isPatchDay(weekDate as CalendarDate) ? `Patch ${getPatchForDate(weekDate)}` : null, theme: 'base', placement: 'top' }"
                  :day="weekDate"
                  :class="cn('peer w-full',
                             {
                               '': isToday(weekDate, getLocalTimeZone()),
                               '!bg-resolve !text-white selected:!border-bc !border-3': isPatchDay(weekDate as CalendarDate),
                             },
                  )"
                  :month="month.value" />
                <span
                  v-if="isToday(weekDate, getLocalTimeZone()) || isPatchDay(weekDate as CalendarDate)"
                  :class="cn(
                    'indicator-item size-2 shadow-xs shadow-black/8  drop-shadow-xs rounded-full grid-place-items-center overflow-hidden bg-radial-[at_15%_15%]  from-10%  -translate-x-0.75 translate-y-0.75',
                    '',

                    {
                      'group-has-not-data-[selected]:from-neutral/30 group-has-not-data-[selected]:to-neutral group-has-data-[selected]:from-b1 group-has-data-[selected]:to-b4': isToday(weekDate, getLocalTimeZone()) },
                  )">
                </span>
              </RangeCalendarCell>
            </RangeCalendarGridRow>
          </RangeCalendarGridBody>
        </CalendarWrapper>
      </LazyPopoverContent>
    </Popover>
  </div>
</template>