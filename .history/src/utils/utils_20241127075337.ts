import { useGeneralStore } from '@stores/generalStore'

export function toggleModalState(modalData, pocket?) {
    const gs = useGeneralStore()
    gs.modalState = !gs.modalState
    gs.modalValue = modalData
    pocket ? (gs.modalPocket = pocket) : ''
}

export function scrollToSection(el) {
    var targetElement = ref(el)

    if (targetElement) {
        targetElement.value.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
}

