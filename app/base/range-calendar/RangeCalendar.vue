<script lang="ts" setup>
import type { RangeCalendarRootEmits, RangeCalendarRootProps } from 'reka-ui'
import { getLocalTimeZone, isToday, today } from '@internationalized/date'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<RangeCalendarRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    :class="cn('p-3', props.class)"
    v-bind="forwarded">
    <RangeCalendarHeader>
      <RangeCalendarPrevButton />
      <RangeCalendarHeading />
      <RangeCalendarNextButton />
    </RangeCalendarHeader>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <RangeCalendarGrid
        v-for="month in grid"
        :key="month.value.toString()">
        <RangeCalendarGridHead>
          <RangeCalendarGridRow>
            <RangeCalendarHeadCell
              v-for="day in weekDays"
              :key="day">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody>
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full">
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              class="indicator"
              :date="weekDate">
              <RangeCalendarCellTrigger
                :day="weekDate"
                class="peer"
                :month="month.value" />

              <span
                v-if="isToday(weekDate, getLocalTimeZone())"
                class="indicator-item status status-sm status-neutral -translate-x-1" />
              <!--
              <icon
                v-if="isToday(weekDate, getLocalTimeZone())"
                name="dot"
                class="absolute z-1 -top-1 size-4.5 justify-self-center group-has-data-[selected]:text-nc" /> -->
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
