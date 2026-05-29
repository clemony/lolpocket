<script lang="ts" setup>
const props = defineProps<{
  item: Item
  index?: number
  set?: CalculatorSet
}>()

const item = ref(0)

async function handleItem(e: number) {
  nextTick()
  item.value = e
}
</script>
