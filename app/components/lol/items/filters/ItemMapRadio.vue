<script lang="ts" setup></script>

<template>
  <Tabs
    v-model:model-value="is().filters.map"
    orientation="vertical">
    <TabsList
      class="w-11! grid-rows-4 gap-4! p-1"
      variant="none"
      orientation="vertical"
      contrast>
      <TabsTrigger
        v-tippy="{ content: 'All', theme: 'neutral', placement: 'left' }"
        class="**:opacity-90 on:**:text-nc on:**:opacity-100"
        :value="0">
        <span class="relative grid size-5 place-items-center">
          <icon
            class="absolute mt-0.25 size-6"
            name="stash:infinity-solid" />
        </span>
      </TabsTrigger>
      <TabsTrigger
        v-for="map in [11, 12, 30]"
        :key="map"
        v-tippy="{
          content: mapNameById(map),
          theme: 'neutral',
          placement: 'left',
        }"
        class="**: opacity-80 on:opacity-100 on:**:text-nc"
        :value="map">
        <span class="relative grid size-5 place-items-center px-3">
          <component
            :is="`i-lol-${map}`"
            class="dst absolute shrink-0"
            :class="{
              'size-4!': map === 12 || map === 11,
              'size-5.5!': map === 30,
            }" />
        </span>
      </TabsTrigger>

      <TabIndicator
        class="h-9! -translate-y-1 rounded-lg! shadow-sm"
        orientation="vertical"
        contrast />
    </TabsList>
  </Tabs>
</template>
