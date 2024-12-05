import { ref, computed } from 'vue'

const useTabs = (initialValue: string) => {
  const state = ref(initialValue)
  const currentRef = ref(initialValue)

  const setState = (val: string) => {
    state.value = val
    currentRef.value = val
  }

  const bindings = computed(() => ({
    value: state.value,
    onChange: (val: string) => {
      setState(val)
    },
  }))

  return {
    state,
    setState,
    currentRef,
    bindings,
  }
}

export default useTabs