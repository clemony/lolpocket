<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import type { DateRange, RangeCalendarRootEmits, RangeCalendarRootProps } from 'reka-ui'
import { getLocalTimeZone, isToday, today } from '@internationalized/date'
import { RangeCalendarRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<RangeCalendarRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const start = today(getLocalTimeZone())
const end = start.subtract({ days: 14 })

const dateRange = ref({
  end,
  start,
}) as Ref<DateRange>
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    v-model="dateRange"

    :class="cn('p-3 rounded-lg', props.class)"
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
              :key="day"
              class="w-11">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>

        <slot
          :month
          :grid
          :week-days />
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>