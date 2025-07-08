import type { ITooltipComp, ITooltipParams } from "ag-grid-community"
import "tippy.js/animations/scale.css"

export class CustomTooltip implements ITooltipComp {
  eGui: any
  init(params: ITooltipParams & { color: string }) {
    const eGui = (this.eGui = document.createElement("div"))

    eGui.classList.add("custom-tooltip")

    eGui.innerHTML = `<tippy to="parent" content-tag="div" content-class="content-wrapper text-3" class="shadow-pretty bg-n1/80 text-nc/80 rounded-lg px-4 py-1.25 backdrop-blur-md  data-[state=visible]:ease-[cubic-bezier(0.28,0.93,0.75,1.38)] ">
    ${params.value}
  </tippy>
        `
  }

  getGui() {
    return this.eGui
  }
}
