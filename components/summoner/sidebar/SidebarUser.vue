<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const config = useRuntimeConfig()

const ts = useTempStore()
const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const role = computedAsync(() => {
  if (as.userAccount.session && as.userAccount.role == 'admin') {
    return 'admin'
  }
  else {
    return 'summoner'
  }
})


/* onMounted (async() => {
const { data, isFinished } =  useAxios(`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.value.profileIconId}.png`)
await data
summonerIcon.value = data
})

system-uicons:browser-alt

 */

function handleClick(mode) {
  if (mode == 'out') {
    signOut()
  }
  else if (mode == 'in') {
    ts.loginOpen == true
  }
}

const cardKey = ref(0)

watchEffect(() => {
  if (!as.userAccount.session) {
    cardKey.value++
  }
})
</script>

<template>
  <div class="  pr-6 h-full  gap-4  relative">
    <SummonerCard :key="cardKey" :summoner="summoner" />

    <div class="flex flex-col gap-0 py-6 relative size-full  w-full">
      <NuxtLink
        v-for="submenu in summonerLinks"
        :key="submenu.name"
        :to="{
          path: submenu.link,
        }"
        class="flex w-full  py-2 "
      >
        <button class="flex relative group justify-start grow w-full gap-4 items-center btn btn-ghost btn-lg  " :class="cn(`group/${submenu.name}`)">
          <icon
            :name="submenu.icon"
            class="size-5.5 shrink-0 dst"
            :class="{ 'stroke-[1.5] -ml-1 -mr-1 size-7': submenu.name == 'Board' }"
          />

          <span
            class="!font-semibold !text-3 underline-offset-2 "
            :class="cn(`group-hover/${submenu.name}:underline`)"
          >
            {{ submenu.name }}
          </span>
        </button>
      </NuxtLink>

      <NuxtLink
        v-if="role == 'admin' && as.userAccount.session"
        to="/admin/Admin"
        class="flex w-full py-2 "
      >
        <button class="flex relative group justify-start grow w-full gap-4 items-center btn btn-ghost btn-lg  !font-medium !text-3 ">
          <icon
            name="mynaui:key"
            class="size-7 -mr-1 -ml-1"
          />

          Admin Board
        </button>
      </NuxtLink>
      <Grow />

      <button
        class=" w-full "
      >
        <button v-if="as.userAccount.session" class="btn btn-neutral flex btn-md rounded-md  w-full gap-4 !text-2" @click="handleClick('out')">
          <icon name="teenyicons:upload-outline" class="-ml-3 !text-nc size-5 -rotate-90" />
          Sign out
        </button>

        <LoginDialog v-else>
          <button class="btn rounded-md   btn-neutral  flex btn-md w-full gap-4 !text-2">
            <icon name="teenyicons:signin-outline" class="-ml-3 !text-nc size-5 " />
            Sign in
          </button>
        </LoginDialog>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
