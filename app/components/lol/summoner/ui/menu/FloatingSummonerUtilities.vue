<script lang="ts" setup>
import { motion } from 'motion-v'

const { api, champion, pocket } = defineProps<{
  api: SummonerInject
  pocket?: Pocket
  champion?: Champion
}>()
const open = shallowRef<boolean>(false)
const route = useRoute()

const target = useTemplateRef('target')

onClickOutside(target, event => open.value = false)

const isSummoner = computed (() => api?.summoner.value?.puuid === as().account.puuid)
</script>

<template>
  <Button
    v-if="isSummoner"
    data-theme="mini-tip neutral line"
    data-placement="left"
    data-tip="Profile Settings"
    size="c-14"
    class="duration-0!"
    hover="neutral"
    variant="floating"
    @click="open = true">
    <Icon
      name="gear"
      class="**:stroke-[1.7]" />
  </Button>
  <Button
    data-placement="left"
    data-theme="mini-tip neutral line"
    :data-tip="api?.filterEmpty() ? 'No filters applied' : 'Clear filters'"
    size="c-14"
    hover="neutral"
    :disabled="api?.filterEmpty()"
    class="duration-0! disabled:pointer-events-none"
    :variant="api?.filterEmpty() ? 'floating' : 'neutral'"
    @click="api.clearFilters()">
    <Icon
      name="lucide:filter-x"
      class="" />
  </Button>
  <UpdateSummoner
    v-if="ss"
    placement="left"
    size="c-14"
    :state="ss" />

  <Teleport to="body">
    <AnimatePresence>
      <motion.div
        v-if="open && isSummoner"
        ref="target"
        :initial="{ x: 303 }"
        :animate="{ x: 0 }"
        :exit="{ x: 303 }"
        :transition="{
          duration: 0.2,
          type: 'spring',
          stiffness: 280,
          damping: 32,
        }"
        class="fixed inset-y-0 right-0 z-40">
        <motion.div
          id="sidebar"
          ref="sidebar"
          class="absolute inset-y-0 right-0 z-50 h-[99vh] max-h-screen w-100 min-w-100! self-center
   pr-2">
          <div class="grid size-full overflow-hidden rounded-xl border border-b3 bg-b1/90 pr-3 pl-6 drop-shadow-md drop-shadow-black/12 backdrop-blur-md">
            <!-- handle -->
            <div
              class="
          pointer-events-auto absolute left-0 z-2 my-auto grid h-32 w-8
          place-items-center self-center
        ">
              <span class="h-full w-3 rounded-full border border-b3 bg-tint-b3/50" />
            </div>

            <div class="size-full overflow-y-auto">
              <h2>Profile Settings</h2>
              <form
                class="w-full space-y-12"
                @submit.prevent>
                <fieldset class="mb-10 w-full space-y-6">
                  <div class="leading-4">
                    <Label
                      as="legend"
                      class="text-5font-semibold mb-2">
                      Summoner Splash
                    </Label>

                    <p class="label text-wrap">
                      Automatically display your top played champion in recent games, or
                      choose a custom splash.
                    </p>
                  </div>
                  <ProfileSplashOptions />
                </fieldset>

                <fieldset class="space-y-6">
                  <div class="leading-4">
                    <Label
                      as="legend"
                      class="mb-2 text-5 font-semibold">Title</Label>
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