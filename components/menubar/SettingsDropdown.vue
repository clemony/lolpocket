<script setup lang="ts">
  import { summoner } from 'shared/data/summonerData';
  import { signOut } from 'shared/supabase/supaIndex';

  const ts = useTempStore();
  const as = useAccountStore();

  const router = useRouter();
  const route = useRoute();
  const handleSignOut = () => {
    signOut();
    if (route.path == '/admin_dashboard') {
      router.push('/');
    }
  };
</script>
<template>
  <MenubarItem class="text-2 flex w-full items-center justify-end gap-2 px-1 py-1 font-normal">
    <Avatar class="size-8 shrink-0 rounded-lg shadow-sm">
      <AvatarImage
        :src="summoner.icon"
        :alt="summoner.name" />
      <AvatarFallback class="rounded-lg">LP</AvatarFallback>
    </Avatar>
    <!-- <icon name="teenyicons:at-outline" class="-ml-px !size-6" /> -->
    <div class="text-2 flex w-full items-center gap-2 px-2 pt-[2px] text-start align-baseline">
      <h5 class="truncate !font-semibold">
        {{ summoner.name }}
      </h5>
      <span class="text-3">#{{ summoner.tag }}</span>
    </div>
  </MenubarItem>

  <MenubarSeparator />
  <Themes />

  <MenubarSeparator />

  <MenubarItem class="mr-px">
    <icon
      name="ph:gear-six"
      class="-ml-px !size-5" />
    Settings
    <MenubarShortcut>
      <icon name="lucide:arrow-big-up" />
      S
    </MenubarShortcut>
  </MenubarItem>

  <MenubarSeparator />

  <MenubarItem
    v-if="ts.sessionInfo"
    @click="handleSignOut()">
    <icon
      name="iconamoon:player-stop-light"
      class="-ml-0.5 !size-5.5" />
    Log out

    <MenubarShortcut>⌘Q</MenubarShortcut>
  </MenubarItem>

  <MenubarItem
    v-if="!ts.sessionInfo"
    class="flex">
    <icon
      name="iconamoon:player-play-light"
      class="-ml-0.5 !size-5.5" />
    Log in

    <MenubarShortcut>⌘Q</MenubarShortcut>
  </MenubarItem>
</template>
<style scoped></style>
