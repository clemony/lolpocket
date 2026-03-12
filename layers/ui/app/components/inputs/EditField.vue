<script lang="ts" setup>
const { class: className, label } = defineProps<{
  class?: HTMLAttributes["class"]
  label?: string
}>()

const editing = ref<boolean>(false)
const edit = useToggle(editing)
const triggerRef = useTemplateRef<HTMLElement>("triggerRef")
onClickOutside(triggerRef, () => (editing.value = false))
</script>

<template>
  <Tooltip
    ref="triggerRef"
    class="w-full"
    :disabled="editing"
    :ui="{
      content:
        'inline-flex h-max! items-center gap-2 py-px align-baseline leading-5 *:leading-5',
    }">
    <button
      v-if="!editing"
      v-auto-animate
      :active="editing"
      :class="
        cn(
          'flex w-full grow cursor-pointer items-center gap-1 rounded-lg border border-transparent px-1.5 hover:border-pc/60',
          className,
        )
      "
      @click="edit()">
      <slot />
    </button>
    <template v-else>
      <slot name="edit" />
    </template>
    <template #content>
      Edit
      <span class="font-mono text-xs lowercase underline decoration-dotted">
        {{ label?.replace(" ", "&thinsp;") }}
      </span>
    </template>
  </Tooltip>
  <div class="flex items-center justify-between gap-1">
    <div v-auto-animate class="flex items-center gap-1">
      <template v-if="editing">
        <Tooltip label="Cancel changes">
          <UButton
            square
            size="xs"
            variant="ghost"
            :ui="{ leadingIcon: 'opacity-70 **:stroke-[2.2]!' }"
            color="neutral"
            icon="i-trash"
            @click="editing = false" />
        </Tooltip>

        <Tooltip label="Save">
          <UButton
            square
            size="xs"
            variant="ghost"
            color="neutral"
            :ui="{
              leadingIcon: 'scale-98 opacity-70 **:stroke-[1.8]',
            }"
            icon="i-ci-save"
            @click="editing = false" />
        </Tooltip>
      </template>
    </div>

    <!--     <span
      v-else
      class="max-w-12 shrink text-xs! text-n5 group-hover/btn:text-pc group-hover/btn:underline">
      edit
    </span> -->

    <div class="flex items-center gap-1">
      <slot name="controls" />
    </div>
  </div>
</template>
