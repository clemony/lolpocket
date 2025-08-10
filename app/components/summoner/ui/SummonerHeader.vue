<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className, summoner, size, show = true } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  size?: 'md' | 'lg'
  show?: boolean
}>()
</script>

<template>
  <TransitionScalePop
    :class="cn('self-center  w-fit max-w-120 max-h-22 h-18', { 'h-22': size == 'lg', 'max-h-0': !show }, className)">
    <header
      v-show="show"
      :class="cn('relative gap-6 flex self-center items-center flex-nowrap  w-full  items-center')">
      <!-- icon -->

      <span class="size-fit relative">
        <LazySummonerIcon
          :summoner
          :class="cn('rounded-full size-18 relative mt-2', { 'size-20 mt-0': size == 'lg' })" />
        <slot name="icon-badge" />
      </span>
      <div class="flex w-full flex-col ">
        <div class="flex gap-8 items-center w-full justify-between mb-3  max-h-12 ">
          <!-- header name -->

          <SummonerName
            as="h1"

            :class="cn('drop-shadow-sm font-serif text-bc/94 leading-none', { 'text-12': size == 'lg', 'text-10': size == 'md' })" />

          <div class="flex gap-3  mt-0.75">
            <UpdateSummoner
              :summoner
              text
              class="!max-h-7 h-7 w-18" />
            <FollowButton
              :summoner
              class="size-7 btn  btn-shadow btn-square " />
          </div>
        </div>

        <!-- header sub-text -->
        <div
          class="inline-flex max-h-4   **:text-3   dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
          <SummonerTag :summoner />
          <SummonerRegion
            :region-id="summoner.region" />

          <SummonerLevel
            :summoner />
        </div>
      </div>
    </header>
  </TransitionScalePop>
</template>