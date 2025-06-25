<script lang="ts" setup>
const emit = defineEmits(['open:settings'])

const inbox: LinkGroup = [
  {
    name: 'Notifications',
    icon: {
      name: 'ant-design:notification-outlined',
      class: ''
    }
  },
  {
    name: 'Messages',
    icon: {
      name: 'mail',
      class: ''
    }
  }
]

const openBox = ref('Notifications')
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger :arrow="false" class="relative size-11.5 rounded-full overflow-hidden grid place-items-center group/acc-btn  ">
      <div class="glow-blue absolute inset-0 opacity-0 transition-opacity duration-250 group-hover/acc-btn:opacity-100  group-data-[state=open]/acc-btn:opacity-100 " />
    <ProfileSummonerIcon :account="as.userAccount" class="rounded-full **:rounded-full  place-self-center size-9.5 absolute inset-0  grayscale transition duration-200 group-hover/acc-btn:grayscale-0  group-data-[state=open]/acc-btn:grayscale-0">
    </ProfileSummonerIcon>

  </NavigationMenuTrigger>
  <!-- ring-1 ring-transparent ring-offset-2 ring-offset-b1 -->
  <NavigationMenuContent  @focus-outside.prevent  class=" gap-6 p-4 !w-110 flex flex-col gap-1">
      <div class="flex justify-end items-center">
        <span class="font-medium text-bc/80">
     {{getGreeting()}}, <SummonerName  />!
    </span>

    </div>

<Tabs>
<FileTabsList v-model:model-value="openBox" class="w-full">

    <template v-for="item in inbox" :key="item.name"  >
      <FileTabTrigger  :value="item.name" radius="0.6rem" >
<icon :name="item.icon.name" class="size-4.5"/>
        {{ item.name }}
      </FileTabTrigger>
<FileTabContent  :value="item.name"  class="tab-content bg-b2   p-6"  radius="0.6rem">
gff
</FileTabContent>
    </template>
<Grow  />
    <div class="flex gap-1 items-center">
      <NavigationMenuLink @click="useSignOut()" class="btn btn-ghost btn-square">
          <icon name="mdi:sign-out" class="size-4.5  shrink-0 dst " />
      </NavigationMenuLink>
      <NavigationMenuLink class="btn btn-ghost btn-square" @click="emit('open:settings')">
            <icon name="gear-solid" class="size-4.5 shrink-0 opacity-60 dst" />
          </NavigationMenuLink>
      </div>
</FileTabsList>
</Tabs>
</NavigationMenuContent>
</NavigationMenuItem>
</template>