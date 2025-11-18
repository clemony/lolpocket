<script lang="ts" setup>
import { motion } from 'motion-v'

const slug = computed(() => getSummonerSlug(as().account) || null)
const route = useRoute()

const { close, open } = useAppSidebar()

const isLeft = usePageLeave()

/* watch(() => isLeft.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (newVal === true)
    close
}) */
/* provide('hide-tippy', () => tippy.value.hide())

    v-element-hover="[() => close(), { delayLeave: 300 }]" */

const hoverStart = shallowRef<boolean>(false)
console.log(as().account)
</script>

<template>
  <motion.div
    id="sidebar"
    class="
      absolute top-0 left-0 z-50 grid size-full max-h-screen w-110 min-w-110!
      grid-cols-[45px_1fr] items-center rounded-r-xl border-y-1 border-r
      border-l-0 border-b3/50 bg-b1/90 drop-shadow-md drop-shadow-black/12
      backdrop-blur-md
    "
    @hover-start="
      () => {
        if (!open) open = true;
        hoverStart = true;
      }
    "
    @hover-end="
      () => {
        hoverStart = false;
        close();
      }
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
        v-for="pocket in ps().pockets.filter((p) =>
          ps().pinned.includes(p.key),
        )"
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
        pointer-events-auto relative scrollbar-hidden flex h-screen w-full
        flex-col overflow-hidden pt-16 pr-2
      ">
      <!-- search buttton -->

      <SearchBox
        class="5 mr-1 ml-3 h-11 justify-between fx-0 *:first:gap-3" />

      <!-- summoner linkies -->
      <BtnLink
        variant="link"
        on="none"
        class="mt-4 w-full justify-start gap-2.5! px-3.5 duration-0!"
        :to="{ name: 'nexus' }"
        @click="close()">
        <icon
          name="nexus"
          class="size-5.5" />
        Nexus
      </BtnLink>

      <BtnLink
        v-if="as().user"
        variant="link"
        on="none"
        class="w-full justify-start gap-2.5! px-3.5 duration-0!"
        :to="`/summoner/${as().account.puuid}`"
        @click="close()">
        <icon
          name="history"
          class="size-5" />
        Summoner Profile
      </BtnLink>

      <NavPanel />
      <!-- summoner menu -->

      <tippy
        ref="tippy"
        :inline-positioning="true"
        animation="shift-toward-subtle"
        :arrow="false"
        content-class="!overflow-visible"
        :interactive="true"
        :tag="null"
        trigger="click focus"
        theme="base tippy-clean sidebar-dropdown">
        <Button
          variant="ghost"
          hover="outline"
          on="btn"
          class="
            absolute inset-x-0 bottom-3 mx-2 h-16 justify-between
            border-transparent px-4 backdrop-blur aria-expanded:btn-active
            aria-expanded:border-b3 aria-expanded:bg-b2/60!
            aria-expanded:shadow-sm aria-expanded:inset-shadow-sm
            aria-expanded:inset-shadow-black/4
          ">
          <div class="flex items-center gap-3">
            <SummonerIcon class="size-11 rounded-lg" />
            <SummonerName
              as="h3"
              class="truncate pl-1 leading-none font-semibold text-bc/90 dst" />
            <SummonerTag
              class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
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
  </motion.div>
</template>
