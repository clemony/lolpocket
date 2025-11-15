<script lang="ts" setup>
import type { RangeCalendarRootEmits, RangeCalendarRootProps } from 'reka-ui'
import { getLocalTimeZone, isToday, today } from '@internationalized/date'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  RangeCalendarRootProps & { class?: HTMLAttributes['class'] }
>()

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

    <div
      class="
        mt-4 flex flex-col gap-y-4
        sm:flex-row sm:gap-x-4 sm:gap-y-0
      ">
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
              class="group indicator"
              :date="weekDate">
              <RangeCalendarCellTrigger
                :day="weekDate"
                class="peer"
                :month="month.value" />
              <span
                v-if="isToday(weekDate, getLocalTimeZone())"
                :class="
                  cn(
                    `
                      indicator-item grid-place-items-center size-2
                      -translate-x-0.75 translate-y-0.75 overflow-hidden
                      rounded-full bg-radial-[at_15%_15%] from-10% shadow-xs
                      shadow-black/8 drop-shadow-xs
                    `,
                    `
                      group-has-not-data-[selected]:from-neutral/30
                      group-has-not-data-[selected]:to-neutral
                    `,
                    `
                      group-has-data-[selected]:from-b1
                      group-has-data-[selected]:to-b4
                    `,
                  )
                ">
              </span>
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
