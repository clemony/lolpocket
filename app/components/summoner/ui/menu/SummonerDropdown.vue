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
    v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        hover="base"
        active="base"
        :class="
          cn(
            'relative w-full text-nowrap text-start pr-8 pl-2 justify-start rounded-full', { 'btn-active': open },
            className,
          )
        ">
        <LazySummonerIcon
          v-if="summoner"
          :summoner
          class="size-6 min-w-6 min-h-6 rounded-full" />

        <SummonerName
          :summoner
          class="font-medium w-full truncate" />
        <icon
          name="select"
          class="size-3.5 absolute right-3" />
      </Button>
    </PopoverTrigger>
    <LazyPopoverContent
      class="w-[var(--reka-popover-trigger-width)] p-0"
      align="start"
      :side-offset="4"
      @open-auto-focus.stop.prevent>
      <div class="grid grid-cols-2 gap-y-1 *:odd:opacity-50 *:even:justify-self-end items-center auto-rows-fr pl-3 pr-4 py-2">
        <span class="flex gap-1.5 items-center font-medium opacity-60">
          <icon
            name="lucide:user"
            class="**:stroke-[2.1] size-3.5" />name:
        </span>
        <SummonerName
          :summoner
          class="" />

        <span class="flex gap-1.5 items-center font-medium opacity-60">
          <icon
            name="hash"
            class="**:stroke-[2.1] size-3.5" />tag:
        </span>
        <SummonerTag
          :summoner
          no-tag
          class="" />
        <span class="flex gap-1.5 items-center font-medium opacity-60">
          <icon
            name="at"
            class="**:stroke-[2.1] size-3.5" />region:
        </span>
        <SummonerRegion
          class=" opacity-80 "
          :summoner
          no-icon />

        <span class="flex gap-1.5 items-center font-medium opacity-60">
          <span class="size-3.5 overflow-hidden relative grid place-items-center">

            <icon
              name="gg:loadbar-sound"
              class="size-5.5  absolute" /></span>
          level:

        </span>
        <SummonerLevel
          no-tag
          class="opacity-80 -mt-px"
          :summoner />
      </div>
      <Separator />

      <div
        class="grid grid-cols-3 px-3 py-2  gap-1.5 *:place-items-center *:grid *:[&_svg]:stroke-2 *:[&_svg]:size-5  *:size-full h-14 p-1  [&_svg]:group-hover:opacity-100">
        <Button
          v-tippy="{ content: 'Block', theme: 'base', placement: 'bottom' }"
          tabindex="-1"
          class="size-full"
          variant="outline"
          hover="btn"
          @click="handleBlock()">
          <icon
            name="ban"
            class="opacity-60" />
        </Button>
        <!-- TODO add disable messaging -->
        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="outline"
          tabindex="-1"
          class="size-full"
          hover="btn">
          <icon
            class="opacity-60"
            name="lucide:message-square-more" />
        </Button>
        <Button
          variant="outline"
          class="group size-full"
          as-child>
          <FollowButton
            placement="bottom"
            tabindex="-1"
            :summoner>
          </FollowButton>
        </Button>
      </div>
    </LazyPopoverContent>
  </Popover>
  <LazyBlockDialog :summoner />
</template>
