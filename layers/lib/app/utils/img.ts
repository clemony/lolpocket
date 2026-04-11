import type { ImgHTMLAttributes } from "vue"
export type CrossOrigin = boolean | "anonymous" | "use-credentials" | undefined

export interface ImgPreset {
  preset?: string
  crossorigin?: ImgHTMLAttributes["crossorigin"]
  fetchpriority?: ImgHTMLAttributes["fetchpriority"]
  loading?: ImgHTMLAttributes["loading"]
}
export const cardImgPreset: ImgPreset = {
  fetchpriority: "high",
  crossorigin: "anonymous",
  loading: "eager"
}
