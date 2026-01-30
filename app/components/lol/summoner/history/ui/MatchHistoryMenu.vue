<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['open'])

const open = shallowRef<boolean>(true)
const asideRef = useTemplateRef<HTMLElement>('asideRef')
</script>

<template>
  <div
    ref="asideRef"
    :class="
      cn(
        'z-2 flex h-20 w-full max-w-110 flex-nowrap items-center gap-3 overflow-hidden bg-b1/94 px-1 backdrop-blur-md transition-all duration-300',
      )
    "
  >
    <Toggle
      v-model:model-value="open"
      class="bg-transparent! fx-0 on:bg-transparent! hover:on:fx-1"
      on="inset"
      hover="inset"
      size="sq-12"
      variant="ghost"
      @update:model-value="emit('open', open)"
    >
      <Icon class="" :name="open ? 'left-to-line' : 'right-to-line'" />
    </Toggle>

    <UPopover v-bind="tippyMenu">
      <Button
        class="bg-transparent! fx-0 aria-expanded:btn-active on:bg-transparent! hover:on:fx-1"
        variant="ghost"
        on="inset"
        hover="inset"
        size="sq-12"
      >
        <Icon class="" name="ic:baseline-menu" />
      </Button>
      <template #content>
        <AdvancedMatchFilters />
      </template>
    </UPopover>

    <Tooltip
      class="size-fit"
      :text="s_matches().filterEmpty() ? 'No filters applied' : 'Clear filters'"
    >
      <Button
        class="bg-transparent! duration-0! disabled:pointer-events-none"
        size="sq-12"
        hover="inset"
        :disabled="s_matches().filterEmpty()"
        :variant="s_matches().filterEmpty() ? 'ghost' : 'inset'"
        @click="s_matches().clearFilters()"
      >
        <Icon
          class="in-disabled:opacity-40"
          name="ic:baseline-filter-list-off"
        />
      </Button>
    </Tooltip>
    <!--     <PatchDateRange v-if="api" :api /> -->
    <!--     <UpdateSummoner
      v-if="api"
      class="bg-transparent"
      variant="ghost"
      hover="inset"
      :api
      placement="top"
      size="sq-12"
    /> -->

    <InputGroup
      class="h-12 max-h-12 grow transition-all duration-300"
      size="12"
    >
      <InputGroupSearch class="[&_svg]:size-5" />
      <InputGroupInput
        input-class="placeholder:opacity-0! focus:placeholder:opacity-100!"
        placeholder="Search match history..."
        @update:model-value="(e) => (s_matches().query = e)"
      />
      <InputGroupClear />
    </InputGroup>
  </div>
</template>
