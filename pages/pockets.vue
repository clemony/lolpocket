<script lang="ts" setup>
definePageMeta({
  title: 'All',

})

const route = useRoute()

const pageValue = ref('/')

onMounted (() => {
  pageValue.value = route.path
})
</script>

<template>
  <NuxtLayout
    name="header-layout" class="px-8">
    <!--   delete button -->
    <template #crumb>
      <button v-if="route.path == '/pockets/trash'" class="btn  bg-domination  text-white text-2 font-medium">
        <icon name="nimbus:fire" class="size-5 text-white" />
        <span class="pt-px">Delete All</span>
      </button>
    </template>

    <LazyNuxtPage />
  </NuxtLayout>
</template>

<style scoped>

</style>
