<script lang="ts" setup>
const ms = useMatchStore()
</script>

<template>
  <Tabs v-model:model-value="ms.queueSelect" class="-mb-1">
      <FilterLabel v-model="ms.queueSelect" :active="ms.queueSelect != 0" @click="ms.queueSelect = 0">
        {{    ms.queueSelect == 400 ? 'Normal' : ms.queueSelect == 420 ? 'Ranked Solo' : ms.queueSelect == 430 ? 'Ranked Flex' : 'All Queues' }}
      </FilterLabel>

    <IndicatorTabsList class=" w-full grid grid-cols-4 h-12">
      <IndicatorTabsTrigger  v-tippy="'All Matches'" :value="0" class="px-4">
        <icon name="ph:infinity-bold" class="size-6.5 dst" />
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger v-tippy="'Ranked Solo/Duo'" :value="420" class="">
        <span class="size-5.5 relative grid place-items-center">
          <i-roles-challenger class="size-8 dst absolute" />
        </span>
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger v-tippy="'Ranked Flex'" :value="430" class="">
        <i-roles-duo class="size-6 dst" />
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger v-tippy="'Normal 5v5 SR'" :value="400" class="">
        <i-roles-all class="size-5 dst" />
      </IndicatorTabsTrigger>
      <TabIndicator />
    </IndicatorTabsList>
  </Tabs>
</template>