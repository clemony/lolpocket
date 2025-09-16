<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()
</script>

<template>
  <DropdownMenu class="">
    <DropdownMenuTrigger
      :class="
        cn(
          'h-full max-w-76 w-full grow self-end inline-flex btn btn-ghost  btn-shadow-ghost justify-start !h-14  items-center gap-3',
          className,
        )
      ">
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="rounded-full relative size-10" />
      <SummonerName
        class="dst font-serif text-bc/94 leading-none text-6 font-black" />
      <SummonerTag
        :summoner
        class="mt-1 grow" />

      <icon name="select" />
    </DropdownMenuTrigger>
    <LazyDropdownMenuPopContent>
      <DropdownMenuLabel>
        <icon
          name="tag"
          class="**:stroke-[2.4] size-4.5 !opacity-30" />
        <Grow />
        <UserTitle
          class="badge bg-tint-domination/50 border-tint-domination/20 !text-xs text-white/96" />
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuItem class="pointer-events-none">
        <icon
          name="at"
          class="**:stroke-[2.1]" />
        <span class="grow font-medium opacity-60">Server Region:</span>
        <SummonerRegion
          class="font-semibold opacity-80 uppercase"
          :summoner
          no-icon />
      </DropdownMenuItem>

      <DropdownMenuItem class="pointer-events-none">
        <icon name="token:lvl" />
        <span class="grow font-medium opacity-60">Summoner Level:</span>
        <SummonerLevel
          no-tag
          class="font-semibold opacity-80 -mt-px"
          :summoner />
      </DropdownMenuItem>

      <!--       <DropdownMenuSeparator class="mt-2" />
      <DropdownMenuLabel class="pb-0">
        Social
      </DropdownMenuLabel> -->
      <DropdownMenuSeparator />

      <div
        class="grid grid-cols-4 *:btn-shadow *:btn *:not-hover:!bg-b1 *:not-hover:opacity-70 *:not-hover:**:opacity-90 gap-1.5 *:place-items-center *:grid *:[&_svg]:size-5.5 *:size-full h-14 p-1">
        <DropdownMenuItem
          class=""
          as-child>
          <FollowButton :summoner />
        </DropdownMenuItem>
        <DropdownMenuItem
          v-tippy="'Block'"
          class="">
          <icon
            name="lucide:ban"
            class="**:stroke-[2.4]" />
        </DropdownMenuItem>

        <DropdownMenuItem
          v-tippy="'Message'"
          class="">
          <icon
            name="lucide:message-square-more"
            class="**:stroke-[2.3]" />
        </DropdownMenuItem>
      </div>
    </LazyDropdownMenuPopContent>
  </DropdownMenu>
</template>
