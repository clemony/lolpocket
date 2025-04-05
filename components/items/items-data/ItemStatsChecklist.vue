<script lang="ts" setup>
const is = useItemStore()
</script>

<template>
  <Field title="stats" class="p-0 max-h-90 pointer-events-none">
    <div class=" !overflow-hidden flex flex-col size-full pointer-events-none max-h-90 rounded-field ">
      <div class="relative pointer-events-none max-h-inherit size-full overflow-y-auto py-3 px-1">
        <label
          v-for="stat in itemStats"
          :key="stat.id" class="btn  has-checked:bg-b3/60  !pointer-events-auto has-checked:btn-active has-checked:border-b3  btn-sm !text-3 btn-ghost font-medium pl-4  capitalize checked:shadow-sm flex gap-4 justify-start">
          <input
            v-model="is.filterItemStats"
            class=" checkbox-sm checkbox  pointer-events-none  border-0 inset-shadow-none bg-transparent checked:shadow-none checked:bg-transparent opacity-60"
            :style="{ '--noise': 0 }"
            :value="stat.id"
            type="checkbox"
            name="stats" />

          {{ stat.displayName }}
        </label>
      </div>
    </div>
  </Field>
</template>