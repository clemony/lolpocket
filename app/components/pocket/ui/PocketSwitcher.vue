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
  <Popover v-model:open="open">
    <PopoverTrigger
      class="relative -ml-4 h-11 w-20 items-center justify-start gap-1 pr-2 pl-1 **:pointer-events-none **:tracking-tight"
      variant="ghost"
      hover="neutral"
      base="btn"
      on="neutral"
    >
      <LazyPocketIcon
        v-if="pocket"
        class="relative size-10 rounded-full"
        :src="pocket.icon"
      />
      <icon class="absolute right-2 size-4 opacity-80" name="up-down" />
    </PopoverTrigger>
    <LazyPopoverContent
      class="flex max-h-90 w-78 flex-col p-0"
      align="start"
      :side-offset="4"
    >
      <div
        class="bg-b2/30 grid h-16 w-full shrink-0 grid-cols-4 gap-1.5 px-2.5 pt-2.5 pb-3 bg-blend-screen"
      >
        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          class="fx-0 size-full"
          color="default"
          tabindex="-1"
          hover="btn"
        >
          <icon class="dst size-4.5" name="trash" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          class="fx-0 size-full"
          color="default"
          tabindex="-1"
          hover="btn"
        >
          <icon class="size-4.5" name="send" />
        </Button>

        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          class="fx-0 size-full"
          color="default"
          tabindex="-1"
          hover="btn"
        >
          <icon class="dst" name="hugeicons:image-download" />
        </Button>

        <Button
          v-tippy="{
            content: 'Export to League Client',
            theme: 'base',
            placement: 'bottom',
          }"
          class="fx-0 size-full"
          color="default"
          tabindex="-1"
          hover="btn"
        >
          <icon class="dst size-4.5" name="export" />
        </Button>
      </div>

      <!-- separator  -->
      <DropdownMenuSeparator class="bg-b3/40 -mt-2 mb-0" />
      <article class="size-full overflow-y-auto">
        <section class="z-auto">
          <div
            class="bg-b1/30 sticky top-0 z-1 w-full bg-blend-darken backdrop-blur-sm"
          >
            <h6 class="flex w-full items-center px-3 pt-2 pb-1.5">
              <icon class="size-4" name="pin" />
              Pinned
            </h6>
            <DropdownMenuSeparator class="bg-b3/40 mt-0 mb-2" />
          </div>
          <!-- pinned -->
          <template
            v-for="pock in ps()
              .pockets.filter((p) => ps().pinned.includes(p.key))
              .sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key"
          >
            <PopoverItem
              class=""
              :pocket
              @click="navigateTo(`/pocket/${pock.key}`)"
            >
              <LazyPocketIcon
                v-if="pock"
                class="relative size-6 rounded-full"
                size="sm"
                :src="pock.icon"
              />
              <span class="w-full truncate">
                {{ pock.name }}
              </span>
            </PopoverItem>
          </template>

          <!-- no pockets -->
          <div
            v-if="
              !ps().pockets.filter((p) => ps().pinned.includes(p.key)).length
            "
            class="grid h-8 w-full place-items-center pb-2 text-sm opacity-50"
          >
            No pockets found.
          </div>

          <!-- separator  -->
          <DropdownMenuSeparator class="bg-b3/40 mb-0" />
        </section>

        <!-- ALL SECTION -->
        <section id="all" ref="allSection" class="z-auto pb-3">
          <div
            class="bg-b1/30 sticky top-0 z-1 w-full bg-blend-darken backdrop-blur-sm"
          >
            <h6 class="flex w-full items-center px-3 pt-2 pb-1.5">
              <icon class="size-4 opacity-60" name="folders" />
              All
            </h6>
            <DropdownMenuSeparator class="bg-b3/40 mt-0 mb-2" />
          </div>

          <!-- all pocket -->
          <template
            v-for="pock in ps()
              .pockets.filter((p) => !ps().pinned.includes(p.key))
              .sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key"
          >
            <PopoverItem :pocket @click="navigateTo(`/pocket/${pock.key}`)">
              <LazyPocketIcon
                v-if="pock"
                class="relative size-7 rounded-full"
                size="sm"
                :src="pock.icon"
              />
              <span class="w-full truncate">
                {{ pock.name }}
              </span>
            </PopoverItem>
          </template>
          <div
            v-if="
              !ps().pockets.filter((p) => !ps().pinned.includes(p.key)).length
            "
            class="grid w-full place-items-center pb-3 text-sm opacity-50"
          >
            No pockets found.
          </div>
        </section>
      </article>
    </LazyPopoverContent>
  </Popover>
</template>
