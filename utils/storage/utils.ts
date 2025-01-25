// Method to lose focus when Enter is pressed
export function blur(event: KeyboardEvent) {
  const target = event.target as HTMLInputElement
  if (event.key === 'Enter') {
    target.blur() // Lose focus on the current input field
  }
}

/* -------------------⟢  regex clean stuff ⟣-------------------- */

export function clean(thing) {
  return thing.replace(/\s/g, '').replace(/'/g, '').replace(/\./g, '')
}
