<script lang="ts" setup>
definePageMeta({
  title: "Pockets",
  description: "Configure your publically available pockets in one spot.",
  icon: "lucide:folder",
  listClass: "**:stroke-[1.8]",
  order: 3,
  search: false,
  prefix: "summoner",
})

const { summoner } = storeToRefs(sSession())
watch(
  () => summoner.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  },
)
</script>

<template>
  <div class="grid w-full justify-center">
    <div class="">
      <LazyBackpackBoxCard
        v-for="pocket in usePockets().pockets.filter(
          (p) =>
            !(
              usePockets().pinned.includes(p.key) ||
              usePockets().trash.includes(p.key) ||
              usePockets().archive.includes(p.key)
            ),
        )"
        :key="pocket.key"
        :pocket
        @click="navigateTo(`/pocket/${pocket.key}`)" />
    </div>
  </div>
</template>
