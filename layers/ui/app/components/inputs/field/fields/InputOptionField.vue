<script setup lang="ts">
const {
  name = "options",
  class: className,
  option,
} = defineProps<{
  class?: HTMLAttributes["class"]
  name?: string
  option: FieldOption
}>()
console.log("🌱 - option:", option)
const modelValue = ref<string>("")
const checked = shallowRef<boolean>(false)

const inputRef = useTemplateRef("inputRef")

function handleCheck(e) {
  if (e === true) inputRef.value.focusInput()
}
function onBlur() {}
</script>

<template>
  <!-- This handles the entire { checkbox, reason } pair -->
  <FormField
    v-slot="{ validate, value, errorMessage, componentField }"
    :name="modelValue"
    as-child>
    <Element
      class="w-full border border-transparent py-2 hover:border-p3/50! hover:bg-p2/40 hover:fx-1"
      base="btn"
      hover="outline"
      variant="ghost">
      <FormItem class="w-full">
        <FormLabel class="flex w-full cursor-pointer items-center gap-2">
          <!-- Checkbox -->
          <div class="flex items-center gap-3">
            <FormControl>
              <Checkbox
                v-model:model-value="checked"
                :class="
                  cn('transition-colors duration-200', {
                    'border-domination bg-domination/10 ring-domination!':
                      errorMessage,
                  })
                "
                @update:model-value="handleCheck($event)" />
            </FormControl>

            <span class="font-semibold text-pc">
              {{ option.name }}
            </span>
          </div>

          <InputGroup
            :class="
              cn(
                'relative flex h-11 grow items-center gap-4 self-center bg-p0!'
              )
            ">
            <FormControl as-child>
              <InputGroupInput
                v-bind="componentField"
                ref="inputRef"
                v-model="modelValue"
                class="grow"
                :value="value"
                placeholder="Please describe briefly..."
                @blur="checked ? validate() : null" />
            </FormControl>

            <!--  /*  {
                    @input="e => handleChange({ ...value, reason: e.target.value })" 'ring ring-domination': reasonError } */     -->
            <FormMessage
              v-if="errorMessage"
              class="absolute z-10 text-domination" />
            <InputClear
              type="button"
              @clear-input="componentField.modelValue = null" />

            <InputGroupAddon
              v-tippy="{
                content: h(
                  'p',
                  { class: 'max-w-42 text-pretty' },
                  'Description required if option is selected.'
                ),
                theme: errorMessage ? 'error' : 'neutral',
                placement: 'right',
              }"
              class="pointer-events-auto! z-2! cursor-help!"
              align="inline-end">
              <icon
                name="error"
                :class="
                  cn('size-5 text-pc/30', { 'text-domination': errorMessage })
                " />
            </InputGroupAddon>
          </InputGroup>
        </FormLabel>
      </FormItem>
    </Element>
  </FormField>
</template>
