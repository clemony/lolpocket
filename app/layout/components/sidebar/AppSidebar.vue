<script lang="ts" setup>
import type { Instance } from 'tippy.js'
import SidebarUser from '@layout/components/sidebar/ui/SidebarUser.vue'

const slug = computed (() => getSummonerSlug(as().account) || null)

const open = shallowRef<boolean>(false)
const tip = {
  animation: 'shift-toward-subtle',
  arrow: false,
  interactive: true,
  theme: 'base-0, sidebar-dropdown'
}

const tippy = ref<Instance>(null)
provide('tippy-utils', {
  hide: () => tippy.value.hide()
})
</script>

<template>
  <div
    ref="content"
    class="
      absolute top-0 left-0 grid size-full grid-cols-[45px_1fr] items-center
    ">
    <!-- handle -->
    <div
      class="
        pointer-events-auto absolute right-0 z-2 my-auto grid h-32 w-8
        place-items-center self-center
      ">
      <span class="h-full w-3 rounded-full border border-b3 bg-tint-b3/50" />
    </div>

    <!-- logo -->
    <div
      class="
        flex h-screen w-full flex-col items-center gap-y-3 border-r
        border-r-b3/80 pt-3
      ">
      <h1 class="mb-1 dss">
        LP
      </h1>
      <BtnLink
        v-for="pocket in ps().pockets.filter(p => ps().pinned.includes(p.key))"
        :key="pocket.key"
        :to="`/pocket/${pocket.key}`"
        size="c-10"
        class="overflow-hidden border-none p-0"
        variant="neutral">
        <PocketIcon
          :img="pocket.icon"
          class="size-full scale-120" />
      </BtnLink>
    </div>

    <div
      class="
        relative scrollbar-hidden flex h-screen w-full flex-col overflow-hidden
        pt-16 pr-2
      ">
      <!-- search buttton -->

      <SearchBox
        class="
          5 mr-1 ml-3 h-11 justify-between fx-0
          *:first:gap-3
        " />

      <!-- summoner linkies -->
      <div class="mt-5 space-y-1 px-3">
        <SidebarBtnLink
          item="nexus"
          class="
            !gap-3 px-3.5
            [&_svg]:size-5.5
          " />
        <SidebarBtnLink
          v-if="slug"
          :link="`/summoner/${slug}`"
          class="!gap-2.5 px-3.5">
          <icon
            name="history"
            class="size-5" />
          Summoner Profile
        </SidebarBtnLink>
      </div>

      <NavPanel />
      <!-- summoner menu -->

      <tippy
        v-bind="tip"
        ref="tippy"
        class="group/tip">
        <Button
          variant="ghost"
          hover="outline"
          on="btn"
          class="
            absolute inset-x-0 bottom-5 mx-3 h-16 justify-between
            border-transparent px-4 backdrop-blur
            group-aria-expanded/tip:btn-active
            on:border-b3 on:!bg-b2/60
          ">
          <div class="flex items-center gap-3">
            <SummonerIcon class="size-11 rounded-lg" />
            <SummonerName
              as="h3"
              class="truncate pl-1 leading-none font-semibold text-bc/90 dst" />
            <SummonerTag
              class="
                pl-1 align-bottom leading-none italic
                [&_svg]:pt-px
              " />
          </div>

          <icon
            name="select"
            class="size-4" />
        </Button>
        <template #content>
          <SidebarUser />
        </template>
      </tippy>
    </div>
  </div>
</template>
