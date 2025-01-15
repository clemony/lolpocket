<script setup lang="ts">
  const as = useAccountStore();
  const motion = ref();
  //const sidebar = ref(as.defaultSidebarOpen)
  const toggleSetting = (model) => {
    useToggle(model);
  };

  const settingsData = {
    general: [
      {
        title: 'Reduce Motion',
        description: 'Reduce the wobblies.',
        model: as.reducedMotion,
        text: as.reducedMotion == false ? 'Wigglies On' : 'Less Wobblies',
      },
      {
        title: 'Suppress Pocket Preview',
        description: 'The little pocket that slides down in the sidebar and is annoying sometimes.',
        model: as.pocketPreview,
        text: as.pocketPreview == false ? 'Previews Visible' : 'Previews Hidden',
      },
      {
        title: 'Colorblind Mode',
        description: 'Changes many of the green shades to blue.',
        model: as.colorBlindMode,
        text: as.colorBlindMode == false ? 'Colorblind Off' : 'Colorblind On',
      },
      {
        title: 'Sidebar Default State',
        description: 'Upon login, should your sidebar be expanded or collapsed?.',
        // model: sidebar.value,
        // text: as.defaultSidebarOpen == false ? 'Collapsed' : 'Expanded',
      },
    ],
  };
</script>
<template>
  <main class="w-full">
    <LayoutSpacer class="col-span-full h-40!" />
    <div class="grid w-full grid-cols-3 gap-6 px-2 *:size-full">
      <DisplayCard
        v-for="item in settingsData.general"
        class="relative !h-56 grid-rows-2 **:tracking-tight">
        <template #header>
          <h4>{{ item.title }}</h4>
        </template>
        <template #description>
          <div class="grow">
            {{ item.description }}
          </div>
        </template>

        <label
          class="absolute bottom-0 left-0 flex w-full cursor-pointer items-end gap-4 p-6"
          @click="toggleSetting(item.model)">
          <Switch v-model:checked="item.model" />
          <span class="label-text w-full text-left">
            {{ item.text }}
          </span>
        </label>
      </DisplayCard>
    </div>

    <div class="border-t-b2 mt-8 flex border-t pt-6">
      <Button size="md">Save</Button>
      <Grow />
    </div>
  </main>
</template>
<style scoped></style>
