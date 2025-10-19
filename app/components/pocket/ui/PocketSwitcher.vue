<script lang="ts" setup>
const open = shallowRef<boolean>(false)

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))

const activeHeader = ref<'pinned' | 'all'>('pinned')

// Reference for the "All" section
const allSection = useTemplateRef<HTMLElement>('allSection')

useIntersectionObserver(
  allSection,
  ([entry]) => {
    activeHeader.value = entry.isIntersecting ? 'all' : 'pinned'
  },
  { threshold: 0 }
)
</script>

<template>
  <Popover
    v-model:open="open">
    <PopoverTrigger
      variant="ghost"
      hover="neutral"
      base="btn"
      active="neutral"
      class=" pr-2 pl-1 h-11 relative w-20  -ml-4  **:pointer-events-none justify-start **:tracking-tight  items-center gap-1">
      <LazyPocketIcon
        v-if="pocket"
        :img="pocket.icon"
        class="rounded-full relative size-10 " />
      <icon
        name="select"
        class="size-4  absolute right-2 opacity-80" />
    </PopoverTrigger>
    <LazyPopoverContent
      class="w-78 p-0 flex max-h-90 flex-col"
      align="start"
      :side-offset="4">
      <div class="w-full bg-b2/30 bg-blend-screen  grid grid-cols-4 gap-1.5 shrink-0 h-16 px-2.5 pb-3 pt-2.5">
        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="base"
          tabindex="-1"
          class="size-full fx-0 "
          hover="btn">
          <icon
            name="trash"
            class="size-4.5 dst" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="base"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="send"
            class="size-4.5" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="base"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="hugeicons:image-download"
            class="dst" />
        </Button>

        <Button
          v-tippy="{ content: 'Export to League Client', theme: 'base', placement: 'bottom' }"
          variant="base"
          tabindex="-1"
          class="size-full fx-0"
          hover="btn">
          <icon
            name="export"
            class="size-4.5 dst" />
        </Button>
      </div>

      <!-- separator  -->
      <DropdownMenuSeparator class="-mt-2 mb-0 bg-b3/40" />
      <article class="size-full overflow-y-auto">
        <section class="z-auto">
          <div class="sticky top-0 bg-b1/30 bg-blend-darken backdrop-blur z-1 w-full ">
            <h6 class="w-full px-3 pt-2 pb-1.5 flex items-center">
              <icon
                name="pin"
                class="size-4" />
              Pinned
            </h6>
            <DropdownMenuSeparator class="mb-2 mt-0 bg-b3/40" />
          </div>
          <!-- pinned -->
          <template
            v-for="pock in ps().pockets.filter(p => p.location.pinned).sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key">
            <PopoverItem
              :pocket
              class=" "
              @click="navigateTo(`/pocket/${pock.key}`)">
              <LazyPocketIcon
                v-if="pock"
                size="sm"
                :img="pock.icon"
                class="rounded-full relative size-6" />
              <span
                class="w-full truncate   ">
                {{ pock.name }}
              </span>
            </PopoverItem>
          </template>

          <!-- no pockets -->
          <div
            v-if="!ps().pockets.filter(p => p.location.pinned).length"
            class="grid h-8 pb-2 text-2 opacity-50  w-full place-items-center">
            No pockets found.
          </div>

          <!-- separator  -->
          <DropdownMenuSeparator class=" mb-0 bg-b3/40" />
        </section>

        <!-- ALL SECTION -->
        <section
          id="all"
          ref="allSection"
          class="z-auto pb-3">
          <div class="sticky top-0 bg-b1/30 bg-blend-darken backdrop-blur z-1 w-full ">
            <h6 class="w-full px-3 pt-2 pb-1.5 flex items-center">
              <icon
                name="folders"
                class="size-4 opacity-60" />
              All
            </h6>
            <DropdownMenuSeparator class="mb-2 mt-0 bg-b3/40" />
          </div>

          <!-- all pocket -->
          <template
            v-for="pock in ps().pockets.filter(p => !p.location.pinned).sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key">
            <PopoverItem
              :pocket
              @click="navigateTo(`/pocket/${pock.key}`)">
              <LazyPocketIcon
                v-if="pock"
                size="sm"
                :img="pock.icon"
                class="rounded-full relative size-7 " />
              <span
                class=" w-full truncate ">
                {{ pock.name }}
              </span>
            </PopoverItem>
          </template>
          <div
            v-if="!ps().pockets.filter(p => !p.location.pinned).length"
            class="grid  pb-3 text-2 opacity-50  w-full place-items-center">
            No pockets found.
          </div>
        </section>
      </article>
    </LazyPopoverContent>
  </Popover>
</template>
