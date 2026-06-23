import { describe, expect, it } from "vitest"
import {
  getElementScrollMargin,
  getVirtualItemTransform,
} from "../../app/domain/summoner/utils/virtualScroll"

function elementWithRect(top: number) {
  return {
    getBoundingClientRect: () => ({ top }),
  } as Element
}

describe("match list virtual scrolling", () => {
  it("measures a list offset inside an external scroll container", () => {
    const scrollElement = {
      scrollTop: 240,
      getBoundingClientRect: () => ({ top: 100 }),
    } as HTMLElement
    const listElement = elementWithRect(380)

    expect(getElementScrollMargin(scrollElement, listElement)).toBe(520)
  })

  it("positions virtual rows relative to the external scroll margin", () => {
    expect(getVirtualItemTransform(680, 520)).toBe("translateY(160px)")
  })
})
