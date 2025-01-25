<script setup lang="ts">
const props = defineProps<{
  data?: Array<any>
  model?: any
  defaultText: string
  swap?
}>()

const emit = defineEmits(['update'])

const model = ref(props.model)
onMounted(() => {
  props.model ? (model.value = props.model) : ''
})

const data = props.data
</script>

<template>
  <VDropdown
    v-if="data"
    theme="select"
    placement="bottom"
    class="relative flex w-48 self-end p-0"
    :skidding="1"
  >
    <Button
      variant="outline"
      size="xs"
      class="pointer-events-auto relative w-full justify-start px-2"
    >
      <span class="w-full truncate pr-8 text-left capitalize">
        {{ model.name ? model.name : props.defaultText }}
      </span>
      <span class="absolute right-1">
        <ToggleButton v-if="!props.swap" />
        <icon
          v-else
          name="iconamoon:swap-thin"
        />
      </span>
    </Button>

    <template #popper>
      <div class="flex w-48 flex-col justify-center p-1 pb-8">
        <div class="flex flex-row items-center pl-1.5">
          <Label
            variant="ghost"
            size="xs"
            disabled
            class="w-full grow truncate capitalize"
          >
            {{ defaultText }}
            <input
              v-model="model"
              type="radio"
              value=""
              class="peer hidden"
            />
          </Label>

          <Button
            v-close-popper
            variant="ghost"
            size="xs"
            @click="model = ''"
          >
            <icon name="ph:eraser" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="xs"
          class="w-full"
        >
          <label
            v-for="value in data"
            v-close-popper
            class="flex w-full items-center gap-4"
          >
            <span class="truncate capitalize">
              {{ value.name }}
            </span>
            <input
              v-model="model"
              type="radio"
              :value="value"
              class="peer hidden"
              @change="emit('update', model)"
            />

            <icon
              v-if="model && model.key == value.key"
              name="teenyicons:tick-outline"
              class="size-3"
            />
            <span
              v-else
              class="w-3"
            ></span>
          </label>
        </Button>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped></style>
