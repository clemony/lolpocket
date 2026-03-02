<script setup lang="ts">
import { steps } from "./steps/steps"

const { greaterOrEqual, lessThan } = useBreakpoint("x1024")
</script>

<template>
  <UPageSection class="h-max justify-center">
    <ClientOnly>
      <UChangelogVersions :ui="{ indicator: 'w-1', root: 'max-w-300' }">
        <UChangelogVersion
          v-for="(step, i) in steps"
          :key="step.title"
          :ui="{
            badge: 'py-px font-mono text-2xs italic',
            description: 'leading-7',
          }"
          :title="step.title"
          :description="step.description"
          :badge="`Step ${i + 1}`">
          <template #indicator>
            <div
              class="grid size-7 translate-x-1 place-items-center rounded-full bg-p1">
              <Icon
                name="i-check-fill"
                class="relative grid place-items-center rounded-full bg-p1 shadow-sm" />
            </div>
          </template>
          <template #body>
            <div class="hover-3d">
              <UCard
                variant="muted"
                class="relative mt-5 h-90 shadow-warm-2 shadow-black/4 drop-shadow-sm">
                <component :is="step.component" />
              </UCard>
              <!-- 8 empty divs needed for the 3D effect -->
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </ClientOnly>
  </UPageSection>
</template>
