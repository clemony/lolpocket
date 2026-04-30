<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => safeObject(props.pocket))
</script>

<template>
  <div class="hover-3d w-full">
    <!-- content -->
    <UCard>
      <template #header>
        {{ pocket.name }}
        <UBlogPost
          orientation="horizontal"
          size="sm"
          :image="pocket.icon"
          :title="pocket.name"
          :badge="{
            icon: 'i-heart',
            color: 'dom',
            label: pocket.likes
          }"
          :authors="[{}]" />
      </template>
    </UCard>
    <!-- 8 empty divs needed for the 3D effect -->
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
