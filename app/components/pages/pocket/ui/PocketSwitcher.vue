<script lang="ts" setup>
const open = shallowRef<boolean>(false)

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))
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
            ' px-2  justify-start **:tracking-tight  items-center gap-1', { 'btn-active': open }) ">
        <LazyPocketIcon
          v-if="pocket"
          :pocket
          class="rounded-full relative size-7 " />
        <span
          class="dst text-bc/94 leading-none  text-nowrap truncate font-bold !text-6 grow ">
          {{ pocket.name }}
        </span>

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
    </LazyPopoverContent>
  </Popover>
</template>
