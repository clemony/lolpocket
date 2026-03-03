<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const store = matchFilter()
const { filter } = storeToRefs(store)

const queueModel = computed({
  get: () => filter?.value.queue,
  set: (val) => store.setFilter("queue", val),
})
const queues = [
  {
    label: "All",
    value: 0,
  },
  {
    label: "Solo",
    value: 420,
  },
  {
    label: "Flex",
    value: 440,
  },
  {
    label: "Normal",
    value: 400,
  },
]
</script>

<template>
  <!--   <UTabs
    v-model:model-value="queueModel"
    size="lg"
    :ui="{
      trigger: 'text-pc! opacity-100',
    }"
    variant="neumorphic"
    class="w-full"
    :default-value="0"
    :items="queues" /> -->

  <URadioGroup
    v-model:model-value="queueModel"
    :ui="{
      root: String(className),
      item: cn(
        'hover:inset-shadow-morphic-sm relative h-10 basis-1/4 cursor-pointer items-center rounded-lg border transition-all duration-0 hover:border-p3! hover:bg-p1 has-not-checked:border-transparent',

        'has-checked:border-p3 has-checked:shadow-sm has-checked:drop-shadow-sm has-checked:drop-shadow-black/5 has-checked:duration-300',

        'has-checked:hover:border-p3! has-checked:hover:bg-transparent! has-checked:hover:shadow-sm! has-checked:hover:inset-shadow-none! has-checked:hover:drop-shadow-sm!',

        'has-disabled:hover:border-transparent! has-disabled:hover:bg-transparent! has-disabled:hover:inset-shadow-none!',
      ),
    }"
    orientation="horizontal"
    variant="card"
    size="sm"
    indicator="hidden"
    class="w-full"
    :default-value="0"
    :items="queues" />
</template>
