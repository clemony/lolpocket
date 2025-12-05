<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'

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
  { threshold: 0 },
)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger
      variant="ghost"
      hover="neutral"
      base="btn"
      on="neutral"
      class="
        relative -ml-4 h-11 w-20 items-center justify-start gap-1 pr-2 pl-1
        **:pointer-events-none **:tracking-tight
      ">
      <LazyPocketIcon
        v-if="pocket"
        :src="pocket.icon"
        class="relative size-10 rounded-full" />
      <icon
        name="select"
        class="absolute right-2 size-4 opacity-80" />
    </PopoverTrigger>
    <LazyPopoverContent
      class="flex max-h-90 w-78 flex-col p-0"
      align="start"
      :side-offset="4">
      <div
        class="
          grid h-16 w-full shrink-0 grid-cols-4 gap-1.5 bg-b2/30 px-2.5 pt-2.5
          pb-3 bg-blend-screen
        ">
        <Button
          v-tippy="{ content: 'Message', theme: 'base', placement: 'bottom' }"
          variant="base"
          tabindex="-1"
          class="size-full fx-0"
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
          v-tippy="{
            content: 'Export to League Client',
            theme: 'base',
            placement: 'bottom',
          }"
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
          <div
            class="
              sticky top-0 z-1 w-full bg-b1/30 bg-blend-darken backdrop-blur
            ">
            <h6 class="flex w-full items-center px-3 pt-2 pb-1.5">
              <icon
                name="pin"
                class="size-4" />
              Pinned
            </h6>
            <DropdownMenuSeparator class="mt-0 mb-2 bg-b3/40" />
          </div>
          <!-- pinned -->
          <template
            v-for="pock in ps()
              .pockets.filter((p) => ps().pinned.includes(p.key))
              .sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key">
            <PopoverItem
              :pocket
              class=""
              @click="navigateTo(`/pocket/${pock.key}`)">
              <LazyPocketIcon
                v-if="pock"
                size="sm"
                :src="pock.icon"
                class="relative size-6 rounded-full" />
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
            class="grid h-8 w-full place-items-center pb-2 text-2 opacity-50">
            No pockets found.
          </div>

          <!-- separator  -->
          <DropdownMenuSeparator class="mb-0 bg-b3/40" />
        </section>

        <!-- ALL SECTION -->
        <section
          id="all"
          ref="allSection"
          class="z-auto pb-3">
          <div
            class="
              sticky top-0 z-1 w-full bg-b1/30 bg-blend-darken backdrop-blur
            ">
            <h6 class="flex w-full items-center px-3 pt-2 pb-1.5">
              <icon
                name="folders"
                class="size-4 opacity-60" />
              All
            </h6>
            <DropdownMenuSeparator class="mt-0 mb-2 bg-b3/40" />
          </div>

          <!-- all pocket -->
          <template
            v-for="pock in ps()
              .pockets.filter((p) => !ps().pinned.includes(p.key))
              .sort((a, b) => a.name.localeCompare(b.name))"
            :key="pock.key">
            <PopoverItem
              :pocket
              @click="navigateTo(`/pocket/${pock.key}`)">
              <LazyPocketIcon
                v-if="pock"
                size="sm"
                :src="pock.icon"
                class="relative size-7 rounded-full" />
              <span class="w-full truncate">
                {{ pock.name }}
              </span>
            </PopoverItem>
          </template>
          <div
            v-if="
              !ps().pockets.filter((p) => !ps().pinned.includes(p.key)).length
            "
            class="grid w-full place-items-center pb-3 text-2 opacity-50">
            No pockets found.
          </div>
        </section>
      </article>
    </LazyPopoverContent>
  </Popover>
</template>
