<script setup lang="ts">

import { summoner } from 'shared/data/summonerData';

const ts = useTempStore()
const as = useAccountStore()

function handleLogin() {
  useDialogToggle('login')
}
</script>

<template>
  <ul v-bind="$attrs">
    <NavigationMenuLink class="text-2 flex w-full items-center justify-end gap-2 px-1 py-1 font-normal">
    <Avatar class="size-8 shrink-0 rounded-lg shadow-sm">
      <AvatarImage
        :src="summoner.icon"
        :alt="summoner.name"
      />
      <AvatarFallback class="rounded-lg">
        LP
      </AvatarFallback>
    </Avatar>
    <!-- <icon name="teenyicons:at-outline" class="-ml-px !size-6" /> -->
    <div class="text-2 flex w-full items-center gap-2 px-2 pt-[2px] text-start align-baseline">
      <h5 class="truncate !font-semibold">
        {{ summoner.name }}
      </h5>
      <span class="text-3">#{{ summoner.tag }}</span>
    </div>
  </NavigationMenuLink>

  <MenubarSeparator />
  <Themes />

  <MenubarSeparator />

   <NavigationMenuLink class="mr-px">
    <icon
      name="ph:gear-six"
      class="-ml-px !size-5"
    />
    Settings
    <div>
      <icon name="lucide:arrow-big-up" />
      S
    </div>
  </NavigationMenuLink>

  <Separator />

 <NavigationMenuLink
    v-if="ts.sessionInfo"
    @click="signOut()"
  >
    <icon
      name="teenyicons:logout-outline"
      class="-ml-0.5 !size-5.5"
    />
    Log out

    <div>⌘Q</div>
</NavigationMenuLink>
  <Dialog>
    <LoginDialog v-if="!ts.sessionInfo">
      <NavigationMenuLink
        class="flex"
        @click="handleLogin"
      >
        <icon
          name="teenyicons:signin-outline"
          class="-ml-0.5 !size-5.5"
        />
        Log In
        <div>⌘Q</div>
      </NavigationMenuLink>
    </LoginDialog>
  </Dialog>
  </ul>
</template>

<style scoped></style>
