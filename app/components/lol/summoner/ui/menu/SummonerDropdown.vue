<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  ui().blockDialog = true
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        hover="base"
        on="base"
        :class="
          cn('relative w-full justify-start rounded-full pr-8 pl-2 text-start text-nowrap',
            { 'btn-active': open },
            className,
          )
        ">
        <LazySummonerIcon
          v-if="summoner"
          :summoner
          class="size-6 min-h-6 min-w-6 rounded-full" />

        <SummonerName
          :summoner
          class="w-full truncate font-medium" />
        <icon
          name="select"
          class="absolute right-3 size-3.5" />
      </Button>
    </PopoverTrigger>
    <LazyPopoverContent
      class="w-[var(--reka-popover-trigger-width)] p-0"
      align="start"
      :side-offset="4"
      @open-auto-focus.stop.prevent>
      <div
        class="
          grid auto-rows-fr grid-cols-2 items-center gap-y-1 py-2 pr-4 pl-3
          *:odd:opacity-50 *:even:justify-self-end
        ">
        <span class="flex items-center gap-1.5 font-medium opacity-60">
          <icon
            name="lucide:user"
            class="size-3.5 **:stroke-[2.1]" />name:
        </span>
        <SummonerName
          :summoner
          class="" />

        <span class="flex items-center gap-1.5 font-medium opacity-60">
          <icon
            name="hash"
            class="size-3.5 **:stroke-[2.1]" />tag:
        </span>
        <SummonerTag
          :summoner
          no-tag
          class="" />
        <span class="flex items-center gap-1.5 font-medium opacity-60">
          <icon
            name="at"
            class="size-3.5 **:stroke-[2.1]" />region:
        </span>
        <SummonerRegion
          class="opacity-80"
          :summoner
          no-icon />

        <span class="flex items-center gap-1.5 font-medium opacity-60">
          <span
            class="relative grid size-3.5 place-items-center overflow-hidden">
            <icon
              name="gg:loadbar-sound"
              class="absolute size-5.5" /></span>
          level:
        </span>
        <SummonerLevel
          no-tag
          class="-mt-px opacity-80"
          :summoner />
      </div>
      <Separator />

      <div
        class="
          grid h-14 grid-cols-3 gap-1.5 p-1 px-3 py-2 *:grid *:size-full
          *:place-items-center *:[&_svg]:size-5 *:[&_svg]:stroke-2
          [&_svg]:group-hover:opacity-100
        ">
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
