import { defineStore } from 'pinia'

export const useSidebarStore = defineStore(
  'sidebarStore',
  () => {
    const isSidebarOpen = ref(false)
    const sidebarComponent = shallowRef(null)
    console.log('💠 - sidebarComponent:', sidebarComponent)
    const pageComponent = shallowRef(null)
    const isOutsideSheet = ref(true)
    const isOutsideTrigger = ref(true)
    const sidebarDisabled = ref(false)
    const isDragging = ref(false)

    function onSidebarButtonLeave() {
      setTimeout(() => {
        if (isOutsideSheet.value) {
          isOutsideSheet.value ? sidebarComponent.value = null : ''
        }
      }, 400)
    }

    /*    watchEffect(() => {
      if (isOutsideSheet.value) {
        sidebarComponent.value = null
      }
    }) */
    watchEffect(() => {
      !isOutsideTrigger.value == true && !sidebarDisabled.value ? isSidebarOpen.value = true : !isSidebarOpen.value
    },
    )

    watch(
      () => isOutsideSheet.value,
      (newVal) => {
        if (isSidebarOpen.value == true && newVal == true) {
          setTimeout(() => {
            if (isOutsideTrigger.value && isOutsideSheet.value) {
              isSidebarOpen.value = false
              sidebarComponent.value = null
            }
          }, 400)
        }
      },
    )
    return {

      isSidebarOpen,
      isDragging,
      sidebarComponent,
      pageComponent,
      isOutsideSheet,
      isOutsideTrigger,
      sidebarDisabled,

      onSidebarButtonLeave,
    }
  },
)
