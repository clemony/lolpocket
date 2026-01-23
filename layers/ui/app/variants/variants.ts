export const uiColorVariants = {

      base: "var(--color-b1)",
      primary: "var(--color-primary-50)",
      secondary: "var(--color-b2)",
      tertiary: "var(--color-primary-200)",
      error: "var(--color-domination-500)",
      neutral: "var(--color-primary-950)",
}

export const styleVariants = {
  base: "  ",
  border: "border fx-0 shadow-xs " ,
  floating:
    "pointer-events-auto! fx-0 z-10 cursor-pointer! border-b3 bg-b1/80 shadow-sm  shadow-black/4 backdrop-blur-sm *:opacity-60 hover:*:opacity-80",
  ghost:
    "btn-ghost   not-hover:shadow-none not-hover:drop-shadow-none  not-hover:border-transparent!  not-hover:fx-0",
  input:
    "btn-outline !bg-transparent inset-shadow-xs backdrop-blur-sm   font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]",
  inset: "inset-shadow-xs fx-1 !border-b3/80 border !bg-b2",
  label: "font-medium opacity-50 items-center flex gap-3",
  link: "fx-0  justify-start bg-transparent border-0 shadow-0 text-bc underline-offset-2 on:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium ",
  none: "items-center bg-transparent border-0 border-transparent shadow-transparent shadow-none inset-shadow-none inset-shadow-transparent drop-shadow-transparent drop-shadow-none p-0 fx-0 outline-0 ring-0",
  outline: "border fx-0 shadow-xs font-medium border-b3",
}