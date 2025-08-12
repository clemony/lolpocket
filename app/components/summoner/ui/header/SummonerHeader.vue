<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className, summoner, size } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  size?: 'md' | 'lg'
}>()
</script>

<template>
  <header

    :class="cn('self-start relative gap-6 flex flex flex-nowrap   items-center  w-fit max-w-120 max-h-22 h-18', { 'h-22': size == 'lg' }, className)">
    <!-- icon -->

    <span class="relative size-fit">
      <LazySummonerIcon
        :summoner
        :class="cn('rounded-full size-18 relative mt-2', { 'size-20 mt-0': size == 'lg' })" />
      <slot name="icon-badge" />
    </span>
    <div class="flex flex-col w-full ">
      <div class="flex items-center justify-between w-full gap-8 mb-3 max-h-12 ">
        <!-- header name -->

        <SummonerName
          as="h1"

          :class="cn('drop-shadow-sm font-serif text-bc/94 leading-none', { 'text-12': size == 'lg', 'text-10': size == 'md' })" />

        <div class="flex gap-3  mt-0.75">
          <UpdateSummoner
            :summoner
            text
            size="xs"
            variant="shadow-outline"
            class="!max-h-7 h-7 w-18" />
          <FollowButton
            :summoner
            variant="shadow-outline"
            class="size-7 btn btn-shadow btn-square " />
        </div>
      </div>

      <!-- header sub-text -->
      <div
        class="inline-flex max-h-4   **:text-3   dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
        <SummonerTag :summoner />
        <SummonerRegion
          :region-id="summoner?.region" />

        <SummonerLevel
          :summoner />
      </div>
    </div>
  </header>
</template>