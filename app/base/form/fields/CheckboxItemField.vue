<script setup lang="ts">
import { FormField } from "~/base/form/index.form";
import type { FieldOption } from "../types.forms";

const {
  name = "options",
  class: className,
  values,
} = defineProps<{
  class?: HTMLAttributes["class"];
  option: FieldOption;
  values;
  name?: string;
}>();
</script>

<template>
  <FormField
    v-slot="{ handleChange, errors: checkboxErrors }"
    type="checkbox"
    :value="option.id"
    :unchecked-value="false"
    as-child
    :name
  >
    <Element
      base="btn"
      size="auto"
      hover="outline"
      variant="ghost"
      class="w-full border border-transparent py-2 hover:border-b3/50! hover:bg-b2/40 hover:fx-1"
    >
      <FormItem as-child>
        <FormLabel class="w-full cursor-pointer">
          <FormControl class="mt-0.5 self-start">
            <Checkbox
              :class="
                cn('transition-colors duration-200', {
                  '!ring-domination bg-domination/10 border-domination':
                    checkboxErrors.length,
                })
              "
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormDescription class="grid h-max w-full auto-rows-max gap-1">
            <h5 class="flex w-full items-center gap-4 font-semibold text-bc">
              {{ option.name }}
            </h5>

            <!-- not other -->
            <ul v-if="option.id !== 'other'" class="text-balanced w-full pr-3">
              <component :is="option.component" v-if="option?.component" />
              <template v-else-if="option?.description">
                <li
                  v-for="(str, ix) in option.description"
                  :key="ix"
                  class="text-balanced w-full pl-3 text-2! leading-6"
                >
                  &bull;&ensp;{{ str }}
                </li>
              </template>
            </ul>
          </FormDescription>
        </FormLabel>
      </FormItem>
    </Element>
  </FormField>
</template>
