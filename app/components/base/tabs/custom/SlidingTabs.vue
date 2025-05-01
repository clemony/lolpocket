<script lang="ts" setup>
const props = defineProps<{
  modelValue: any
  list: Array<string>
  store: any
  class?: HTMLAttributes['class']
  innerClass?: HTMLAttributes['class']
  defaultValue?: string
  indicatorClass?: HTMLAttributes['class']
  tabKey?: string
}>()
console.log('💠 - modelValue:', props.modelValue)

const modelValue = ref(props.modelValue)
onMounted (() => {
  modelValue.value = props.modelValue
})

const currentValueRef = ref(null)
const returnValueRef = ref(null)
watch(
  () => currentValueRef.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <Tabs v-model:model-value="modelValue" @update:model-value="e => modelValue = e">
    <!-- list -->

    <TabsList
      class=" " :class="cn('relative w-fit border border-b3/60 flex !rounded-field place-items-center items-center mt-4 mb-4 bg-b2/50 shadow-warm-soft w-fit btn-lg', props.class)">
      <!--    inner -->

      <div :class="cn('flex absolute  overflow-hidden w-full gap-0.5  pt-0.5 px-1 ', props.innerClass)">
        <!-- placeholder -->

        <TabTriggerPlaceholder v-for="item in props.list" :key="item" r :store="props.store" :value="item" :model-value="modelValue" :class="cn('', props.indicatorClass)" />
      </div>

      <!-- indicator -->

      <TabTriggerIndicator :key="props.tabKey" :store="props.store" :class="cn('group/indicator', props.indicatorClass)" :current-value="currentValueRef" :return-value="returnValueRef" />

      <!-- triggers -->

      <template v-for="item in props.list" :key="item">
        <CustomTabTrigger v-if="modelValue && item" :key="props.tabKey" v-slot="{ currentValue, returnValue }" :store="props.store" :value="item">
          {{ item }}
          <span class="hidden">
            {{ currentValueRef = currentValue }}
            {{ returnValueRef = returnValue }}
          </span>
        </CustomTabTrigger>
      </template>
    </TabsList>
    <slot />
  </Tabs>
</template>