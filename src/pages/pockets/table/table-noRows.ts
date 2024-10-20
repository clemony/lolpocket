import { INoRowsOverlayComp, INoRowsOverlayParams } from 'ag-grid-community'

type CustomNoRowsOverlayParams = INoRowsOverlayParams & {
    noRowsMessageFunc: () => string
}

export class CustomNoRowsOverlay implements INoRowsOverlayComp {
    eGui!: HTMLElement

    init(params: CustomNoRowsOverlayParams) {
        this.eGui = document.createElement('div')
        this.refresh(params)
    }

    getGui() {
        return this.eGui
    }

    refresh(params: CustomNoRowsOverlayParams): void {
        this.eGui.innerHTML = `
            <div role="presentation" class="ag-overlay-loading-center" class="size-full">
                <div class="flex size-full  gap-1.5 items-center font-medium">With no pockets, you can't hold stuff.
     
                <svg class="size-6 opacity-80 !-mt-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.303 2.5c-1.274 0-2.52.377-3.58 1.084a.5.5 0 0 0 .554.832A5.45 5.45 0 0 1 12.803 13h.797a.5.5 0 0 0 0-1zM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14"/></svg>
           
                </div>
            </div>
        `
    }
}
