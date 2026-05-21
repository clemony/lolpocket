import type { CellContext, Row, RowData } from "@tanstack/vue-table"
import type { PropType } from "vue"
import { defineComponent, h, ref, watch } from "vue"

declare module "@tanstack/vue-table" {
  interface TableMeta<TData extends RowData> {
    updateData?: (options: {
      columnId: string
      row: Row<TData>
      value: unknown
    }) => void
  }
}

export function commitEditableCell<TData extends RowData>(
  context: CellContext<TData, unknown>,
  value: unknown
) {
  context.table.options.meta?.updateData?.({
    columnId: context.column.id,
    row: context.row,
    value
  })
}

const EditableTextCell = defineComponent({
  name: "EditableTextCell",
  props: {
    context: {
      type: Object as PropType<CellContext<RowData, unknown>>,
      required: true
    }
  },
  setup(props) {
    const value = ref(String(props.context.getValue() ?? ""))

    watch(
      () => props.context.getValue(),
      (nextValue) => {
        value.value = String(nextValue ?? "")
      }
    )

    return () =>
      h("input", {
        class: "size-full bg-transparent px-2 outline-none",
        value: value.value,
        onInput: (event: Event) => {
          if (event.target instanceof HTMLInputElement)
            value.value = event.target.value
        },
        onBlur: () => commitEditableCell(props.context, value.value),
        onClick: (event: MouseEvent) => event.stopPropagation(),
        onPointerdown: (event: PointerEvent) => event.stopPropagation()
      })
  }
})

export function createEditableTextCell<TData extends RowData>() {
  return (context: CellContext<TData, unknown>) =>
    h(EditableTextCell, {
      context: context as CellContext<RowData, unknown>
    })
}
