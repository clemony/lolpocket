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
          :img="pocket.icon"
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
      class="w-[var(--reka-popover-trigger-width)] p-1.5"
      align="start"
      :side-offset="2"
      trap-focus="false"
      :disable-auto-focus="true"
      @open-auto-focus.stop.prevent>
      <div class="w-full bg-b1/90 backdrop-blur grid grid-cols-4 gap-1.5 h-10 px-1 mb-3 mt-1">
        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="shadow"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="trash"
            class="size-4.5 dst" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="shadow"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="send"
            class="size-4.5" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="shadow"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="hugeicons:image-download"
            class="dst" />
        </Button>

        <Button
          v-tippy="{ content: 'Export to League Client', theme: 'base', placement: 'bottom' }"
          variant="shadow"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="export"
            class="size-4.5 dst" />
        </Button>
      </div>
      <h6 class="w-full px-2">
        Pinned
      </h6>
      <template
        v-for="pock in ps().pockets.filter(p => p.location.pinned)"
        :key="pock.key">
        <PopoverItem
          :pocket
          class=" "
          @click="navigateTo(`/pocket/${pock.key}`)">
          <LazyPocketIcon
            v-if="pock"
            :img="pock.icon"
            class="rounded-full relative size-6 " />
          <span
            class="w-full truncate  ">
            {{ pock.name }}
          </span>
        </PopoverItem>
      </template>
      <DropdownMenuSeparator />

      <h6 class="w-full px-2">
        All
      </h6>
      <template
        v-for="pock in ps().pockets.filter(p => !p.location.pinned)"
        :key="pock.key">
        <PopoverItem
          :pocket
          @click="navigateTo(`/pocket/${pock.key}`)">
          <LazyPocketIcon
            v-if="pock"
            :img="pock.icon"
            class="rounded-full relative size-7 " />
          <span
            class=" w-full truncate ">
            {{ pock.name }}
          </span>
        </PopoverItem>
      </template>
    </LazyPopoverContent>
  </Popover>
</template>
