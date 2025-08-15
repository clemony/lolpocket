<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket

}>()

const route = useRoute()

const routeName = computed (() => {
  const a = route.fullPath.split('/')[4]
  if (!a)
    return ''

  return a.split('#')[0] || ''
})
const tabs = ref(null)

onMounted (() => {
  tabs.value = routeName.value
  console.log('💠 - routeName.value:', routeName.value)
})
</script>

<template>
  <nav
    role="tablist"
    class="tabs tab-menu relative h-10 justify-start col-start-2 w-full  mb-2     tabs-lg tabs-lift  z-5 flex">
    <FakeTab />

    <!-- ALL tabs -->

    <li
      v-for="item in getPocketLinks(pocket)"
      :key="item.name"
      role="tab"
      :value="item.name"
      :class="cn('group/tab min-w-22 max-w-44 grow   tab ', { 'tab-active ': route.path == item.link || routeName == item.link })"
      @click="navigateTo(item.link)">
      {{ item.name }}
    </li>

    <FakeTab />

    <div class="tab-content" />
  </nav>
</template>