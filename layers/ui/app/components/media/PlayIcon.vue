<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

//const icon =
</script>

<template>
  <div
    :style="{
      '--play':
        'url(data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1em\' height=\'1em\' viewBox=\'0 0 24 24\'%3E%3C!-- Icon from Majesticons by Gerrit Halfmann - https://github.com/halfmage/majesticons/blob/main/LICENSE --%3E%3Cpath fill=\'currentColor\' fill-rule=\'evenodd\' d=\'M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882\' clip-rule=\'evenodd\'/%3E%3C/svg%3E)'
    }"
    :class="
      cn(
        'pointer-events-none absolute z-1 size-12 place-self-center rounded-full bg-nc mask-[url(data:image/svg+xml,%3Csvg_xmlns=\'http://www.w3.org/2000/svg\'_width=\'1em\'_height=\'1em\'_viewBox=\'0_0_24_24\'%3E%3C!--_Icon_from_Majesticons_by_Gerrit_Halfmann_-_https://github.com/halfmage/majesticons/blob/main/LICENSE_--%3E%3Cpath_fill=\'currentColor\'_fill-rule=\'evenodd\'_d=\'M1_12C1_5.925_5.925_1_12_1s11_4.925_11_11s-4.925_11-11_11S1_18.075_1_12m8.528-4.882a1_1_0_0_1_1.027.05l6_4a1_1_0_0_1_0_1.664l-6_4A1_1_0_0_1_9_16V8a1_1_0_0_1_.528-.882\'_clip-rule=\'evenodd\'/%3E%3C/svg%3E)] mask-cover ring drop-shadow-sm group-hover/card:bg-nc/70',

        className
      )
    "></div>
</template>

<style scoped></style>
