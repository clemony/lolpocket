//
import type { CheckboxGroupItem } from "@nuxt/ui"

export type ReportOption = CheckboxGroupItem & {
  id: string
  label: string
  description?: string
  component?: any
}

export const reportOptions: ReportOption[] = [
  {
    id: "abuse",
    label: "Abusive Language",
    description:
      "Harassment, offensive language, threats, and other negative and disruptive communication.",
  },
  {
    id: "offensiveName",
    label: "Offensive or Inappropriate Name",
  },
  {
    id: "spam",
    label: "Spam / Promotional Content",
    description:
      "Blatant and/or repeated low quality posts. Can include links to unrelated content or unwarranted self promotion that does not add context or depth.",
  },
  {
    id: "other",
    label: "Other",
  },
]
