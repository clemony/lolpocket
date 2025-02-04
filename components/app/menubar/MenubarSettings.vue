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
</script>

<template>
  <div v-bind="$attrs" class="size-full py-1.5 ">
    <NavigationMenuLink class="text-2 flex w-full items-center py-2 gap-3 pl-2.5 pr-8 select-none font-normal cursor-pointer relative">
      <Avatar class="size-8 shrink-0 rounded-lg shadow-sm peer/account">
        <AvatarImage
          v-if="summoner.gameName && as.userAccount.session"
          :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
          :alt="summoner.gameName || summoner.name"
        />
        <AvatarFallback class="rounded-lg  grid place-items-center text-nc text-2 -mb-1 font-semibold">
          LP
        </AvatarFallback>
      </Avatar>

      <div class="truncate h-full !text-4 pt-0.75 !font-semibold peer-hover/account:underline hover:underline underline-offset-2 text-start">
        {{ summoner.gameName || summoner.name }}
      </div>

      <span v-if="summoner && as.userAccount.session && summoner.tagLine" class="text-3 pt-1">#{{ summoner.tagLine }}</span>

      <button v-if="summoner && as.userAccount.session && !summoner.tagLine" v-tippy="{ content: 'Link Riot Account', placement: 'top-end' }" class="btn btn-ghost  absolute right-3.5  size-8 px-2 hover:bg-b2/60">
        <icon name="chain" class="size-5 shrink-0" />
      </button>

      <button v-if="summoner && as.userAccount.session && summoner.gameName" v-tippy="{ content: 'Riot Account Connected', placement: 'top-end' }" class="btn btn-neutral rounded-full  absolute right-3.5  size-7 px-2 ">
        <icon name="riot" class="size-4 shrink-0 text-nc" />
      </button>
    </NavigationMenuLink>

    <MenubarSeparator />
    <MenubarThemes />

    <div class="px-1 pt-1 pb-1.5">
      <NavigationMenuLink
        class="btn !text-3 font-medium btn-md btn-ghost justify-start pl-3.5 gap-4 pr-2 w-full flex
    "
      >
        <icon
          name="ph:gear-six"
          class="-ml-px !size-5.5"
        />
        Settings
      </NavigationMenuLink>
    </div>
    <Separator />

    <div class="px-1 pt-1 pb-0.5">
      <NavigationMenuLink
        v-if="as.userAccount.session"
      >
        <button
          class="btn !text-3 font-medium btn-md btn-ghost justify-start pl-3.5 gap-4 pr-2 w-full flex "
          @click="handleClick('out')"
        >
          <icon
            name="teenyicons:logout-outline"
            class="ml-0.5 !size-5"
          />
          Sign out
        </button>
      </NavigationMenuLink>

      <LoginDialog v-else>
        <button
          class="btn !text-3 font-medium btn-md btn-ghost justify-start pl-3.5 gap-4.75 pr-2 w-full flex
    " @click="handleClick('in')"
        >
          <icon
            name="teenyicons:signin-outline"
            class="-ml-0.5 !size-5"
          />
          Sign in
        </button>
      </LoginDialog>
    </div>
  </div>
</template>

<style scoped></style>
