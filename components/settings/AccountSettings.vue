<script setup lang="ts">
  import { themes } from 'assets/css/themes';

  const as = useAccountStore();

  const props = defineProps<{
    scrollTo: string;
  }>();
  const route = useRoute();
  console.log(route);
  console.log(props.scrollTo);
</script>
<template>
  <main class="w-full">
    <LayoutSpacer class="flex items-end justify-end"></LayoutSpacer>
    <div class="grid w-full grid-cols-3 gap-6 px-2 *:size-full">
      <DisplayCard
        v-for="theme in themes"
        :key="theme.name"
        class="grid h-full grid-rows-2">
        <template #header>
          <h4 class="capitalize">{{ theme.name }}</h4>
        </template>
        <template #description>
          <p>{{ theme.description }}</p>
        </template>
        <label
          :for="theme.name"
          class="self-end rounded-lg"
          data-act-class="">
          <input
            type="radio"
            v-model="as.dataTheme"
            :value="theme.name"
            :id="theme.name"
            name="ui-theme"
            class="peer hidden" />

          <div
            class="bg-b1 text-bc shadow-warm border-b3 h-20 w-full cursor-pointer overflow-hidden rounded-xl border"
            :data-theme="theme.name">
            <div class="grid h-full w-full grid-cols-[1fr_4fr]">
              <div class="bg-b2 grid size-full place-items-center"></div>
              <div class="flex h-full items-center gap-2 px-5 font-medium">
                <div class="text-4 grow px-1 font-semibold">Aa</div>
                <div class="color-chip bg-b2 text-bc"></div>
                <div class="color-chip text-bc bg-b3"></div>
                <div class="color-chip bg-neutral text-nc"></div>
              </div>
            </div>
          </div>
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
