<script lang="ts" setup>
import { motion } from 'motion-v'

const route = useRoute()

const { close, open, toggle } = useAppSidebar()
const sidebar = useTemplateRef<HTMLElement>('sidebar')
const isHovered = useElementHover(sidebar, { delayEnter: 300, delayLeave: 300 })

watch(() => isHovered.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (newVal === true)
    toggle(true)
  else toggle(false)
})

const variants = {
  closed: {
    translateX: '-100%',
  },
  open: {
    translateX: '0',
  }
}

/* const wrapVar = {
  closed: {
    maxWidth: 'calc(var(--spacing) * 17)',
  },
  open: {
    translateX: '-100%',
  }
} */
</script>

<template>
  <div
    id="sidebar"
    ref="sidebar"
    class="fixed inset-y-0 left-0 z-40 h-screen w-px">
    <LpLogo :class="cn('absolute top-3 left-3 z-80', { 'pointer-events-none': open })" />
    <motion.div
      :variants="variants"
      :animate="open ? 'open' : 'closed'"
      initial="closed"
      :transition="{
        duration: 0.3,
        type: 'spring',
        bounce: 0.2,
      }"
      class="absolute inset-y-0 left-0 z-50 h-screen max-h-screen w-100 self-center">
      <motion.div
        :class="cn('grid size-full auto-rows-max grid-cols-1 items-center justify-start gap-y-3 overflow-hidden border border-b3 bg-b1/80 px-2.75 pt-17 pb-3 backdrop-blur-md')">
        <!--  <div
        class="
          flex h-screen w-full flex-col items-center gap-y-3 border-r
          border-r-b3/80 pt-3
        ">
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
            :src="pocket.icon"
            class="size-full scale-120" />
        </BtnLink>
      </div> -->

        <!-- search buttton -->

        <SearchBox
          variant="input"
          :class="cn('justify-between fx-0 *:first:gap-3', { '[&_svg]:opacity-100 [&_svg]:size-5.5 max-w-11!': !open })" />

        <BtnLink
          :class="cn('w-full justify-start gap-2.5! px-3.5', { 'max-w-11 px-2': !open })"
          :to="{ name: 'nexus' }"
          @click="close()">
          <icon
            name="nexus"
            class="size-6 **:stroke-[1.5]" />
          Nexus
        </BtnLink>

        <BtnLink
          v-if="as().user"
          name="nexus"
          :class="cn('w-full justify-start gap-2.5! px-3.5', { 'max-w-11 px-2.75': !open })"
          :to="{ path: `/summoner/${as().account.puuid}` }"
          @click="close()">
          <icon
            name="history" />
          Summoner Profile
        </BtnLink>
        <div
          class="
          scrollbar-hidden pointer-events-auto relative flex size-full
          flex-col overflow-hidden pt-3
        ">
          <!-- summoner linkies -->

          <LazyNavPanel />
          <LazyHelpAndSupportNav />
        </div>
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
          theme="base clean sidebar-dropdown">
          <Button
            variant="ghost"
            hover="outline"
            :disabled="!as().user"
            on="btn"
            :class="cn('absolute inset-x-0 bottom-0 h-16 w-full justify-between border-transparent px-4 backdrop-blur-sm aria-expanded:btn-active aria-expanded:border-b3 aria-expanded:bg-b2/60! aria-expanded:shadow-sm aria-expanded:inset-shadow-sm aria-expanded:inset-shadow-black/4', { ' px-3': !open })">
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
            <SidebarUser v-if="as().user" />
          </template>
        </tippy>
      </motion.div>
    </motion.div>
  </div>
</template>
