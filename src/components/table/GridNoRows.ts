import { INoRowsOverlayComp, INoRowsOverlayParams } from 'ag-grid-community'

type CustomNoRowsOverlayParams = INoRowsOverlayParams & {
    noRowsMessageFunc: () => string
}

export class CustomNoRowsOverlay implements INoRowsOverlayComp {
    eGui!: HTMLElement

    init(params: CustomNoRowsOverlayParams) {
        thts.eGui = document.createElement('div')
        thts.refresh(params)
    }

    getGui() {
        return thts.eGui
    }

    refresh(params: CustomNoRowsOverlayParams): void {
        thts.eGui.innerHTML = `
            <div role="presentation" class="ag-overlay-loading-center" class="size-full">
                <div class="flex size-full  gap-1.5 items-center font-medium">With no pockets, you can't hold stuff D:
           
                </div>
            </div>
        `
    }
}
