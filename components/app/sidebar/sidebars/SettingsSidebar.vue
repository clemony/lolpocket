<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <div class="size-full ">
    <SidebarTitle class="sticky top-0 left-0 before:top-0 before:left-0 before:bg-b2/20 before:backdrop-blur-md before:absolute before:w-full before:h-32  before:border-b before:border-b-b3/30">
        <label class="btn btn-ghost absolute right-3 btn-square z-6 -ml-1 mr-1">
          <icon name="material-symbols-light:exit-to-app" class="size-6.5 -scale-x-100 dst" />
          <input v-model="us.settingsOpen" type="checkbox" class="peer hidden" />
        </label>
    </SidebarTitle>

    <Tabs default-value="general" class="w-full">
      <div class=" py-4 px-3 sticky top-15 z-5 ">
        <TabsList class="w-full grid grid-cols-3 bg-b3/40">
          <HoverTabsTrigger value="general">
            General
          </HoverTabsTrigger>
          <HoverTabsTrigger value="account">
            Account
          </HoverTabsTrigger>
          <HoverTabsTrigger value="theme">
            Theme
          </HoverTabsTrigger>
        </TabsList>
      </div>
      <div class="py-5">
        <TabsContent value="general">
          <SettingsGeneral />
        </TabsContent>
        <TabsContent value="account">
          <LazySettingsAccount />
        </TabsContent>
        <TabsContent value="theme">
          <LazySettingsTheme />
        </TabsContent>
      </div>
    </Tabs>
  </div>
</template>