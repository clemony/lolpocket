<script lang="ts" setup>
const { region, slug } = defineProps<{
  region: string
  slug: string
  summoner: Summoner
}>()

const router = useRouter()
const route = useRoute()
console.log('💠 - route:', route)

function navigateToChildRoute(childPath: string) {
  if (!region || !slug)
    return

  router.push(`/summoner/${region}/${slug}${childPath}`)
}

const location = ref('')
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

const pathName = computed (() => route.fullPath.split('/')[4] || '')
console.log('💠 - pathName:', pathName.value)
</script>

<template>
  <nav role="tablist" class="tabs  justify-start self-end  tabs-lift border-b-0 z-4 flex">
    <FakeTab />

    <li
      v-for="item in directory"
      :key="item.name" role="tab"
      :value="item.name"
      class="" :class="cn('group/tab  tab-menu tab ', { '!pb-[4px] ': pathName != item.name, 'tab-active hi-this-one': pathName == item.name || pathName == item.path })"
      @click="navigateToChildRoute(item.path)">
      {{ item.name }}
    </li>

    <FakeTab />

    <div class="tab-content" />
  </nav>
</template>