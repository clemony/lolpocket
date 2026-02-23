<script setup lang="ts">
import type { CalendarDate } from "@internationalized/date"
import {
  fromAbsolute,
  getLocalTimeZone,
  isToday,
  today,
} from "@internationalized/date"
import type { DateRange } from "reka-ui"

/* const { matches, setFilter } = api
const date = ref({
  end: null,
  start: null,
}) as Ref<DateRange>

const minDate = computed(() => {
  if (!matches.value) return null

  const a = [...matches?.value]?.pop()
  if (!a) return null
  return fromAbsolute(a?.gameEndTimestamp, getLocalTimeZone())
})

const open = shallowRef<boolean>(false) */
</script>

<template>
  <UPopover class="p-1" align="start">
    <!--  -->
    <UButton
      icon="calendar"
      :ui="{ leadingIcon: 'size-4.5' }"
      size="lg"
      color="transparent" />

    <!-- calendar -->
    <!-- <template #content>
      <CalendarWrapper
        v-slot="{ month }"
        v-model="date"
        :disabled="!matches.length"
        :close-on-select="true"
        :min-value="minDate"
        :max-value="today(getLocalTimeZone())"
        @update:start-value="(e) => setFilter('date', { start: e, end: e })"
        @update:model-value="(e) => setFilter('date', e)"
      >
        <RangeCalendarGridBody>
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full"
          >
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              class="group indicator w-11"
              :date="weekDate"
            >
              <RangeCalendarCellTrigger
                label="{
                  content:
                    isPatchDay(weekDate as CalendarDate)
                      ? `Patch ${getPatchForDate(weekDate)}`
                      : null,
                  theme: 'base',
                  placement: 'top',
                }"
                :day="weekDate"
                :class="
                  cn('peer w-full', {
                    '': isToday(weekDate, getLocalTimeZone()),
                    'border-3! bg-res! text-white! selected:border-pc!':
                      isPatchDay(weekDate as CalendarDate),
                  })
                "
                :month="month.value"
              />
              <span
                v-if="
                  isToday(weekDate, getLocalTimeZone())
                    || isPatchDay(weekDate as CalendarDate)
                "
                :class="
                  cn(
                    'indicator-item grid-place-items-center size-2 -translate-x-0.75 translate-y-0.75 overflow-hidden rounded-full bg-radial-[at_15%_15%] from-10% shadow-xs shadow-black/8 drop-shadow-xs',
                    '',

                    {
                      'group-has-not-data-selected:from-neutral/30 group-has-not-data-selected:to-neutral group-has-data-selected:from-p0 group-has-data-selected:to-b4':
                        isToday(weekDate, getLocalTimeZone()),
                    },
                  )
                "
              />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </CalendarWrapper>
    </template> -->
  </UPopover>
</template>
