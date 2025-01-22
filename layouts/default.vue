<script setup lang="ts">
  import { jwtDecode } from 'jwt-decode'

  const ts = useTempStore()
  const as = useAccountStore()
  const route = useRoute()

  const client = useSupabaseClient()

  const { data, error } = await client.auth.getSession()
  console.log('💠 - data:', data)
  watch(
    () => data,
    (newVal) => {
      if (newVal) {
        summonerData().then(function (result) {
          const as = useAccountStore()
          as.riotAccount.name = result.name
          as.riotAccount.tag = result.tag
        })
      }
    }
  )

  const userId = ref(data.session.user.id)
  console.log('💠 - userId:', userId)

  const summonerData = async () => {
    const { data } = await client.from('user_data').select('riot_id,summoner_name, summoner_tag').eq('user_id', userId.value).limit(1).single()

    return { name: data.summoner_name, tag: data.summoner_tag }
  }

  summonerData().then(function (result) {
    console.log('💠 - result:', result)
    const as = useAccountStore()
    as.riotAccount.name = result.name
    as.riotAccount.tag = result.tag
  })

  client.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('💠 - client.auth.onAuthStateChange - event:', event)
      ts.sessionInfo = session
      console.log('💠 - client.auth.onAuthStateChange - session:', session)

      let decodedJwt: AuthRoleJwtPayload = jwtDecode<AuthRoleJwtPayload>(session.access_token)

      ts.userRole = decodedJwt.app_metadata.user_role
      console.log('👑 - Hi', ts.userRole)

      const summoner = summonerData()
      console.log('💠 - client.auth.onAuthStateChange - summoner:', summoner)
    }
  })
</script>

<template>
  <main
    id="app"
    ref="app"
    class="relative size-screen min-h-screen"
    :class="{ 'bg-black transition-all duration-400': ts.sidebarTrigger || ts.pocketDrawerTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger || ts.champSelectDrawerTrigger }">
    <Toaster
      closeButton
      position="top-right"
      :hotkey="['KeyC']"
      :toastOptions="{}"
      :expand="true" />
    <SidebarDrawer />

    <LazyChampSelectDrawer v-if="route.params.pocketKey" />
    <LazyChampionDrawer
      v-if="ts.selectedChampion"
      :key="ts.selectedChampion" />
    <ItemDrawer
      v-if="ts.selectedItem"
      :key="ts.selectedItem" />
    <PocketDrawer />
    <div
      class="bg-b1 transition-all duration-400 size-screen min-h-screen"
      :class="{ 'scale-98 h-full rounded-xl overflow-hidden': ts.sidebarTrigger || ts.pocketDrawerTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger || ts.champSelectDrawerTrigger }">
      <MainMenubar />
      <!--     <div class="absolute z-0 top-0 left-0 inset-0 m-0 size-full overflow-y-clip border-none"> -->
      <div class="size-screen max-w-screen min-h-screen inset-0 max-h-screen overflow-hidden">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
