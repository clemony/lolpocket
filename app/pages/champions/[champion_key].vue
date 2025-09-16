<script setup lang="ts">
definePageMeta({
  name: 'champion_key',
  props: true,
  path: '/champions/:champion_key',
  middleware: 'set-champion-title',
  level: 0,
})
const route = useRoute()
const championData = await import(
  `#shared/appdata/records/champions/${String(route.params.champion_key)}.ts`
)
const champion = computed(() => championData.default)
console.log('🌱 - champion:', champion)
const tabs = ref(null)

const router = useRouter()
const links = computed(
  () => router.getRoutes().find(r => r.name == 'champion_key').children
).value
onMounted(() => {
  tabs.value = route.name
})

function navigate(path: string) {
  const end = path.split('/').pop()
  navigateTo(`/champions/${champion.value.key}/${end}`)
}
</script>

<template>
  <TabLayout
    v-if="champion"
    icon
    size="lg">
    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed
        :background="
          getSplash(String(route.params.champion_key), 'centered')
        " />
    </template>
    <template #icon>
      <div class="size-20 -ml-2">
        <ChampionIcon
          :id="champion.id"
          class="rounded-full size-20" />
      </div>
    </template>
    <template #header>
      <header class="justify-center grid h-20">
        <h1 class="!text-[2.1] tracking-tight pt-1 font-bold leading-10 dst">
          {{ champion.name }}
        </h1>
        <p class="text-sm px-1 -mt-1 text-bc font-medium italic leading-5">
          {{ champion.title }}
        </p>
      </header>
    </template>

    <template #tabs>
      <nav
        role="tablist"
        class="tabs tab-menu relative h-10 justify-start col-start-2 w-max mb-2 tabs-lg tabs-lift z-1 flex">
        <FakeTab />

        <!-- ALL tabs -->

        <label
          v-for="item in links"
          :key="item.name"
          role="tab"
          :class="
            cn(
              'group/tab min-w-22  max-w-40 grow has-checked:tab-active  tab ',
              { 'tab-active ': tabs == item.name },
            )
          "
          @click="navigate(item.path)">
          <input
            v-model="tabs"
            type="radio"
            :value="item.name"
            class="peer hidden" />
          {{ item.meta?.title }}
        </label>

        <FakeTab />
      </nav>
    </template>

    <div class="size-full flex bg-b1 pl-60 relative gap-6 overflow-hidden ">
      <NuxtPage :champion />
    </div>
  </TabLayout>
</template>
