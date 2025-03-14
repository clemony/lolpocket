<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const as = useAccountStore()
const ts = useTempStore()

const summoner = ref(as.userAccount)

function handleClick(mode) {
  emit('update:modelValue', false)
  if (mode == 'in') {
    ts.loginOpen = true
  }
  else if (mode == 'out') {
    signOut()
  }
}

const messages = ref()
</script>

<template>
  <DropdownMenu as="div">
    <DropdownMenuTrigger class=" mb-1 opacity-90 group/acc transition-all duration-300 flex items-center rounded-full hover:opacity-100 data-[state=open]:opacity-100">
      <SummonerIcon class="size-11 border border-black drop-shadow-sm grayscale contrast-101 brightness-109 inset-shadow-sm inset-shadow-rounded  ring-1 ring-offset-1 ring-offset-neutral rounded-full ring-b3 shadow-sm group-data-[state=open]/acc:ring group-data-[state=open]/acc:ring-neutral cursor-pointer" />

      <div v-if="messages" class="inline-grid *:[grid-area:1/1] absolute top-0.5 right-1.75">
        <div class="status !bg-resolve animate-ping"></div>
        <div class="status !bg-resolve"></div>
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="min-w-66" align="end" :align-offset="-9" side="bottom" :side-offset="9">
      <DropdownMenuItem class="text-2 flex w-full items-center py-2 gap-3 pl-2.5 pr-8 select-none font-normal cursor-pointer relative">
        <div class="size-8 avatar shrink-0 rounded-lg shadow-sm peer/account">
          <img
            v-if="summoner.gameName && as.userAccount.session"
            :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
            :alt="summoner.gameName || summoner.name" class="rounded-lg" />
          <div v-else class="rounded-lg size-full  grid place-items-center text-nc text-1 -mb-1 font-semibold">
            LP
          </div>
        </div>

        <div class="truncate h-full !text-4 pt-0.75 !font-semibold peer-hover/account:underline hover:underline underline-offset-2 text-start">
          {{ summoner.gameName || summoner.name }}
        </div>

        <span v-if="summoner && as.userAccount.session && summoner.tagLine" class="text-3 pt-1">#{{ summoner.tagLine }}</span>

        <button v-if="summoner && as.userAccount.session && !summoner.tagLine" v-tippy="{ content: 'Link Riot Account', placement: 'top-end' }" class="btn btn-ghost  absolute right-3.5  size-8 px-2 hover:bg-b2/60">
          <icon name="chain" class="size-5 shrink-0" />
        </button>

        <button v-if="summoner && as.userAccount.session && summoner.gameName" v-tippy="{ content: 'Riot Account Connected', placement: 'top-end' }" class="btn btn-neutral rounded-full  absolute right-3.5  size-6.75 px-2 ">
          <icon name="riot" class="size-3.5 shrink-0 text-nc" />
        </button>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <div class="flex py-2 px-3.5 gap-3.5 items-center ! !font-medium ">
        <icon
          name="ph:envelope-light"
          class="size-5.5 shrink-0 - drop-shadow-sm group-hover:opacity-100 group-data-[state=open]:opacity-100 " />
        Notifications
      </div>

      <DropdownMenuSeparator />

      <div class="flex py-2 px-2 w-full i-c">
        <DropdownMenuItem
          class="btn !w-fit font-medium btn-md btn-ghost
    ">
          <icon
            name="ph:gear-six"
            class=" !size-5.5 -ml-0.5" />
        </DropdownMenuItem>

        <DropdownMenuItem
          v-if="as.userAccount.session"
          class=" w-fit"
          @click="handleClick('out')">
          <icon
            name="teenyicons:logout-outline"
            class=" !size-5" />
        </DropdownMenuItem>

        <DropdownMenuItem v-else class=" w-fit " @click="handleClick('in')">
          <LoginDialog>
            <icon
              name="teenyicons:signin-outline"
              class=" !size-5" />
          </LoginDialog>
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
