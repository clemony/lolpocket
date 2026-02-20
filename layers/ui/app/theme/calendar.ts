import { defineUiTheme } from "./defineUiTheme"

export const calendarTheme = defineUiTheme({
  slots: {
    root: "",
    header: "flex items-center justify-between",
    body: "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4",
    heading: "mx-auto truncate text-center font-medium",
    grid: "w-full border-collapse space-y-1 select-none focus:outline-none",
    gridRow: "grid grid-cols-7 place-items-center",
    gridWeekDaysRow: "mb-1 grid w-full grid-cols-7",
    gridBody: "grid",
    headCell: "rounded-md",
    headCellWeek: "rounded-md text-muted",
    cell: "relative text-center",
    cellTrigger: [
      "relative m-0.5 flex items-center justify-center rounded-full whitespace-nowrap focus:outline-none focus-visible:ring-2 data-disabled:text-muted data-today:font-semibold data-unavailable:pointer-events-none data-unavailable:text-muted data-unavailable:line-through data-[outside-view]:text-muted",
    ],
    cellWeek: "relative text-center text-muted",
  },
  variants: {
    color: {
      p0: {
        headCell: "text-highlighted",
        cellTrigger: "focus-visible:ring-inverted",
      },
      neutral: {
        headCell: "text-highlighted",
        cellTrigger: "focus-visible:ring-inverted",
      },
    },
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
    },
    size: {
      xs: {
        heading: "text-xs",
        cell: "text-xs",
        cellWeek: "text-xs",
        headCell: "text-[10px]",
        headCellWeek: "text-[10px]",
        cellTrigger: "size-7",
        body: "space-y-2 pt-2",
      },
      sm: {
        heading: "text-xs",
        headCell: "text-xs",
        headCellWeek: "text-xs",
        cellWeek: "text-xs",
        cell: "text-xs",
        cellTrigger: "size-7",
      },
      md: {
        heading: "text-sm",
        headCell: "text-xs",
        headCellWeek: "text-xs",
        cellWeek: "text-xs",
        cell: "text-sm",
        cellTrigger: "size-8",
      },
      lg: {
        heading: "text-md",
        headCell: "text-md",
        headCellWeek: "text-md",
        cellTrigger: "size-9 text-md",
      },
      xl: {
        heading: "text-lg",
        headCell: "text-lg",
        headCellWeek: "text-lg",
        cellTrigger: "size-10 text-lg",
      },
    },
    weekNumbers: {
      true: {
        gridRow: "grid-cols-8",
        gridWeekDaysRow: "grid-cols-8 [&>*:first-child]:col-start-2",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "solid",
  },
})

export default calendarTheme
