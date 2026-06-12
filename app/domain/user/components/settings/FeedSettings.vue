<script setup lang="ts">
import { useFeedSettings } from "~/domain/user/composables/settings/useFeedSettings"
const { categories, spoilerOptions } = useFeedSettings().value
</script>

<template>
  <FormWrapper save>
    <!-- categories -->
    <SwitchList
      label="Categories"
      description="Hide content types from your news feed."
      :options="categories" />
    <!-- spiolers -->

    <SlideTextSwitch v-for="(option, i) in spoilerOptions" :key="i" :option />
  </FormWrapper>
</template>
