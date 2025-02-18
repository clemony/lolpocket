import { defineStore } from 'pinia'
// Define types for the JSON data

export const useSidebarStore = defineStore(
  'sidebarStore',
  () => {
    const isSidebarOpen = ref(false)
    const sidebarComponent = shallowRef(null)
    const isSidebarComponentHovered = useElementHover(sidebarComponent.value)

    const pageComponent = shallowRef(null)
    const isOutsideSheet = ref(true)

    const isOutsideTrigger = ref(true)

    watchEffect(() => {
      !isOutsideTrigger.value == true ? isSidebarOpen.value = true : !isSidebarOpen.value
    },
    )

    watchEffect(() => {
      !isSidebarOpen.value ? sidebarComponent.value = null : ''
    })

    watch(
      () => isOutsideSheet.value,
      (newVal) => {
        if (isSidebarOpen.value == true && newVal == true) {
          setTimeout(() => {
            if (isOutsideTrigger.value && isOutsideSheet.value) {
              isSidebarOpen.value = false
            }
          }, 200)
        }
      },
    )

    watch(
      () => isOutsideSheet.value,
      (newVal) => {
        if (isSidebarOpen.value == true && newVal == true) {
          setTimeout(() => {
            if (isOutsideTrigger.value && isOutsideSheet.value) {
              isSidebarOpen.value = false
            }
          }, 200)
        }
      },
    )

    function setTimer(value) {
      setTimeout(() => {
        !value && !isOutsideTrigger.value ? sidebarComponent.value = null : ''
      }, 300)
    }

    watchEffect(() => {
      setTimeout(() => {
        !isSidebarComponentHovered.value && !isOutsideTrigger ? sidebarComponent.value = null : ''
      }, 300)
    })

    return {

      isSidebarOpen,
      sidebarComponent,
      pageComponent,
      isOutsideSheet,
      isOutsideTrigger,
      setTimer,
      isSidebarComponentHovered,
    }
  },
)
