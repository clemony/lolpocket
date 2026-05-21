import { ActivationConstraint } from "@dnd-kit/abstract"
import { PointerSensor } from "@dnd-kit/vue"

interface PointerDistanceConstraintOptions {
  value: number
}

class PointerDistanceConstraint extends ActivationConstraint<
  PointerEvent,
  PointerDistanceConstraintOptions
> {
  #origin?: { x: number; y: number }

  onEvent(event: PointerEvent) {
    if (event.type === "pointerdown") {
      this.#origin = { x: event.clientX, y: event.clientY }
      return
    }

    if (event.type !== "pointermove" || !this.#origin) return

    const distance = Math.hypot(
      event.clientX - this.#origin.x,
      event.clientY - this.#origin.y
    )

    if (distance >= this.options.value) this.activate(event)
  }

  abort() {
    this.#origin = undefined
  }
}

export const clickFriendlyPointerSensor = PointerSensor.configure({
  activationConstraints: () => [
    new PointerDistanceConstraint({
      value: 6
    })
  ]
})

export const clickFriendlySensors = [clickFriendlyPointerSensor]
