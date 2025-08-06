<script lang="ts" setup>
const { region, slug } = defineProps<{
  region: string
  slug: string
  summoner: Summoner
}>()

const router = useRouter()
const route = useRoute()

function navigateToChildRoute(childPath: string) {
  if (!region || !slug)
    return

  router.push(`/summoner/${region}/${slug}/${childPath}`)
}

const as = useAccountStore()

const directory = [
  {
    name: 'history',
    path: '',
  },
  {
    name: 'mastery',
    path: 'mastery',
  },
  {
    name: 'live',
    path: 'live',
  },
  {
    name: 'settings',
    path: 'settings',
  },
]

const pathName = computed (() => {
  const a = route.fullPath.split('/')[4]
  if (!a)
    return ''

  return a.split('#')[0] || ''
})
const tabs = ref(null)

onMounted (() => {
  tabs.value = pathName.value
  console.log('💠 - pathName.value:', pathName.value)
})
</script>

<template>
  <nav
    role="tablist"
    class="tabs tab-menu w-full relative h-10 justify-start self-end tabs-lg tabs-lift border-b-0 z-4 flex">
    <FakeTab />

    <!-- ALL tabs -->

    <li
      v-for="item in directory.filter(p => p.path != 'settings')"
      :key="item.name"
      role="tab"
      :value="item.name"
      :class="cn('group/tab min-w-22 max-w-44 grow   tab ', { 'tab-active ': pathName == item.name || pathName == item.path })"
      @click="navigateToChildRoute(item.path)">
      {{ item.name }}
    </li>

    <!-- settings!!! -->

    <li
      v-if="summoner.puuid == as.userAccount?.riot?.puuid"
      :class="cn('group/tab min-w-22 max-w-44 grow   tab ', { 'tab-active ': pathName == 'settings' })"
      @click="navigateToChildRoute('settings')">
      Settings
    </li>

    <FakeTab />

    <div class="tab-content" />
  </nav>
</template>