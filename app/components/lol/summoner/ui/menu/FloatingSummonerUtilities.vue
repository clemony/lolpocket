<script lang="ts" setup>
import { motion } from "motion-v"

const { champion, pocket } = defineProps<{
  pocket?: Pocket
  champion?: Champion
}>()
const open = shallowRef<boolean>(false)
const route = useRoute()

const target = useTemplateRef("target")

onClickOutside(target, (event) => (open.value = false))
const isSummoner = computed(() => {
  const account = as().account
  return !!account?.puuid && sSession().summoner?.puuid === account.puuid
})
</script>

<template>
  <UButton
    v-if="isSummoner"
    class="rounded-full duration-0"
    data-theme="mini-tip neutral line"
    data-placement="left"
    data-type="Profile Settings"
    size="xl"
    hover="neutral"
    @click="open = true">
    <Icon class="**:stroke-[1.7]" name="gear" />
  </UButton>
  <Teleport to="body">
    <AnimatePresence>
      <motion.div
        v-if="open && isSummoner"
        ref="target"
        class="fixed inset-y-0 right-0 z-40"
        :initial="{ x: 303 }"
        :animate="{ x: 0 }"
        :exit="{ x: 303 }"
        :transition="{
          duration: 0.2,
          type: 'spring',
          stiffness: 280,
          damping: 32,
        }">
        <motion.div
          id="sidebar"
          class="absolute inset-y-0 right-0 z-50 h-[99vh] max-h-screen w-100 min-w-100! self-center pr-2">
          <div
            class="grid size-full overflow-hidden rounded-xl border border-p3 bg-p0/90 pr-3 pl-6 drop-shadow-md drop-shadow-black/12 backdrop-blur-md">
            <!-- handle -->
            <div
              class="pointer-events-auto absolute left-0 z-2 my-auto grid h-32 w-8 place-items-center self-center">
              <span
                class="h-full w-3 rounded-full border border-p3 bg-tint-p3/50" />
            </div>

            <div class="size-full overflow-y-auto">
              <h2>Profile Settings</h2>
              <form class="w-full space-y-12" @submit.prevent>
                <fieldset class="mb-10 w-full space-y-6">
                  <div class="leading-4">
                    <Label class="mb-2 text-xl font-semibold" as="legend">
                      Summoner Splash
                    </Label>

                    <p class="label text-wrap">
                      Automatically display your top played champion in recent
                      games, or choose a custom splash.
                    </p>
                  </div>
                  <ProfileSplashOptions />
                </fieldset>

                <fieldset class="space-y-6">
                  <div class="leading-4">
                    <Label class="mb-2 text-xl font-semibold" as="legend">
                      Title
                    </Label>
                    <p class="label text-wrap">
                      Display a title from an earned Badge.
                    </p>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>
