export const imageIn = (el: Element, done: () => void) => {
    const items = el.querySelectorAll('.v-drop')
    items.forEach((item, index) => {
        const htmlItem = item as HTMLElement // Cast the element to HTMLElement
        htmlItem.classList.add('fade-in')
        htmlItem.style.transitionDelay = `${index * 200}ms` // Apply staggered delay
        htmlItem.style.transition = 'opacity 0.3s ease, transform 0.5s ease'

        // Remove 'fade-out' if present (in case the item was previously fading out)
        htmlItem.classList.remove('fade-out')
    })

    setTimeout(done, items.length * 100 + 500) // Ensure done is called after the animation completes
}

export const imageOut = (el: Element, done: () => void) => {
    const items = el.querySelectorAll('.v-drop')
    items.forEach((item, index) => {
        const htmlItem = item as HTMLElement // Cast the element to HTMLElement
        htmlItem.classList.add('fade-out')
        htmlItem.style.transitionDelay = `${index * 200}ms` // Apply staggered delay
        htmlItem.style.transition = 'opacity 0.3s ease, transform 0.5s ease'

        // Remove 'fade-in' if present (in case the item was previously fading in)
        htmlItem.classList.remove('fade-in')
    })

    setTimeout(done, items.length * 100 + 500) // Ensure done is called after the animation completes
}
