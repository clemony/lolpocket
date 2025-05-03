<script lang="ts" setup>
const props = defineProps<{
item: Item
}>()
const item = computed (() => props.item)
const reqs = computed (() => {
const a = replaceFileReferencesWithImages(item.value.req)
return formatDataTags(a)
})
</script>

<template>
          <p
            v-if="item.req" class="w-full gap-x-1  flex flex-wrap items-center  [&_img]:size-5  text-wrap leading-normal text-balanced [&_img]:inline-flex" v-html="reqs" />
</template>