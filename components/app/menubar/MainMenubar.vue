<script setup lang="ts">
import { toast } from 'vue-sonner'

// TODO: Separators when not logged in

const ss = useSidebarStore()

const route = useRoute()

const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
const messages = ref()

const menubarOpen = ref('')

watch(
  () => ss.isSidebarOpen,
  (newVal) => {
    if (newVal == true) {
      menubarOpen.value = ''
    }
  },
)

/* const { ControlRight, ControlLeft, MetaRight, MetaLeft, ArrowLeft } = useMagicKeys()

watchEffect(() => {
  if ((ControlLeft.value || ControlRight.value || MetaRight.value || MetaLeft.value) && ArrowLeft.value)
    console.log('Shift + A have been pressed')
}) */

const pocket = computed (() => {
  const regex = /^\/pocket/
  return route.path.match(regex) || route.path.match('/calculator')
})
</script>

<template>
  <Menubar
    v-model:model-value="menubarOpen"
    class="bg-b1/80 w-screen min-w-screen  max-w-screen z-20 h-[5vh] min-h-[5vh] max-h-[5vh] fixed  m-0 flex items-center gap-5 border-b shadow-none !border-b-b2/20 !pt-2 pr-7.5 pl-5.5 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center transition-all duration-400"
    :class="{ 'bg-b2/10': pocket }">
    <button
      class=" size-11 mr-8 btn btn-ghost">
      <NuxtLink to="/">
        <h4 class="drop-shadow-text shadow-none select-none !tracking-normal">
          LP
        </h4>
      </NuxtLink>
    </button>

    <MenubarMenu>
      <MenubarTrigger>
        <SummonerName class="capitalize" />
      </MenubarTrigger>
      <LazyMenubarSummoner />
    </MenubarMenu>

    <LazyMenubarPocket v-model:model-value="menubarOpen" :summoner="summoner" @update:model-value="menubarOpen = ''" />

    <MenubarMenu>
      <MenubarTrigger>
        Game
      </MenubarTrigger>
      <LazyMenubarData />
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        Utilities
      </MenubarTrigger>
      <LazyMenubarTools />
    </MenubarMenu>

    <NuxtLink to="/calculator">
      <MenubarMenu>
        Calculator
      </MenubarMenu>
    </NuxtLink>

    <Grow />
    <button class="btn btn-md invisible" @click="toast('Test toast', { description: 'Hey hi that\'s really cool!' })">
      test toast
    </button>
    <!--
    <LazyCommand /> -->
    <MenubarSearch />

    <MenubarMenu>
      <MenubarTrigger class=" mb-1 hover:bg-transparent focus:bg-transparent max-w-11 group/acc transition-all duration-150 flex items-center rounded-full">
        <SummonerIcon class="size-11 hover:ring-2 rounded-full hover:ring-b3 shadow-sm group-data-[state=open]/acc:ring group-data-[state=open]/acc:ring-neutral cursor-pointer" />

        <div v-if="messages" class="inline-grid *:[grid-area:1/1] absolute top-0.5 right-1.75">
          <div class="status !bg-resolve animate-ping"></div>
          <div class="status !bg-resolve"></div>
        </div>
      </MenubarTrigger>

      <MenubarContent class="min-w-96" align="end" :align-offset="-9" side="bottom" :side-offset="9">
        <LazyMenubarSettings />
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped></style>
