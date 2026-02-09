<script lang="ts" setup>
const { class: className, stats } = defineProps<{
  stats: Record<string, number>
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ul :class="cn('grid w-full items-center gap-y-1', className)">
    <li
      v-for="[k, v] in Object.entries(stats)"
      :key="k"
      class="inline-flex gap-1 text-xs/4.5! font-medium text-wrap"
      :data-color="k">
      <span class="">
        {{ `${v}${statIndex[k]?.unit ?? ""}` }}
      </span>
      <span>
        {{
          ["HSP", "APEN", "MPEN"].includes(statIndex[k]?.key ?? '')
            ? statIndex[k]?.abbr
            : statIndex[k]?.name
        }}
      </span>

      <!--       <span class="relative h-px w-4 place-items-center *:absolute">
        <Icon
          :name="`stat:${k}`"
          class="size-3.5! self-center" />
      </span> -->
    </li>
  </ul>
</template>
