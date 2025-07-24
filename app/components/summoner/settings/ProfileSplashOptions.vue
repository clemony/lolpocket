<script lang="ts" setup>
const { topChampion } = defineProps<{
  topChampion: TopChampion
}>()

const cardClass
  = 'flex px-3 items-center group/photo-button rounded-xl group/photo !gap-6 photo btn  h-50 max-w-110 w-110 w-110 hover-ring  justify-start **:text-start '

const activeClass
  = ' shadow-sm hover:!bg-b2/60 !border-b3 !bg-b2/30 inset-shadow-sm-reverse'
const inactiveClass = 'btn-ghost  *:grayscale   hover:*:grayscale-0'

const as = useAccountStore()

const currentSplash = computed(() => as.publicData?.splash)

function update(e) {
  console.log('💠 - update - e:', e)
  /* as.userAccount.settings.public.splash = e */
}

const isOpen = ref(false)

watch(
  () => isOpen.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  },
)
</script>

<template>
  <section class="flex gap-x-16 size-full">
    <button
      :class="cn(currentSplash ? inactiveClass : activeClass, cardClass)"
      @click="currentSplash = null">
      <SplashCard
        hover
        class="max-h-42"
        :skin-url="topChampion.splash.replace('uncentered', 'tile')"
        :text="topChampion.name"
        :alt="`${as.userAccount?.riot?.name ?? null}'s Most Played`" />
      <div class="flex flex-col h-full pt-6 gap-4">
        <h4 class="dst">
          Automatic
        </h4>
        <p>Displays your most played champion in recent games.</p>

        <ActiveTick
          v-if="!currentSplash"
          class="h-6 mt-2" />
      </div>
    </button>

    <SplashSelectPanel
      v-model:open="isOpen"
      @update:current-splash="update($event)">
      <button
        :class="cn(!currentSplash ? inactiveClass : activeClass, cardClass)">
        <SplashCard
          class="max-h-42"
          :skin-url="as.publicData?.splash"
          :alt="`${as.userAccount?.riot?.name ?? null}'s splash`" />
        <div class="flex flex-col h-full pt-6 gap-4">
          <h4 class="dst">
            Custom
          </h4>
          <p>
            <span class="italic">Never played a champ?</span>
            <br />
            No problem. Rep your guy.
          </p>

          <ActiveTick
            v-if="currentSplash"
            class="h-6 mt-2" />
        </div>
      </button>
    </SplashSelectPanel>
  </section>
</template>
