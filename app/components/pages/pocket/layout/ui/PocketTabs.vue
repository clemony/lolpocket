<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()

const tabs = ref<string>(null)

onMounted(() => {
  tabs.value = route.name.toString()
})
</script>

<template>
  <nav
    role="tablist"
    class="tabs tab-menu relative h-10 justify-start col-start-2 w-max mb-2 tabs-lg tabs-lift z-1 flex">
    <FakeTab />

    <!-- ALL tabs -->

    <label
      v-for="item in route.matched[1].children.sort(
        (a, b) => Number(a.meta?.order) - Number(b.meta?.order),
      )"
      :key="item.name"
      role="tab"
      :class="
        cn('group/tab min-w-22  max-w-40 grow has-checked:tab-active  tab ', {
          'tab-active ': tabs === item.name,
        })
      "
      @click="navigateTo(`/pocket/${pocket.key}/${item.meta?.title}`)">
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
