<script lang="ts" setup>
const route = useRoute()
console.log('💠 - route:', route)
console.log('💠 - route:', route.meta.header)


const breadcrumbs = computed (() => {
  return route.fullPath.split('/')
})
console.log('💠 - breadcrumbs - breadcrumbs:', breadcrumbs)

const emit = defineEmits(['update:sidebar'])
</script>

<template>
  <div class="flex flex-col relative w-full " >
    <div
      class=" px-7 z-10 absolute flex h-[5vh] items-center gap-4 w-full bg-b1/90 backdrop-blur-md" :class="{'bg-b2/40': route.meta.background == 'b2', '!bg-transparent': route.path == '/'}">
      <button class="btn btn-ghost btn-square" @click="emit('update:sidebar')">
        <icon name="ph:sidebar-simple" class="size-5.5 dst" />
      </button>

      <div class="breadcrumbs text-2 flex grow">
        <ul>
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <template v-for="crumb in breadcrumbs" :key="crumb">
            <li v-if="crumb != ''" class="capitalize">
              {{ crumb }}
            </li>
          </template>
        </ul>
      </div>

        <HeaderMenu />
 
    <div v-if="route.meta.header != 'custom'" class="capitalize  top-[5vh] left-0 px-10 w-full absolute pb-2" :class="{'bg-b2/40': route.meta.background == 'b2'}">
      <h1 class="text-9 tracking-tighter dst" >
        {{ route.meta.title || route.name }}
      </h1>
    </div>
    </div>

  </div>
</template>