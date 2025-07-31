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

  router.push(`/summoner/${region}/${slug}${childPath}`)
}

const as = useAccountStore()

const directory = [
  {
    name: 'history',
    path: '',
  },
  {
    name: 'mastery',
    path: '/mastery',
  },
  {
    name: 'live',
    path: '/live',
  },
]

const pathName = computed (() => {
  const a = route.fullPath.split('/')[4]
  if (!a)
    return ''

  return a.split('#')[0] || ''
})
console.log('💠 - pathName:', pathName.value)
</script>

<template>
  <nav
    role="tablist"
    class="tabs tab-menu  justify-start self-end  tabs-lift border-b-0 z-4 flex">
    <FakeTab />

    <li
      v-for="item in directory"
      :key="item.name"
      role="tab"
      :value="item.name"
      :class="cn('group/tab   tab ', { 'tab-active hi-this-one': pathName == item.name || pathName == item.path })"
      @click="navigateToChildRoute(item.path)">
      {{ item.name }}
    </li>

    <li
      v-if="summoner.puuid == as.userAccount?.riot?.puuid"
      :class="cn('group/tab  tab-menu tab ', { '!pb-[4px] ': pathName != 'settings', 'tab-active hi-this-one': pathName == 'settings' })"
      @click="navigateToChildRoute('/settings')">
      Settings
    </li>
    <FakeTab />

    <div class="tab-content" />
  </nav>
</template>