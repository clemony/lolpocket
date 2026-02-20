import { defineUiTheme } from "./defineUiTheme"

export const editorDragHandleTheme = defineUiTheme({
  slots: {
    root: 'hidden items-center justify-center transition-all duration-200 ease-out sm:flex',
    handle: 'cursor-grab px-1'
  }
})

export default editorDragHandleTheme
