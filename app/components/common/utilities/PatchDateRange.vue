<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import type { DateRange } from 'reka-ui'
import { fromAbsolute, getLocalTimeZone, isToday, today } from '@internationalized/date'

const { asideRef } = defineProps<{
  asideRef: HTMLElement
}>()
const { filter, filteredMatches, matches, setFilter } = useSummonerInject()
const date = ref({
  end: null,
  start: null,
}) as Ref<DateRange>

const minDate = computed (() => {
  if (!matches.value)
    return null

  const a = [...matches?.value]?.pop()
  if (!a)
    return null
  return fromAbsolute(a?.gameEndTimestamp, getLocalTimeZone())
})

watch(() => filter?.value?.date, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})

const open = shallowRef<boolean>(false)
</script>

<template>
  <Popover v-model="open">
    <PopoverTrigger
      base="btn"
      size="sq-12"
      on="inset"
      hover="inset"
      class="bg-transparent! duration-0! disabled:pointer-events-none">
      <icon
        name="calendar"
        class="size-4.5" />
      <!--       <span class="grow text-start">

        {{ date?.start || date?.end
          ? `${useDateFormat(date?.start.toString(), 'MMM D, YYYY').value || ''}
            ${date?.start ? ' - ' : ''}
            ${useDateFormat(date?.end.toString(), 'MMM D, YYYY').value || ''}`
          : minDate
            ? `${useDateFormat(minDate.toDate(), 'MMM D, YYYY').value} - ${useDateFormat(
              today(getLocalTimeZone()).toString(), 'MMM D, YYYY').value}`
            : 'No matches loaded'
        }}
      </span>
      <Icon
        name="select"
        class="size-4 text-bc/40 group-hover/select:text-bc/90 group-on/select:text-bc/90" /> -->
    </PopoverTrigger>
    <LazyPopoverContent
      :collision-boundary="asideRef"
      :avoid-collisions="true"
      align="start"
      class="grid w-fit rounded-xl! p-1"
      @interact-outside="open = false">
      <!--  -->

      <!-- calendar -->
      <CalendarWrapper
        v-slot="{ month }"
        v-model="date"
        :disabled="!matches.length"
        :close-on-select="true"
        :min-value="minDate"
        :max-value="today(getLocalTimeZone())"
        @update:start-value="e => setFilter('date', { start: e, end: e })"
        @update:model-value="e => setFilter('date', e)">
        <!--

        -->
        <RangeCalendarGridBody>
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full">
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              class="group indicator w-11"
              :date="weekDate">
              <RangeCalendarCellTrigger
                v-tippy="{
                  content: isPatchDay(weekDate as CalendarDate)
                    ? `Patch ${getPatchForDate(weekDate)}`
                    : null,
                  theme: 'base',
                  placement: 'top',
                }"
                :day="weekDate"
                :class="
                  cn('peer w-full', {
                    '': isToday(weekDate, getLocalTimeZone()),
                    '!bg-resolve !text-white selected:!border-bc !border-3':
                      isPatchDay(weekDate as CalendarDate),
                  })
                "
                :month="month.value" />
              <span
                v-if="
                  isToday(weekDate, getLocalTimeZone())
                    || isPatchDay(weekDate as CalendarDate)
                "
                :class="
                  cn('indicator-item grid-place-items-center size-2 -translate-x-0.75 translate-y-0.75 overflow-hidden rounded-full bg-radial-[at_15%_15%] from-10% shadow-xs shadow-black/8 drop-shadow-xs',
                     '',

                     {
                       'group-has-not-data-[selected]:from-neutral/30 group-has-not-data-[selected]:to-neutral group-has-data-[selected]:from-b1 group-has-data-[selected]:to-b4':
                         isToday(weekDate, getLocalTimeZone()),
                     },
                  )
                ">
              </span>
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </CalendarWrapper>
    </LazyPopoverContent>
  </Popover>
</template>
