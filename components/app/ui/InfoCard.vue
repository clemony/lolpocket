<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    open?: boolean
    headerClass?: HTMLAttributes['class']
    cardClass?: HTMLAttributes['class']
    noPadding?: boolean
    noCollapse?: boolean
    scroll?: boolean
  }>(),
  {
    open: true,
  },
)

const emit = defineEmits(['update:open'])
const isOpen = ref(props.open)
</script>

<template>
  <Card
    ref="card"
    :class="cn('relative h-fit w-full', props.cardClass)"
  >
    <slot name="first" />

    <CardHeader
      :class="props.headerClass"
      class="px-8"
    >
      <Collapsible
        v-model:open="isOpen"
        :disabled="props.noCollapse"
        @update:open="emit('update:open', isOpen)"
      >
        <CollapsibleTrigger
          class="text-bc flex w-full cursor-pointer items-center gap-3 pt-1"
          as-child
        >
          <CardTitle>
            <h4
              v-if="props.title"
              class="h-sans"
            >
              {{ props.title }}
            </h4>
            <slot
              name="header"
              class=""
            />
          </CardTitle>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardDescription class="text-3 text-bc pt-2 tracking-tight">
            {{ props.description }}
            <slot name="description" />
          </CardDescription>
        </CollapsibleContent>
      </Collapsible>
    </CardHeader>
    <CardContent :class="{ 'px-0': props.noPadding }">
      <div
        class="h-full max-h-full"
        :class="{ 'px-5': !props.noPadding }"
      >
        <slot />
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
