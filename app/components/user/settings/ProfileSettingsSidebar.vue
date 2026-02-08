<script lang="ts" setup>
import { motion } from 'motion-v'

const currentSplash = computed(() => as().account?.splash ?? null)

const { getMatchesForSummoner } = useIndexedDB()
const matchData = await getMatchesForSummoner(as().account.puuid)
const { top } = useChampions({ puuid: as().account.puuid, matches: matchData })

function handleSplash(e: string) {
  as().account.splash = e
}

const cardClass
  = 'flex !px-4 w-1/2 items-center group/photo-button rounded-xl  cursor-pointer group/photo !gap-5 photo  h-40  justify-start **:text-start '

const inactiveClass
  = '  hover:[&_p]:text-pc hover:[&_h4]:text-pc [&_p]:text-pc/40 [&_h4]:text-pc/30 '
</script>

<template>
  <Sheet>
    <SheetTrigger
      class="group/edit absolute top-15 right-0 grid h-70 w-1/2 origin-left cursor-pointer place-items-end overflow-hidden p-6 after:absolute after:top-0 after:left-0 after:h-full after:w-[200%] after:bg-linear-to-r after:from-transparent after:via-transparent after:via-60% after:to-black/70 after:transition-all after:duration-400 hover:after:-translate-x-1/2">
      <div class="flex h-fit items-center gap-3">
        <span
          class="z-2 mt-0.5 text-sm leading-none font-medium text-white/80 opacity-0 transition-opacity duration-400 group-hover/edit:opacity-100">
          Edit Profile
        </span>
        <Icon
          class="z-2 size-6.5 translate-y-0 text-white/60"
          name="gear-solid" />
      </div>
    </SheetTrigger>
    <DialogPortal>
      <AnimatePresence>
        <SheetOverlay />
        <SheetContent as-child>
          <motion.div
            class="z-55"
            :initial="{ x: 303 }"
            :animate="{ x: 0 }"
            :exit="{ x: 303 }"
            :transition="{
              duration: 0.3,
              ease: 'easeOut',
            }">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>

              <button
                :class="
                  cn('-ml-3', currentSplash ? inactiveClass : '', cardClass)
                "
                @click="currentSplash = null">
                <SplashCard
                  class="w-36"
                  hover
                  :skin-url="top().splash?.replace('uncentered', 'tile')"
                  :text="top().name"
                  :alt="`${as().account?.name ?? null}'s Most Played`" />
                <div class="flex h-full flex-col gap-4 pt-3">
                  <h4 class="text-xl font-semibold dst">
                    Automatic
                  </h4>
                  <p>Displays your most played champion in recent games.</p>

                  <ActiveTick
                    v-if="!currentSplash"
                    class="mt-2 h-6" />
                </div>
              </button>
            </SheetHeader>
          </motion.div>
        </SheetContent>
      </AnimatePresence>
    </DialogPortal>
  </Sheet>
</template>
