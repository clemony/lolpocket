<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()
console.log('🌱 - summoner?:', summoner)

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  ui().blockDialog = true
}
</script>

<template>
  <Popover
    v-model:open="open"
    class="w-fit">
    <PopoverTrigger
      as-child
      class="h-11 w-76 -ml-2">
      <Button
        variant="ghost"
        hover="b1"
        active="b1"
        :class="
          cn(
            ' px-2  justify-start **:tracking-tight  items-center gap-1', { 'btn-active': open },
            className,
          )
        ">
        <LazySummonerIcon
          v-if="summoner"
          :summoner
          class="rounded-full relative size-7 " />
        <SummonerName
          class="dst text-bc/94 leading-none  text-nowrap truncate font-bold !text-6  " />
        <SummonerTag
          :summoner
          class="leading-none -ml-0.5  mt-px grow" />

        <icon
          name="select"
          class="size-3.5" />
      </Button>
    </PopoverTrigger>
    <LazyPopoverContent
      class="w-[var(--reka-popover-trigger-width)] p-0"
      align="start"
      :side-offset="2"
      trap-focus="false"
      :disable-auto-focus="true"
      @open-auto-focus.stop.prevent>
      <div class="flex justify-between p-3 ">
        <icon
          name="tag"
          class="**:stroke-[2.4] size-4.5 !opacity-30" />
        <Grow />
        <UserTitle
          class="badge bg-tint-domination/50 border-tint-domination/20 !text-2 text-white/96" />
      </div>

      <Separator />
      <div class=" p-3">
        <div class="w-full flex items-center gap-2 justify-between">
          <span class="flex gap-1.5 items-center font-medium opacity-60">
            <icon
              name="at"
              class="**:stroke-[2.1] size-4" />Region:
          </span>
          <SummonerRegion
            class=" opacity-80 "
            :summoner
            no-icon />
        </div>

        <div class="w-full flex items-center gap-2 justify-between">
          <span class="flex gap-1.5 items-center font-medium opacity-60">
            <icon
              name="token:lvl"
              class="size-4" />Level:</span>
          <SummonerLevel
            no-tag
            class="opacity-80 -mt-px"
            :summoner />
        </div>

      <!--       <Separator class="mt-2" />
      <PopoverLabel class="pb-0">
        Social
      </PopoverLabel> -->
      </div>
      <Separator />

      <div
        class="grid grid-cols-4 px-3 py-2  gap-1.5 *:place-items-center *:grid *:[&_svg]:stroke-2 *:[&_svg]:size-5 *:size-full h-14 p-1  [&_svg]:group-hover:opacity-100">
        <Button
          v-tippy="{ content: 'Block', theme: 'base', placement: 'bottom' }"
          tabindex="-1"
          class="size-full"
          variant="emboss"
          hover="btn"
          @click="handleBlock()">
          <icon
            name="ban"
            class="opacity-60" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="emboss"
          tabindex="-1"
          class="size-full"
          hover="btn">
          <icon
            class="opacity-60"
            name="lucide:message-square-more" />
        </Button>
        <Button
          variant="emboss"
          class="group size-full"
          as-child>
          <FollowButton
            v-tippy="{ content: 'Follow', theme: 'base', placement: 'bottom' }"
            tabindex="-1"
            :summoner>
            <icon
              name="heart-fill"
              class="text-bc/30 !size-4.5 group-hover:text-domination group-hover:scale-115 transition-all duration-250" />
          </FollowButton>
        </Button>
      </div>
    </LazyPopoverContent>
  </Popover>
  <LazyBlockDialog :summoner />
</template>
