<script lang="ts" setup>
const props = defineProps<{
  modelValue: any
  list: Array<string>
  store: any
  class?: HTMLAttributes['class']
  innerClass?: HTMLAttributes['class']
  defaultValue?: string
  indicatorClass?: HTMLAttributes['class']
}>()
console.log('💠 - modelValue:', props.modelValue)

const modelValue = ref(props.modelValue)
onMounted (() => {
  modelValue.value = props.modelValue
})
</script>

<template>
  <Tabs v-model:model-value="modelValue" @update:model-value="e => modelValue = e">
    <!-- list -->

    <CustomTabList :model-value="modelValue" :class="cn('', props.class)">
      <!--    inner -->

      <div :class="cn('flex absolute  overflow-hidden w-full gap-0.5  pt-0.5 px-1 ', props.innerClass)">
        <!-- placeholder -->

        <TabTriggerPlaceholder v-for="item in props.list" :key="item" :store="props.store" :value="item" :model-value="modelValue" :class="cn('', props.indicatorClass)" />
      </div>

      <!-- indicator -->

      <TabTriggerIndicator :key="modelValue" :store="props.store" :class="cn('group/indicator', props.indicatorClass)" />

      <!-- triggers -->

      <template v-for="item in props.list" :key="item">
        <CustomTabTrigger v-if="modelValue && item" :store="props.store" :value="item">
          {{ item }}
        </CustomTabTrigger>
      </template>
    </CustomTabList>
    <slot />
  </Tabs>
</template>