<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  title: string
  description: string
  noContent?: boolean
  contentClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <BasicCard class="flex flex-col pb-3 pt-2">
    <BasicCardHeader class="w-full grow">
      <BasicCardTitle class="flex items-center gap-6 drop-shadow-text">
        <slot name="header-icon" />

        <h4 class="capitalize grow items-center">
          {{ props.title }}
        </h4>

        <slot name="header-badge" />
        </CardTitle>

        <BasicCardDescription>
          {{ props.description }}</CardDescription>
          </CardHeader>

          <BasicCardContent :class="cn('px-8 h-fit w-full', props.contentClass)">
            <slot />
            </CardContent>
            </Card>
          </basiccardcontent>
        </basiccarddescription>
      </basiccardtitle>
    </basiccardheader>
  </basiccard>
</template>

<style scoped></style>
