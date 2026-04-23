<script lang="ts" setup>
const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const emit = defineEmits(["updateForm"])

const settings = computed(() => user().settings)
const local = {
  label: "Clear Local Match Data",
  description: ".",
  text: "Match data is cached in your browser's internal database to limit strain on Riot's API servers. This data is not permanent. Most modern browsers automatically clear data as it becomes stale or unused over time."
}
</script>

<template>
  <UFormField
    size="lg"
    label="Summoner Splash"
    description="Automatically display your top played champion in recent games, or choose a custom splash.">
    <ProfileSplashOptions :orientation />
  </UFormField>
  <UFormField
    size="lg"
    label="Title"
    description="Display a title from an earned Badge.">
    <USelect />
  </UFormField>
  <UFormField size="lg" :label="local.label">
    <template #hint>
      <HintTooltip :label="local.text" />
    </template>

    <template #description>
      Remove stored data from your browser's cache. If you're having issues
      updating matches, you can try this or
      <ULink class="inline underline decoration-dotted hover:decoration-solid">
        contact&nbsp;support </ULink
      >.
    </template>
  </UFormField>
</template>
