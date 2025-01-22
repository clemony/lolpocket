<script setup lang="ts">
  import { icons } from 'assets/img/pocketIcons';
  const ps = usePocketStore();
  const iconStore = icons;

  const props = defineProps<{
    selectedIcon: string;
    bgColor: string;
    iconColor: string;
    pocket?: pocket;
  }>();

  const iconTabs = ref('icon');
  const selectedIcon = ref('');
  const bgColor = ref('');
  const iconColor = ref('');

  const emit = defineEmits(['update:bgColor', 'update:iconColor', 'update:selectedIcon']);

  const pocket = ref(props.pocket);

  watch(
    () => props.bgColor,
    (newVal) => {
      bgColor.value = newVal;
    },
    { immediate: true }
  );

  watch(
    () => props.iconColor,
    (newVal) => {
      iconColor.value = newVal;
    },
    { immediate: true }
  );

  // Emit updated values back to parent
  watch(
    () => bgColor.value,
    (newVal) => {
      emit('update:bgColor', newVal);
    }
  );

  watch(
    () => iconColor.value,
    (newVal) => {
      emit('update:iconColor', newVal);
    }
  );

  function handleChange(icon) {
    if (pocket) {
      pocket.value.icon = icon;
    }
    emit('update:selectedIcon', icon);
  }
</script>

<template>
  <div
    role="tablist"
    class="*: tabs tabs-lifted border-b3 scrollbar-hide relative grid w-full overflow-y-scroll [&_.tab]:z-30! [&_.tab]:h-7 [&_.tab]:border-b-transparent! [&_.tab]:font-medium [&_.tab-content]:z-0!">
    <label
      role="tab"
      :class="{ 'tab-active': iconTabs == 'icon' }"
      class="first tab">
      <input
        type="radio"
        class="peer hidden"
        v-model="iconTabs"
        name="iconTabs"
        value="icon" />
      Icons
    </label>

    <div
      role="tabpanel"
      :class="{ hidden: iconTabs == 'color' }"
      class="tab-content border-b3 bg-b1 relative grid w-full rounded-xl rounded-tl-none">
      <div class="scrollbar-hide grid max-h-52 grid-cols-5 justify-items-center gap-1 self-center justify-self-center overflow-y-scroll px-2 py-3">
        <label
          v-for="icon in iconStore"
          class="btn btn-ghost has-checked:border-neutral aspect-square self-center border-1 border-transparent p-3 has-checked:shadow-xs">
          <input
            v-if="pocket"
            type="radio"
            name="iconPicker"
            v-model="pocket.icon"
            :value="icon"
            class="peer hidden" />

          <input
            v-else
            type="radio"
            name="iconPicker"
            v-model="selectedIcon"
            :value="icon"
            class="peer hidden"
            @change="handleChange(icon)" />

          <icon
            v-if="icon"
            :name="icon"
            class="text-bc size-full" />
        </label>
      </div>
    </div>

    <label
      role="tab"
      :class="{ 'tab-active': iconTabs == 'color' }"
      class="tab">
      <input
        type="radio"
        class="peer hidden"
        v-model="iconTabs"
        name="iconTabs"
        value="color" />
      Color
    </label>

    <div
      role="tabpanel"
      :class="{ hidden: iconTabs == 'icon' }"
      class="tab-content w-inherit border-b3 bg-b1 grid rounded-xl">
      <div class="scrollbar-hide relative grid justify-items-center self-center justify-self-center overflow-y-scroll p-1">
        <ColorPicker
          v-model:bgColor="bgColor"
          v-model:iconColor="iconColor"
          :selectedIcon="selectedIcon" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
