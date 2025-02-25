<script lang="ts" setup>
const props = defineProps<{
set: RuneSet
pocket: pocket
}>()
</script>

<template>
  <HoverCardContent side="right">
   <button v-tippy="'Delete Set'" class="btn btn-sm btn-ghost px-2 -mr-3" @click.stop>
              <span class="size-3.5 relative">
                <icon name="x-sm" class="opacity-70 -top-0.75 -left-0.75 absolute shrink-0 mb-0.5 size-5" />
              </span>
            </button>

            <button v-tippy="set.key == pocket.runes.default ? 'Default Set' : 'Set as default'" class="btn btn-ghost btn-sm px-2 -mr-1" @click.stop="set.key == pocket.runes.default">

              <icon v-if="set.key == pocket.runes.default" name="star-fill" class="opacity-70 shrink-0 mb-0.5 size-3.5" />
              <icon v-else name="star" class="opacity-70 shrink-0 mb-0.5 size-3.5" />

            </button>
    </HoverCardContent>
</template>

<style scoped>

</style>