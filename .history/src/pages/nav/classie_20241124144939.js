export const classie = {
    // Full names
    hasClass(elem, c) {
        return elem.classList.contains(c)
    },
    addClass(elem, c) {
        elem.classList.add(c)
    },
    removeClass(elem, c) {
        elem.classList.remove(c)
    },
    toggleClass(elem, c) {
        elem.classList.toggle(c)
    },
    // Short names
    has(elem, c) {
        return this.hasClass(elem, c)
    },
    add(elem, c) {
        this.addClass(elem, c)
    },
    remove(elem, c) {
        this.removeClass(elem, c)
    },
    toggle(elem, c) {
        this.toggleClass(elem, c)
    },
}
