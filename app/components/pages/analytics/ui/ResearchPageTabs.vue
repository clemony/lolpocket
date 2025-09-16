<script lang="ts" setup></script>

<template>
  <Tabs
    default-value="account"
    class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">
        Champions
      </TabsTrigger>

      <TabsTrigger value="password">
        Items
      </TabsTrigger>

      <TabsTrigger value="password">
        Pockets
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <!-- name of each tab group should be unique -->
  <!-- <div class="tabs tabs-box tabs-sm rounded-xl my-3">
  <input type="radio" name="pg-tb-an" class="tab !rounded-[0.62rem]" aria-label="Champions" />
  <input type="radio" name="pg-tb-an" class="tab" aria-label="Items"  />
  <input type="radio" name="pg-tb-an" class="tab" aria-label="Builds" />
</div> -->
</template>
