<script setup lang="ts">
</script>
<template>
  <KeepAlive>
    <div id="main" class="flex-1">
      <div class="grid-header">
        <h2>Builds</h2>
      </div>
      <div role="tablist" class="max-w-md tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
          Tab content 1
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab" checked="true" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
          Tab content 2
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
          Tab content 3
        </div>
      </div>
    </div>
  </KeepAlive>
</template>
