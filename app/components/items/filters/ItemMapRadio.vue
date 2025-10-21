<script lang="ts" setup>
</script>

<template>
  <Tabs
    v-model:model-value="is().filters.map"
    orientation="vertical">
    <TabsList
      base="indicator"
      variant="transparent"
      orientation="vertical"
      contrast
      class="grid-rows-4  !w-11  !gap-4 px-1 py-1">
      <TabsTrigger
        v-tippy="{ content: 'All', theme: 'default', placement: 'left' }"
        class=" on:**:text-nc on:**:opacity-100 **:opacity-90"
        :value="0">
        <span class="size-5 relative grid place-items-center">
          <icon
            name="stash:infinity-solid"
            class="size-6 absolute   mt-0.25" />
        </span>
      </TabsTrigger>
      <TabsTrigger
        v-for="map in [11, 12, 30]"
        :key="map"
        v-tippy="{ content: ix().mapNameById(map), theme: 'default', placement: 'left' }"
        class="on:**:text-nc on:opacity-100 **: opacity-80 "
        :value="map">
        <span class="size-5 px-3 relative grid place-items-center">
          <component
            :is="`i-lol-${map}`"
            class="absolute dst shrink-0"
            :class="{
              '!size-4': map === 12 || map === 11,
              '!size-5.5': map === 30,
            }" />
        </span>
      </TabsTrigger>

      <TabIndicator
        class="!h-9 -translate-y-1 shadow-sm  !rounded-lg"
        orientation="vertical"
        contrast />
    </TabsList>
  </Tabs>
</template>
