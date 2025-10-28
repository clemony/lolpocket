export function useLoad() {
  const loaded = ref(false)

  const emit = defineEmits(['loaded'])
  function onLoad() {
    loaded.value = true
    emit('loaded')
  }

  return {
    loaded,
    onLoad
  }
}