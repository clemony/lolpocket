<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket

}>()

const route = useRoute()
console.log('🌱 - route:', route.path)

const tabs = ref(null)
console.log('🌱 - tabs:', tabs)

onMounted (() => {
  tabs.value = route.name
})
</script>

<template>
  <nav
    role="tablist"
    class="tabs tab-menu border-b relative h-10 justify-start col-start-2 w-full  mb-2    pl-44 tabs-lg tabs-lift  z-1 flex">
    <FakeTab />

    <!-- ALL tabs -->

    <label
      v-for="item in route.matched[1].children.sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order)))"
      :key="item.name"
      role="tab"
      :class="cn('group/tab min-w-22 max-w-40 grow has-checked:tab-active  tab ', { 'tab-active ': tabs == item.name })"
      @click="navigateTo(`/pocket/${pocket.key}/${item.meta?.title}`)">
      <input
        v-model="tabs"
        type="radio"
        :value="item.name"
        class="peer hidden" />
      {{ item.meta?.title }}
    </label>

    <FakeTab />
    <Separator class="z-0 absolute -bottom-2 bg-b3/60 left-0" />
    <div class="tab-content size-0 hidden" />
  </nav>
</template>