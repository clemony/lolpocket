<script lang="ts" setup>
const { loading, loadingOlder, loadMessage, matches } = storeToRefs(sMatches())
</script>

<template>
  <div class="grid h-32 place-items-center">
    <UButton class="group/c" variant="ghost" @click="sMatches().loadOlder()">
      <div class="grid size-5 place-items-center *:absolute">
        <Icon v-if="loading" class="translate-y-px" name="lp-ui:rain" />
        <template v-else>
          <Icon
            class="translate-y-0.75 opacity-0 transition-all duration-200 group-hover/c:opacity-100"
            name="bi:cloud-download" />
          <Icon
            class="transition-all duration-200 group-hover/c:opacity-0"
            name="bi:cloud-arrow-down" />
        </template>
      </div>
      Load More
    </UButton>
  </div>
</template>
