<script lang="ts" setup>
const { class: className, size = '10' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: InputGroupVariants['size']
}>()
const emit = defineEmits(['update:model-value'])
</script>
