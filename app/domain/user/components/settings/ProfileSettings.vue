<script lang="ts" setup>
import { pocketTitleIndex } from "~/domain/about/content/pocket-title-index"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const emit = defineEmits(["updateForm"])
</script>

<template>
  <FormWrapper save>
    <UFormField
      label="Summoner Splash"
      description="Automatically display your top played champion in recent games, or choose a custom splash.">
      <ProfileSplashOptions :orientation />
    </UFormField>

    <UFormField
      label="Title"
      description="Display a title from an earned Badge.">
      <LazyUSelectMenu
        value-key="id"
        :ui="{
          description: 'hidden'
        }"
        :items="Object.values(pocketTitleIndex)"
        placeholder="None selected"
        clear>
        <template #item="{ item }">
          <UBadge
            :label="item.label"
            :ui="{
              base: 'gap-2.5 pr-3 pl-3.5 inset-ring-black/10',
              label: 'font-semibold capitalize',
              leadingIcon: cn('scale-130', item.class)
            }"
            :icon="item.icon" />
        </template>
      </LazyUSelectMenu>
    </UFormField>
  </FormWrapper>
</template>
