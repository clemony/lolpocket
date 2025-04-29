<script lang="ts" setup>
definePageMeta({
  title: 'All',
  section: 'pockets',
})

const route = useRoute()

const pageValue = ref('/')

onMounted (() => {
  pageValue.value = route.path
})
</script>

<template>
  <div class="px-8 size-full">
    <!--   delete button -->
    <AppTitlebar>
      <button v-if="route.path == '/pockets/trash'" class="btn  bg-domination  text-white text-2 font-medium">
        <icon name="nimbus:fire" class="size-5 text-white" />
        <span class="pt-px">Delete All</span>
      </button>
    </AppTitlebar>

    <LazyNuxtPage />
  </div>
</template>

<style scoped>

</style>
