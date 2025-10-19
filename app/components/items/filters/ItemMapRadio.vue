<script lang="ts" setup>
</script>

<template>
  <Tabs
    v-model:model-value="is().filters.map">
    <TabsList
      base="indicator"
      size="sm"
      contrast
      class="grid-cols-4 w-fit  !gap-4 px-1 ">
      <TabsTrigger
        v-tippy="{ content: 'All', theme: 'default', placement: 'top' }"
        on="neutral"
        class="h-full px-3 rounded-lg"
        :value="0">
        <span class="size-5 relative grid place-items-center">
          <icon
            name="stash:infinity-solid"
            class="size-8 absolute opacity-60 mt-0.25" />
        </span>
      </TabsTrigger>
      <TabsTrigger
        v-for="map in [11, 12, 30]"
        :key="map"
        v-tippy="{ content: ix().mapNameById(map), theme: 'default', placement: 'top' }"
        class="h-full rounded-lg "
        on="neutral"
        :value="map">
        <span class="size-5 px-3 relative grid place-items-center">
          <component
            :is="`i-lol-${map}`"
            class="absolute opacity-80 dst shrink-0"
            :class="{
              '!size-5': map === 12 || map === 11,
              '!size-6': map === 30,
            }" />
        </span>
      </TabsTrigger>

      <TabIndicator
        contrast />
    </TabsList>
  </Tabs>
</template>
