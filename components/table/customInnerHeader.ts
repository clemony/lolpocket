import type { IHeaderParams } from 'ag-grid-community'

export interface ICustomInnerHeaderParams {
  icon: string
}

export class CustomInnerHeader {
  private agParams!: ICustomInnerHeaderParams & IHeaderParams
  private eGui!: HTMLDivElement

  init(agParams: ICustomInnerHeaderParams & IHeaderParams) {
    const eGui = (this.eGui = document.createElement('div'))
    eGui.classList.add('customInnerHeader')

    if (agParams.icon) {
      eGui.innerHTML = `<img  src='/img/stats/${agParams.icon}.webp' class="size-4.5 light:brightness-0 dark:brightness-200 opacity-70 !shrink-0"  />`
    }
    else {
      const textNode = document.createElement('span')

      textNode.textContent = agParams.displayName
      eGui.appendChild(textNode)
    }
  }

  getGui() {
    return this.eGui
  }
}