<script lang="ts" setup>
import { motion } from 'motion-v'

const route = useRoute()

const { close, open, toggle } = useAppSidebar()
const sidebar = useTemplateRef<HTMLElement>('sidebar')
const isHovered = useElementHover(sidebar, { delayEnter: 300, delayLeave: 300 })

watch(
  () => isHovered.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
    if (newVal === true) toggle(true)
    else toggle(false)
  }
)

const variants = {
  closed: {
    translateX: '-100%',
  },
  open: {
    translateX: '0',
  },
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
    <motion.div
      class="absolute inset-y-0 left-0 z-50 h-screen max-h-screen w-100 self-center"
      :variants="variants"
      :animate="open ? 'open' : 'closed'"
      initial="closed"
      :transition="{
        duration: 0.3,
        type: 'spring',
        bounce: 0.2,
      }">
      <motion.div
        :class="
          cn(
            'grid size-full auto-rows-max grid-cols-1 items-center justify-start gap-y-3 overflow-hidden border border-p3 bg-p0/80 px-2.75 pt-17 pb-3 backdrop-blur-md',
          )
        ">
        <!--  <div
        class="
          flex h-screen w-full flex-col items-center gap-y-3 border-r
          border-r-p3/80 pt-3
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
          variant="outline"
          :class="
            cn('justify-between fx-0 *:first:gap-3', {
              'max-w-11! [&_svg]:size-5.5 [&_svg]:opacity-100': !open,
            })
          " />

        <BtnLink
          :class="
            cn('w-full justify-start gap-2.5! px-3.5', {
              'max-w-11 px-2': !open,
            })
          "
          :to="{ name: 'nexus' }"
          @click="close()">
          <icon
            class="size-6 **:stroke-[1.5]"
            name="nexus" />
          Nexus
        </BtnLink>

        <BtnLink
          v-if="as().user"
          name="nexus"
          :class="
            cn('w-full justify-start gap-2.5! px-3.5', {
              'max-w-11 px-2.75': !open,
            })
          "
          :to="{ path: `/summoner/${as().account.puuid}` }"
          @click="close()">
          <icon name="history" />
          Summoner Profile
        </BtnLink>
        <div
          class="pointer-events-auto relative scrollbar-hidden flex size-full flex-col overflow-hidden pt-3">
          <!-- summoner linkies -->

          <LazyNavPanel />
          <LazyHelpAndSupportNav />

          <ColorMode />
        </div>
        <!-- summoner menu -->

        <tippy
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
            :class="
              cn(
                'absolute inset-x-0 bottom-0 h-16 w-full justify-between border-transparent px-4 backdrop-blur-sm aria-expanded:btn-active aria-expanded:border-p3 aria-expanded:bg-p2/60! aria-expanded:shadow-sm aria-expanded:inset-shadow-sm aria-expanded:inset-shadow-black/4',
                { 'px-3': !open },
              )
            ">
            <div class="flex items-center gap-3">
              <SummonerIcon class="size-11 rounded-lg" />
              <SummonerName
                class="truncate pl-1 leading-none font-semibold text-pc/90 dst"
                as="h3" />
              <SummonerTag
                class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
            </div>

            <icon
              class="size-4"
              name="up-down" />
          </Button>
          <template #content>
            <SidebarUser v-if="as().user" />
          </template>
        </tippy>
      </motion.div>
    </motion.div>
  </div>
</template>
